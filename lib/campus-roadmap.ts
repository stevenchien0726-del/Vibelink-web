export type Campus = { name: string; shortName: string; code: string; tag: string; search: string; screenshots?: Record<string, { src: string; width: number; height: number; alt: string }> };

// Add a campus config and a thin route wrapper to reuse the entire onboarding.
export const cuteCampus: Campus = {
  name: "中國科技大學", shortName: "中國科大", code: "CUTE", tag: "@cute.edu.tw", search: "cute",
  screenshots: {
    profile: { src: "/campus-roadmap/cute-profile-upload.png", width: 660, height: 1356, alt: "Vibelink Profile 畫面，右上角「上傳內容」按鈕以紅框標示。" },
    tag: { src: "/campus-roadmap/cute-atomic-tags-search.png", width: 660, height: 1434, alt: "Vibelink Atomic Tags 畫面，搜尋輸入欄與搜尋按鈕以紅框標示。" },
    radar: { src: "/campus-roadmap/cute-ai-radar-input.png", width: 660, height: 1473, alt: "Vibelink AI Radar 畫面，@ 按鈕與底部搜尋輸入欄以紅框標示。" },
  },
};

export function createCampusRoadmap(campus: Campus) {
  const { shortName, code, tag } = campus;
  return {
    campus,
    campusTags: [
      { name: "國立臺灣大學", tag: "@ntu.edu.tw" },
      { name: "國立臺灣師範大學", tag: "@ntnu.edu.tw" },
      { name: "中國科技大學", tag: "@cute.edu.tw" },
    ],
    hero: { brand: "Vibelink", title: "Campus RoadMap", lead: "從加入校園，到找到和你同頻的人。", intro: "6 Steps，開始探索。" },
    steps: [
      { id: "world", title: "進入 Vibelink 世界", label: "DISCOVER", paragraphs: ["Vibelink 是一個用 AI Radar、Atomic Tags 與生活貼文，幫你探索附近校園、興趣社群，以及和你同頻的人的社交 App。", "不是先追蹤誰。", "先告訴 Vibelink 你想找什麼。"], cta: "下一關 →" },
      { id: "download", title: "下載 Vibelink", label: "GET READY", paragraphs: [`準備進入${shortName} Vibelink 社群。`, "下載 Vibelink，登入後就可以開始建立你的校園 Profile。"], cta: "準備好了 →" },
      { id: "profile", title: "建立你的 Vibe", label: "BE YOURSELF", paragraphs: ["讓大家知道你是誰。", "完成你的 Profile，再分享幾個生活片段，AI Radar 才更容易理解你的興趣與 Vibe。"], cta: "完成 → 前往下一關" },
      { id: "tag", title: "加入你的校園 Atomic Tag", label: "FIND YOUR CAMPUS", paragraphs: ["找到你的校園，認識同校與興趣相近的人。", "Atomic Tags 是以 @名稱 識別的社群，涵蓋校園、興趣與活動。", "選擇你的校園："], cta: "我加入了 →" },
      { id: "radar", title: "啟動你的第一次 AI Radar", label: "MAKE A CONNECTION", paragraphs: ["現在，找一個你真的想認識的人。", "不用選一堆條件。", "直接告訴 AI Radar：", "「你想找誰？」"], cta: "下一關：找遊戲與興趣同好 →" },
      { id: "interests", title: "找到你的遊戲與興趣同好", label: "FIND YOUR PEOPLE", paragraphs: [`除了${shortName}社群，也可以加入你喜歡的遊戲或興趣社群，用 AI Radar 找一起玩、一起交流的朋友。`], cta: "繼續 → 完成區" },
    ],
    features: [ ["AI Radar", "用自然語言直接搜尋想認識的人。"], ["Atomic Tags", "加入校園、興趣與活動社群。"], ["Home", "看看附近的人正在分享什麼。"] ],
    missions: ["建立個人 Profile", "放一張你喜歡的 Profile Photo", "寫一段簡單 Bio", "發布 1–3 則生活貼文（建議）"],
    tip: { title: "💡 不知道發什麼？", body: "今天的校園生活、興趣、食物、出去玩、最近在做的事都可以。" },
    tagInstructions: ["打開 Vibelink，進入 Profile", "找到 @Atomic Tags", "搜尋你的學校標籤：ntu.edu.tw、ntnu.edu.tw 或 cute.edu.tw", "點開對應的校園社群，確認學校名稱與完整標籤", "點擊「加入」；已加入者可直接繼續探索"],
    campusTagHint: "搜尋 ntu 時可能同時匹配 ntnu，請確認學校名稱與完整標籤。",
    campusScreenshotCaption: "操作示意，以中國科技大學社群為例；請選擇你的學校標籤。",
    welcome: { title: "🎉 Welcome to your campus.", body: "加入後，即可開始探索你的校園 Atomic Network。" },
    prompts: ["找 @ntu.edu.tw 喜歡攝影的人", "找 @ntnu.edu.tw 最近想出去玩的人", "找 @cute.edu.tw 喜歡寫程式的人", "找同校喜歡看電影的人", "找同校跟我興趣相近的人"],
    promptHint: "以下為搜尋範例；實際操作時，請選取你的學校標籤，再輸入想找的人。",
    promptResultsHint: "搜尋範例僅供操作參考；實際結果可能不同，也可能暫時找不到符合需求的人。",
    radarInstructions: ["打開 AI Radar", "點擊輸入欄的 @，搜尋並選取你的學校標籤", "輸入你想找的人，例如「喜歡攝影的人」", "點擊 Search", "查看 Radar 搜尋結果，探索感興趣的個人檔案"],
    radarHint: "在 Vibelink App 中開始探索；此按鈕會帶你回到下載區。",
    completion: { trigger: "我完成第一次探索了 →", title: `${code} RoadMap Complete`, paragraphs: ["感謝您成為Vibelink早期校園種子用戶，期待未來與您一起見證Vibelink的成長過程"], entries: [ ["探索 Home", "打開 App，看看最新生活貼文。"], ["使用 AI Radar", "打開 App，輸入你想找的人。"], [`查看 ${tag}`, `打開 AI Radar，搜尋並選擇 ${tag}。`] ] },
  };
}
export type CampusRoadmap = ReturnType<typeof createCampusRoadmap>;
