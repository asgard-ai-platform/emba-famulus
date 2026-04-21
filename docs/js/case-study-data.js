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
