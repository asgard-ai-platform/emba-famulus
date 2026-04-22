# EMBA Famulus

> **Famulus**（拉丁文：助手／學徒）— 陪伴台灣 EMBA 學員完成課堂作業、個案分析、期末報告、畢業論文初稿的 agent plugin。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 這是什麼

**一個多代理相容的 plugin**（Claude Code、OpenAI Codex、Gemini CLI），專為**台灣 EMBA 在職學員**設計。

- 13 個 EMBA 專屬 skill（Asgard 上游未覆蓋）
- 6 個作業場景 workflow（組裝多個 skill 完成指定作業類型）
- 200+ 上游 Asgard skill 的組合指南

## 鎖定使用者

- **主要對象**：台灣八大 EMBA 在職學員（大老闆、企業高階經理人、創業家）
- **鎖定學校**：台大、政大、陽明交大、清大、成大、中山、台師大、中央
- **語言**：繁體中文（台灣）
- **風格**：企業級口吻、actionable insight、扣回授課者偏好

## 快速開始

### 方式 A：Claude Code Marketplace（推薦）

```bash
# 安裝（待 marketplace 上架後）
/plugin install asgard-ai-platform/emba-famulus
```

### 方式 B：手動 clone

```bash
git clone https://github.com/asgard-ai-platform/emba-famulus.git ~/.claude/plugins/emba-famulus

# 驗證安裝
/plugins
```

### 方式 C：搭配 Asgard skills 生態使用（推薦）

本 plugin 大量依賴 Asgard 上游 skills。建議同時安裝：

```bash
# Asgard skills（263 個商管／研究方法／資料分析 skill）
git clone https://github.com/asgard-ai-platform/skills.git ~/.claude/plugins/asgard-skills
```

## 目錄結構

```
emba-famulus/
├── CLAUDE.md                       ← 專案背景、使用者輪廓、架構原則
├── README.md                       ← 本檔
├── TODO.md                         ← 開發進度追蹤
├── .claude-plugin/plugin.json      ← Claude Code manifest
├── .codex-plugin/plugin.json       ← OpenAI Codex manifest
│
├── skills/                         ← 本 repo 開發的 13 個 EMBA 專屬 skill
│   ├── biz-management-accounting/  ← ABC、差異分析、轉撥計價
│   ├── ops-leadership-styles/      ← 領導風格決策樹
│   ├── ops-org-behavior/           ← 組織行為工具箱
│   ├── ops-talent-strategy/        ← 9-box、繼任規劃
│   ├── biz-corporate-governance/   ← 三道防線、董事會委員會
│   ├── biz-net-zero-transition/    ← SBTi、碳盤查、TCFD
│   ├── biz-innovation-management/  ← Stage-Gate、3 Horizons
│   ├── ops-digital-transformation/ ← DX Playbook
│   ├── grad-habitual-domain/       ← 游伯龍習慣領域（台灣原生理論）
│   ├── biz-sme-management/         ← 中小企業、家族企業傳承
│   ├── biz-crm-strategy/           ← CRM 戰略整合
│   ├── biz-erm/                    ← COSO ERM、風險胃納
│   └── fin-m-and-a/                ← 併購交易整合 playbook
│
└── workflows/                      ← 作業場景組合 pipeline
    ├── case-study.md               ← 個案分析
    ├── industry-analysis.md        ← 期末產業分析報告
    ├── thesis-qual.md              ← 畢業論文（質性）
    ├── thesis-quant.md             ← 畢業論文（量化）
    ├── executive-pitch.md          ← 高管簡報
    └── esg-report.md               ← ESG / 永續報告書
```

## 13 個 EMBA 專屬 Skill

### P0 — 跨校共通核心

| Skill | 出處 | 解決問題 |
|---|---|---|
| [biz-management-accounting](skills/biz-management-accounting/) | 台大、陽交、成大 | 作業成本、差異分析、轉撥計價、責任中心會計 |
| [ops-leadership-styles](skills/ops-leadership-styles/) | 台大、政大、師大 | 情境式領導風格決策樹 |
| [ops-org-behavior](skills/ops-org-behavior/) | 陽交、清大、師大 | 三層 OB 診斷（動機／團隊／文化） |
| [ops-talent-strategy](skills/ops-talent-strategy/) | 政大、成大 | 9-box、繼任規劃、職能模型 |
| [biz-corporate-governance](skills/biz-corporate-governance/) | 多校必修 | 董事會組成、三道防線、獨董運作 |
| [biz-net-zero-transition](skills/biz-net-zero-transition/) | 陽交、政大 | SBTi、範疇 1/2/3、TCFD 揭露 |
| [biz-innovation-management](skills/biz-innovation-management/) | 台大、中山 | Stage-Gate、開放式創新、3 Horizons |
| [ops-digital-transformation](skills/ops-digital-transformation/) | 多校 | DX 成熟度、Operating Model |

### P1 — 區辨性強

| Skill | 出處 | 解決問題 |
|---|---|---|
| [grad-habitual-domain](skills/grad-habitual-domain/) | 陽交招牌 | 習慣領域（游伯龍）— 台灣原生決策理論 |
| [biz-sme-management](skills/biz-sme-management/) | 成大 | 中小企業、家族企業、二代接班 |
| [biz-crm-strategy](skills/biz-crm-strategy/) | 師大 | CRM 六大戰略模組（超越單一 Journey） |
| [biz-erm](skills/biz-erm/) | 師大 | 企業風險管理框架 |
| [fin-m-and-a](skills/fin-m-and-a/) | 多校財金組 | 併購八大模組（戰略到 PMI） |

## 6 個作業場景 Workflow

| Workflow | 適用情境 | 組合的 skill |
|---|---|---|
| [case-study](workflows/case-study.md) | 個案分析（Harvard case） | `grad-case-study` → `meta-structured-problem` → 框架 skills → `hum-rhetoric` |
| [industry-analysis](workflows/industry-analysis.md) | 期末產業分析報告 | `biz-pestel` → `biz-porters-five-forces` → `biz-value-chain` → `fin-modeling` |
| [thesis-qual](workflows/thesis-qual.md) | 畢業論文（質性） | `grad-case-study` / `grad-grounded-theory` → `grad-systematic-review` |
| [thesis-quant](workflows/thesis-quant.md) | 畢業論文（量化） | `grad-survey-design` → `stat-hypothesis-testing` → `grad-sem` / `grad-pls-sem` |
| [executive-pitch](workflows/executive-pitch.md) | 高管簡報（CEO 論壇） | `ops-pitch-deck` → `hum-narrative` → `hum-rhetoric` |
| [esg-report](workflows/esg-report.md) | ESG / 永續報告書 | `grad-sustainability` → `biz-net-zero-transition` → `biz-corporate-governance` |

## 使用範例

### 範例 1：寫一份家族企業接班個案作業

```
1. 觸發 workflows/case-study.md 流程
2. 主要 skill：
   - skills/biz-sme-management/ （三圓模型、四層傳承）
   - skills/biz-corporate-governance/ （治理結構設計）
   - skills/fin-m-and-a/ （若涉股權重組）
3. 輸出：結構化分析報告 + 介入方案 + 風險清單
```

### 範例 2：為上市公司寫 ERM 導入建議書

```
1. 觸發 skills/biz-erm/ 為主 skill
2. 搭配：
   - skills/biz-corporate-governance/ （委員會設計）
   - 可選 Asgard algo-risk-altman-z、algo-risk-var（量化工具）
3. 輸出：COSO 原則對照 + 三道防線設計 + KRI 儀表板 + 18 個月路線圖
```

### 範例 3：畢業論文（質性、量化皆可）

```
1. 觸發 workflows/thesis-qual.md 或 thesis-quant.md
2. Asgard 為主（grad-case-study、grad-survey-design、stat-*）
3. 輸出：六個月節奏表 + 章節結構 + 信效度檢核 + 口試準備
```

## 架構原則

1. **優先重用 Asgard skills**（不重造輪子）
2. **只開發 Asgard 未覆蓋的 EMBA 特殊方法論**
3. **多代理相容**：避免 Claude Code 專屬語法
4. **作業場景驅動**：以「學員要交的作業類型」為單位
5. **學術誠信紅線**：只產出分析鷹架與框架，不代寫整篇可直接繳交的作業

## 學術誠信聲明

本 plugin **可以做**：
- 框架套用指引、結構化問題拆解
- 理論整理、文獻引用建議
- 分析鷹架、草稿骨架
- 作業自我檢查清單

本 plugin **不會做**：
- 代寫整篇可直接繳交的作業
- 代替學員訪談、實驗、問卷
- 代做最終判斷與決策
- 偽造資料或捏造引用

**學員最終版本必須親自撰寫並對內容負責。**

## 與 Asgard 生態的關係

- **上游**：[`asgard-ai-platform/skills`](https://github.com/asgard-ai-platform/skills)（263 個商管 / 研究 / 資料分析 skill）
- **模板**：[`asgard-ai-platform/skill-template`](https://github.com/asgard-ai-platform/skill-template)
- **本 plugin 補位**：13 個 EMBA 專屬 skill + 6 個作業場景 workflow

## 貢獻指南

歡迎貢獻以下類型：
- 新增 EMBA 專屬 skill（Asgard 未覆蓋者）
- 新增作業場景 workflow
- 補強既有 skill 的 examples / references
- 授課者偏好資料（依校別）
- Bug 回報與改善建議

### 新增 skill 前的檢查清單

1. 用 `ls ~/asgard-ai-platform/skills/` 確認 Asgard 未有類似 skill
2. 命名遵循 `{category}-{slug}`（Asgard 21 類 category）
3. 不使用保留字：`claude`、`anthropic`
4. 遵循 Asgard SKILL.md 結構（frontmatter + body + examples + references）
5. Body < 500 行 / < 5000 tokens
6. 必含：IRON LAW、Output Format、5–6 條 Gotchas
7. 繁體中文（台灣）

## 授權

MIT License — 詳見 [LICENSE](LICENSE)。

## 致謝

- **Asgard AI Platform**：提供上游 skill 生態與 plugin 模板
- **台灣八大 EMBA** 的教授與學員，你們的作業痛點是這個 plugin 的起點
- 游伯龍教授（1940–），陽交大終身講座教授，台灣原生管理理論的標竿

## 聯絡與問題回報

- GitHub Issues：[https://github.com/asgard-ai-platform/emba-famulus/issues](https://github.com/asgard-ai-platform/emba-famulus/issues)
- 作者：Chris Yuan（[@shyuan](https://github.com/shyuan)）
