# EMBA Famulus — 使用情境

> 給 Yggdrasil gallery 萃取的使用情境。每個情境對應一個作業場景 workflow。

### 1.1 個案分析（Harvard-style Case Analysis）

**情境：** 把冗長的策略／組織／行銷／財管個案拆解成可分析的問題，套用商管框架，產出結構化決策建議書。

**Prompt 範例：**

```
我有一份哈佛個案（內容如下），請用習慣領域與組織行為框架拆解決策盲點，並產出約 4000 字的結構化分析與建議。
```

**會用到的 skills：** `grad-habitual-domain`, `ops-org-behavior`, `biz-corporate-governance`

**注意：** 個案分析請以提供的個案內容為準，避免引用未提供的外部數據。

### 1.2 ESG／永續報告書

**情境：** 依 GRI／SASB／TCFD／IFRS S2 撰寫永續報告書，或永續課程的期末報告。

**Prompt 範例：**

```
幫我擬一份符合 TCFD 與 ISSB S2 的淨零轉型章節，含碳盤查範疇（Scope 1/2/3）與 SBTi 目標設定。
```

**會用到的 skills：** `biz-net-zero-transition`, `biz-erm`

**注意：** 碳費與法規以台灣現行規定為準，引用前請再確認當年度門檻。

### 1.3 高管簡報（Executive Pitch）

**情境：** 面對董事會／投資人／CEO 論壇的高管簡報與演講稿。

**Prompt 範例：**

```
把這份併購提案整理成 20 頁高管簡報大綱與演講稿，重點放在綜效與交易結構。
```

**會用到的 skills：** `fin-m-and-a`, `biz-innovation-management`

**注意：** 高管簡報重結論先行，避免學術式鋪陳。

### 1.4 期末產業分析報告

**情境：** 宏觀／中觀／微觀三層產業分析，加上公司定位與投資／策略建議。

**Prompt 範例：**

```
分析台灣 CRM／CDP 產業，做出市場結構、競爭定位與三年策略建議，並附財務模型假設。
```

**會用到的 skills：** `biz-crm-strategy`, `ops-digital-transformation`, `biz-sme-management`

**注意：** 定量假設請標註來源與推估方式。

### 1.5 畢業論文（質性研究）

**情境：** 個案研究／紮根理論／行動研究等質性方法的學位論文。

**Prompt 範例：**

```
我的論文用單一個案質性方法研究家族企業接班，幫我擬定研究架構與訪談大綱。
```

**會用到的 skills：** `biz-sme-management`, `ops-talent-strategy`, `biz-corporate-governance`

**注意：** 質性論文需交代資料蒐集方式與信效度處理。

### 1.6 畢業論文（量化研究）

**情境：** 問卷調查／SEM／多變量統計的量化學位論文。

**Prompt 範例：**

```
幫我把「領導風格對組織承諾」的量化論文設計成問卷構面與假設，並建議統計方法。
```

**會用到的 skills：** `ops-leadership-styles`, `ops-org-behavior`, `biz-management-accounting`

**注意：** 假設檢定請說明變項操作型定義與量表來源。
