---
name: "fin-m-and-a"
description: "M&A integration playbook covering eight modules: strategic rationale, target screening, due diligence (financial/legal/commercial), valuation with valuation bridge, synergy analysis, deal structuring (stock vs. asset, cash vs. equity, earn-out), SPA key clauses, and post-merger integration (PMI). Use for deal evaluation, valuation disputes, structure design, earn-out design, synergy breakdown, integration risk, or hostile takeover defense. Triggers: 『併購』『收購』『M&A』『盡職調查』『DD』『估值橋』『綜效』『earn-out』『換股比例』『PMI』『買殼』『借殼上市』『敵意併購』『交易結構』. For Taiwan EMBA 財管組 case studies and term reports (台大／政大／陽交). Complements Asgard `biz-dcf` and `fin-modeling` (valuation tools) plus `biz-corporate-governance` (governance layer) by providing the transaction-layer framework."
metadata:
  category: "WP-08 商學院—財務"
  tags: ["m-and-a", "mergers-acquisitions", "due-diligence", "valuation-bridge", "synergy", "earn-out", "pmi", "deal-structure", "emba"]
  audience: "台灣 EMBA 財管組學員、投行／PE 從業者、企業發展主管、創辦人／大股東"
---

# 併購交易整合 Playbook（M&A Integration Playbook）

## 定位

**為什麼 EMBA 要學 M&A Playbook**

M&A 是商學教育中最「跨領域」的主題：需要策略、財務、會計、稅務、法律、組織行為整合。多數 EMBA 學員（或其公司）在以下情境會遇到：
- 成長瓶頸需外部併購
- 被大型集團收購談判
- 投資 PE 基金後的併購決策
- 接班過程的家族股權重組
- IPO 前的策略性併購
- 國際擴張的跨境併購

**本 skill 的定位**：不是單純估值工具（DCF、可比公司法），而是**整個交易生命週期的導航**。估值只是其中一個模組。

**與相近 Asgard skill 的邊界**
- `biz-dcf` — 估值技術（DCF 建模）
- `fin-modeling` — 財務建模工具
- `biz-financial-ratios` — 比率分析
- `biz-value-chain` — 策略工具
- `biz-corporate-governance`（本 repo）— 治理結構
- **本 skill** — 併購交易的整體 playbook，協調上述工具並加入 DD、交易結構、PMI、合約層

## 何時使用

**觸發條件**
- 任何併購案從「要不要做」到「怎麼做」的決策
- 估值報告爭議調解
- 交易結構設計（含跨國）
- SPA（Share Purchase Agreement）條款談判準備
- PMI 規劃與執行
- 敵意收購防禦／公開收購應對
- EMBA 財管組個案、企業併購模擬

**不適用**
- 單純 DCF 估值 → Asgard `biz-dcf`
- 純財務建模 → Asgard `fin-modeling`
- 投資組合理論 → Asgard `grad-fama-french`
- 單一上市公司財報分析 → Asgard `data-financial-analysis`

## IRON LAW — M&A 三條鐵律

```
IRON LAW 1：70% 併購案毀滅股東價值
多個學術研究（KPMG、BCG、McKinsey 長期追蹤）顯示：
買方股東 1 年後累積異常報酬為負的比例約 60–70%。
不是「為什麼要併購」，而是「為什麼不做時勢會更好」。
沒通過這個挑戰的併購案應放棄。
```

```
IRON LAW 2：綜效（Synergy）永遠被高估
成本綜效（裁員、共採）達成率約 70%；
營收綜效（交叉銷售、整合市場）達成率 < 30%。
任何營收綜效在估值模型中都該打 0.3 係數。
「保守估計綜效」是所有併購報告的底線。
```

```
IRON LAW 3：整合（PMI）在 Day 1 之前就要規劃
60% 的併購失敗可追溯到 PMI 規劃不足。
交易結束才開始想怎麼整合 = 已經輸一半。
DD 階段必須產出初版 100-day plan，簽約前完成詳版。
```

## 八大交易模組

```
┌───────────────────────────────────────┐
│ 模組 8：整合（PMI）                    │
│   100-day plan、文化融合、人才保留    │
├───────────────────────────────────────┤
│ 模組 7：合約條款（SPA）                │
│   關鍵條款、Reps & Warranties         │
├───────────────────────────────────────┤
│ 模組 6：交易結構                       │
│   股權 vs. 資產、支付工具、稅務       │
├───────────────────────────────────────┤
│ 模組 5：綜效分析                       │
│   營收／成本／稅務／財務四類          │
├───────────────────────────────────────┤
│ 模組 4：估值與估值橋                   │
│   EV-to-Equity、三種方法交叉驗證       │
├───────────────────────────────────────┤
│ 模組 3：盡職調查（DD）                 │
│   財稅／法律／商業三大類              │
├───────────────────────────────────────┤
│ 模組 2：目標篩選                       │
│   策略契合度、市場地位、可併性        │
├───────────────────────────────────────┤
│ 模組 1：戰略動機                       │
│   Why M&A vs. Organic vs. JV          │
└───────────────────────────────────────┘
```

## 模組 1：戰略動機分析

### Why M&A（Buy vs. Build vs. Partner）

併購只是三種成長路徑之一，決策應回答：

| 路徑 | 優勢 | 劣勢 | 適用 |
|---|---|---|---|
| 自建（Build） | 文化一致、成本控制 | 時間長、風險高 | 核心業務深化 |
| 合資（Partner/JV） | 風險分擔、退出彈性 | 控制力弱、整合難 | 新市場試水 |
| 併購（Buy） | 時效、既有市場 | 估值溢價、整合複雜 | 規模快速擴張、取得關鍵資產 |

### 併購六大典型動機

1. **規模經濟（Scale）**：同業整合降成本
2. **範疇經濟（Scope）**：跨業務線交叉銷售
3. **市場進入（Market Access）**：跨國、跨區域
4. **關鍵資產（Critical Assets）**：技術、品牌、通路、人才
5. **垂直整合（Vertical）**：供應鏈上下游
6. **財務套利（Financial）**：低估、稅務、資本結構

### 動機紅旗

- **純粹 CEO ego**：大老闆想成為大老闆
- **追隨潮流**：同業併購，我也要
- **隱藏問題**：核心業務衰退，靠併購掩蓋
- **會計操縱**：靠併購美化 EPS

## 模組 2：目標篩選

### 策略契合度檢核

```
目標公司
  ↓ 初篩 (> 100 家)
產業契合、規模適配、地理可控
  ↓ 中篩 (10–20 家)
財務健康、成長性、競爭地位
  ↓ 深篩 (3–5 家)
文化相容、管理層品質、可併性
  ↓ 正式接觸 (1–2 家)
詳細分析、投資邏輯書
```

### 可併性（Acquirability）評估

- 股權結構：是否有單一控制股東？
- 管理層態度：友善或敵對？
- 法規障礙：反壟斷、外資限制？
- 勞資關係：工會強弱、退休金負債？
- 競業禁止：是否有技術出口管制？

### 進入談判前必答四問

1. 這個目標的內在價值（Standalone Value）？
2. 我們能創造的綜效價值（Synergy Value）？
3. 我們願意支付的最高價（Walk-away Price）？
4. 失敗的替代方案（BATNA）？

## 模組 3：盡職調查（Due Diligence）

### 三大類 DD

**財務與稅務 DD（Financial & Tax DD）**
- 收入品質（一次性 vs. 經常性）
- EBITDA 調整項（正常化）
- 營運資金分析
- 稅務暴露（遞延、爭議、跨境）
- 會計政策可接受性

**法律 DD（Legal DD）**
- 公司組織文件（章程、股東協議）
- 重大合約（客戶、供應商、授權）
- 訴訟與潛在訴訟
- 智慧財產權
- 勞動關係（工會、退休金、員工訴訟）
- 環安衛合規
- 反壟斷、個資、反貪腐合規

**商業與營運 DD（Commercial & Operational DD）**
- 市場地位、競爭分析
- 客戶集中度、關係深度
- 供應鏈穩定性
- IT 系統與資安
- 管理團隊能力
- 企業文化

### DD 常見紅旗

- **收入品質**：過去 12 個月大額一次性收入
- **營運資金**：應收帳款天數異常變動
- **EBITDA 調整**：「一次性」項目占比 > 10%
- **稅務**：跨境移轉定價、未解決爭議
- **訴訟**：未揭露的勞動爭議、合約違約
- **合約**：Change of Control 條款可能終止
- **客戶**：前三大客戶佔 > 50%

### DD 產出文件
- DD 報告（按類別）
- 紅旗清單與 Deal Breaker 識別
- EBITDA 正常化表
- 估值調整建議
- SPA 條款建議

## 模組 4：估值與估值橋

### 三種估值方法交叉驗證

**1. 內在價值法（Intrinsic）**
- DCF（折現現金流，詳 Asgard `biz-dcf`）
- WACC 計算謹慎
- 終值佔 EV 比例需合理（通常 60–75%）

**2. 相對估值法（Relative）**
- 可比公司交易倍數（EV/EBITDA, P/E, P/S）
- 可比併購交易倍數（Precedent Transactions）
- 產業與規模匹配是關鍵

**3. 過去交易法（Transaction）**
- 目標公司過往交易
- 股權轉讓、ESOP 行使、增資價格
- 控制權溢價調整（一般 20–40%）

### Enterprise Value（EV）到 Equity Value 的橋

```
Enterprise Value (EV, 企業價值)
  − 淨負債（Net Debt = 總負債 − 現金）
  − 少數股東權益（Minority Interest）
  + 非控制性權益（有益部分）
  − 退休金負債（未提撥部分）
  − 訴訟或有負債（機率加權後）
  = Equity Value（股權價值）
```

### 估值橋（Valuation Bridge）— EMBA 最常考

**用途**：解釋為何「市場估值」與「交易估值」不同

```
Standalone Value（獨立經營價值）
  + 控制權溢價（Control Premium）
  + 綜效分享（Synergy Sharing，通常買方拿多數）
  − DD 調整（發現瑕疵折減）
  − 營運資金調整
  − 退休金、訴訟、稅務調整
  = Transaction Value（交易對價）
```

### 估值陷阱

- **Terminal Value 過大**：> 80% EV 幾乎都是幻覺
- **Growth Rate 不合理**：永續成長 > GDP 成長不合理
- **WACC 選擇**：忽略特定風險
- **Control Premium 雙重計算**：已含在可比交易倍數中，再加一次
- **綜效全算給買方**：賣方談判時會要求分享

## 模組 5：綜效分析

### 四類綜效

**1. 營收綜效（Revenue Synergy）**
- 交叉銷售
- 新市場進入
- 定價力提升
- **達成率：< 30%，估值需折現重**

**2. 成本綜效（Cost Synergy）**
- 人員精簡（重複職能）
- 採購規模化
- 製造整合
- IT 與後勤整合
- **達成率：60–70%，但需實施成本**

**3. 稅務綜效（Tax Synergy）**
- 虧損抵減（NOL Utilization）
- 借款結構優化（Interest Tax Shield）
- 跨境稅務規劃
- **需專業稅務顧問確認**

**4. 財務綜效（Financial Synergy）**
- 資本成本降低（大公司 WACC 較低）
- 多元化降風險
- **學術上有爭議，市場常打折**

### 綜效評估公式

```
合併後價值 = Target Standalone + Acquirer Standalone + Total Synergy − Implementation Cost

買方支付溢價 ≤ 綜效現值的 50%（理論上）
實務：買方常支付 60–70% 給賣方（競購壓力）
```

### 綜效時程

| 類型 | 通常實現時程 |
|---|---|
| 成本綜效（人力） | 6–12 個月 |
| 成本綜效（採購） | 12–18 個月 |
| 成本綜效（製造） | 18–36 個月 |
| 營收綜效（快速） | 12–24 個月 |
| 營收綜效（交叉銷售） | 24–36 個月 |
| 營收綜效（新市場） | 36–60 個月 |

### 綜效實現率（Synergy Realization Rate）

**行業平均**：公開承諾綜效的達成率約 55–70%
**EMBA 報告建議**：先估毛綜效，再乘以 60–70% 係數

## 模組 6：交易結構設計

### 股權交易 vs. 資產交易

| 維度 | 股權 Stock Purchase | 資產 Asset Purchase |
|---|---|---|
| 法律主體 | 買下整家公司 | 買下特定資產 |
| 既有負債 | 全部承繼 | 選擇性承繼 |
| 既有合約 | 自動承繼（含重大不利條款） | 需重新簽訂或 assignment |
| 稅務 | 目標公司成本基礎不變 | 可重新估價、折舊攤提 |
| 結構複雜度 | 低 | 高（資產清單） |
| 員工 | 自動轉移 | 需重新聘僱 |
| 適用 | 完整業務收購 | 特定資產、出清部門 |

### 支付工具組合

**現金（Cash）**
- 賣方確定性高
- 買方現金壓力
- 稅務：賣方即課稅

**換股（Stock）**
- 賣方共擔風險
- 買方免動現金
- 稅務：部分可遞延
- 股價波動風險

**混合（Cash + Stock）**
- 最常見
- 比例依雙方議價而定

**遞延工具**
- 賣方票據（Seller's Note）
- Earn-out（參考下節）
- 盈餘保留（Escrow / Holdback）

### Earn-out 設計

**定義**：部分對價繫於目標公司未來績效

**結構要素**
- 期間（通常 2–3 年）
- 指標（EBITDA、Revenue、Milestone）
- 計算公式與門檻
- 上限（Cap）與下限（Floor）
- 爭議解決機制

**Earn-out 陷阱**
- 會計操縱（賣方追短期）
- 整合衝突（賣方希望獨立運作）
- 指標失真（綜效如何分攤）
- 訴訟高發（40% earn-out 有爭議）

**適用情境**
- 買賣雙方估值差距大
- 關鍵創辦人需留任
- 新事業或新產品估值不確定

### 稅務結構（台灣常見）

**併購法相關**
- 併購法（2002 年，多次修訂）提供稅務優惠
- 合併、收購、分割可享股東課稅遞延
- 虧損抵減限制
- 需配合經濟部核准

**跨境併購**
- 台灣控股公司 vs. 境外控股
- 稅務條約運用
- 資金路徑設計
- 需配合會計師跨境架構

## 模組 7：合約關鍵條款（SPA）

### SPA 核心章節

1. **交易標的定義**（Purchase Subject）
2. **對價（Consideration）**：金額、支付方式、時程
3. **交易完成條件（Conditions Precedent）**：主管機關、第三方同意
4. **陳述與保證（Representations & Warranties, R&W）**
5. **特別保證（Specific Indemnities）**：針對 DD 發現
6. **賠償機制（Indemnification）**：上限、時效、起算
7. **限制條款**：競業禁止、挖角
8. **爭議解決**：仲裁或訴訟
9. **終止條款**

### R&W（陳述與保證）的重要性

**典型 R&W 類別**
- 公司組織文件真實
- 財務報表公允
- 無未揭露負債
- 無重大訴訟
- 智財權狀態
- 重大合約狀態
- 稅務申報完整
- 勞動合規
- 環安衛合規
- 資安事件揭露

**R&W Insurance**
- 近年熱門：買方以保險取代賣方賠償
- 降低買賣雙方摩擦
- 保費通常 交易金額的 2–4%

### 賠償機制核心設計

**Basket（門檻）**
- 單一索賠最低金額
- 累積索賠最低金額
- Tipping basket vs. Deductible basket

**Cap（上限）**
- 一般上限（通常交易金額 10–25%）
- 特定上限（稅務、環安衛可能更高或無上限）

**Survival Period（時效）**
- 一般 R&W：18–24 個月
- 稅務 R&W：法定時效內
- 基本 R&W（Title, Authority）：無時效

## 模組 8：整合（PMI, Post-Merger Integration）

### Day 1 / Day 100 / 365 框架

**Day 1（交易完成日）**
- 關鍵溝通（員工、客戶、供應商、媒體）
- 組織架構正式生效
- IT 系統最低限度接軌
- 文化融合第一步

**Day 100**
- 完整組織整合
- 關鍵人才保留方案確定
- 主要系統初步整合
- 第一波成本綜效啟動

**Day 365**
- 完整營運整合
- 文化融合檢視
- 綜效達成率檢討
- 策略調整

### PMI 七大支柱

1. **治理結構**：整合辦公室（IMO, Integration Management Office）
2. **組織設計**：架構、職能、彙報線
3. **人才保留**：Key People 留任獎勵、離職管理
4. **文化融合**：不是「誰併誰」而是「新組織」
5. **流程與系統**：ERP、CRM、HR 系統整合
6. **客戶與品牌**：對外溝通一致性
7. **綜效追蹤**：KPI 儀表板、季度檢視

### PMI 失敗模式

- **文化忽視**：只做結構整合，忽略文化
- **關鍵人才流失**：併購後 12 個月流失率常 > 30%
- **整合速度過快**：破壞目標公司的獨特價值
- **整合速度過慢**：綜效延遲、組織不確定
- **溝通失誤**：員工、客戶、媒體訊息不一致
- **IMO 無權**：整合辦公室無決策權，變成協調會議

## Output Format

```markdown
# M&A 交易分析：{案件名稱／買方 vs. 賣方}

## 一、戰略動機
- Why M&A（相對於 Build / JV）
- 六大動機對應
- 動機紅旗檢核

## 二、目標評估
- 策略契合度
- 可併性（Acquirability）
- 四個關鍵問題回答

## 三、DD 發現
- 財稅發現（紅旗與調整）
- 法律發現
- 商業／營運發現
- Deal Breaker 識別

## 四、估值分析
- 三種方法交叉驗證
- EV to Equity 橋
- Valuation Bridge（Standalone → Transaction）
- 敏感度分析

## 五、綜效拆解
- 四類綜效各估算（保守、基本、樂觀）
- 實現率與時程
- 實施成本

## 六、交易結構建議
- 股權 vs. 資產
- 支付工具組合
- Earn-out（若適用）
- 稅務考量

## 七、SPA 關鍵條款
- R&W 重點
- 賠償機制（Basket / Cap / Survival）
- 特別保證
- 競業禁止

## 八、PMI 規劃
- Day 1 / Day 100 / 365 重點
- 關鍵人才
- 文化融合
- 綜效追蹤儀表板

## 九、風險與限制
- 執行風險
- 整合風險
- 法遵風險
- 分析資料侷限
```

## Examples

### 正確應用
**情境**：台灣上市電子公司（買方）擬併購一家東南亞製造廠（賣方，家族經營、年營收 30 億）。

**分析**：
- 戰略：規模 + 地理擴張（避開中國關稅），Organic 時間成本 3–5 年
- 目標評估：賣方家族願意退場，但要求部分留任，可併性高
- DD 紅旗：EBITDA 正常化後下修 15%、環安衛有潛在爭議、主要客戶合約含 CoC 條款
- 估值：EV/EBITDA 法（8x 調整後 EBITDA）、DCF（WACC 10.5%、TV 70% 偏高警示）、中值 NT$ 24 億
- 綜效：成本綜效 2 億／年（15–24 月實現）、營收綜效打 0.3 係數僅 0.3 億／年
- 交易結構：80% 現金 + 20% 換股、Earn-out 2 年（EBITDA 達標）、保留創辦人 3 年
- SPA：R&W 標準包、環安衛特別保證、Cap 交易金額 15%、R&W 保險配套
- PMI：Day 1 保留賣方 CEO、Day 100 整合採購與財務、文化並行 24 個月不強制同化

**正確之處**：八大模組完整、綜效保守、PMI 有時程，符合 IRON LAW。

### 錯誤應用
- 只做 DCF 估值報告 → 只用一種方法，忽略相對估值與交易法
- 把承諾綜效 100% 放入估值 → 違反 IRON LAW 2
- 忽略 PMI 規劃 → 違反 IRON LAW 3
- 交易結構「全現金」不考量稅務 → 賣方稅負可能殺死交易
- R&W 陽春（無特別保證）→ DD 發現未在合約反映
- Earn-out 指標設為「淨利」→ 易被會計操縱爭議

## Gotchas

- **估值中位數不等於交易價**：中位數只是參考，競購壓力會推高，DD 發現會壓低，買方應預設 walk-away price
- **綜效對外公開需謹慎**：上市買方對外承諾的綜效金額將被市場追蹤，保守 + 附條件說明
- **台灣併購法優惠需配合主管機關**：經濟部、公平會、金管會的審查時程可能 3–6 個月，影響交易時程
- **跨境併購的外匯管制**：台灣對外投資金額有報備／核准門檻，中國投資有經濟部投審會規範
- **Earn-out 爭議率高**：約 40% 有爭議，合約條款需極明確、會計方法需預先約定
- **Key Man 條款雙面刃**：綁定創辦人留任可能形成人質條款，若創辦人不快樂，整合會失敗
- **PMI 文化融合沒有捷徑**：強制快速同化 = 人才流失、慢條斯理 = 綜效落空，必須雙軌並行
- **敵意收購的政治成本**：台灣市場對敵意收購接受度低，需考量政府、媒體、員工、客戶多方反應

## References

- 三大 DD 完整清單與紅旗辨識 → `references/dd-checklist.md`
- 估值橋詳解與交叉驗證 → `references/valuation-bridge.md`
- 綜效拆解與實現時程 → `references/synergy-analysis.md`
- SPA 條款模板（R&W、Indemnification、Earn-out）→ `references/spa-key-clauses.md`
- PMI 100-day plan 模板 → `references/pmi-playbook.md`
- 台灣併購法規與稅務框架 → `references/tw-ma-regulation.md`
- EMBA 併購課程脈絡與學術誠信提醒 → `references/emba-ma-courses.md`
- 延伸：Asgard `biz-dcf`（DCF 估值）、`fin-modeling`（財務建模）、`biz-financial-ratios`、`grad-fama-french`（CAPM 延伸）、`law-contract`（合約法）、本 repo `biz-corporate-governance`（治理）、`biz-sme-management`（家族企業）
