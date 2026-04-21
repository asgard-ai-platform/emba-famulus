// EMBA Famulus — main.js
// All interactive behavior. Authoritative interaction spec:
// docs/superpowers/specs/2026-04-21-emba-famulus-landing-design.md §7

(() => {
  'use strict';

  // --- Nav: sticky blur on scroll ---
  const nav = document.getElementById('site-nav');
  const onScroll = () => {
    if (window.scrollY > 24) {
      nav.classList.add('bg-navy-900/90', 'backdrop-blur', 'border-b', 'border-line');
    } else {
      nav.classList.remove('bg-navy-900/90', 'backdrop-blur', 'border-b', 'border-line');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Nav: mobile toggle ---
  const toggle = document.getElementById('nav-toggle');
  const mobile = document.getElementById('nav-mobile');
  toggle.addEventListener('click', () => {
    const isOpen = !mobile.classList.contains('hidden');
    mobile.classList.toggle('hidden');
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });
  // Close mobile menu on anchor click
  mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobile.classList.add('hidden');
    toggle.setAttribute('aria-expanded', 'false');
  }));
})();

// --- Case study walkthrough ---
(() => {
  'use strict';
  const data = window.CASE_STUDY;
  if (!data) return;

  const summaryEl = document.getElementById('case-summary');
  const stepsEl = document.getElementById('case-steps');
  const closingEl = document.getElementById('case-closing');

  summaryEl.textContent = data.caseSummary;
  closingEl.textContent = data.closingNote;

  data.steps.forEach((step, i) => {
    const isFirst = i === 0;
    const wrapper = document.createElement('div');
    wrapper.className = 'border-l-2 border-line pl-8 relative';
    wrapper.innerHTML = `
      <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-gold-500 ${isFirst ? 'bg-gold-500' : 'bg-navy-900'}" data-dot></div>
      <button class="w-full text-left py-4 flex items-start gap-4 group" aria-expanded="${isFirst}" data-toggle>
        <div class="shrink-0 text-xs font-mono text-gold-500 mt-1 w-20">${step.range}</div>
        <div class="flex-1">
          <div class="font-display text-xl md:text-2xl font-semibold text-gold-100 group-hover:text-gold-500 transition">
            Step ${i + 1}｜${step.title}
          </div>
        </div>
        <div class="shrink-0 text-gold-500 transition-transform ${isFirst ? 'rotate-180' : ''}" data-chevron>
          <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 7l5 5 5-5" stroke="currentColor" stroke-width="2" fill="none"/></svg>
        </div>
      </button>
      <div class="overflow-hidden transition-all duration-300 ease-out ${isFirst ? 'max-h-[2000px]' : 'max-h-0'}" data-panel>
        <div class="pb-8 grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
          <div>
            <div class="text-xs tracking-wider text-navy-300 mb-2">學員打的指令</div>
            <div class="p-4 bg-navy-800 border-l-2 border-asgard-500 font-mono text-sm text-asgard-400 leading-relaxed">${step.command}</div>
          </div>
          <div>
            <div class="text-xs tracking-wider text-navy-300 mb-2">Plugin 做了什麼</div>
            <ul class="space-y-2 text-sm text-gold-100 leading-relaxed">
              ${step.response.map(r => `<li class="flex gap-2"><span class="text-gold-500 shrink-0">·</span><span>${r}</span></li>`).join('')}
            </ul>
          </div>
          <div>
            <div class="text-xs tracking-wider text-navy-300 mb-2">用到的 Skill</div>
            <div class="flex flex-wrap gap-2">
              ${step.skills.map(s => `<span class="font-mono text-xs text-asgard-400 bg-navy-800 px-2 py-1">${s}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
    stepsEl.appendChild(wrapper);
  });

  // Toggle logic: accordion-style single-expand
  stepsEl.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-toggle]');
    if (!btn) return;
    const wrapper = btn.parentElement;
    const panel = wrapper.querySelector('[data-panel]');
    const dot = wrapper.querySelector('[data-dot]');
    const chevron = btn.querySelector('[data-chevron]');
    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    // Close all
    stepsEl.querySelectorAll('[data-toggle]').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      const w = b.parentElement;
      const p = w.querySelector('[data-panel]');
      p.classList.add('max-h-0');
      p.classList.remove('max-h-[2000px]');
      const d = w.querySelector('[data-dot]');
      d.classList.remove('bg-gold-500');
      d.classList.add('bg-navy-900');
      b.querySelector('[data-chevron]').classList.remove('rotate-180');
    });

    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true');
      panel.classList.remove('max-h-0');
      panel.classList.add('max-h-[2000px]');
      dot.classList.add('bg-gold-500');
      dot.classList.remove('bg-navy-900');
      chevron.classList.add('rotate-180');
    }
  });
})();

// --- Workflow tabs ---
(() => {
  'use strict';
  const WORKFLOWS = {
    industry: {
      scenario: '期末產業分析報告，14 天、40 頁。',
      pipeline: ['biz-pestel', 'biz-porters-five-forces', 'biz-value-chain', 'fin-modeling', 'ops-pitch-deck'],
      outputs: ['產業外部環境分析（PEST）', '競爭結構圖', '價值鏈定位', '財務模型試算', '高管簡報雛形'],
    },
    'thesis-qual': {
      scenario: '質性論文，六個月產出 4–5 萬字。',
      pipeline: ['grad-case-study', 'grad-grounded-theory', 'grad-systematic-review', 'grad-narrative'],
      outputs: ['文獻回顧章節', '研究方法設計', '訪談 coding 架構', '主題分析與理論貢獻', '六個月節奏表'],
    },
    'thesis-quant': {
      scenario: '量化論文，問卷回收到 SEM 一條龍。',
      pipeline: ['grad-survey-design', 'stat-hypothesis-testing', 'grad-pls-sem', 'grad-sem'],
      outputs: ['問卷結構與題項', '信效度分析', '假設與路徑圖', 'SEM 模型檢定', '章節骨架與口試準備'],
    },
    pitch: {
      scenario: '董事會 / CEO 論壇 10 分鐘簡報。',
      pipeline: ['ops-pitch-deck', 'hum-narrative', 'hum-rhetoric', 'meta-structured-problem'],
      outputs: ['一頁摘要', '故事骨架（情境→衝突→決策）', '關鍵數字圖卡', 'Q&A 預演清單', '10 分鐘講稿'],
    },
    esg: {
      scenario: '上市公司永續報告書章節草稿。',
      pipeline: ['grad-sustainability', 'biz-net-zero-transition', 'biz-corporate-governance'],
      outputs: ['重大性議題鑑別', 'SBTi 減碳路徑', '範疇 1/2/3 盤查架構', 'TCFD 揭露章節', '董事會治理段落'],
    },
  };

  const panelsEl = document.getElementById('wf-panels');
  const tabs = document.querySelectorAll('[data-wf]');

  function render(key) {
    const wf = WORKFLOWS[key];
    panelsEl.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div class="text-xs tracking-wider text-gold-600 mb-2">情境</div>
          <p class="font-display text-xl text-ink leading-relaxed mb-8">${wf.scenario}</p>
          <div class="text-xs tracking-wider text-gold-600 mb-3">Skill Pipeline</div>
          <div class="flex flex-wrap items-center gap-2">
            ${wf.pipeline.map((s, i) => `
              <span class="font-mono text-xs text-asgard-600 bg-white px-3 py-2 border border-asgard-500/30">${s}</span>
              ${i < wf.pipeline.length - 1 ? '<span class="text-navy-300">→</span>' : ''}
            `).join('')}
          </div>
        </div>
        <div>
          <div class="text-xs tracking-wider text-gold-600 mb-3">預期輸出物</div>
          <ul class="space-y-3">
            ${wf.outputs.map(o => `<li class="flex gap-3 text-ink"><span class="text-gold-600 mt-0.5">✓</span><span>${o}</span></li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.setAttribute('aria-selected', 'false');
        t.classList.remove('border-gold-500', 'text-navy-900');
        t.classList.add('border-transparent', 'text-navy-700');
      });
      tab.setAttribute('aria-selected', 'true');
      tab.classList.add('border-gold-500', 'text-navy-900');
      tab.classList.remove('border-transparent', 'text-navy-700');
      render(tab.dataset.wf);
    });
  });

  render('industry');
})();
