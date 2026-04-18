# EMBA Famulus — Repository Context

> **Famulus**（拉丁文：助手／學徒）。此專案是陪伴台灣 EMBA 學生完成課堂作業與個案分析的 **agent plugin**。

## 專案定位

- **做什麼**：一個多代理相容（Claude Code、Codex、Gemini CLI、OpenCode⋯）的 plugin，協助 EMBA 學員完成課堂作業、個案分析、期末報告、畢業論文初稿
- **不做什麼**：
  - 不是通用商管框架庫 → 上游依賴 [`asgard-ai-platform/skills`](https://github.com/asgard-ai-platform/skills)
  - 不是代寫工具 → 提供結構化鷹架與框架套用指引，學員仍需親自判斷、寫作、負責學術誠信
  - 不是教科書 → 聚焦「作業執行層」，理論深度由 Asgard `grad-*` skill 負責

## 使用者輪廓

- **主要對象**：台灣八大 EMBA 在職學員（大老闆、企業高階經理人、創業家）
- **特性**：
  - 時間有限，需要即時可用的框架與範例
  - 業界判斷力強，但可能疏於學術寫作規範（literature review、APA、假設檢定）
  - 常用語言：繁體中文（台灣），回覆請用繁體中文並使用企業級口吻
- **鎖定學校**：台大、政大、陽明交大、清大、成大、中山、台師大、中央

## 架構原則

1. **優先重用 Asgard skills**，不重造輪子
2. **只開發 Asgard 沒覆蓋的方法論**（清單見下）
3. **Skill 格式遵循 Asgard skill anatomy**：SKILL.md（frontmatter + body）+ examples/ + references/
4. **多代理相容**：避免 Claude Code 專屬語法；用標準 MCP、SKILL.md 格式
5. **作業場景驅動**：skill 以「學員要交的作業類型」為單位，而非純學理

## EMBA 六大核心必修 → Asgard 既有 skill 對照

| 核心科目 | 直接重用 |
|---|---|
| 策略管理 | `biz-swot`, `biz-porters-five-forces`, `biz-value-chain`, `biz-blue-ocean`, `biz-ansoff`, `biz-bcg-matrix`, `biz-pestel`, `grad-strat-rbv`, `grad-strat-tce`, `grad-strat-dynamic-cap`, `grad-strat-institutional`, `grad-strat-kbv`, `grad-strat-stakeholder`, `grad-strat-upper-echelons`, `grad-strat-agency`, `grad-diamond`, `grad-disruptive-innovation`, `grad-paradox-theory`, `grad-ambidexterity` |
| 財務管理 | `biz-dcf`, `biz-dupont`, `biz-financial-ratios`, `biz-breakeven`, `grad-capm`, `grad-fama-french`, `grad-mm-theorem`, `grad-pecking-order`, `grad-real-options`, `grad-emh`, `grad-behavioral-finance`, `fin-modeling`, `fin-earnings-summary`, `data-financial-analysis` |
| 行銷管理 | `biz-4p-7p`, `biz-stp`, `biz-brand-positioning`, `biz-customer-journey`, `biz-pricing-strategy`, `biz-cac-ltv`, `grad-brand-equity`, `grad-innovation-diffusion-bass`, `grad-sd-logic`, `grad-servqual`, `mkt-ab-testing`, `mkt-content-calendar`, `soc-innovation-diffusion` |
| 組織行為／人力資源 | `algo-hr-compensation`, `algo-hr-matching`, `algo-hr-turnover`, `soc-cialdini`, `grad-social-identity`, `grad-sdt`, `grad-flow`, `grad-sensemaking`（**仍缺：綜合性 OB 與策略人資 skill → 待開發**） |
| 會計／財務報表分析 | `biz-financial-ratios`, `biz-dupont`, `data-financial-analysis`（**仍缺：管理會計 → 待開發**） |
| 研究方法 | `grad-action-research`, `grad-case-study`, `grad-ethnography`, `grad-grounded-theory`, `grad-mixed-methods`, `grad-phenomenology`, `grad-survey-design`, `grad-systematic-review`, `grad-meta-analysis`, `grad-narrative`, `grad-paradigms`, `grad-pragmatism`, `grad-critical-realism`, `grad-did`, `grad-event-study`, `grad-hlm`, `grad-panel-data`, `grad-pls-sem`, `grad-sem`, `stat-causal-inference`, `stat-eda`, `stat-hypothesis-testing`, `stat-ab-testing` |

## EMBA 特色選修 → 可直接重用

| 主題 | 重用 skill |
|---|---|
| ESG／永續 | `grad-sustainability`, `grad-governance` |
| 公司治理 | `grad-governance`, `grad-strat-agency`, `grad-strat-stakeholder` |
| 數位轉型 | `grad-digital-transformation`, `grad-sociotechnical`, `grad-tam-utaut`, `grad-is-success` |
| 國際化／新興市場 | `grad-uppsala`, `grad-oli`, `grad-born-global`, `xborder-sea-entry`, `xborder-logistics` |
| 創業／創新管理 | `ux-lean-startup`, `grad-disruptive-innovation`, `grad-ambidexterity`, `grad-platform-economics`, `grad-business-ecosystems`, `ops-business-model-canvas` |
| 供應鏈 | `biz-supply-chain`, `algo-sc-bullwhip`, `algo-sc-eoq`, `algo-sc-newsvendor`, `algo-sc-routing`, `algo-sc-safety-stock` |
| 公司治理與危機 | `pr-crisis-communication`, `pr-crisis-response`, `pr-media-monitoring` |
| 談判 | `ops-negotiation` |
| 個案寫作／報告 | `grad-case-study`, `ops-pitch-deck`, `ops-meeting-minutes`, `hum-rhetoric`, `hum-socratic`, `hum-narrative`, `meta-structured-problem` |
| 法律／合規 | `law-contract`, `law-gdpr-pdpa`, `law-ip`, `law-irac`, `law-labor` |
| 台灣在地 | `tw-einvoice-guide`, `tw-fintech-compliance`, `tw-healthcare-regulations`, `tw-manufacturing`, `tw-payment-integration`, `tw-retail-landscape`, `tw-startup-legal`, `tw-tax-basics`, `tw-stock-analysis` |

## 本 repo 需開發的新 skill（Asgard 未覆蓋）

### 高度推薦（跨校共通、現有 skill 無覆蓋）

| Skill slug | EMBA 出處 | 核心內容 |
|---|---|---|
| `biz-management-accounting` | 台大、陽交、成大 | ABC 作業成本、差異分析、轉撥計價、責任中心會計 |
| `ops-leadership-styles` | 台大、政大、師大 | 轉型／交易／僕人／情境／真誠領導之情境選用決策樹 |
| `ops-org-behavior` | 陽交、清大、師大 | 動機理論（Maslow/Herzberg/SDT）、Tuckman 團隊發展、Schein 組織文化 |
| `ops-talent-strategy` | 政大、成大 | 9-box、繼任規劃、職能模型、人才盤點 |
| `biz-corporate-governance` | 多校必修 | 董事會組成、三道防線、審計／薪酬／提名委員會運作 |
| `biz-net-zero-transition` | 陽交、政大 | SBTi、範疇 1/2/3、ISO 14064 碳盤查、TCFD 揭露 |
| `biz-innovation-management` | 台大、中山 | Stage-Gate、開放式創新、3 Horizons |
| `ops-digital-transformation` | 多校 | 執行 playbook：成熟度評估、轉型治理、Operating Model |

### 獨特性強（具區辨價值）

| Skill slug | 出處 | 為何值得 |
|---|---|---|
| `grad-habitual-domain` | 陽交招牌課 | 游伯龍（P.L. Yu）**台灣原生理論**，國際文獻仍引用 |
| `biz-sme-management` | 成大 | 資源受限決策、家族治理 — 台灣產業剛需 |
| `biz-crm-strategy` | 師大 | 客戶分層、Journey Orchestration、CDP 整合（補 `biz-cac-ltv` 之上的戰略層） |
| `biz-erm` | 師大 | COSO ERM 框架、風險胃納、風險熱圖（補 `algo-risk-*` 工具之上的框架層） |
| `fin-m-and-a` | 隱含於財金組 | 盡職調查、估值橋、綜效分析、earn-out 設計 |

## 作業場景 workflow（規劃中）

| 作業類型 | 組裝的 skill pipeline |
|---|---|
| 個案分析（Harvard case） | `grad-case-study` → `meta-structured-problem` → 框架 skill（Porter／SWOT／5 Forces） → `hum-rhetoric` |
| 期末報告（產業分析） | `biz-pestel` → `biz-porters-five-forces` → `biz-value-chain` → `fin-modeling` → `ops-pitch-deck` |
| 畢業論文（質性） | `grad-case-study` or `grad-grounded-theory` → `grad-mixed-methods` → `grad-systematic-review` |
| 畢業論文（量化） | `grad-survey-design` → `stat-hypothesis-testing` → `grad-sem`／`grad-pls-sem` |
| 高管簡報（CEO 論壇） | `ops-pitch-deck` → `hum-narrative` → `pr-press-release` |
| ESG 報告 | `grad-sustainability` → `biz-net-zero-transition`（待開發） → `grad-governance` |

## 目錄結構（規劃中）

```
emba-famulus/
├── CLAUDE.md               ← 本檔
├── README.md
├── plugin.json             ← plugin manifest（供 Claude Code / OpenCode 識別）
├── skills/                 ← 本 repo 新開發的 skills（Asgard 未覆蓋者）
│   └── {category}-{slug}/
│       ├── SKILL.md
│       ├── examples/
│       └── references/
├── workflows/              ← 作業類型的組合 pipeline
│   ├── case-study.md
│   ├── industry-analysis.md
│   └── thesis-quant.md
├── case-bank/              ← 匿名化的個案模板（非版權內容）
└── references/
    └── emba-programs/      ← 各校課程大綱摘要（已於本 repo conversation 蒐集）
```

## 工作原則

- **寫 skill 前先查 Asgard**：用 `ls ~/workspace/github.com/asgard-ai-platform/skills/` 確認不重複
- **命名遵循 Asgard 規則**：`{category}-{slug}`，不加 `skill-` 前綴；category 使用 Asgard 既定的 21 類
- **skill 命名禁止**：`claude`, `anthropic`（保留字）
- **SKILL.md 規範**：
  - Frontmatter 必備 `name`、`description`（< 1024 字元、含 trigger phrases）
  - Body < 500 行 / < 5000 tokens，重內容 offload 到 `references/`
  - 必含 IRON LAW、Output Format、5-6 條具體 Gotchas
- **學術誠信紅線**：
  - 可以產出框架大綱、問題清單、文獻引用建議、草稿骨架
  - 不代寫整篇可直接繳交的作業；回覆須提醒學員最終版本需親自撰寫並對內容負責
- **多代理相容**：
  - skill 格式以 SKILL.md 為主（非 Claude Code 專屬）
  - 避免在 skill body 使用 `/slash-command` 或 Claude Code 專屬 tool
- **繁體中文優先**：所有使用者面向內容用繁體中文（台灣）

## 反模式（Anti-patterns）

1. **通用教科書式回答** — 必須扣回該門課老師的教學框架與個案脈絡
2. **單一框架崇拜** — EMBA 老師常要求多角度分析；避免只用 SWOT 打天下
3. **忽略授課者偏好** — 政大某教授偏好 RBV、中山偏好個案教學法，skill 應能在 references/ 註明
4. **過度學術化** — 大老闆要 actionable insight，不是文獻堆砌
5. **代寫到底** — 跨越學術誠信紅線
6. **重造 Asgard 已有的輪子** — 寫新 skill 前務必 grep 上游

## 相關資源

- [`asgard-ai-platform/skills`](https://github.com/asgard-ai-platform/skills) — 上游 skill 庫（263 skills）
- [`asgard-ai-platform/skill-template`](https://github.com/asgard-ai-platform/skill-template) — Plugin 鷹架範本
- 本機已啟用 plugin：`skill-creator@claude-plugins-official`、`skill-jedi@shyuan-marketplace`
- [Claude Agent Skills 文件](https://docs.claude.com/en/docs/claude-code/skills)
