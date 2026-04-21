# EMBA Famulus Landing Page — Design Spec

**Date**: 2026-04-21
**Status**: Design approved, pending implementation plan
**Owner**: Chris Yuan（@shyuan）
**Context**: 為 `asgard-ai-platform/emba-famulus` 打造的 GitHub Pages 單頁介紹網站

---

## 1. 目標與非目標

### 主目標

讀者（台灣 EMBA 在職學員）在 **8 分鐘** 內完成三件事：

1. 理解 Famulus 是什麼、跟他什麼作業有關
2. 看完一個真實 case-study workflow 的完整走讀
3. 拿到安裝指令（複製到 terminal 即可）

### 次目標

- 建立 Asgard 品牌家族定位
- 作為作者個人品牌 / LinkedIn / pitch 場合的可用資產

### 非目標（Non-goals）

- ❌ 不是完整文件站（不複製 README / SKILL.md 內容）
- ❌ 不做登入 / 帳號 / 後端
- ❌ 不碰 blog / 更新日誌
- ❌ 不做英文版本（本次 spec 限定繁體中文；英文版日後另開 spec）
- ❌ 不加 GA4 / Plausible / 任何分析打點

### 成功判準

上線後定性觀察：
- EMBA 學員看完能自己 copy-paste 安裝指令並跑 workflow
- 可作為品牌資產放在 pitch / LinkedIn
- GitHub repo 自然成長（非量化 KPI）

---

## 2. 受眾與調性

### 主要受眾

台灣八大 EMBA（台大、政大、陽明交大、清大、成大、中山、台師大、中央）在職學員：

- **時間有限**：通勤、課間、深夜趕作業
- **業界判斷力強**：產業洞察 > 學術寫作
- **學術寫作生疏**：literature review / APA / 假設檢定 不熟
- **大老闆身分**：預設一定自尊、不吃「工具人」式的賣萌語氣

### Persona（Pixar #13 鮮明立場）

> 48 歲製造業 CEO，台大 EMBA 二年級。凌晨兩點剛讀完一份 25 頁英文 case，明早十點要交分析報告，完全不知道從哪段下筆。業界打滾 20 年，能一眼看穿案例裡的生意盤算，但不會用 RBV 寫給教授看。

### 調性 Matrix（混搭 D）

| 段落位置 | 調性 | 例子 |
|---|---|---|
| Hero 主標 | **自信現代高管（B）** | 「三十分鐘，從空白到可以交的作業初稿。」 |
| Hero 副段 | **同理共鳴（C）** | 「凌晨兩點，你剛讀完一份 25 頁英文 case⋯」 |
| Hero 收尾 | **正式老派顧問（A）** | 「Famulus 是為台灣八大 EMBA 在職學員設計的 agent plugin⋯」 |
| 其他段落 | 偏 A 與 B 混用；C 只用在情緒鉤子處 | |

### 禁忌

- ❌ 過度學術化堆砌（CLAUDE.md 反模式 #4）
- ❌ 科技新創 hip 語彙（「賦能」「破圈」「All in」）
- ❌ 代寫承諾（學術誠信紅線）
- ❌ 賣萌 / 表情符號（違背企業級口吻）

---

## 3. Information Architecture（捲軸順序）

依 Pixar #4（故事骨架）**Once → Every day → Until one day → Because of that → Until finally**：

```
1. HERO                         [Once / Until one day]
   ├─ 導覽列（Logo｜Workflows｜Skills｜Install｜GitHub）
   ├─ 主標 B：三十分鐘，從空白到可以交的作業初稿
   ├─ 副段 C：凌晨兩點痛點鉤子
   ├─ 收尾 A：誰做、給誰、為什麼
   └─ 雙 CTA：[立即安裝]（金）[看 Case-Study 走讀]（藍）

2. 三個關鍵數字
   13 個 EMBA 專屬 skill · 6 個作業 workflow · 200+ 上游

3. 痛點 → 解法對照            [Every day → Until one day]
   左：四個痛點 | 右：對應 skill 解法

4. CASE-STUDY 主示範           [Because of that（核心）]
   TSMC 2023 德國 Dresden 設廠（ESMC 合資）為案例
   五步驟時間軸：0-5 / 5-10 / 10-20 / 20-27 / 27-30 分

5. 其他 5 個 WORKFLOW（Tab）
   產業分析｜畢業質性｜畢業量化｜高管簡報｜ESG 報告

6. 13 個 SKILL（卡片 + 過濾）
   過濾條：全部 / 策略 / 財會 / 組織 / 創新 / 永續 / 研究方法

7. ASGARD 生態定位
   SVG 示意圖（手刻）：Asgard ← Famulus ← 你

8. 安裝 / CTA                  [Until finally]
   三 tab：Marketplace｜git clone｜搭配 Asgard 同裝

9. 學術誠信紅線
   做什麼 / 不做什麼 兩欄對照

10. FOOTER
   GitHub · 作者 · MIT License · 致謝（游伯龍）· Asgard 小 logo
```

### 視覺節奏（深淺交替）

| Section | 底色 |
|---|---|
| 1. Hero | navy-900 |
| 2. 數字 | cream |
| 3. 痛點對照 | navy-800 |
| 4. Case-Study 走讀 | navy-900（最深） |
| 5. Workflow tab | cream |
| 6. Skill 卡片 | paper |
| 7. Asgard 生態 | navy-900 |
| 8. 安裝 | cream |
| 9. 學術誠信 | navy-800 |
| 10. Footer | navy-950 |

深淺比約 5:5，避免單調。

---

## 4. 文案定稿（Hero）

```
[導覽列]
▲ ASGARD · FAMULUS        Workflows  Skills  Install  [★ GitHub →]

[主標 — 金色強調「三十分鐘」「可以交」]
三十分鐘，
從空白到可以交的作業初稿。

[副段 — 宋體、斜體細節]
凌晨兩點，你剛讀完一份 25 頁英文 case。
明早十點要交一份分析報告，而你完全不知道該從哪一段下筆。

[收尾 — 「Asgard 生態」「200+ 商管 skill」Asgard 藍著色]
Famulus 是為台灣八大 EMBA 在職學員設計的 agent plugin。
依託 Asgard 生態的 200+ 商管 skill，搭配 13 個針對 EMBA 作業
情境開發的專屬模組——把你腦中的業界判斷，翻譯成老師想看的
學術結構。

[金色主 CTA]  立即安裝 →         [藍色次 CTA]  看 Case-Study 走讀 ↓

[小字註腳]  MIT License  ·  繁體中文（台灣）  ·  Part of the Asgard AI Platform
```

---

## 5. 文案內容規格（各區段）

### Section 2 — 三個關鍵數字

```
13          6           200+
EMBA 專屬    作業場景     上游 Asgard
Skill       Workflow    商管 Skill
```

每個數字下方一行說明（14px 灰字）。數字 = 金、單位文字 = ink、說明 = navy-300。

### Section 3 — 痛點 → 解法對照（4 組）

| 痛點（左） | 解法（右） |
|---|---|
| 老師要你用 RBV 看策略，你只記得 Porter 的五力 | `biz-rbv`、`grad-strat-rbv` 兩個 skill 直接給你框架 + 批判要點 |
| 要寫家族企業接班個案，但手邊沒有合適理論支援 | `biz-sme-management` 專 skill，三圓模型 + 台灣在地案例 |
| 畢業論文要做質性研究，不知道 coding 怎麼開始 | `grad-grounded-theory` + `grad-case-study` workflow 全程陪跑 |
| 交出去的報告被老師說「沒有結構、像雜感」 | `meta-structured-problem` 用 MECE + 金字塔原則重整 |

右欄 skill 名稱用等寬字體 + Asgard 藍。

### Section 4 — Case-Study 走讀（五步驟時間軸）

**案例**：TSMC 2023 年 8 月宣布與 Bosch / Infineon / NXP 合資於德國 Dresden 設立 ESMC 晶圓廠（2027 年投產）。

**每步驟 UI 結構**：

```
[時間軸點・分鐘範圍]  [步驟標題]
  └─ 展開內容（3 欄）：
     學員打的指令  │  Plugin 做了什麼  │  用到的 skill
```

**五步驟內容**：

1. **0–5 分｜讀 case，抓關鍵事實**
   - 學員指令：「我有一份 TSMC 德國 Dresden 合資案的 case，幫我抓關鍵事實」
   - Plugin 回應：列出 8 個關鍵事實（合資比例、投資金額、地緣背景、客戶結構、歐盟補貼⋯）
   - Skills：`grad-case-study`、`meta-structured-problem`

2. **5–10 分｜結構化拆解分析軸線**
   - 學員指令：「用 MECE 切出我該分析的幾個軸」
   - Plugin 回應：建議 4 個互斥軸：戰略動機 / 營運挑戰 / 制度因素 / 財務結構
   - Skills：`meta-structured-problem`、`biz-corporate-governance`

3. **10–20 分｜套框架（三個框架並行）**
   - 學員指令：「用 Porter Five Forces、VRIO、制度理論分別拆一次」
   - Plugin 回應：三個框架的並列分析、每個都給 3 個核心洞察
   - Skills：`biz-porters-five-forces`、`grad-strat-rbv`、`grad-strat-institutional`

4. **20–27 分｜寫論點，組成三段論證**
   - 學員指令：「用金字塔原則幫我組成三段式論證：主張 → 支撐 → 反論處理」
   - Plugin 回應：主張一句、3 個支撐論點各配一個框架證據、常見反論與回應
   - Skills：`meta-structured-problem`、`hum-rhetoric`

5. **27–30 分｜自我檢查，查漏**
   - 學員指令：「幫我用 Iron Law 檢查這份報告還缺什麼」
   - Plugin 回應：5 條檢查項（論點是否有反例、是否涵蓋對立觀點、數字是否標註來源⋯）
   - Skills：`hum-rhetoric`、`meta-structured-problem`

**走讀段落結尾**：一行 call-out「剩下 70% 的工夫——深化洞察、加進你的業界判斷、打磨文字——那是你的事，Famulus 不代替你走」。呼應學術誠信。

### Section 5 — 其他 5 個 workflow（Tab 切換）

每個 tab 一致結構：

```
情境一句話：「期末產業分析報告，14 天 40 頁」

Pipeline 視覺（水平箭頭鏈）：
biz-pestel → biz-porters-five-forces → biz-value-chain → fin-modeling → ops-pitch-deck

輸出物清單（checkbox 樣式）：
✓ 產業外部環境分析（PEST）
✓ 競爭結構圖
✓ 價值鏈定位
✓ 財務模型試算
✓ 高管簡報雛形
```

五個 tab 的情境語：
- **產業分析**：期末產業分析報告，14 天 40 頁
- **畢業質性**：質性論文，六個月產出 4–5 萬字
- **畢業量化**：量化論文，問卷回收到 SEM 一條龍
- **高管簡報**：董事會 / CEO 論壇 10 分鐘簡報
- **ESG 報告**：上市公司永續報告書章節草稿

### Section 6 — 13 個 Skill 卡片

每張卡結構：

```
┌──────────────────────────┐
│ biz-sme-management  [slug Asgard 藍等寬]
│                          │
│ 中小企業與家族企業治理   │  [宋體大字]
│ 資源受限決策、二代接班   │  [小字 navy-300]
│                          │
│ 出處：成大 · 師大        │  [金色 tag、小字]
└──────────────────────────┘
```

**13 張卡資料**（data-category 用於過濾）：

| slug | 中文標題 | 一句描述 | 出處 | category |
|---|---|---|---|---|
| `biz-management-accounting` | 管理會計 | ABC 作業成本、差異分析、轉撥計價 | 台大、陽交、成大 | 財會 |
| `ops-leadership-styles` | 領導風格決策樹 | 轉型／交易／僕人／情境／真誠領導選用 | 台大、政大、師大 | 組織 |
| `ops-org-behavior` | 組織行為工具箱 | 動機／團隊／文化三層診斷 | 陽交、清大、師大 | 組織 |
| `ops-talent-strategy` | 策略性人才管理 | 9-box、繼任規劃、職能模型 | 政大、成大 | 組織 |
| `biz-corporate-governance` | 公司治理 | 董事會、三道防線、獨董運作 | 多校必修 | 策略 |
| `biz-net-zero-transition` | 淨零轉型 | SBTi、範疇 1/2/3、TCFD 揭露 | 陽交、政大 | 永續 |
| `biz-innovation-management` | 創新管理 | Stage-Gate、3 Horizons、開放式創新 | 台大、中山 | 創新 |
| `ops-digital-transformation` | 數位轉型 Playbook | 成熟度、治理、Operating Model | 多校 | 創新 |
| `grad-habitual-domain` | 習慣領域（游伯龍） | 突破思維定勢的七層決策 | 陽交招牌 | 研究方法 |
| `biz-sme-management` | 中小企業與家族企業 | 三圓模型、二代接班 | 成大 | 策略 |
| `biz-crm-strategy` | CRM 戰略 | 客戶分層、Journey、CDP 整合 | 師大 | 策略 |
| `biz-erm` | 企業風險管理 | COSO ERM、風險胃納、熱圖 | 師大 | 財會 |
| `fin-m-and-a` | 併購與整合 | 盡職調查、估值橋、earn-out | 多校財金 | 財會 |

過濾類別：`全部 / 策略 / 財會 / 組織 / 創新 / 永續 / 研究方法`

### Section 7 — Asgard 生態定位

**一句話**：「你不是一個人。Famulus 背後是 Asgard 的 200+ 商管 skill。」

**SVG 圖**（手刻，~150 行 SVG）：三層堆疊

```
┌─────────────────────────────────────┐
│  ASGARD AI PLATFORM                  │  ← navy-800 → asgard-700 漸變
│  200+ 商管 · 研究 · 數據 skill      │
└──────────────┬──────────────────────┘
               ▲  [金線 + "上游依賴"]
┌──────────────┴──────────────────────┐
│  EMBA FAMULUS（本 repo）             │  ← navy-700 底、金邊
│  13 skill · 6 workflow · 為作業補位 │
└──────────────┬──────────────────────┘
               ▲  [金線 + "用"]
         ┌─────┴──────┐
         │   你 👤    │                  ← 金色小人、navy-900
         │  EMBA 學員 │
         └────────────┘
```

手機版改為純文字垂直堆疊（不用 SVG）。

### Section 8 — 安裝（三 tab）

```
Tab 1（預設、金色高亮）：Plugin Marketplace
  一行說明：最推薦，一行安裝。
  [代碼塊] /plugin install asgard-ai-platform/emba-famulus

Tab 2：手動 git clone
  一行說明：你想看原始檔、或離線使用。
  [代碼塊] git clone https://github.com/asgard-ai-platform/emba-famulus.git \
           ~/.claude/plugins/emba-famulus

Tab 3：搭配 Asgard skills 同裝（進階）
  一行說明：同時裝上游 Asgard 200+ skill，完整生態。
  [代碼塊] git clone https://github.com/asgard-ai-platform/emba-famulus.git \
           ~/.claude/plugins/emba-famulus
           git clone https://github.com/asgard-ai-platform/skills.git \
           ~/.claude/plugins/asgard-skills
```

每個代碼塊右上角 Copy 按鈕，點擊 → 金色 toast「已複製 ✓」1.5 秒。

### Section 9 — 學術誠信紅線

兩欄對照：

```
做什麼                              不做什麼
───────                             ───────
✓ 框架套用指引                      ✗ 代寫整篇可直接繳交作業
✓ 結構化問題拆解                    ✗ 代替訪談、實驗、問卷
✓ 文獻引用建議                      ✗ 代做最終判斷與決策
✓ 分析鷹架、草稿骨架                ✗ 偽造資料或捏造引用

           學員最終版本必須親自撰寫並對內容負責。
```

底部置中一句：「**學員最終版本必須親自撰寫並對內容負責。**」大字強調，金色。

### Footer

```
Built by Chris Yuan · MIT License · 繁體中文（台灣）
GitHub: asgard-ai-platform/emba-famulus
Part of the ASGARD AI PLATFORM           [▲ 小 logo]

致謝：游伯龍教授（1932–2022）
     習慣領域理論創建者、台灣原生管理理論的標竿
```

---

## 6. 視覺設計系統

### 色彩 Token

```css
/* 主色系 —— 海軍藍 */
--navy-950: #060f1a;
--navy-900: #0b1a2b;
--navy-800: #13263d;
--navy-700: #1d3555;
--navy-300: #a8b3c2;
--navy-100: #d8dee6;

/* 金色系 —— 菁英 */
--gold-600: #b08840;
--gold-500: #c9a961;  /* 主 CTA、強調、數字 */
--gold-400: #dcc189;
--gold-100: #f3e9d2;

/* Asgard 藍 —— 血統 */
--asgard-700: #1d4fbf;
--asgard-600: #2563eb;  /* logo 原色 */
--asgard-500: #3b82f6;  /* tag、代碼 */
--asgard-400: #60a5fa;  /* 強調文字 */

/* 中性 */
--cream: #f7f3eb;
--paper: #faf8f3;
--ink: #0a0a0a;
--line: #223048;
```

**配色原則**
- 金 = 行動（CTA + 數字 + 主體強調）
- Asgard 藍 = 血統（連結 + 技術語彙 + 代碼）
- 兩色不混用於同一元素

### 字體 Token

```css
--font-display: "Noto Serif TC", "Songti TC", "PMingLiU", serif;
--font-body: "Noto Sans TC", -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: "JetBrains Mono", "SF Mono", "Consolas", monospace;
```

**尺寸階梯**（行動基準 / 桌面基準）：

| Token | 行動 | 桌面 | 字重 | 行高 | 用途 |
|---|---|---|---|---|---|
| text-hero | 2.25rem | 4rem | 600 | 1.25 | Hero 主標 |
| text-h1 | 1.875rem | 3rem | 600 | 1.3 | Section 標題 |
| text-h2 | 1.5rem | 2.25rem | 600 | 1.35 | 子段標 |
| text-h3 | 1.25rem | 1.5rem | 700 | 1.4 | 卡片標題 |
| text-lead | 1.125rem | 1.25rem | 400 | 1.7 | 副段、引言 |
| text-body | 1rem | 1rem | 400 | 1.75 | 本文 |
| text-caption | 0.875rem | 0.875rem | 500 | 1.5 | 英文小標、註腳 |

### 間距與節奏

- 容器 max-width：1152px（Hero 可達 1280px）
- 水平留白：px-6（手機）/ px-10（平板）/ px-16（桌面）
- 區塊 padding：py-16（一般）/ py-24（重點）/ py-32（Hero 與走讀）

### 圓角與陰影

```css
--radius-sm: 2px;     /* 按鈕、tag */
--radius-none: 0;     /* 卡片、代碼塊 —— 菁英偏好直角 */
--shadow-exec: 0 1px 2px rgba(0,0,0,0.04), 0 12px 32px rgba(11,26,43,0.08);
```

### 響應式斷點

```
mobile:  < 640px     單欄、tab 下拉、時間軸左貼齊
tablet:  640-1024px  兩欄、tab 可水平滑動
desktop: > 1024px    滿版、時間軸置中
```

**響應式關鍵決策**
- Section 3 痛點對照：桌面兩欄 → 手機上下堆疊
- Section 4 時間軸：桌面左軸線 + 右卡片 → 手機純堆疊
- Section 6 skill 卡片：桌面 3 欄 → 平板 2 欄 → 手機 1 欄
- Section 7 Asgard 生態 SVG：手機改純文字垂直版（不等比縮放）

---

## 7. 互動行為

### 導覽列

- 捲動時 sticky top、背景由透明漸變為 `navy-900/90` + backdrop-blur
- 點 anchor → 平滑捲動（`scroll-behavior: smooth`）
- 桌面水平；手機漢堡選單全螢幕遮罩
- 右側用 Shields.io badge CDN 顯示 GitHub star 數

### Section 4 走讀時間軸

- 預設第 1 步展開，其他收合
- 點某步 → 平滑展開（300ms ease-out、`max-height` + `opacity`），同時收合其他
- 軸線點狀態：當前 = 金色實心；已讀 = 金色空心；未讀 = 灰色空心

### Section 5 Workflow Tab

- 預設「產業分析」tab
- 點 tab → 淡入切換 200ms、底部金色 underline 滑動
- 手機版改下拉 select

### Section 6 Skill 卡片過濾

- 預設顯示全部
- 點類別按鈕 → 不符的卡片 `opacity: 0.15 + grayscale + pointer-events: none`
- 不隱藏（保留視覺全貌）
- 純 vanilla JS，用 `data-category` 屬性查找

### Section 8 Copy 按鈕

- `navigator.clipboard.writeText()`
- 點擊 → 按鈕變金色 + toast「已複製 ✓」1.5 秒
- Fallback：`document.execCommand('copy')`

### 全站滾動動畫

- IntersectionObserver 監聽每區塊進入視區
- 進入 → `fade-in + translateY(20px → 0)`（首次觸發一次）
- `prefers-reduced-motion: reduce` 時全部關閉

---

## 8. 檔案結構

```
docs/                              ← GitHub Pages 發佈來源（/docs folder 模式）
├── .nojekyll                      ← 關閉 Jekyll，純靜態原樣上架
├── index.html                     ← 單頁全部內容（~800 行含註解）
├── assets/
│   ├── logos/
│   │   ├── asgard-logo-color.svg  ← 實作時從 website/assets/logos/ 搬過來
│   │   └── asgard-icon.svg        ← 同上
│   ├── favicon.svg                ← 另做（三角 + F 字，navy 底金色）
│   └── og-image.png               ← 1200×630 社群分享圖（Hero 截圖風）
├── css/
│   └── tokens.css                 ← CSS 變數、字體 @import、少量自訂
├── js/
│   ├── main.js                    ← 所有互動（~150 行）
│   └── case-study-data.js         ← TSMC 走讀五步驟資料
├── README.md                      ← 網站自身說明（給開發者）
└── superpowers/                   ← 設計文件（公開但無入口連結、MIT 可公開）
    └── specs/
        └── 2026-04-21-emba-famulus-landing-design.md
```

**分檔原則**
- `case-study-data.js` 獨立：換案例只改這個檔
- `tokens.css` 獨立：換色／字體集中改
- 整站目標 < 20 個檔案、< 500KB（扣掉字體 CDN）

**現有資產搬遷清單（實作時處理）**
- 目前 brainstorm 期間下載的 logos 在 `website/assets/logos/`（非 spec 目標路徑）
- 實作第一步：把 `website/assets/logos/*` 搬到 `docs/assets/logos/`，並刪除 `website/` 空目錄
- `website/` 目錄在本次專案中僅為 brainstorm 過渡產物，不保留

**關於 `docs/superpowers/` 共存**
- `docs/` 同時是 GitHub Pages 發佈源與 superpowers 設計文件存放處
- spec 檔會經 Pages 公開（URL 可達，但網站本身無連結指向）
- 這沒問題：repo 為 MIT 公開，spec 內容本來就在 git history 中；但 Pages 上的 raw markdown 無 rendering 是刻意行為
- `.nojekyll` 讓所有檔案原樣服務，避免 Jekyll 誤處理 `superpowers/specs/*.md`

---

## 9. 部署

### 方式：`docs/` folder

- GitHub Pages Settings → Source: `main` branch → `/docs` folder
- push 到 main 即部署，無 CI、無 Actions
- 部署後 URL：`https://asgard-ai-platform.github.io/emba-famulus/`

### 自訂域名（本次不做）

若日後要綁 `famulus.asgard-ai.com`，僅需在 `docs/CNAME` 放域名。

### Tailwind 策略

- **初版**：Tailwind CDN（`https://cdn.tailwindcss.com`）+ inline config for custom colors/fonts
- 實作時評估是否切換 pre-built CSS（若 CDN 載入延遲明顯）

### 字體

- Google Fonts CDN：
  - `Noto Serif TC`（300, 600, 700）
  - `Noto Sans TC`（400, 500, 700）
  - `JetBrains Mono`（400, 700）
- 加 `font-display: swap` 避免 FOIT

---

## 10. 可及性與效能

- **對比比**：gold-500 on navy-900 = 7.8:1（WCAG AA 達標，AAA 亦達標）
- **鍵盤導覽**：所有互動元件 `tabindex` 合理、Enter/Space 觸發
- **Alt text**：所有 logo、SVG 有 `<title>` 描述
- **LCP 目標**：< 2.5s（字體 swap、圖片 lazy、JS defer）
- **JS 大小**：< 10KB（原生，無 framework）
- **總 payload**：< 500KB（不含字體 CDN）
- **prefers-reduced-motion**：全動畫尊重

---

## 11. 留給實作階段（不在 spec 定）

以下交給 writing-plans 與實作時決定：
- Tailwind CDN 版本號 / 鏡像選擇
- 是否引入 Alpine.js（預期不需要）
- favicon.svg 與 og-image.png 的具體視覺
- Shields.io badge 的 URL 參數微調
- 實際代碼風格（命名、縮排、註解語言）

---

## 12. Pixar 法則對應表（敘事檢核用）

| Pixar 法則 | 套用位置 |
|---|---|
| #2（關心觀眾要什麼） | 全站聚焦「作業能不能交出去」，不談 tech architecture |
| #4（故事骨架） | Section 1–8 照 Once→Every day→Until one day→Because of that→Until finally 走 |
| #6（對立挑戰） | Section 3 痛點對照、Section 4 走讀每步有具體阻力 |
| #13（鮮明立場） | Persona「48 歲製造業 CEO、凌晨兩點趕作業」 |
| #14（核心信念） | 「把業界判斷翻譯成學術結構」這句是 Famulus 的 why |
| #16（賭注） | 副段的「明早十點要交」是隱性賭注；Section 4 走讀最後一句明示 |
| #22（最精簡核心） | 一句話 pitch：「EMBA 作業的結構化鷹架」 |

---

## 13. 開放問題 / 風險

- **真實案例授權風險**：TSMC Dresden 是公開案例，無授權問題；但若日後換成需要授權的 Harvard case，需改規避
- **Tailwind CDN 可用性**：若 CDN 掛掉首屏樣式消失；上線 1 個月後評估改預構建
- **字體載入延遲**：Google Fonts 對台灣 CDN 延遲可能 500ms+，實作時可改自託管 Noto Serif TC 子集
- **GitHub 使用者數 badge**：若 repo 還沒有 star，badge 會顯示 0，看起來空；可考慮初版隱藏此 badge

---

## 附錄 A：Iron Law

**本網站上線前必須達成以下條件，否則不部署：**

1. ✅ 繁體中文所有段落人工校對一次（無簡體混入）
2. ✅ Hero 主標、副段、收尾三段順讀起來「眼球 → 心 → 腦」節奏通
3. ✅ Section 4 走讀的 5 步驟有真實可複製的學員指令
4. ✅ 三個安裝 tab 的指令 copy 後貼到 terminal 能跑
5. ✅ 手機 Safari 上 Hero 可見、CTA 可點、時間軸可展開
6. ✅ WCAG AA 對比比全數達標
7. ✅ 學術誠信段落完整、未被視覺弱化

## 附錄 B：非目標再確認（避免範圍爬升）

- ❌ 不做 dark/light mode 切換（全站 dark 偏 navy 固定）
- ❌ 不做多語言切換（僅繁中）
- ❌ 不嵌 YouTube / demo 影片（純文字與 SVG）
- ❌ 不做會員訂閱 / newsletter
- ❌ 不做 GitHub discussions / 即時 issue 嵌入
- ❌ 不做 A/B 測試版本

---

**END OF SPEC**
