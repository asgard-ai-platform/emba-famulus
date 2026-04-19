# Workflow：畢業論文（量化研究）

> **適用場景**：EMBA 畢業論文選擇量化方法（問卷調查、實證分析、實驗、檔案資料）。
> **典型字數**：20,000–35,000 字（含統計分析附件）。
> **時程**：Proposal 通過到論文口試通常 6–12 個月。
> **產出**：完整學位論文，含統計分析、假設檢定、管理意涵。

## 快速導讀

**EMBA 量化論文常見類型**
1. **問卷調查 + SEM**：最常見（態度、行為、組織變項）
2. **問卷 + 多變量統計**：迴歸、變異數分析
3. **檔案資料分析**：二手資料、公開資料庫、公司內部資料
4. **事件研究**：股價對事件的反應
5. **準實驗設計**：有對照組的介入研究

**核心原則**
- 量化的重點是「假設清晰、方法嚴謹、資料充足」
- EMBA 學員優勢是「能拿到真實組織資料」，要善用
- 避開「純問卷堆砌」的膚淺研究

---

## Pipeline

```
Phase 0：主題發想與模型建立（1–2 月）
  活動：
    - 確認可獲取資料來源（問卷？內部資料？公開資料？）
    - 文獻初探 → 理論模型建構
    - 研究假設形成
  skill：
    - Asgard `meta-structured-problem`
    - Asgard `grad-systematic-review`

Phase 1：Proposal 撰寫（2–3 月）
  活動：
    - 文獻回顧系統化
    - 研究模型（架構圖）
    - 假設明文
    - 變項操作性定義
    - 資料蒐集計畫
  skill：
    - Asgard `grad-systematic-review`
    - Asgard `grad-meta-analysis`（若為元分析）
    - Asgard `grad-survey-design`（問卷法）
    - Asgard `stat-hypothesis-testing`
  產出：5,000–8,000 字 Proposal

Phase 2：量表與工具開發（1–2 月）
  活動：
    - 既有量表篩選 vs. 自編
    - 前測（20–30 份）
    - 信度分析、效度驗證
    - 正式量表定稿
  skill：
    - Asgard `grad-survey-design`
    - Asgard `stat-eda`（探索性分析）

Phase 3：資料蒐集（2–4 月）
  活動：
    - 問卷發放（LINE / Google Form / 紙本）
    - 回收率追蹤
    - 資料清理
  技巧：
    - 至少 200–300 份（SEM 需 300+）
    - 多管道確保代表性
    - 匿名機制

Phase 4：統計分析（2–3 月）
  skill：
    - Asgard `stat-eda`（探索性分析）
    - Asgard `stat-hypothesis-testing`（假設檢定）
    - Asgard `stat-causal-inference`（因果推論）
    - Asgard `stat-ab-testing`（若為準實驗）
    - Asgard `grad-did`（Difference-in-Differences）
    - Asgard `grad-event-study`（事件研究）
    - Asgard `grad-hlm`（階層線性模型）
    - Asgard `grad-panel-data`（面板資料）
    - Asgard `grad-pls-sem`（PLS-SEM）
    - Asgard `grad-sem`（結構方程模型）
  工具：SPSS、AMOS、SmartPLS、R、Python、Stata

Phase 5：結果詮釋與寫作（2–3 月）
  活動：
    - 假設檢定結論
    - 理論意涵
    - 管理意涵
    - 研究限制
  skill：
    - Asgard `hum-rhetoric`

Phase 6：口試準備（1 月）
  skill：
    - Asgard `ops-pitch-deck`
```

## 標準論文結構（EMBA 量化）

```markdown
第一章 緒論
  1.1 研究背景與動機
  1.2 研究目的與問題
  1.3 研究流程

第二章 文獻回顧
  2.1 核心變項概念
  2.2 變項間關聯理論
  2.3 調節／中介變項（如有）
  2.4 研究假設

第三章 研究方法
  3.1 研究架構圖
  3.2 研究假設總表
  3.3 變項操作型定義
  3.4 研究工具（量表來源、信效度）
  3.5 研究對象與抽樣
  3.6 資料分析方法

第四章 資料分析與結果
  4.1 樣本結構
  4.2 描述性統計
  4.3 信效度分析
  4.4 假設檢定結果
  4.5 補充分析

第五章 討論
  5.1 研究發現摘要
  5.2 與既有文獻對話
  5.3 理論貢獻
  5.4 管理意涵

第六章 結論與建議
  6.1 結論
  6.2 研究限制
  6.3 未來研究建議

參考文獻
附錄
  附錄 A 正式問卷
  附錄 B 量表來源與信度
  附錄 C 統計分析詳細報表
```

## 方法選擇決策樹

```
Q1：資料來源是？

- 問卷（新蒐集）
  → 一次橫斷 → 迴歸 / SEM / PLS-SEM
  → 多時間點 → 重複測量 / HLM

- 公司內部資料
  → 有前後對照 → DID / 準實驗
  → 純橫斷 → 迴歸

- 公開檔案資料
  → 股價反應 → Event Study
  → 財務績效 → 面板資料 (Panel Data)
  → 多國多期 → HLM / Panel

- 實驗（線上 A/B）
  → A/B Testing（Asgard `stat-ab-testing`）
```

## 統計工具選擇

| 統計方法 | 樣本需求 | 主流工具 |
|---|---|---|
| 描述性 + T-test / ANOVA | 100+ | SPSS、Excel |
| 多元迴歸 | 150+ | SPSS、Stata、R |
| SEM（共變異 Based） | 300+ | AMOS、LISREL |
| PLS-SEM | 100+（更彈性） | SmartPLS、WarpPLS |
| HLM（階層模型） | 視層數 | HLM 軟體、R (lme4) |
| 面板資料 | 期數 × 公司 | Stata、R |
| Event Study | 需股價日資料 | Stata、R、Python |
| DID | 前後 + 對照組 | Stata、R |

## 量表使用策略

**策略 1：既有量表直接用**
- 優點：信效度已驗證、省時
- 缺點：可能不完全貼合情境
- 程序：引用原作、依原設計、跨語言需翻譯 + 回譯

**策略 2：既有量表改編**
- 情境化用詞調整
- 需重新驗證信效度
- 常用：Cronbach's α > 0.7

**策略 3：自編量表**
- 時間成本高
- 需完整驗證程序（專家效度 → 前測 → 正式測試）
- EMBA 論文不建議（除非是理論缺口）

**EMBA 常用量表來源**
- Journal of Applied Psychology
- Academy of Management Journal
- Journal of Marketing
- 台灣學者本地化量表（期刊：管理學報、人力資源管理學報）

## 樣本與回收率

**樣本數最低要求（EMBA 論文）**
- 簡單迴歸：變項數 × 10–20
- SEM：300+ 為底線、500+ 較安全
- HLM：每層至少 30 群
- Panel Data：期數 × 公司數乘積足夠

**提高回收率技巧**
- 主管背書（老闆發信）
- 抽獎誘因
- 多通路（Email + LINE + 紙本）
- 簡短（< 15 分鐘）
- 匿名保證

**回收率標準**
- 線上：30–50% 算良好
- 紙本：60–80% 算良好
- < 30% 需補樣本或辯護

## 信度與效度

**信度（Reliability）**
- Cronbach's α > 0.7（可接受）、> 0.8（良好）、> 0.9（優秀）
- Composite Reliability（CR）> 0.7

**效度（Validity）**
- **內容效度**：專家 3+ 位審查、前測調整
- **建構效度**：
  - 收斂效度（Convergent）：AVE > 0.5、CR > 0.7
  - 區別效度（Discriminant）：AVE 平方根 > 構念間相關
- **效標關聯效度**：與外部指標的相關
- **預測效度**：對未來結果的預測力

## 學術誠信與倫理

**資料蒐集**
- IRB 審查（如校規要求）
- 受試者同意書
- 匿名保證書面化
- 資料保存年限（通常 3–5 年）

**統計操作**
- ❌ 資料挖礦（先看結果再定假設）→ 嚴重違規
- ❌ 刪除「不符合」的樣本（無正當理由）
- ❌ 操作 p 值（p-hacking）
- ✅ 預註冊假設（Pre-registration）
- ✅ 公開資料與程式碼（Open Science）

**AI 工具使用**
- ✅ 文獻搜尋、結構鷹架、統計報表解釋輔助
- ✅ R / Python 程式碼撰寫輔助
- ❌ 代做假設檢定判讀
- ❌ 偽造資料
- 多校要求揭露 AI 使用

## Gotchas

- **模型太複雜**：EMBA 論文建議 5–8 個變項、假設 6–10 條，超出常無法深入
- **變項定義不清**：「員工投入度」有 5 種不同量表、必須指定一種
- **調節變項誤用**：調節效果很難顯著，不要輕易承諾
- **共同方法變異**（CMV）：自陳式問卷一次填完→做 Harman's single-factor test
- **樣本結構失衡**：某產業／職位過多 → 補樣本或分組分析
- **極端值（Outliers）**：需明確處理策略、不可隨意刪除
- **英文期刊迷信**：EMBA 論文可以中文期刊為主、但要引用至少 10 篇英文
- **指導教授統計背景**：選擇你的方法導師會的方法（別逼老師學新方法）

## 時間節奏建議

**六個月密集型**
| 月份 | 主要任務 |
|---|---|
| M1 | Proposal、文獻、模型 |
| M2 | 量表選擇、前測、IRB |
| M3–M4 | 正式資料蒐集 |
| M5 | 統計分析 |
| M6 | 寫作、口試 |

**九個月標準型**（建議多數 EMBA 學員）
- 擴大資料蒐集窗口
- 統計分析更從容
- 口試前修訂時間更多

## 相關 Workflow

- 質性論文 → `workflows/thesis-qual.md`
- 個案分析（非論文）→ `workflows/case-study.md`
- 產業分析 → `workflows/industry-analysis.md`
