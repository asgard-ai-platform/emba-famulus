# EMBA Famulus Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page GitHub Pages landing site for `asgard-ai-platform/emba-famulus` that onboards Taiwanese EMBA students in 8 minutes, walks them through one full case-study workflow (TSMC Dresden 2023), and gives a copy-paste install command.

**Architecture:** Single-page static HTML (`docs/index.html`) with Tailwind CDN + custom CSS tokens + vanilla JS. No build step. Deployed via GitHub Pages `/docs` folder mode on `main` branch. Pixar storytelling arc drives scroll order; navy+gold+Asgard-blue executive palette; Noto Serif TC + Noto Sans TC typography.

**Tech Stack:** HTML5, Tailwind CSS (CDN v3 play mode), vanilla JavaScript (ES2020), SVG (hand-rolled), Google Fonts (Noto Serif TC / Noto Sans TC / JetBrains Mono).

**Reference spec:** `docs/superpowers/specs/2026-04-21-emba-famulus-landing-design.md` — read this before starting any task. All content decisions, copy, skill tables, and walkthrough content are authoritative there.

---

## File Structure (final state)

```
docs/
├── .nojekyll                              # disable Jekyll processing
├── index.html                             # entire single page (~800 lines)
├── README.md                              # site-level README for contributors
├── assets/
│   ├── logos/
│   │   ├── asgard-logo-color.svg          # migrated from website/
│   │   └── asgard-icon.svg                # migrated from website/
│   ├── favicon.svg                        # custom: navy triangle + gold F
│   └── og-image.svg                       # 1200x630 social share card
├── css/
│   └── tokens.css                         # CSS custom properties
└── js/
    ├── main.js                            # all interactions (~150 lines)
    └── case-study-data.js                 # TSMC 5-step walkthrough data
```

**Removed during Task 1:** `website/` directory (brainstorm-era holding pen for logos).

**Preserved:** `docs/superpowers/specs/` (design spec) and `docs/superpowers/plans/` (this plan) live alongside the published site. `.nojekyll` keeps markdown served raw.

---

## Iron Law (from spec §12)

Before merging to `main` / enabling GitHub Pages, all must pass:

1. 繁體中文全段落人工校對一次（無簡體混入）
2. Hero 主標／副段／收尾三段順讀「眼球→心→腦」節奏通
3. Section 4 走讀 5 步驟指令 copy 到 Claude Code 能觸發合理回應
4. 三個安裝 tab 的指令 copy 後貼 terminal 能跑
5. 手機 Safari 上 Hero 可見、CTA 可點、時間軸可展開
6. WCAG AA 對比比全數達標
7. 學術誠信段落完整、未被視覺弱化

Task 15 is the Iron Law verification task.

---

## Task 1: Asset migration + directory skeleton

**Files:**
- Create: `docs/.nojekyll`
- Create: `docs/assets/logos/asgard-logo-color.svg` (from `website/`)
- Create: `docs/assets/logos/asgard-icon.svg` (from `website/`)
- Create: `docs/css/` (empty)
- Create: `docs/js/` (empty)
- Create: `docs/README.md`
- Delete: `website/` directory

- [ ] **Step 1: Create directory skeleton**

```bash
mkdir -p docs/assets/logos docs/css docs/js
touch docs/.nojekyll
```

- [ ] **Step 2: Move logos from website/ to docs/assets/logos/**

```bash
git mv website/assets/logos/asgard-logo-color.svg docs/assets/logos/asgard-logo-color.svg
git mv website/assets/logos/asgard-icon.svg docs/assets/logos/asgard-icon.svg
```

- [ ] **Step 3: Remove empty website/ directory**

```bash
rmdir website/assets/logos website/assets website/
```

Verify with `ls website/ 2>&1` — expect "No such file or directory".

- [ ] **Step 4: Create docs/README.md**

Write this content to `docs/README.md`:

```markdown
# EMBA Famulus — Landing Site

GitHub Pages source for <https://asgard-ai-platform.github.io/emba-famulus/>.

## Local preview

No build step. Open `docs/index.html` directly in a browser, or serve with any static server:

```bash
python3 -m http.server 8080 --directory docs
# then open http://localhost:8080
```

## Editing

- Visual tokens: `css/tokens.css`
- Case-study walkthrough data: `js/case-study-data.js`
- Interactions: `js/main.js`
- Everything else: `index.html`

See `docs/superpowers/specs/2026-04-21-emba-famulus-landing-design.md` for design rationale.
```

- [ ] **Step 5: Commit**

```bash
git add docs/.nojekyll docs/assets/logos/ docs/README.md
git rm -r website/ 2>/dev/null || true
git commit -m "feat(site): scaffold docs/ structure and migrate Asgard logos"
```

---

## Task 2: tokens.css — CSS custom properties

**Files:**
- Create: `docs/css/tokens.css`

- [ ] **Step 1: Write tokens.css**

Full file content:

```css
/* EMBA Famulus — Design tokens
 * Authoritative values defined in spec §6
 */

:root {
  /* Navy — primary */
  --navy-950: #060f1a;
  --navy-900: #0b1a2b;
  --navy-800: #13263d;
  --navy-700: #1d3555;
  --navy-300: #a8b3c2;
  --navy-100: #d8dee6;

  /* Gold — elite, used for CTA and emphasis */
  --gold-600: #b08840;
  --gold-500: #c9a961;
  --gold-400: #dcc189;
  --gold-100: #f3e9d2;

  /* Asgard blue — brand lineage */
  --asgard-700: #1d4fbf;
  --asgard-600: #2563eb;
  --asgard-500: #3b82f6;
  --asgard-400: #60a5fa;

  /* Neutrals */
  --cream: #f7f3eb;
  --paper: #faf8f3;
  --ink: #0a0a0a;
  --line: #223048;

  /* Shadows */
  --shadow-exec: 0 1px 2px rgba(0, 0, 0, 0.04),
                 0 12px 32px rgba(11, 26, 43, 0.08);

  /* Radii */
  --radius-sm: 2px;
}

/* Font stacks */
html {
  font-family: "Noto Sans TC", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.font-display {
  font-family: "Noto Serif TC", "Songti TC", "PMingLiU", serif;
  letter-spacing: -0.01em;
}

.font-mono {
  font-family: "JetBrains Mono", "SF Mono", "Consolas", monospace;
}

/* Smooth anchor scroll */
html { scroll-behavior: smooth; }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* Fade-in on scroll (IntersectionObserver toggles .is-visible) */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 700ms ease-out, transform 700ms ease-out;
}
.reveal.is-visible {
  opacity: 1;
  transform: none;
}

/* Focus ring — WCAG AA */
:focus-visible {
  outline: 2px solid var(--gold-500);
  outline-offset: 3px;
  border-radius: 2px;
}
```

- [ ] **Step 2: Commit**

```bash
git add docs/css/tokens.css
git commit -m "feat(site): add design tokens CSS (colors, type, motion)"
```

---

## Task 3: index.html shell + Tailwind CDN config

**Files:**
- Create: `docs/index.html`

This task produces the skeleton with head, Tailwind inline config, and empty section anchors. Content fills in Tasks 4–14.

- [ ] **Step 1: Write index.html shell**

Full file content:

```html
<!DOCTYPE html>
<html lang="zh-Hant-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="EMBA Famulus — 為台灣八大 EMBA 在職學員設計的 agent plugin。三十分鐘，從空白到可以交的作業初稿。">
  <meta name="author" content="Chris Yuan">
  <meta property="og:title" content="EMBA Famulus — 三十分鐘，從空白到可以交的作業初稿">
  <meta property="og:description" content="依託 Asgard 生態的 200+ 商管 skill，13 個 EMBA 專屬模組、6 個作業 workflow。">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://asgard-ai-platform.github.io/emba-famulus/">
  <meta property="og:image" content="https://asgard-ai-platform.github.io/emba-famulus/assets/og-image.svg">
  <title>EMBA Famulus — 三十分鐘，從空白到可以交的作業初稿</title>

  <link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
  <link rel="stylesheet" href="css/tokens.css">

  <!-- Google Fonts with font-display: swap -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@400;600;700&family=JetBrains+Mono:wght@400;700&display=swap">

  <!-- Tailwind CDN (play mode, supports inline config) -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            navy: {
              950: '#060f1a', 900: '#0b1a2b', 800: '#13263d',
              700: '#1d3555', 300: '#a8b3c2', 100: '#d8dee6',
            },
            gold: {
              600: '#b08840', 500: '#c9a961', 400: '#dcc189', 100: '#f3e9d2',
            },
            asgard: {
              700: '#1d4fbf', 600: '#2563eb', 500: '#3b82f6', 400: '#60a5fa',
            },
            cream: '#f7f3eb',
            paper: '#faf8f3',
            ink: '#0a0a0a',
          },
          fontFamily: {
            display: ['"Noto Serif TC"', '"Songti TC"', 'serif'],
            body: ['"Noto Sans TC"', '-apple-system', 'sans-serif'],
            mono: ['"JetBrains Mono"', '"SF Mono"', 'monospace'],
          },
          maxWidth: {
            '8xl': '1280px',
          },
        },
      },
    };
  </script>
</head>
<body class="bg-navy-900 text-gold-100 font-body">

  <!-- NAV (Task 4) -->
  <nav id="site-nav"></nav>

  <!-- HERO (Task 5) -->
  <section id="hero"></section>

  <!-- NUMBERS (Task 6) -->
  <section id="numbers"></section>

  <!-- PAIN → SOLUTION (Task 7) -->
  <section id="pain-solution"></section>

  <!-- CASE STUDY WALKTHROUGH (Task 8-9) -->
  <section id="case-study"></section>

  <!-- OTHER WORKFLOWS (Task 10) -->
  <section id="workflows"></section>

  <!-- SKILL CARDS (Task 11) -->
  <section id="skills"></section>

  <!-- ASGARD ECOSYSTEM (Task 12) -->
  <section id="ecosystem"></section>

  <!-- INSTALL (Task 13) -->
  <section id="install"></section>

  <!-- ACADEMIC INTEGRITY (Task 14) -->
  <section id="integrity"></section>

  <!-- FOOTER (Task 14) -->
  <footer id="site-footer"></footer>

  <script src="js/case-study-data.js" defer></script>
  <script src="js/main.js" defer></script>
</body>
</html>
```

- [ ] **Step 2: Preview in browser to verify shell loads**

Run:
```bash
python3 -m http.server 8080 --directory docs &
sleep 1
open http://localhost:8080
```

Expected: Empty dark navy page with no console errors. Tailwind CDN loads (no unstyled flash of `bg-navy-900`). Kill server with `kill %1` after verifying.

- [ ] **Step 3: Commit**

```bash
git add docs/index.html
git commit -m "feat(site): scaffold index.html with Tailwind CDN + fonts + section anchors"
```

---

## Task 4: Navigation bar (sticky, backdrop-blur on scroll)

**Files:**
- Modify: `docs/index.html` — replace `<nav id="site-nav"></nav>` with full nav markup

- [ ] **Step 1: Write nav HTML**

Find `<nav id="site-nav"></nav>` and replace with:

```html
<nav id="site-nav" class="fixed top-0 inset-x-0 z-50 transition-colors duration-300">
  <div class="max-w-8xl mx-auto px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
    <!-- Brand -->
    <a href="#hero" class="flex items-center gap-3 group">
      <img src="assets/logos/asgard-logo-color.svg" alt="Asgard" class="h-6 w-6">
      <span class="text-xs tracking-widest text-gold-500 font-medium">ASGARD · FAMULUS</span>
    </a>
    <!-- Links (desktop) -->
    <div class="hidden md:flex items-center gap-8 text-sm">
      <a href="#case-study" class="text-navy-100 hover:text-gold-500 transition">Case Study</a>
      <a href="#workflows" class="text-navy-100 hover:text-gold-500 transition">Workflows</a>
      <a href="#skills" class="text-navy-100 hover:text-gold-500 transition">Skills</a>
      <a href="#install" class="text-navy-100 hover:text-gold-500 transition">Install</a>
      <a href="https://github.com/asgard-ai-platform/emba-famulus" target="_blank" rel="noopener"
         class="text-gold-500 hover:text-gold-400 transition flex items-center gap-1">
        ★ GitHub →
      </a>
    </div>
    <!-- Hamburger (mobile) -->
    <button id="nav-toggle" class="md:hidden text-gold-500" aria-label="開啟選單" aria-expanded="false">
      <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 6h18M3 12h18M3 18h18" stroke-linecap="round"/>
      </svg>
    </button>
  </div>
  <!-- Mobile menu -->
  <div id="nav-mobile" class="hidden md:hidden bg-navy-950/95 backdrop-blur border-t border-line">
    <div class="px-6 py-4 flex flex-col gap-4 text-sm">
      <a href="#case-study" class="text-navy-100 hover:text-gold-500">Case Study</a>
      <a href="#workflows" class="text-navy-100 hover:text-gold-500">Workflows</a>
      <a href="#skills" class="text-navy-100 hover:text-gold-500">Skills</a>
      <a href="#install" class="text-navy-100 hover:text-gold-500">Install</a>
      <a href="https://github.com/asgard-ai-platform/emba-famulus" target="_blank" rel="noopener"
         class="text-gold-500 hover:text-gold-400">★ GitHub →</a>
    </div>
  </div>
</nav>
```

- [ ] **Step 2: Create docs/js/main.js with nav scroll + mobile toggle**

Full file content:

```javascript
// EMBA Famulus — main.js
// All interactive behavior. Authoritative interaction spec: docs/superpowers/specs/2026-04-21-emba-famulus-landing-design.md §7

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
```

- [ ] **Step 3: Preview nav**

```bash
python3 -m http.server 8080 --directory docs &
sleep 1
open http://localhost:8080
```

Expected:
- Nav visible at top, transparent initially
- Scroll down: nav gets navy/90 backdrop-blur background
- On mobile width (~375px), hamburger shows; click opens menu

Kill server with `kill %1`.

- [ ] **Step 4: Commit**

```bash
git add docs/index.html docs/js/main.js
git commit -m "feat(site): add sticky nav with scroll blur and mobile menu"
```

---

## Task 5: Hero section (full copy + CTAs)

**Files:**
- Modify: `docs/index.html` — replace `<section id="hero"></section>`

Hero copy is authoritative in spec §4.

- [ ] **Step 1: Replace hero section**

Find `<section id="hero"></section>` and replace with:

```html
<section id="hero" class="relative min-h-screen flex items-center bg-navy-900 pt-16">
  <div class="max-w-8xl mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-32 w-full">
    <!-- Small caption -->
    <div class="mb-10 flex items-center gap-2 reveal">
      <img src="assets/logos/asgard-icon.svg" alt="" class="h-4 w-4 opacity-80">
      <span class="text-xs tracking-widest text-gold-500 font-medium">ASGARD · FAMULUS</span>
    </div>
    <!-- Headline (B — confident) -->
    <h1 class="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-gold-100 reveal">
      <span class="text-gold-500">三十分鐘</span>，<br>
      從空白到<span class="text-gold-500">可以交</span>的作業初稿。
    </h1>
    <!-- Empathy paragraph (C) -->
    <p class="mt-10 max-w-2xl font-display text-lg md:text-xl leading-relaxed text-navy-100 italic reveal">
      凌晨兩點，你剛讀完一份 25 頁英文 case。<br>
      明早十點要交一份分析報告，而你完全不知道該從哪一段下筆。
    </p>
    <!-- Credibility close (A) -->
    <p class="mt-8 max-w-2xl text-base leading-relaxed text-navy-100 reveal">
      Famulus 是為台灣八大 EMBA 在職學員設計的 agent plugin。依託
      <span class="text-asgard-400">Asgard 生態的 200+ 商管 skill</span>，
      搭配 13 個針對 EMBA 作業情境開發的專屬模組——把你腦中的業界判斷，翻譯成老師想看的學術結構。
    </p>
    <!-- CTAs -->
    <div class="mt-12 flex flex-col sm:flex-row gap-4 reveal">
      <a href="#install"
         class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-navy-900 font-semibold tracking-wide hover:bg-gold-400 transition">
        立即安裝 <span aria-hidden="true">→</span>
      </a>
      <a href="#case-study"
         class="inline-flex items-center justify-center gap-2 px-8 py-4 border border-asgard-500 text-asgard-400 font-semibold tracking-wide hover:bg-asgard-500/10 transition">
        看 Case-Study 走讀 <span aria-hidden="true">↓</span>
      </a>
    </div>
    <!-- Footnote -->
    <p class="mt-10 text-xs tracking-wider text-navy-300 reveal">
      MIT License · 繁體中文（台灣） · Part of the Asgard AI Platform
    </p>
  </div>
</section>
```

- [ ] **Step 2: Preview hero**

```bash
python3 -m http.server 8080 --directory docs &
sleep 1
open http://localhost:8080
```

Expected:
- Full-viewport hero with navy background
- Headline "三十分鐘" and "可以交" highlighted in gold
- Two CTAs side by side (stacked on mobile)
- Credibility paragraph has Asgard blue on "Asgard 生態的 200+ 商管 skill"

Kill server with `kill %1`.

- [ ] **Step 3: Commit**

```bash
git add docs/index.html
git commit -m "feat(site): add hero section with B/C/A copy mix and dual CTAs"
```

---

## Task 6: Numbers section (13 / 6 / 200+)

**Files:**
- Modify: `docs/index.html` — replace `<section id="numbers"></section>`

- [ ] **Step 1: Write numbers section**

Replace `<section id="numbers"></section>` with:

```html
<section id="numbers" class="bg-cream text-ink py-24">
  <div class="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
      <div class="text-center md:text-left reveal">
        <div class="font-display text-6xl md:text-7xl font-semibold text-gold-600 leading-none">13</div>
        <div class="mt-3 font-semibold text-ink">EMBA 專屬 Skill</div>
        <div class="mt-1 text-sm text-navy-700">Asgard 上游未覆蓋的作業模組</div>
      </div>
      <div class="text-center md:text-left reveal">
        <div class="font-display text-6xl md:text-7xl font-semibold text-gold-600 leading-none">6</div>
        <div class="mt-3 font-semibold text-ink">作業場景 Workflow</div>
        <div class="mt-1 text-sm text-navy-700">從個案到畢業論文的完整流程</div>
      </div>
      <div class="text-center md:text-left reveal">
        <div class="font-display text-6xl md:text-7xl font-semibold text-gold-600 leading-none">200<span class="text-gold-500">+</span></div>
        <div class="mt-3 font-semibold text-ink">上游 Asgard 商管 Skill</div>
        <div class="mt-1 text-sm text-navy-700">SWOT、5 Forces、財務模型、研究方法全備</div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Preview and commit**

Preview with `python3 -m http.server 8080 --directory docs` (and kill after). Expected: cream-background section with 3 large gold numbers, stacked on mobile, 3-column on desktop.

```bash
git add docs/index.html
git commit -m "feat(site): add numbers section (13 / 6 / 200+)"
```

---

## Task 7: Pain → Solution contrast (4 pairs)

**Files:**
- Modify: `docs/index.html` — replace `<section id="pain-solution"></section>`

Copy from spec §5 Section 3.

- [ ] **Step 1: Write pain-solution section**

Replace `<section id="pain-solution"></section>` with:

```html
<section id="pain-solution" class="bg-navy-800 text-gold-100 py-24">
  <div class="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
    <div class="max-w-3xl mb-16 reveal">
      <div class="text-xs tracking-widest text-gold-500 font-medium mb-4">每一門課的日常</div>
      <h2 class="font-display text-3xl md:text-5xl font-semibold text-gold-100 leading-tight">
        作業的四個死結，<br>
        Famulus 怎麼解。
      </h2>
    </div>
    <div class="space-y-6">
      <!-- Pair 1 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch reveal">
        <div class="p-8 bg-navy-900 border-l-2 border-navy-300">
          <div class="text-xs tracking-wider text-navy-300 mb-3">痛點</div>
          <p class="text-lg leading-relaxed text-gold-100">老師要你用 RBV 看策略，你只記得 Porter 的五力。</p>
        </div>
        <div class="p-8 bg-navy-900 border-l-2 border-gold-500">
          <div class="text-xs tracking-wider text-gold-500 mb-3">Famulus 怎麼解</div>
          <p class="text-lg leading-relaxed text-gold-100">
            <span class="font-mono text-asgard-400">biz-rbv</span>、<span class="font-mono text-asgard-400">grad-strat-rbv</span> 兩個 skill 直接給你框架與批判要點。
          </p>
        </div>
      </div>
      <!-- Pair 2 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch reveal">
        <div class="p-8 bg-navy-900 border-l-2 border-navy-300">
          <div class="text-xs tracking-wider text-navy-300 mb-3">痛點</div>
          <p class="text-lg leading-relaxed text-gold-100">要寫家族企業接班個案，但手邊沒有合適理論支援。</p>
        </div>
        <div class="p-8 bg-navy-900 border-l-2 border-gold-500">
          <div class="text-xs tracking-wider text-gold-500 mb-3">Famulus 怎麼解</div>
          <p class="text-lg leading-relaxed text-gold-100">
            <span class="font-mono text-asgard-400">biz-sme-management</span> 專 skill，三圓模型加台灣在地案例。
          </p>
        </div>
      </div>
      <!-- Pair 3 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch reveal">
        <div class="p-8 bg-navy-900 border-l-2 border-navy-300">
          <div class="text-xs tracking-wider text-navy-300 mb-3">痛點</div>
          <p class="text-lg leading-relaxed text-gold-100">畢業論文要做質性研究，不知道 coding 怎麼開始。</p>
        </div>
        <div class="p-8 bg-navy-900 border-l-2 border-gold-500">
          <div class="text-xs tracking-wider text-gold-500 mb-3">Famulus 怎麼解</div>
          <p class="text-lg leading-relaxed text-gold-100">
            <span class="font-mono text-asgard-400">grad-grounded-theory</span> + <span class="font-mono text-asgard-400">grad-case-study</span> workflow 全程陪跑。
          </p>
        </div>
      </div>
      <!-- Pair 4 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch reveal">
        <div class="p-8 bg-navy-900 border-l-2 border-navy-300">
          <div class="text-xs tracking-wider text-navy-300 mb-3">痛點</div>
          <p class="text-lg leading-relaxed text-gold-100">交出去的報告被老師說「沒有結構、像雜感」。</p>
        </div>
        <div class="p-8 bg-navy-900 border-l-2 border-gold-500">
          <div class="text-xs tracking-wider text-gold-500 mb-3">Famulus 怎麼解</div>
          <p class="text-lg leading-relaxed text-gold-100">
            <span class="font-mono text-asgard-400">meta-structured-problem</span> 用 MECE + 金字塔原則重整。
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Preview and commit**

Preview. Expected: 4 horizontal pain→solution rows on desktop, stacked on mobile. Left cards have grey left-border, right cards have gold left-border.

```bash
git add docs/index.html
git commit -m "feat(site): add pain-solution contrast section (4 pairs)"
```

---

## Task 8: Case-study data (TSMC Dresden 5 steps)

**Files:**
- Create: `docs/js/case-study-data.js`

Full 5-step content, authoritative in spec §5 Section 4.

- [ ] **Step 1: Write case-study-data.js**

Full file content:

```javascript
// EMBA Famulus — Case study walkthrough data
// Case: TSMC 2023 Dresden ESMC JV announcement
// Isolated in its own file so swapping the case requires no markup changes.

window.CASE_STUDY = {
  caseTitle: 'TSMC × Bosch/Infineon/NXP 合資德國 Dresden 設廠（ESMC，2023）',
  caseSummary: '2023 年 8 月，TSMC 宣布與 Bosch、Infineon、NXP 合資於德國 Dresden 設立 ESMC 晶圓廠，總投資約 100 億歐元，預計 2027 年投產。這是 TSMC 首座歐洲廠、首次放棄全資控股改採合資，牽動地緣政治、歐盟晶片法案補貼、車用半導體供應鏈。',
  steps: [
    {
      range: '0–5 分',
      title: '讀 case，抓關鍵事實',
      command: '我有一份 TSMC 德國 Dresden 合資案的 case，幫我抓關鍵事實',
      response: [
        '合資結構：TSMC 70%、Bosch/Infineon/NXP 各 10%',
        '投資規模：約 100 億歐元、50% 歐盟補貼',
        '產能定位：28/22nm 與 16/12nm，聚焦車用與工業應用',
        '時程：2024 Q4 動工、2027 投產',
        '地緣動機：歐盟晶片法案、供應鏈在地化、客戶接近性',
        '客戶綁定：三家合資夥伴同時是主要客戶',
        '戰略破口：TSMC 首次放棄全資控股',
        '風險：德國勞動成本與工會文化、產能爬坡速度',
      ],
      skills: ['grad-case-study', 'meta-structured-problem'],
    },
    {
      range: '5–10 分',
      title: '結構化拆解分析軸線',
      command: '用 MECE 切出我該分析的幾個軸',
      response: [
        '軸一・戰略動機：為什麼 TSMC 現在出海、為什麼選歐洲',
        '軸二・營運挑戰：跨文化管理、產能爬坡、工會',
        '軸三・制度因素：歐盟晶片法案、CHIPS Act、地緣政治',
        '軸四・財務結構：合資比例對 ROIC 的影響、補貼條件與綁約',
      ],
      skills: ['meta-structured-problem', 'biz-corporate-governance'],
    },
    {
      range: '10–20 分',
      title: '套框架（三個框架並行）',
      command: '用 Porter Five Forces、VRIO、制度理論分別拆一次',
      response: [
        'Porter 五力：供應商議價（EUV 供應集中）、買方議價（合資客戶鎖單）、替代（GF、IFS、Intel Foundry）、新進（歐洲國營晶圓計畫）、現有競爭（強度中等）',
        'VRIO：先進製程為 Valuable + Rare，合資架構降低 Inimitability 但增加 Organization 複雜度',
        '制度理論：歐盟晶片法案構成 regulative pillar 的強拉力；車用客戶聯盟形成 normative pillar；地緣政治 cognitive pillar 推動去中化',
      ],
      skills: ['biz-porters-five-forces', 'grad-strat-rbv', 'grad-strat-institutional'],
    },
    {
      range: '20–27 分',
      title: '寫論點，組成三段論證',
      command: '用金字塔原則幫我組成三段式論證：主張 → 支撐 → 反論處理',
      response: [
        '主張：TSMC Dresden 合資是「以控制權換取在地化與客戶鎖定」的計算式退讓',
        '支撐 1（財務）：50% 歐盟補貼大幅降低資本投入，70% 股權仍維持營運主導',
        '支撐 2（戰略）：三家客戶合資等於鎖定未來 10 年車用產能出海口',
        '支撐 3（制度）：符合晶片法案定義的「在地生產」，規避未來地緣政治貿易風險',
        '反論：合資會稀釋技術機密。回應：製程 IP 仍在台灣 R&D，Dresden 僅量產',
      ],
      skills: ['meta-structured-problem', 'hum-rhetoric'],
    },
    {
      range: '27–30 分',
      title: '自我檢查，查漏',
      command: '幫我用 Iron Law 檢查這份報告還缺什麼',
      response: [
        '檢查 1：論點是否有可證偽的反例？→ 補「若 2027 投產延後會如何」',
        '檢查 2：是否涵蓋對立觀點？→ 補歐盟在地競爭者（GF、Intel Dresden）視角',
        '檢查 3：數字是否標註來源？→ 補 TSMC 官方新聞稿、歐盟公告、FT 報導連結',
        '檢查 4：有沒有隱藏的利益衝突？→ 補合資三家客戶同時是供應鏈下游的 disclosure',
        '檢查 5：結論是否能扛口試？→ 加一句「若時間倒回 2023 Q1，TSMC 會做同樣的選擇嗎」練習題',
      ],
      skills: ['hum-rhetoric', 'meta-structured-problem'],
    },
  ],
  closingNote: '剩下 70% 的工夫——深化洞察、加進你的業界判斷、打磨文字——那是你的事，Famulus 不代替你走。',
};
```

- [ ] **Step 2: Commit**

```bash
git add docs/js/case-study-data.js
git commit -m "feat(site): add TSMC Dresden case-study walkthrough data"
```

---

## Task 9: Case-study walkthrough UI (timeline + expand/collapse)

**Files:**
- Modify: `docs/index.html` — replace `<section id="case-study"></section>`
- Modify: `docs/js/main.js` — append timeline rendering + interaction

- [ ] **Step 1: Replace case-study section in index.html**

Replace `<section id="case-study"></section>` with:

```html
<section id="case-study" class="bg-navy-900 text-gold-100 py-24 md:py-32">
  <div class="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
    <div class="max-w-3xl mb-16 reveal">
      <div class="text-xs tracking-widest text-gold-500 font-medium mb-4">主示範</div>
      <h2 class="font-display text-3xl md:text-5xl font-semibold text-gold-100 leading-tight">
        30 分鐘走讀：<br>從讀完 case 到交出分析報告。
      </h2>
      <p class="mt-6 text-navy-100 leading-relaxed" id="case-summary"></p>
    </div>
    <div id="case-steps" class="space-y-2"></div>
    <p class="mt-16 text-center text-lg text-gold-400 italic max-w-2xl mx-auto reveal" id="case-closing"></p>
  </div>
</section>
```

- [ ] **Step 2: Append timeline renderer to main.js**

Append this IIFE at the end of `docs/js/main.js`:

```javascript
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
        <div class="shrink-0 text-gold-500 transition-transform" data-chevron>
          <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 7l5 5 5-5" stroke="currentColor" stroke-width="2" fill="none"/></svg>
        </div>
      </button>
      <div class="overflow-hidden transition-all duration-300 ease-out ${isFirst ? '' : 'max-h-0'}" data-panel>
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

  // Toggle logic
  stepsEl.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-toggle]');
    if (!btn) return;
    const wrapper = btn.parentElement;
    const panel = wrapper.querySelector('[data-panel]');
    const dot = wrapper.querySelector('[data-dot]');
    const chevron = btn.querySelector('[data-chevron]');
    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    // Close all others
    stepsEl.querySelectorAll('[data-toggle]').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.parentElement.querySelector('[data-panel]').classList.add('max-h-0');
      b.parentElement.querySelector('[data-dot]').classList.remove('bg-gold-500');
      b.parentElement.querySelector('[data-dot]').classList.add('bg-navy-900');
      b.querySelector('[data-chevron]').classList.remove('rotate-180');
    });

    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true');
      panel.classList.remove('max-h-0');
      dot.classList.add('bg-gold-500');
      dot.classList.remove('bg-navy-900');
      chevron.classList.add('rotate-180');
    }
  });
})();
```

- [ ] **Step 3: Preview and verify**

Preview. Expected:
- Vertical timeline with 5 steps
- Step 1 expanded by default, showing 3-column grid (指令 / 回應 / Skills)
- Click Step 2 → Step 1 collapses, Step 2 expands
- Gold dot moves to expanded step

Kill server.

- [ ] **Step 4: Commit**

```bash
git add docs/index.html docs/js/main.js
git commit -m "feat(site): add case-study 5-step timeline with expand/collapse"
```

---

## Task 10: Other Workflows tabs (5 workflows)

**Files:**
- Modify: `docs/index.html` — replace `<section id="workflows"></section>`
- Modify: `docs/js/main.js` — append tab logic

- [ ] **Step 1: Replace workflows section**

Replace `<section id="workflows"></section>` with:

```html
<section id="workflows" class="bg-cream text-ink py-24">
  <div class="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
    <div class="max-w-3xl mb-12 reveal">
      <div class="text-xs tracking-widest text-gold-600 font-medium mb-4">其他作業場景</div>
      <h2 class="font-display text-3xl md:text-5xl font-semibold text-ink leading-tight">
        案例不是你的題目？<br>Famulus 還有另外 5 個 workflow。
      </h2>
    </div>
    <!-- Tab headers -->
    <div class="border-b border-navy-300 mb-8">
      <div class="flex gap-1 overflow-x-auto -mb-px" role="tablist">
        <button data-wf="industry" class="whitespace-nowrap px-4 py-3 text-sm font-semibold border-b-2 border-gold-500 text-navy-900" role="tab" aria-selected="true">產業分析</button>
        <button data-wf="thesis-qual" class="whitespace-nowrap px-4 py-3 text-sm font-semibold border-b-2 border-transparent text-navy-700 hover:text-navy-900" role="tab" aria-selected="false">畢業質性</button>
        <button data-wf="thesis-quant" class="whitespace-nowrap px-4 py-3 text-sm font-semibold border-b-2 border-transparent text-navy-700 hover:text-navy-900" role="tab" aria-selected="false">畢業量化</button>
        <button data-wf="pitch" class="whitespace-nowrap px-4 py-3 text-sm font-semibold border-b-2 border-transparent text-navy-700 hover:text-navy-900" role="tab" aria-selected="false">高管簡報</button>
        <button data-wf="esg" class="whitespace-nowrap px-4 py-3 text-sm font-semibold border-b-2 border-transparent text-navy-700 hover:text-navy-900" role="tab" aria-selected="false">ESG 報告</button>
      </div>
    </div>
    <!-- Tab panels -->
    <div id="wf-panels"></div>
  </div>
</section>
```

- [ ] **Step 2: Append workflow data + tab logic to main.js**

Append to `docs/js/main.js`:

```javascript
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
```

- [ ] **Step 3: Preview and verify**

Preview. Expected: 5 tabs at top; clicking a tab switches content panel showing scenario, pipeline chips, and checkmark output list.

- [ ] **Step 4: Commit**

```bash
git add docs/index.html docs/js/main.js
git commit -m "feat(site): add other-workflows tab section (5 workflows)"
```

---

## Task 11: Skill cards + category filter

**Files:**
- Modify: `docs/index.html` — replace `<section id="skills"></section>`
- Modify: `docs/js/main.js` — append filter logic

- [ ] **Step 1: Replace skills section**

Replace `<section id="skills"></section>` with:

```html
<section id="skills" class="bg-paper text-ink py-24">
  <div class="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
    <div class="max-w-3xl mb-10 reveal">
      <div class="text-xs tracking-widest text-gold-600 font-medium mb-4">13 個 EMBA 專屬 Skill</div>
      <h2 class="font-display text-3xl md:text-5xl font-semibold text-ink leading-tight">
        Asgard 沒覆蓋的，<br>我們補上。
      </h2>
    </div>
    <!-- Filter bar -->
    <div class="flex flex-wrap gap-2 mb-8" id="skill-filter">
      <button data-cat="all" class="px-4 py-2 text-sm font-semibold bg-navy-900 text-gold-100 border border-navy-900">全部</button>
      <button data-cat="策略" class="px-4 py-2 text-sm font-semibold bg-transparent text-navy-700 border border-navy-300 hover:border-navy-900">策略</button>
      <button data-cat="財會" class="px-4 py-2 text-sm font-semibold bg-transparent text-navy-700 border border-navy-300 hover:border-navy-900">財會</button>
      <button data-cat="組織" class="px-4 py-2 text-sm font-semibold bg-transparent text-navy-700 border border-navy-300 hover:border-navy-900">組織</button>
      <button data-cat="創新" class="px-4 py-2 text-sm font-semibold bg-transparent text-navy-700 border border-navy-300 hover:border-navy-900">創新</button>
      <button data-cat="永續" class="px-4 py-2 text-sm font-semibold bg-transparent text-navy-700 border border-navy-300 hover:border-navy-900">永續</button>
      <button data-cat="研究方法" class="px-4 py-2 text-sm font-semibold bg-transparent text-navy-700 border border-navy-300 hover:border-navy-900">研究方法</button>
    </div>
    <!-- Cards grid -->
    <div id="skill-cards" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
  </div>
</section>
```

- [ ] **Step 2: Append skill data + render + filter to main.js**

Append to `docs/js/main.js`:

```javascript
// --- Skill cards + filter ---
(() => {
  'use strict';
  const SKILLS = [
    { slug: 'biz-management-accounting', title: '管理會計', desc: 'ABC 作業成本、差異分析、轉撥計價', src: '台大 · 陽交 · 成大', cat: '財會' },
    { slug: 'ops-leadership-styles', title: '領導風格決策樹', desc: '轉型／交易／僕人／情境／真誠領導選用', src: '台大 · 政大 · 師大', cat: '組織' },
    { slug: 'ops-org-behavior', title: '組織行為工具箱', desc: '動機／團隊／文化三層診斷', src: '陽交 · 清大 · 師大', cat: '組織' },
    { slug: 'ops-talent-strategy', title: '策略性人才管理', desc: '9-box、繼任規劃、職能模型', src: '政大 · 成大', cat: '組織' },
    { slug: 'biz-corporate-governance', title: '公司治理', desc: '董事會、三道防線、獨董運作', src: '多校必修', cat: '策略' },
    { slug: 'biz-net-zero-transition', title: '淨零轉型', desc: 'SBTi、範疇 1/2/3、TCFD 揭露', src: '陽交 · 政大', cat: '永續' },
    { slug: 'biz-innovation-management', title: '創新管理', desc: 'Stage-Gate、3 Horizons、開放式創新', src: '台大 · 中山', cat: '創新' },
    { slug: 'ops-digital-transformation', title: '數位轉型 Playbook', desc: '成熟度、治理、Operating Model', src: '多校', cat: '創新' },
    { slug: 'grad-habitual-domain', title: '習慣領域（游伯龍）', desc: '突破思維定勢的七層決策', src: '陽交招牌', cat: '研究方法' },
    { slug: 'biz-sme-management', title: '中小企業與家族企業', desc: '三圓模型、二代接班', src: '成大', cat: '策略' },
    { slug: 'biz-crm-strategy', title: 'CRM 戰略', desc: '客戶分層、Journey、CDP 整合', src: '師大', cat: '策略' },
    { slug: 'biz-erm', title: '企業風險管理', desc: 'COSO ERM、風險胃納、熱圖', src: '師大', cat: '財會' },
    { slug: 'fin-m-and-a', title: '併購與整合', desc: '盡職調查、估值橋、earn-out', src: '多校財金', cat: '財會' },
  ];

  const grid = document.getElementById('skill-cards');
  const filter = document.getElementById('skill-filter');

  grid.innerHTML = SKILLS.map(s => `
    <div data-cat="${s.cat}" class="p-6 bg-white border border-navy-100 transition-all duration-200">
      <div class="font-mono text-xs text-asgard-600 mb-3">${s.slug}</div>
      <div class="font-display text-xl font-semibold text-ink mb-2">${s.title}</div>
      <p class="text-sm text-navy-700 leading-relaxed mb-4">${s.desc}</p>
      <div class="text-xs tracking-wider text-gold-600">出處：${s.src}</div>
    </div>
  `).join('');

  filter.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-cat]');
    if (!btn) return;
    const cat = btn.dataset.cat;

    filter.querySelectorAll('button').forEach(b => {
      b.classList.remove('bg-navy-900', 'text-gold-100', 'border-navy-900');
      b.classList.add('bg-transparent', 'text-navy-700', 'border-navy-300');
    });
    btn.classList.add('bg-navy-900', 'text-gold-100', 'border-navy-900');
    btn.classList.remove('bg-transparent', 'text-navy-700', 'border-navy-300');

    grid.querySelectorAll('[data-cat]').forEach(card => {
      if (cat === 'all' || card.dataset.cat === cat) {
        card.classList.remove('opacity-[0.15]', 'grayscale', 'pointer-events-none');
      } else {
        card.classList.add('opacity-[0.15]', 'grayscale', 'pointer-events-none');
      }
    });
  });
})();
```

- [ ] **Step 3: Preview and verify**

Expected: 13 cards in grid (3-col desktop, 1-col mobile); clicking a category dims non-matching cards but keeps them visible.

- [ ] **Step 4: Commit**

```bash
git add docs/index.html docs/js/main.js
git commit -m "feat(site): add 13 skill cards with category filter"
```

---

## Task 12: Asgard ecosystem SVG diagram

**Files:**
- Modify: `docs/index.html` — replace `<section id="ecosystem"></section>`

Hand-rolled SVG; mobile version uses text stack.

- [ ] **Step 1: Replace ecosystem section**

Replace `<section id="ecosystem"></section>` with:

```html
<section id="ecosystem" class="bg-navy-900 text-gold-100 py-24">
  <div class="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
    <div class="max-w-3xl mb-12 reveal">
      <div class="text-xs tracking-widest text-gold-500 font-medium mb-4">你不是一個人</div>
      <h2 class="font-display text-3xl md:text-5xl font-semibold text-gold-100 leading-tight">
        Famulus 背後，<br>是 Asgard 的 200+ 商管 skill。
      </h2>
    </div>

    <!-- Desktop SVG -->
    <div class="hidden md:block reveal">
      <svg viewBox="0 0 800 480" class="w-full max-w-3xl mx-auto" role="img" aria-labelledby="eco-title">
        <title id="eco-title">Asgard → Famulus → 學員 三層生態關係圖</title>
        <!-- Top layer: Asgard -->
        <g>
          <rect x="100" y="40" width="600" height="100" fill="#13263d" stroke="#2563eb" stroke-width="2"/>
          <text x="400" y="75" text-anchor="middle" fill="#60a5fa" font-family="Noto Sans TC" font-size="12" letter-spacing="2">ASGARD AI PLATFORM</text>
          <text x="400" y="105" text-anchor="middle" fill="#f3e9d2" font-family="Noto Serif TC" font-size="20" font-weight="600">200+ 商管 · 研究 · 數據 skill</text>
          <text x="400" y="125" text-anchor="middle" fill="#a8b3c2" font-family="Noto Sans TC" font-size="11">SWOT · 5 Forces · DCF · 研究方法 · 統計工具</text>
        </g>
        <!-- Arrow 1 -->
        <g>
          <line x1="400" y1="155" x2="400" y2="195" stroke="#c9a961" stroke-width="1.5"/>
          <polygon points="400,200 393,188 407,188" fill="#c9a961"/>
          <text x="415" y="180" fill="#c9a961" font-family="Noto Sans TC" font-size="11">上游依賴</text>
        </g>
        <!-- Middle layer: Famulus -->
        <g>
          <rect x="180" y="210" width="440" height="90" fill="#1d3555" stroke="#c9a961" stroke-width="2"/>
          <text x="400" y="240" text-anchor="middle" fill="#c9a961" font-family="Noto Sans TC" font-size="12" letter-spacing="2">EMBA FAMULUS（本 repo）</text>
          <text x="400" y="268" text-anchor="middle" fill="#f3e9d2" font-family="Noto Serif TC" font-size="18" font-weight="600">13 skill · 6 workflow</text>
          <text x="400" y="286" text-anchor="middle" fill="#a8b3c2" font-family="Noto Sans TC" font-size="11">為 EMBA 作業場景補位</text>
        </g>
        <!-- Arrow 2 -->
        <g>
          <line x1="400" y1="315" x2="400" y2="355" stroke="#c9a961" stroke-width="1.5"/>
          <polygon points="400,360 393,348 407,348" fill="#c9a961"/>
          <text x="415" y="340" fill="#c9a961" font-family="Noto Sans TC" font-size="11">用</text>
        </g>
        <!-- Bottom layer: Student -->
        <g>
          <rect x="310" y="370" width="180" height="80" fill="#0b1a2b" stroke="#c9a961" stroke-width="2"/>
          <circle cx="400" cy="400" r="14" fill="#c9a961"/>
          <text x="400" y="430" text-anchor="middle" fill="#f3e9d2" font-family="Noto Sans TC" font-size="13">你 · EMBA 學員</text>
        </g>
      </svg>
    </div>

    <!-- Mobile text stack -->
    <div class="md:hidden space-y-4 reveal">
      <div class="p-6 bg-navy-800 border border-asgard-500">
        <div class="text-xs tracking-widest text-asgard-400 mb-2">ASGARD AI PLATFORM</div>
        <div class="font-display text-lg font-semibold text-gold-100">200+ 商管 · 研究 · 數據 skill</div>
        <div class="text-xs text-navy-300 mt-1">SWOT · 5 Forces · DCF · 研究方法 · 統計工具</div>
      </div>
      <div class="text-center text-gold-500 text-sm">↑ 上游依賴</div>
      <div class="p-6 bg-navy-700 border border-gold-500">
        <div class="text-xs tracking-widest text-gold-500 mb-2">EMBA FAMULUS（本 repo）</div>
        <div class="font-display text-lg font-semibold text-gold-100">13 skill · 6 workflow</div>
        <div class="text-xs text-navy-300 mt-1">為 EMBA 作業場景補位</div>
      </div>
      <div class="text-center text-gold-500 text-sm">↑ 用</div>
      <div class="p-6 bg-navy-900 border border-gold-500 text-center">
        <div class="font-display text-lg text-gold-100">你 · EMBA 學員</div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Preview and commit**

Preview. Expected: on desktop the SVG shows three stacked layers with gold connecting arrows; on mobile (<768px) the text stack shows instead.

```bash
git add docs/index.html
git commit -m "feat(site): add Asgard ecosystem SVG with mobile text fallback"
```

---

## Task 13: Install section with copy-to-clipboard

**Files:**
- Modify: `docs/index.html` — replace `<section id="install"></section>`
- Modify: `docs/js/main.js` — append install tabs + copy logic

- [ ] **Step 1: Replace install section**

Replace `<section id="install"></section>` with:

```html
<section id="install" class="bg-cream text-ink py-24">
  <div class="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
    <div class="max-w-3xl mb-12 reveal">
      <div class="text-xs tracking-widest text-gold-600 font-medium mb-4">立即安裝</div>
      <h2 class="font-display text-3xl md:text-5xl font-semibold text-ink leading-tight">
        三種方式，<br>挑一個貼進 terminal。
      </h2>
    </div>

    <!-- Install tabs -->
    <div class="border-b border-navy-300 mb-8">
      <div class="flex gap-1 overflow-x-auto -mb-px" role="tablist">
        <button data-inst="marketplace" class="whitespace-nowrap px-4 py-3 text-sm font-semibold border-b-2 border-gold-500 text-navy-900" role="tab" aria-selected="true">Plugin Marketplace</button>
        <button data-inst="git" class="whitespace-nowrap px-4 py-3 text-sm font-semibold border-b-2 border-transparent text-navy-700 hover:text-navy-900" role="tab" aria-selected="false">手動 git clone</button>
        <button data-inst="asgard" class="whitespace-nowrap px-4 py-3 text-sm font-semibold border-b-2 border-transparent text-navy-700 hover:text-navy-900" role="tab" aria-selected="false">搭配 Asgard 同裝</button>
      </div>
    </div>

    <div id="install-panels"></div>
  </div>
</section>
```

- [ ] **Step 2: Append install logic to main.js**

Append to `docs/js/main.js`:

```javascript
// --- Install tabs + copy-to-clipboard ---
(() => {
  'use strict';
  const INSTALLS = {
    marketplace: {
      note: '最推薦。一行安裝，直接從 Claude Code 的 plugin marketplace 拿。',
      code: '/plugin install asgard-ai-platform/emba-famulus',
    },
    git: {
      note: '你想看原始檔或離線使用。',
      code: 'git clone https://github.com/asgard-ai-platform/emba-famulus.git \\\n  ~/.claude/plugins/emba-famulus',
    },
    asgard: {
      note: '同時裝上游 Asgard 200+ skill，完整生態。',
      code: 'git clone https://github.com/asgard-ai-platform/emba-famulus.git \\\n  ~/.claude/plugins/emba-famulus\ngit clone https://github.com/asgard-ai-platform/skills.git \\\n  ~/.claude/plugins/asgard-skills',
    },
  };

  const panels = document.getElementById('install-panels');
  const tabs = document.querySelectorAll('[data-inst]');

  function render(key) {
    const inst = INSTALLS[key];
    panels.innerHTML = `
      <div class="reveal is-visible">
        <p class="text-lg text-ink leading-relaxed mb-5">${inst.note}</p>
        <div class="relative bg-navy-900 p-6 pr-20 font-mono text-sm text-gold-100 leading-loose whitespace-pre-wrap">${inst.code}<button data-copy class="absolute top-4 right-4 px-3 py-1.5 text-xs font-semibold bg-gold-500 text-navy-900 hover:bg-gold-400 transition">Copy</button></div>
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
      render(tab.dataset.inst);
    });
  });

  render('marketplace');

  // Delegated copy handler
  panels.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-copy]');
    if (!btn) return;
    const code = btn.parentElement.textContent.replace(/Copy$/, '').trim();
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      // Fallback for insecure contexts
      const ta = document.createElement('textarea');
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    const prev = btn.textContent;
    btn.textContent = '已複製 ✓';
    btn.classList.add('bg-gold-400');
    setTimeout(() => {
      btn.textContent = prev;
      btn.classList.remove('bg-gold-400');
    }, 1500);
  });
})();
```

- [ ] **Step 3: Preview and verify copy works**

Preview. Click each tab. Click Copy on Marketplace tab → paste somewhere → verify you got `/plugin install asgard-ai-platform/emba-famulus`.

- [ ] **Step 4: Commit**

```bash
git add docs/index.html docs/js/main.js
git commit -m "feat(site): add install section with 3 tabs and copy-to-clipboard"
```

---

## Task 14: Academic Integrity + Footer

**Files:**
- Modify: `docs/index.html` — replace `<section id="integrity"></section>` and `<footer id="site-footer"></footer>`

- [ ] **Step 1: Replace integrity section**

Replace `<section id="integrity"></section>` with:

```html
<section id="integrity" class="bg-navy-800 text-gold-100 py-24">
  <div class="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
    <div class="max-w-3xl mb-12 reveal">
      <div class="text-xs tracking-widest text-gold-500 font-medium mb-4">學術誠信紅線</div>
      <h2 class="font-display text-3xl md:text-5xl font-semibold text-gold-100 leading-tight">
        能做什麼，不能做什麼。<br>界線劃清楚。
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
      <!-- Does -->
      <div class="p-8 bg-navy-900 border-t-2 border-gold-500">
        <div class="text-xs tracking-wider text-gold-500 mb-4">做什麼</div>
        <ul class="space-y-3">
          <li class="flex gap-3"><span class="text-gold-500 shrink-0">✓</span><span>框架套用指引</span></li>
          <li class="flex gap-3"><span class="text-gold-500 shrink-0">✓</span><span>結構化問題拆解</span></li>
          <li class="flex gap-3"><span class="text-gold-500 shrink-0">✓</span><span>文獻引用建議</span></li>
          <li class="flex gap-3"><span class="text-gold-500 shrink-0">✓</span><span>分析鷹架、草稿骨架</span></li>
        </ul>
      </div>
      <!-- Does not -->
      <div class="p-8 bg-navy-900 border-t-2 border-navy-300">
        <div class="text-xs tracking-wider text-navy-300 mb-4">不做什麼</div>
        <ul class="space-y-3">
          <li class="flex gap-3"><span class="text-navy-300 shrink-0">✗</span><span>代寫整篇可直接繳交作業</span></li>
          <li class="flex gap-3"><span class="text-navy-300 shrink-0">✗</span><span>代替訪談、實驗、問卷</span></li>
          <li class="flex gap-3"><span class="text-navy-300 shrink-0">✗</span><span>代做最終判斷與決策</span></li>
          <li class="flex gap-3"><span class="text-navy-300 shrink-0">✗</span><span>偽造資料或捏造引用</span></li>
        </ul>
      </div>
    </div>
    <p class="mt-16 text-center font-display text-xl md:text-2xl text-gold-500 font-semibold reveal">
      學員最終版本必須親自撰寫並對內容負責。
    </p>
  </div>
</section>
```

- [ ] **Step 2: Replace footer**

Replace `<footer id="site-footer"></footer>` with:

```html
<footer id="site-footer" class="bg-navy-950 text-navy-300 py-16">
  <div class="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <div class="flex items-center gap-2 mb-4">
          <img src="assets/logos/asgard-logo-color.svg" alt="Asgard" class="h-5 w-5 opacity-80">
          <span class="text-xs tracking-widest text-gold-500 font-medium">ASGARD · FAMULUS</span>
        </div>
        <p class="text-sm leading-relaxed">
          為台灣八大 EMBA 在職學員打造的作業助手。<br>
          Part of the Asgard AI Platform.
        </p>
      </div>
      <div>
        <div class="text-xs tracking-wider text-gold-500 mb-4">連結</div>
        <ul class="space-y-2 text-sm">
          <li><a href="https://github.com/asgard-ai-platform/emba-famulus" target="_blank" rel="noopener" class="hover:text-gold-500 transition">GitHub Repository</a></li>
          <li><a href="https://github.com/asgard-ai-platform/emba-famulus/issues" target="_blank" rel="noopener" class="hover:text-gold-500 transition">Issue 回報</a></li>
          <li><a href="https://github.com/asgard-ai-platform/skills" target="_blank" rel="noopener" class="hover:text-gold-500 transition">Asgard 上游 Skills</a></li>
          <li><a href="https://asgard-ai.com/" target="_blank" rel="noopener" class="hover:text-gold-500 transition">Asgard AI Platform</a></li>
        </ul>
      </div>
      <div>
        <div class="text-xs tracking-wider text-gold-500 mb-4">致謝</div>
        <p class="text-sm leading-relaxed">
          游伯龍教授（1940–）<br>
          <span class="text-navy-100">習慣領域理論創建者、台灣原生管理理論的標竿。</span>
        </p>
      </div>
    </div>
    <div class="mt-12 pt-8 border-t border-line flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs">
      <div>Built by <a href="https://github.com/shyuan" target="_blank" rel="noopener" class="text-gold-500 hover:text-gold-400">Chris Yuan</a> · MIT License · 繁體中文（台灣）</div>
      <div>© 2026 Asgard AI Platform</div>
    </div>
  </div>
</footer>
```

- [ ] **Step 3: Preview and commit**

Preview. Expected: integrity section has two balanced columns and a strong closing line; footer has 3 columns with links and acknowledgment.

```bash
git add docs/index.html
git commit -m "feat(site): add academic integrity section and footer"
```

---

## Task 15: Scroll reveal animations

**Files:**
- Modify: `docs/js/main.js` — append IntersectionObserver

- [ ] **Step 1: Append reveal observer**

Append to `docs/js/main.js`:

```javascript
// --- Scroll reveal (IntersectionObserver) ---
(() => {
  'use strict';
  if (!('IntersectionObserver' in window)) {
    // Fallback: reveal everything immediately
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
```

- [ ] **Step 2: Preview — scroll through entire page**

Open `docs/index.html` in a fresh tab. Scroll from top to bottom. Expected: each `.reveal` element fades + translates in as it enters viewport; hero block is visible immediately.

- [ ] **Step 3: Commit**

```bash
git add docs/js/main.js
git commit -m "feat(site): add scroll-reveal animation observer"
```

---

## Task 16: Favicon + Open Graph image (SVG)

**Files:**
- Create: `docs/assets/favicon.svg`
- Create: `docs/assets/og-image.svg`

- [ ] **Step 1: Create favicon.svg**

Write to `docs/assets/favicon.svg`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#0b1a2b"/>
  <!-- Asgard triangle motif in gold -->
  <path d="M32 12 L52 48 L12 48 Z" fill="#c9a961" opacity="1"/>
  <path d="M32 22 L44 42 L20 42 Z" fill="#dcc189" opacity="0.55"/>
  <!-- F letter -->
  <text x="32" y="40" text-anchor="middle" font-family="serif" font-size="16" font-weight="700" fill="#0b1a2b">F</text>
</svg>
```

- [ ] **Step 2: Create og-image.svg**

Write to `docs/assets/og-image.svg`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <rect width="1200" height="630" fill="#0b1a2b"/>
  <!-- Faint triangle background motif -->
  <path d="M1000 100 L1150 450 L850 450 Z" fill="#13263d" opacity="0.6"/>
  <!-- Brand caption -->
  <g font-family="sans-serif">
    <rect x="80" y="100" width="3" height="24" fill="#c9a961"/>
    <text x="100" y="118" fill="#c9a961" font-size="16" letter-spacing="4">ASGARD · FAMULUS</text>
  </g>
  <!-- Headline -->
  <g font-family="serif" fill="#f3e9d2">
    <text x="80" y="280" font-size="76" font-weight="600">
      <tspan fill="#c9a961">三十分鐘</tspan>，
    </text>
    <text x="80" y="380" font-size="76" font-weight="600">
      從空白到<tspan fill="#c9a961">可以交</tspan>的
    </text>
    <text x="80" y="480" font-size="76" font-weight="600">作業初稿。</text>
  </g>
  <!-- Subtitle -->
  <text x="80" y="560" font-family="sans-serif" fill="#a8b3c2" font-size="22">
    為台灣八大 EMBA 在職學員設計的 agent plugin · Part of the Asgard AI Platform
  </text>
</svg>
```

- [ ] **Step 3: Verify favicon in browser tab**

Reload the site. Browser tab should show a small navy square with gold triangle + F. The OG image will be used when the site URL is shared on Twitter/LinkedIn/Slack.

- [ ] **Step 4: Commit**

```bash
git add docs/assets/favicon.svg docs/assets/og-image.svg
git commit -m "feat(site): add favicon and Open Graph image (SVG)"
```

---

## Task 17: Iron Law verification (pre-deploy)

**Files:** none changed; this is a verification task.

Complete the checklist from spec §12 / plan header. Report findings back to user.

- [ ] **Step 1: 繁體中文校對**

Open `docs/index.html`, `docs/js/main.js`, `docs/js/case-study-data.js`. Manually scan for any accidental 簡體字 (简 / 这 / 从 / 对 / 写 / 书 / 学 / 长 / 时 / 电 / 压 etc). Fix any found.

Run:
```bash
grep -nE '[简这从对写书学长时电压级问题来说国动产]' docs/index.html docs/js/*.js || echo "OK — no simplified chars found"
```

- [ ] **Step 2: Hero 節奏讀出**

Open site. Read hero aloud. Confirm: eyeball (large gold headline) → heart (italic empathy paragraph) → mind (credibility paragraph). Three distinct tempos.

- [ ] **Step 3: Case-study 5 指令可讀**

Open each of the 5 timeline steps. Confirm each `學員打的指令` is a real sentence that would trigger a sensible Famulus response (not lorem ipsum).

- [ ] **Step 4: 三個安裝 tab 可貼**

Click each install tab. Click Copy. Paste into a scratch terminal. Confirm the commands are syntactically valid shell (even if not executed).

- [ ] **Step 5: 手機 Safari 檢視**

Open Safari iOS simulator (or Chrome DevTools mobile emulation at 375×812). Verify:
- Hero fits within viewport, CTAs tappable
- Case-study timeline expands/collapses
- Workflow tabs scrollable
- Ecosystem shows text-stack version (not SVG)
- Install copy button reachable

- [ ] **Step 6: WCAG AA 對比比**

Open Chrome DevTools → Lighthouse → Accessibility audit. Expected score ≥ 95. Fix any contrast failures.

If quick check needed, sample these pairs in <https://webaim.org/resources/contrastchecker/>:
- `#c9a961` on `#0b1a2b` → expect 7.8:1 ✓
- `#f3e9d2` on `#0b1a2b` → expect 14+:1 ✓
- `#60a5fa` on `#0b1a2b` → expect 6.5:1 ✓

- [ ] **Step 7: 學術誠信段落完整**

Scroll to `#integrity`. Confirm:
- 4 items each on "做什麼" and "不做什麼"
- Closing line "學員最終版本必須親自撰寫並對內容負責" visible in gold, not visually subordinated

- [ ] **Step 8: Commit any Iron Law fixes**

If any issues fixed in Steps 1–7:
```bash
git add -A
git commit -m "fix(site): Iron Law remediations from pre-deploy verification"
```

If clean, skip commit.

---

## Task 18: Enable GitHub Pages + smoke test live URL

**Files:** none changed in repo; this is a GitHub settings + verification task.

- [ ] **Step 1: Push all commits to origin**

```bash
git push origin main
```

- [ ] **Step 2: Enable GitHub Pages (manual)**

Navigate to <https://github.com/asgard-ai-platform/emba-famulus/settings/pages>.

- Source: **Deploy from a branch**
- Branch: **main** / **/docs**
- Click **Save**

Wait 1–3 minutes for deployment.

- [ ] **Step 3: Verify live URL**

```bash
open https://asgard-ai-platform.github.io/emba-famulus/
```

Expected: site loads identically to local preview. Check:
- Fonts load (Noto Serif TC visible in hero)
- Asgard logo appears in nav
- Case-study timeline expandable
- Install copy works

- [ ] **Step 4: Report live URL back to user**

Reply in chat with live URL and a one-line status: "Deployed to https://asgard-ai-platform.github.io/emba-famulus/ — all Iron Law checks passed."

---

## Self-Review Checklist

After this plan is written, verify:

**1. Spec coverage** — every spec section has an implementing task:

| Spec section | Implemented by |
|---|---|
| §1 Goals / non-goals | (context only — no code) |
| §2 Audience / tone | Task 5 (hero copy mix), Task 14 (closing line) |
| §3 IA | Tasks 4–14 (section-by-section) |
| §4 Hero copy | Task 5 |
| §5 各段內容規格 | Tasks 6–14 |
| §6 視覺 Token | Task 2 (tokens.css) + Task 3 (Tailwind inline config) |
| §7 互動行為 | Tasks 4, 9, 10, 11, 13, 15 |
| §8 檔案結構 | Task 1 + section tasks |
| §9 部署 | Task 18 |
| §10 a11y + perf | Tasks 2 (focus ring, reduced motion), 15 (reveal), 17 (Iron Law audit) |
| §11 留給實作階段 | (resolved inside tasks — Tailwind v3 CDN play mode, no Alpine, SVG favicon, default badge) |
| §12 Pixar 對應 | (content baked into copy; tracked in spec not plan) |
| §13 Risks | (tracked in spec; no impl) |

**2. Placeholder scan** — none expected. All code is complete.

**3. Type consistency:**
- `window.CASE_STUDY` defined in Task 8 → consumed in Task 9 ✓
- `WORKFLOWS` local object in Task 10 → consumed in same IIFE ✓
- `SKILLS` local array in Task 11 → consumed in same IIFE ✓
- CSS vars `--navy-900` etc. defined in Task 2 tokens.css → Tailwind colors match in Task 3 ✓
- `.reveal` class defined in Task 2 → used across Tasks 5–14, toggled by Task 15 IntersectionObserver ✓
- `data-toggle`, `data-panel`, `data-dot`, `data-chevron` markers in Task 9 → all read in same event handler ✓
- `data-wf`, `data-inst`, `data-cat` attributes consistently named per section ✓

**4. Content cross-checks:**
- Skill count: 13 cards in Task 11 ↔ 13 listed in spec §5 ✓
- Workflow count: 5 in Task 10 (case-study is #6 with dedicated section) ↔ 6 total in spec §3 ✓
- Case-study 5 steps ↔ 5 steps in spec §5 Section 4 ✓
- Install 3 tabs ↔ 3 tabs in spec §5 Section 8 ✓
- Pain-solution 4 pairs ↔ 4 pairs in spec §5 Section 3 ✓

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-04-21-emba-famulus-landing.md`. Two execution options:

**1. Subagent-Driven (recommended for backend / test-heavy work)** — dispatch a fresh subagent per task with two-stage review between tasks. Clean isolation, but loses visual-iteration feedback loop which matters here.

**2. Inline Execution (recommended for this project)** — execute tasks in this session using superpowers:executing-plans. User can preview each section visually after it ships and veto before commit. Better for static-site / design-feel work.

**My recommendation: Inline Execution.** The site is visual; the brainstorm server is already open; user needs to verify look-and-feel at each commit. Subagent isolation costs more than it saves here.

Which approach?
