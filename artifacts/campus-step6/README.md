# 中國科大 Campus RoadMap Step 6 驗收紀錄

日期：2026-09-13。此為本機 production build + Windows Edge 瀏覽器驗收；不是正式網站部署或 App 真機驗收。

## 變更摘要

- 六關 RoadMap、新增 FIND YOUR PEOPLE 星球／Gamepad2 圖示；保留 Step 1–5 錨點，新增 #step-6、#completion。
- 手機、桌面六站定位，SVG 航線及 CSS shape 火箭路徑同步，保留 reduced-motion。
- 集中管理已提供的十個 active/enabled 社群，分類內陣列順序就是提供的 priority 順序；不使用候選標籤、會員數或熱度。
- 遊戲／興趣各五張卡；原生 button group + aria-pressed，以 Tab 移動、Enter／Space 切換。分類不是 tabs，不需要方向鍵 tabs 模式。
- 複製完整 @slug，成功才回報成功；拒絕或 Clipboard API 不存在時提供唯讀可選取輸入欄與「請長按複製」。複製不代表加入，也不展開完成區。
- Profile 加入社群與 AI Radar 選取標籤分開教學，三組自然語言範例與跨校／冷啟動提示。
- Step 5 主入口至 Step 6、次入口返回下載區。Step 6 可下載或前往完成區；完成區保留使用者自行展開與原感謝文案。
- 保留三張 Step 3／4／5 圖片、20px 圓角、放大聯名文字、簡約紫色火箭、現有商店連結；不恢復已移除入口。

## 原始碼及資料核對

官網起點：最新 origin/main 76e62af（76e62af Update CUTE campus roadmap completion copy and styling）。

App 只讀快照：stevenchien0726-del/vibelink main `41780e9c406c8510396cb50a0f4c6a20969b696a`。

- `components/message/ProfilePage.tsx:862` 使用 ProfileAtomicTagsSection，`:967` 開啟 AtomicCommunityPage。
- `components/atomicTags/ProfileAtomicTagsSection.tsx:14` 使用 mode="community" 與 onOpenTag。
- `components/atomicTags/AtomicTagsContent.tsx:107` 明確區分 insert → onSelectTag、community → onOpenTag；搜尋表單須提交。
- `pages/AIRadarPage.tsx:2305` 的 AtomicTagsPageOverlay 使用 mode="insert"、onSelectTag={insertSelectedAtomicTag}。
- `lib/atomicTags/atomicTagsText.ts:61` 包含「加入」「搜尋」「搜尋 Atomic Tags」；AtomicRecommendations.tsx 包含「推薦社群」「更多社群」。

十個社群的 active/enabled 狀態採用本次需求所附 2026-09-13 正式查核清單；未再次查詢 Supabase。本次無 App 功能、Supabase、membership、RLS、migration 或 SDK／金鑰變更。

已閱讀 AGENTS.md、node_modules/next/dist/docs/01-app/03-api-reference/01-directives/use-client.md。互動只放入必要的 client component，未增加資料讀寫。

## 驗收結果

| 項目 | 結果 |
| --- | --- |
| npm run lint | PASS，無錯誤／警告 |
| node node_modules/typescript/bin/tsc --noEmit | PASS |
| npm run build（Next.js 16.2.7） | PASS，14 個靜態頁產生完成 |
| tests/campus-roadmap.cjs | PASS：375、390、430、768、1440px |
| tests/campus-communities.cjs | PASS：同五種寬度，Edge 153.0.4234.32 |
| 六顆星球／六個 section | PASS，一一對應，六個直接 hash、重新整理、上一頁／下一頁 |
| Step 5 → Step 6 → #completion | PASS；下載入口回 #step-2，完成區不自動展開 |
| 三張既有操作圖片 | PASS，實際 decode、比例、alt、20px 圓角與位置檢查 |
| 十個社群 slug／順序／無重複 | PASS，遊戲五張、興趣五張 |
| Clipboard | PASS，全部標籤控制式成功／拒絕與 API 不存在測試；另外在全新 browser context 實測原生 API write/read 與 Enter 複製 |
| 鍵盤／焦點／目標尺寸 | PASS，Tab、Enter、Space、aria-pressed、focus-visible、44px 及點擊中心未遮擋 |
| 響應式與溢出 | PASS，手機單欄、1440px 雙欄；兩分類逐元素邊界及文件寬度检查 |
| 動畫 | PASS，標準動態火箭 offset-path 有效且 animation running；reduced-motion 無 animation |
| Console／pageerror | PASS，沒有錯誤或缺失 Icon |
| 匿名唯讀 | PASS，全新無登入 context；監控沒有 Supabase／AI provider 或非 GET／HEAD 請求 |
| 既有公開路由 | PASS，11 個路由 HTTP 200；正常 smooth scroll 與 reduced-motion 覆寫 |

環境備註：第一次 build 因沙箱網路無法下載既有 Google Fonts 失敗；允許建置網路後重新 build 完整通過。隔離 worktree 共用現有 node_modules junction，Next.js 提示多 lockfile 的 root 推斷警告，未影響建置或路由。本次沒有更改相依套件或正式設定來消除環境警告。

## 重跑

在隔離 worktree 執行：

```powershell
npm run lint
node node_modules/typescript/bin/tsc --noEmit
npm run build
npm run start -- --port 3106
```

另一個 shell（既有 Playwright runtime，不需更改專案相依）：

```powershell
$env:NODE_PATH='C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules'
$env:ROADMAP_BASE_URL='http://localhost:3106'
$env:ROADMAP_SCREENSHOTS=(Join-Path (Get-Location) 'artifacts/campus-step6')
node tests/campus-roadmap.cjs
node tests/campus-communities.cjs
```

## 變更檔案

- lib/campus-roadmap.ts：六關資料與校正的 App 操作文案。
- lib/campus-communities.ts：集中靜態社群資料。
- app/vibelink/_components/campus-roadmap.tsx：Step 6 教學、圖示、CTA、完成區錨點。
- app/vibelink/_components/campus-communities.tsx：分類與 Clipboard 互動。
- app/vibelink/_components/campus-roadmap.module.css：卡片、分類、手動複製及響應式樣式。
- app/vibelink/_components/interstellar-navigation.tsx：六站導航與 SVG 航線。
- app/vibelink/_components/interstellar-navigation.module.css：六站定位與火箭路徑。
- tests/campus-roadmap.cjs：擴充原有 RoadMap 瀏覽器驗收。
- tests/campus-communities.cjs：原生 Clipboard、無遮擋與版面補充驗收。
- artifacts/campus-step6/：本紀錄、八張實際渲染截圖及本目錄 .gitignore。

page.tsx 不需更改：既有 wrapper 自動讀取更新的 roadmap 與 metadata intro。

## 實際截圖

截圖皆為本機 production server 的實際 Edge 渲染，並非 App 截圖或模擬圖片。

- [390px 手機視窗](review-viewport-games-390.png)
- [1440px 桌面視窗](review-viewport-games-1440.png)
- [手機六站导航](review-navigation-390.png)
- [桌面六站導航](review-navigation-1440.png)
- [手機完整遊戲關卡](review-step6-games-390.png)
- [手機完整興趣關卡](review-step6-interests-390.png)
- [桌面完整遊戲關卡](review-step6-games-1440.png)
- [桌面完整興趣關卡](review-step6-interests-1440.png)

其餘逐尺寸迴歸截圖保留於本機同目錄，透過 .gitignore 不提交。

## 交付範圍

本次實作與本機驗收無未完成項目。分支 codex/cute-campus-step6，交付本機 Git commit 供審閱；未推送、合併或部署正式網站，未聲稱 App 真機任務成功。原工作目錄與其他視窗的已完成變更保留。
