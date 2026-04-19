# Workflow：期末產業分析報告

> **適用場景**：EMBA 策略、創業管理、產業專題課程期末作業，或畢業學員對自身產業的深度分析。
> **典型字數**：6,000–10,000 字 + 財務模型附件。
> **產出**：完整產業分析 + 公司定位 + 投資／策略建議。

## 快速導讀

**這個 workflow 組合的主軸**
1. **宏觀 + 中觀 + 微觀三層分析**
2. **定量 + 定性並重**
3. **以投資人／策略規劃者視角收斂**

**核心原則**
- 產業分析不是「教科書式複述」，要有自己的視角
- 數據佐證優於主觀判斷
- 報告要能回答：「這個產業值不值得進入？」

---

## Pipeline

```
Step 1：產業定義與範圍
  skill：Asgard `meta-structured-problem`
  產出：產業邊界、價值鏈切點、分析主角

Step 2：宏觀環境（PESTEL）
  skill：Asgard `biz-pestel`
  產出：政治、經濟、社會、技術、法規、環境 6 大面向盤點

Step 3：產業結構分析
  skill：
    - Asgard `biz-porters-five-forces`（五力分析）
    - Asgard `biz-value-chain`（價值鏈）
    - 視產業：Asgard `grad-disruptive-innovation`（破壞性創新）
    - 視產業：Asgard `grad-platform-economics`（平台經濟）
  產出：結構性吸引力、競爭動態、獲利池

Step 4：產業財務分析
  skill：
    - Asgard `biz-financial-ratios`（比率分析）
    - Asgard `biz-dupont`（ROE 拆解）
    - Asgard `data-financial-analysis`（資料分析）
    - Asgard `fin-modeling`（建模）
  產出：同業財務對標、產業獲利性趨勢

Step 5：趨勢與未來情境
  skill：
    - 本 repo `ops-digital-transformation`（數位轉型）
    - 本 repo `biz-net-zero-transition`（淨零轉型）
    - Asgard `grad-sustainability`
    - 視產業：本 repo `biz-innovation-management`
  產出：3–5 年產業趨勢、主要轉折點

Step 6：特定公司／投資標的分析
  skill：
    - Asgard `biz-swot`（SWOT）
    - Asgard `grad-strat-rbv`（資源基礎）
    - 本 repo `fin-m-and-a`（若涉併購估值）
    - Asgard `biz-dcf`（若做估值）
  產出：標的公司競爭地位、財務估值

Step 7：策略建議
  skill：
    - Asgard `biz-ansoff`、`biz-blue-ocean`
    - 本 repo `biz-corporate-governance`（治理建議）
    - 本 repo `biz-erm`（風險管理）
  產出：具體策略方案與路線圖

Step 8：報告包裝
  skill：
    - Asgard `ops-pitch-deck`（若要簡報）
    - Asgard `hum-rhetoric`（說服寫作）
  產出：完整報告
```

## 標準產出結構

```markdown
# {產業名稱}產業分析與策略建議（年份）

## 執行摘要
- 產業吸引力評級
- 主要驅動因素
- 推薦策略方向
- 關鍵風險

## 第一章 產業定義與範圍
- 產業邊界
- 主要區段
- 價值鏈結構
- 分析時間軸

## 第二章 宏觀環境分析（PESTEL）
- 政治與地緣政治
- 經濟週期與景氣
- 社會與人口
- 技術與創新
- 法規與政策
- 環境與永續

## 第三章 產業結構分析
### 3.1 五力分析
### 3.2 價值鏈與獲利池
### 3.3 產業生命週期
### 3.4 關鍵成功因素（KSF）

## 第四章 競爭格局
- 主要玩家 Profile
- 市佔率與動態
- 策略群組
- 國際比較

## 第五章 產業財務分析
- 營收、毛利率、淨利率趨勢
- ROE、ROIC 對標
- 資本結構
- 產業估值水準（PE、EV/EBITDA）

## 第六章 趨勢與未來情境
- 主要驅動變數
- 3–5 年情境（保守／基本／樂觀）
- 關鍵轉折事件
- 贏家輸家預測

## 第七章 重點公司分析
- 3–5 家代表性公司
- 競爭定位
- 財務體質
- 策略動向

## 第八章 策略建議
- 對產業玩家：3–4 條策略選項
- 對投資人：進入時機與標的
- 對政策制定者（可選）：監理建議

## 第九章 風險與侷限
- 產業特定風險
- 分析侷限（資料、時間）

## 附件
- 財務模型
- 資料來源清單
- 訪談紀錄（若有）
```

## 資料來源建議

**公開資料**
- 證交所、櫃買中心、公開資訊觀測站
- 產業公會、經濟部、工業局
- 主計總處、央行、財政部
- 國際機構：IMF、OECD、World Bank

**產業研究**
- 資策會、工研院
- 各大投顧（凱基、元大、富邦、群益）的產業報告
- 國際投行（Goldman、Morgan Stanley、Credit Suisse）
- 顧問公司（Gartner、IDC、Forrester）

**學術資料**
- 學校圖書館資料庫（EBSCO、ProQuest、JSTOR）
- Google Scholar
- SSRN（私募金融論文）

**實務資料**
- 公司年報、永續報告、法說會
- 專業媒體（科技報橘、科技新報、Reuters）
- LinkedIn 產業人脈

## Gotchas

- **範圍陷阱**：產業邊界設太廣會變成「萬物皆可分析」
- **資料過時**：2 年前的產業報告可能已被 AI 浪潮洗牌
- **競爭公司數量**：分析 3–5 家是甜蜜點，10 家以上變成目錄
- **財務比對基期**：疫情期（2020–2022）數據特殊，需特殊處理
- **投資建議的法遵**：若報告將公開，不得構成具體投資勸誘
- **引用國際報告時注意在地差異**：McKinsey 報告常以歐美數據為主
- **口試重點**：通常問「如果關鍵假設錯了呢？」—報告末需自我挑戰

## 相關 Workflow

- 個案分析 → `workflows/case-study.md`
- 畢業論文 → `workflows/thesis-qual.md` / `thesis-quant.md`
- 高管簡報 → `workflows/executive-pitch.md`
- ESG 報告 → `workflows/esg-report.md`
