# Workflow：個案分析（Harvard-style Case Analysis）

> **適用場景**：EMBA 策略、組織、行銷、財管課程指定的個案作業（通常 Harvard、Ivey、IMD、台大個案中心等）。
> **典型字數**：3,500–6,500 字。
> **產出**：結構化個案分析報告，含問題定義、框架套用、決策建議、風險評估。

## 快速導讀

**這個 workflow 組合三類 skill**
1. **問題結構化**：把冗長個案文本拆成可分析的問題
2. **框架套用**：用 1–3 個商管框架解析
3. **決策包裝**：把分析包裝成可繳交的建議書

**核心原則**
- 個案作業評分 70% 看「論證過程」、30% 看「結論是否正確」
- 框架不是越多越好，2–3 個交織使用即可
- 扣回授課者偏好（是否有指定框架）

---

## Pipeline

```
Step 1：個案閱讀與問題定義
  skill：Asgard `meta-structured-problem`、`grad-case-study`
  產出：3–5 條核心問題、利害關係人清單、時間線

Step 2：情境分析（External）
  skill（視個案）：
    - Asgard `biz-pestel`（宏觀）
    - Asgard `biz-porters-five-forces`（產業）
    - Asgard `biz-swot`（整體）
  產出：外部環境盤點

Step 3：公司分析（Internal）
  skill（視個案）：
    - Asgard `biz-value-chain`（營運）
    - Asgard `grad-strat-rbv`（資源基礎）
    - Asgard `biz-stp` + `biz-4p-7p`（行銷）
    - Asgard `biz-financial-ratios` + `biz-dupont`（財務）
    - 本 repo `ops-org-behavior`（組織）
  產出：內部優劣勢盤點

Step 4：策略選項
  skill：
    - Asgard `biz-ansoff`（擴張矩陣）
    - Asgard `biz-blue-ocean`（差異化）
    - 視個案：本 repo `biz-innovation-management`、`biz-corporate-governance` 等
  產出：3–4 個選項 + 評估矩陣

Step 5：決策與實施
  skill：
    - 本 repo `fin-m-and-a`（併購情境）
    - 本 repo `ops-digital-transformation`（轉型情境）
    - Asgard `meta-structured-problem`
  產出：推薦方案 + 實施路線圖 + 風險

Step 6：表達包裝
  skill：
    - Asgard `hum-rhetoric`（說服寫作）
    - Asgard `hum-narrative`（敘事結構）
    - Asgard `ops-pitch-deck`（若需簡報）
  產出：完整報告 / 簡報
```

## 標準產出結構

```markdown
# {個案名稱} 分析報告

## 執行摘要
（1 頁內說完：問題、推薦方案、關鍵風險）

## 一、情境背景
- 公司基本資料、產業位置
- 時空脈絡（個案發生的年代、市場環境）

## 二、核心問題定義
- 表面議題（個案主角直接面對的）
- 結構性問題（背後真正挑戰）
- 利害關係人與其訴求

## 三、外部分析
- PESTEL / Five Forces / 產業結構

## 四、內部分析
- Value Chain / RBV / 財務體質 / 組織能力

## 五、策略選項
- 選項 A、B、C（含現狀不變選項）
- 評估準則（策略契合、財務可行、風險、時間）
- 比較矩陣

## 六、推薦方案
- 為何選 X（而非 Y、Z）
- 實施路線圖（短中長期）
- 關鍵里程碑與 KPI

## 七、風險與應變
- 主要風險 3–5 項
- 應變計畫
- 分析侷限

## 八、參考框架與文獻
```

## 常見授課者偏好（概略）

| 學校／取向 | 偏好框架 | 加分項 |
|---|---|---|
| 台大策略組 | Porter、RBV、Dynamic Capability | 文獻引用完整 |
| 政大企策 | STP、Porter、Ansoff、Blue Ocean | 本地化案例補強 |
| 陽交 | HD（習慣領域）、決策理論 | 對應本 repo `grad-habitual-domain` |
| 中山 | 個案教學法、關係行銷 | 情境描述細膩 |
| 成大 | 中小企業、家族企業 | 對應本 repo `biz-sme-management` |
| 師大 | 組織行為、人資 | 對應本 repo `ops-org-behavior`、`ops-talent-strategy` |

## Gotchas

- **不要堆砌框架**：2 個做得好 > 5 個做得淺
- **扣回個案時代背景**：1995 年的個案不能套 2024 年視角
- **利害關係人不能只有 CEO**：員工、供應商、社區、監理機關都是
- **推薦方案要具體**：「加強行銷」不是方案，「12 個月內建 CRM 系統」才是
- **學術誠信紅線**：可產出分析鷹架，最終敘事與判斷必須學員親筆
- **口試問題預練**：教授常問「如果你的假設錯了呢？」，報告末段先自我挑戰

## 相關 Workflow

- 期末產業分析報告 → `workflows/industry-analysis.md`
- 畢業論文 → `workflows/thesis-qual.md` / `thesis-quant.md`
- 高管簡報 → `workflows/executive-pitch.md`
