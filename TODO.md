# EMBA Famulus — Skill 開發 TODO

> 依 CLAUDE.md「本 repo 需開發的新 skill」章節展開。每項獨立、可單輪完成。
> 每完成一項請從本檔刪除或打勾，並 `git commit`，訊息格式：`feat(skills): add {slug}`。

## 每輪 skill 標準流程

每完成一個 skill 都要走完這 6 步：

1. **查上游重複性**：`ls ~/workspace/github.com/asgard-ai-platform/skills/ | grep -i <關鍵字>`，確認不與 Asgard 既有 skill 重疊
2. **建目錄骨架**：`skills/{slug}/{SKILL.md, examples/, references/}`
3. **撰寫 SKILL.md**：
   - Frontmatter：`name`、`description`（< 1024 字元、含 trigger phrases）、其他 metadata
   - Body < 500 行 / < 5000 tokens
   - 必含段落：**IRON LAW**、**Output Format**、**5–6 條 Gotchas**
   - 繁體中文（台灣）、企業級口吻
4. **補 examples/**：至少 1 個台灣 EMBA 個案情境的範例輸出
5. **補 references/**：理論來源、文獻、授課者偏好筆記（重內容 offload 於此）
6. **自我檢查 + commit**：
   - 呼叫 `/skill-review` 檢查 anti-patterns
   - `git add skills/{slug}/ && git commit -m "feat(skills): add {slug}"`

## 共同守則（所有 skill）

- **避免 Claude Code 專屬語法**（`/slash-command`、Claude-only tools）→ 確保 OpenCode、Codex、Gemini CLI 相容
- **學術誠信紅線**：產出框架／大綱／問題清單，**禁止**生成可直接繳交的整篇作業
- **命名**：`{category}-{slug}`，不加 `skill-` 前綴
- **保留字禁用**：`claude`、`anthropic`

---

## P0 — 高度推薦（跨校共通、Asgard 無覆蓋）

### [ ] 1. `biz-management-accounting`
- **出處**：台大、陽交、成大（EMBA 核心必修）
- **核心內容**：ABC 作業成本、差異分析、轉撥計價、責任中心會計
- **特別注意**：補 `biz-financial-ratios`、`data-financial-analysis` 未覆蓋的「管理會計」層
- **範例情境**：製造業轉撥計價爭議、責任中心績效評核

### [ ] 2. `ops-leadership-styles`
- **出處**：台大、政大、師大
- **核心內容**：轉型／交易／僕人／情境／真誠領導之情境選用決策樹
- **關鍵產出**：決策樹（情境 → 建議領導風格）
- **範例情境**：接班交棒、組織變革、危機領導

### [ ] 3. `ops-org-behavior`
- **出處**：陽交、清大、師大
- **核心內容**：動機理論（Maslow/Herzberg/SDT）、Tuckman 團隊發展、Schein 組織文化
- **注意與 Asgard `grad-sdt` 的邊界**：本 skill 為「綜合 OB 工具箱」，`grad-sdt` 為單一理論深挖
- **範例情境**：新任主管診斷團隊、文化改造

### [ ] 4. `ops-talent-strategy`
- **出處**：政大、成大
- **核心內容**：9-box、繼任規劃、職能模型、人才盤點
- **補位**：策略人資層，與 `algo-hr-*`（演算工具）互補
- **範例情境**：關鍵職缺繼任、家族企業接班人才池

### [ ] 5. `biz-corporate-governance`
- **出處**：多校必修
- **核心內容**：董事會組成、三道防線、審計／薪酬／提名委員會運作
- **與 Asgard 邊界**：Asgard `grad-governance` 偏學理，本 skill 偏實務 playbook
- **範例情境**：IPO 前治理結構設計、家族企業專業化

### [ ] 6. `biz-net-zero-transition`
- **出處**：陽交、政大
- **核心內容**：SBTi、範疇 1/2/3、ISO 14064 碳盤查、TCFD 揭露
- **台灣特殊性**：金管會永續揭露要求、碳費制度
- **範例情境**：上市公司減碳路徑、供應鏈碳盤查

### [ ] 7. `biz-innovation-management`
- **出處**：台大、中山
- **核心內容**：Stage-Gate、開放式創新、3 Horizons
- **與 Asgard 邊界**：`ux-lean-startup`、`grad-disruptive-innovation` 已存在，本 skill 聚焦「企業內創新治理」
- **範例情境**：成熟企業第二曲線、創新專案組合管理

### [ ] 8. `ops-digital-transformation`
- **出處**：多校
- **核心內容**：執行 playbook — 成熟度評估、轉型治理、Operating Model
- **與 Asgard 邊界**：`grad-digital-transformation` 偏學理，本 skill 偏執行
- **範例情境**：傳產 DX 藍圖、PMO 組建

---

## P1 — 獨特性強（具區辨價值）

### [ ] 9. `grad-habitual-domain`
- **出處**：陽交招牌課（游伯龍 P.L. Yu）
- **核心內容**：習慣領域理論、突破思維定勢的七層決策
- **為何值得**：**台灣原生理論**，國際文獻仍引用 → 陽交 EMBA 辨識度高
- **範例情境**：決策盲點突破、跨域整合思考

### [ ] 10. `biz-sme-management`
- **出處**：成大
- **核心內容**：資源受限決策、家族治理、二代接班
- **為何值得**：台灣產業結構剛需（98% 為中小企業）
- **範例情境**：家族股權規劃、二代職業化

### [ ] 11. `biz-crm-strategy`
- **出處**：師大
- **核心內容**：客戶分層、Journey Orchestration、CDP 整合
- **補位**：`biz-cac-ltv`（戰術）之上的戰略層
- **範例情境**：零售業會員體系、B2B 大客戶經營

### [ ] 12. `biz-erm`
- **出處**：師大
- **核心內容**：COSO ERM 框架、風險胃納、風險熱圖
- **補位**：`algo-risk-*`（工具）之上的框架層
- **範例情境**：上市公司 ERM 導入、風險治理結構

### [ ] 13. `fin-m-and-a`
- **出處**：隱含於財金組（多校財管選修）
- **核心內容**：盡職調查、估值橋、綜效分析、earn-out 設計
- **範例情境**：併購估值爭議、交易結構設計

---

## 附加產出（全部 skill 完成後）

### [ ] 14. `workflows/` 目錄

依 CLAUDE.md「作業場景 workflow」表格建立：

- `workflows/case-study.md`（個案分析 pipeline）
- `workflows/industry-analysis.md`（期末報告 pipeline）
- `workflows/thesis-qual.md`（畢業論文質性）
- `workflows/thesis-quant.md`（畢業論文量化）
- `workflows/executive-pitch.md`（高管簡報）
- `workflows/esg-report.md`（ESG 報告）

### [ ] 15. `plugin.json`

最小可用 manifest，能被 Claude Code / OpenCode 識別為 plugin。

### [ ] 16. `README.md`

面向使用者的入口文件（非 CLAUDE.md 的開發者視角）。

---

## 進度追蹤

- **總數**：16 項（13 skills + 3 支援檔案）
- **建議執行順序**：P0 → P1 → 附加產出
- **每項 commit 一次**，保持 git log 可審
