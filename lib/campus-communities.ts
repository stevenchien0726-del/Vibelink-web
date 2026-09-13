// Verified 2026-09-13: active/enabled cold-start communities supplied for CUTE.
// Array order preserves category-local priority. These are guide names, not DB display_names.
export const communityCategories = ["遊戲", "興趣"] as const;
export type CommunityCategory = typeof communityCategories[number];
export const campusCommunities: ReadonlyArray<{
  slug: string; category: CommunityCategory; name: string; purpose: string; icon: string;
}> = [
  { slug: "leagueoflegends", category: "遊戲", name: "英雄聯盟", purpose: "找一起雙排、組隊的隊友", icon: "⚔" },
  { slug: "valorant", category: "遊戲", name: "特戰英豪", purpose: "找一起練槍、組隊的夥伴", icon: "◎" },
  { slug: "aov", category: "遊戲", name: "傳說對決", purpose: "找一起雙排、五排的隊友", icon: "♜" },
  { slug: "roblox", category: "遊戲", name: "Roblox", purpose: "找一起探索遊戲的朋友", icon: "◇" },
  { slug: "minecraft", category: "遊戲", name: "Minecraft", purpose: "找一起蓋世界、生存冒險的夥伴", icon: "▧" },
  { slug: "foodie", category: "興趣", name: "美食同好", purpose: "找飯友，一起探索美食", icon: "🍜" },
  { slug: "gym", category: "興趣", name: "健身同好", purpose: "找一起健身、交流訓練的夥伴", icon: "🏋" },
  { slug: "travel", category: "興趣", name: "旅遊同好", purpose: "找週末出遊、分享旅行的朋友", icon: "✈" },
  { slug: "movie", category: "興趣", name: "電影同好", purpose: "找一起看電影、聊作品的同好", icon: "🎬" },
  { slug: "party", category: "興趣", name: "聚會同好", purpose: "找喜歡聚會、認識新朋友的人", icon: "✦" },
];
