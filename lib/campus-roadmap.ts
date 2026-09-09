export type Campus = { name: string; shortName: string; code: string; tag: string; search: string };

// Add a campus config and a thin route wrapper to reuse the entire onboarding.
export const cuteCampus: Campus = {
  name: "中國科技大學", shortName: "中國科大", code: "CUTE", tag: "@cute.edu.tw", search: "cute",
};

export function createCampusRoadmap(campus: Campus) {
  const { name, shortName, code, tag, search } = campus;
  return {
    campus,
    hero: { brand: `Vibelink × ${name}`, title: "Campus RoadMap", lead: "從加入校園，到找到和你同頻的人。", intro: `5 Steps，開始探索你的${shortName}。` },
    steps: [
      { id: "world", title: "進入 Vibelink 世界", label: "DISCOVER", paragraphs: ["Vibelink 是一個用 AI Radar、Atomic Tags 與生活貼文，幫你探索附近校園、興趣社群，以及和你同頻的人的社交 App。", "不是先追蹤誰。", "先告訴 Vibelink 你想找什麼。"], cta: "下一關 →" },
      { id: "download", title: "下載 Vibelink", label: "GET READY", paragraphs: [`準備進入${shortName} Vibelink 社群。`, "下載 Vibelink，登入後就可以開始建立你的校園 Profile。"], cta: "準備好了 →" },
      { id: "profile", title: "建立你的 Vibe", label: "BE YOURSELF", paragraphs: ["讓大家知道你是誰。", "完成你的 Profile，再分享幾個生活片段，AI Radar 才更容易理解你的興趣與 Vibe。"], cta: "完成 → 前往下一關" },
      { id: "tag", title: `加入${shortName} Atomic Tag`, label: "FIND YOUR CAMPUS", paragraphs: ["找到你的校園。", "Atomic Tags 是由 @名稱 組成的校園、興趣與活動指定社群。", `現在加入${name}：`], cta: "我加入了 →" },
      { id: "radar", title: "啟動你的第一次 AI Radar", label: "MAKE A CONNECTION", paragraphs: ["現在，找一個你真的想認識的人。", "不用選一堆條件。", "直接告訴 AI Radar：", "「你想找誰？」"], cta: "🚀 啟動 AI Radar" },
    ],
    features: [ ["AI Radar", "用自然語言直接搜尋想認識的人。"], ["Atomic Tags", "加入校園、興趣與活動社群。"], ["Home", "看看附近的人正在分享什麼。"] ],
    missions: ["建立個人 Profile", "放一張你喜歡的 Profile Photo", "寫一段簡單 Bio", "發布 1–3 則生活貼文（建議）"],
    tip: { title: "💡 不知道發什麼？", body: "今天的校園生活、興趣、食物、出去玩、最近在做的事都可以。" },
    tagInstructions: ["打開 Vibelink", "進入 AI Radar", "點擊輸入欄的 @", `搜尋 ${search}`, `點擊 ${tag}`, "點擊加入"],
    welcome: { title: `🎉 Welcome to ${code}.`, body: `你現在已經進入${shortName} Atomic Network。` },
    prompts: [`找${shortName}喜歡攝影的人`, `找 ${tag} 最近想出去玩的人`, `找${shortName}喜歡寫程式的人`, `找 ${tag} 喜歡看電影的人`, `找${shortName}跟我興趣相近的人`],
    radarInstructions: ["打開 AI Radar", `加入 ${tag}`, "輸入你想找的人", "Search", "看看 Radar 找到誰"],
    radarHint: "在 Vibelink App 中開始探索；此按鈕會帶你回到下載區。",
    completion: { trigger: "我完成第一次探索了 →", title: `${code} RoadMap Complete`, paragraphs: [`你已經進入 Vibelink ${shortName}校園網絡。`, "接下來沒有標準答案。", "發文、探索 Atomic Tags、使用 AI Radar，找到屬於你的校園連結。"], entries: [ ["探索 Home", "打開 App，看看最新生活貼文。"], ["使用 AI Radar", "打開 App，輸入你想找的人。"], [`查看 ${tag}`, `打開 AI Radar，搜尋並選擇 ${tag}。`] ] },
  };
}
export type CampusRoadmap = ReturnType<typeof createCampusRoadmap>;
