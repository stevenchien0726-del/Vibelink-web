"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Locale = "zh" | "en";

const storageKey = "vibe-city-locale";

export const translations = {
  zh: {
    language: {
      current: "中文",
      zh: "中文",
      en: "English",
    },
    common: {
      back: "Back",
      menu: "MENU",
      close: "CLOSE",
      planning: "Planning Stage",
      footerTagline: "Creating brand new AI × Social × Entertainment culture.",
    },
    menu: {
      vibelink: "VIBELINK",
      tv: "VIBE TV",
      membership: "VIBE MEMBERSHIP",
      ecosystem: "VIBE 生態系",
      about: "關於 VIBE CITY",
      investor: "投資人中心",
      contact: "Contact",
    },
    home: {
      heroTitle: "VIBE CITY",
      heroSubtitle: "下一代全球最具影響力的 AI 社交 × 娛樂文化生態系",
      heroBody:
        "從 Vibelink 出發，打造結合 AI 社交、影音內容、會員訂閱與青年娛樂文化的全球化平台。",
      navButtons: {
        problem: "Problem",
        solution: "Solution",
        product: "First Product",
        validation: "Validation",
      },
      problem: {
        eyebrow: "Problem",
        title: "數位社群正在失去真實連結",
        body: "現在的數位社群平台，正在面臨比較焦慮、孤獨感加深與內容碎片化三個核心問題。",
        cards: [
          {
            title: "比較焦慮",
            body: "用戶在大量精緻內容與社群比較中，越來越容易感到壓力與自我懷疑。",
          },
          {
            title: "孤獨感加深",
            body: "即使每天滑過大量內容，人們仍然很難找到真正理解自己、頻率相近的人。",
          },
          {
            title: "內容碎片化",
            body: "社交、短影音、影視娛樂、創作者、會員與文化體驗被切散在不同平台。",
          },
        ],
        note: "我們相信，下一代平台需要把 AI 社交、內容娛樂與會員生態重新整合。",
      },
      solution: {
        eyebrow: "Solution",
        title: "用 AI 社交與娛樂內容，建立新的文化入口",
        cards: [
          {
            title: "Vibelink",
            label: "AI 社交入口",
            body: "Vibelink 透過 AI Radar，幫助用戶用自然語言找到更適合的人、內容與社群。",
          },
          {
            title: "Vibe TV",
            label: "內容與會員生態系入口",
            body: "Vibe TV 讓 VIBE CITY 從社交平台延伸出娛樂內容、影視化 IP 與創作者內容。",
          },
        ],
      },
      product: {
        eyebrow: "First Product",
        title: "First Product: Vibelink",
        body: "Vibelink 是 VIBE CITY 的第一個核心產品，一個以 AI Radar 為差異化入口的新型態社交 App。",
        cards: [
          {
            title: "AI Radar",
            body: "用自然語言搜尋想認識的人與 Vibe，而不是只靠滑卡或追蹤推薦。",
          },
          {
            title: "People Library",
            body: "整理你追蹤、收藏與互動過的人，讓關係與內容更容易被保存。",
          },
          {
            title: "Content Feed",
            body: "分享生活貼文、照片、短影音與 Profile，建立更完整的社交表達。",
          },
        ],
      },
      validation: {
        eyebrow: "Validation",
        title: "Big Vision, Small Validation",
        body: "VIBE CITY 擁有全球化 AI 社交娛樂生態系的長期願景，但我們選擇從最小可驗證產品開始。",
        intro:
          "第一階段，我們聚焦在 Vibelink MVP、AI Radar、種子用戶與 App Store 上架，先驗證用戶是否真的需要新的 AI 社交入口。",
        cards: [
          {
            title: "AI Radar 是否能提升社交探索效率",
            body: "驗證用戶是否願意用一句話直接描述想認識的人與場景。",
          },
          {
            title: "Vibelink 是否能形成早期社群密度",
            body: "透過校園、KOL、Dcard、Threads 與實體活動建立第一批高互動種子用戶。",
          },
          {
            title: "VIBE CITY 是否能延伸成娛樂會員品牌",
            body: "當社交入口成立後，再逐步導入 Vibe TV、會員方案與內容生態系。",
          },
        ],
      },
    },
    vibelink: {
      title: "VIBELINK",
      subtitle: "Find Your Vibe",
      body: "VIBELINK 是 VIBE CITY 的第一個核心產品，一個結合 AI 雷達、內容分享、People Library 與即時訊息的下一代社交平台。",
      preview: "Product Preview",
      swipe: "Swipe",
      features: [
        ["AI Radar", "輸入一句話，AI 幫你找到適合認識的人。"],
        ["People Library", "整理你追蹤、收藏與互動過的人。"],
        ["Feed", "分享生活貼文、照片與短影音。"],
        ["Message", "與你感興趣的人直接開始聊天。"],
      ],
      progressTitle: "目前進度",
      progress: [
        "MVP Beta 測試中",
        "iOS TestFlight 準備中",
        "App Store 即將上線",
        "Android 版本規劃中",
      ],
      cta: "加入 Beta",
    },
    vibeTv: {
      title: "VIBE TV",
      subtitle: "Entertainment. Culture. Stories.",
      body: "VIBE TV 是 VIBE CITY 娛樂生態系的重要一環。我們相信，未來的娛樂不只是觀看內容，而是透過故事、文化、社交與 AI 建立更深層的連結。",
      visionTitle: "我們的願景",
      vision:
        "VIBE TV 將不只是影音平台，而是 VIBE CITY 生態系的重要內容引擎。從原創影集、電影到大型娛樂企劃，VIBE TV 希望打造一個結合內容、社交與 AI 的新世代娛樂平台。",
      directionTitle: "未來內容方向",
      directions: [
        ["Vibe Studio Original", "原創影集/節目與電影"],
        ["Movies", "授權電影與影集內容"],
        ["Live Entertainment", "線下娛樂活動直播"],
      ],
      ecosystemTitle: "VIBE 生態系",
      ecosystem:
        "VIBE CITY 的策略並不只是建立一個影片平台，而是打造一個結合內容、社交與 AI 的娛樂生態系。",
      ecosystemCards: [
        ["VIBELINK", "AI 社交平台"],
        ["VIBE TV", "娛樂內容平台"],
        ["VIBE Membership", "跨平台會員系統"],
      ],
      membershipTitle: "未來會員價值",
      membershipIntro: "VIBE 會員未來將可同時獲得：",
      membership: [
        "VIBE TV 原創與授權影集、電影內容",
        "VIBELINK AI Radar 社交探索功能",
        "專屬會員活動與未來生態系服務",
      ],
      highlight: "娛樂內容 + 社交互動 + AI 服務",
      advantageTitle: "長期優勢",
      advantage:
        "相較於傳統影音串流平台，VIBE CITY 希望透過內容、社交與 AI 的深度整合，建立更高的用戶參與度與更低的會員流失率。",
      comingTitle: "Coming Soon",
      coming:
        "VIBE TV 正在規劃中。未來將與 VIBELINK、VIBE 會員及 VIBE CITY 生態系深度整合，打造全新的娛樂體驗。",
      footer: ["VIBELINK Connects People.", "VIBE TV Connects Culture."],
    },
    ecosystem: {
      title: "VIBE Ecosystem",
      subtitle: "One Ecosystem. Endless Possibilities.",
      body: "VIBE CITY 不只是單一產品，而是一個結合社交、娛樂與 AI 的生態系。我們相信未來的平台不應該只有內容，也不應該只有社交，而是讓人們在同一個生態系中建立連結、探索興趣與體驗文化。",
      coreTitle: "Core Ecosystem",
      core: [
        ["VIBELINK", "AI Social Platform", "透過 AI Radar、People Library 與內容分享，幫助人們找到真正適合認識的人。"],
        ["VIBE TV", "Entertainment Platform", "透過原創影集、電影與娛樂內容，創造屬於 VIBE CITY 的文化與故事。"],
        ["VIBE Membership", "Ecosystem Membership", "一個會員，同時享有社交、娛樂與 AI 服務體驗。"],
      ],
      futureTitle: "Future Ecosystem",
      futureIntro:
        "以下生態系項目正在規劃中，我們將會在未來持續建立與完善 VIBE 生態系。",
      future: [
        ["Angel Entertainment", "藝人、創作者與娛樂內容發展計劃"],
        ["VIBE PURPLE", "未來潮流品牌體驗計劃"],
        ["VIBE CLUB", "線下電音派對體驗計劃"],
      ],
      visionTitle: "Our Vision",
      visionLead: "打造全新的：",
      visionHighlight: "AI × Social × Entertainment Ecosystem",
      visionBody: "讓人們不只是使用產品，而是在 VIBE CITY 找到屬於自己的 Vibe。",
      journeyTitle: "The Journey Has Just Begun",
      journey:
        "我們將持續建立與完善 VIBE 生態系，從社交、娛樂到 AI 服務，一步一步打造更完整的未來體驗。",
      journeyHighlight: "Our journey has just begun.",
      comingTitle: "Coming Soon",
      coming: "The future is just getting started.",
    },
    about: {
      title: "About VIBE CITY",
      subtitle: "Creating the Future of AI × Social × Entertainment",
      paragraphs: [
        "VIBE CITY 是一個正在打造中的新世代數位娛樂生態系。",
        "我們相信未來的社交平台不只是聊天與內容分享，而是結合 AI、社群、創作者文化、影音娛樂與線下體驗的新文明入口。",
        "從 Vibelink、AI Radar 到未來的 VIBE TV、VIBE CLUB 與更多生態系計劃，VIBE CITY 致力於連結全球擁有相同熱情與夢想的人們，共同創造全新的文化體驗。",
        "這不是一個單一產品。",
        "這是一場長期建立 AI × Social × Entertainment 生態系的旅程。",
        "The journey has just begun.",
      ],
      missionTitle: "Our Mission",
      missionLead: ["Connect People.", "Create Culture.", "Build The Future."],
      mission:
        "透過科技與創意，讓人們更容易找到志同道合的夥伴、建立真實連結，並共同創造新的娛樂與社群文化。",
      ecosystemTitle: "VIBE CITY Ecosystem",
      ecosystemMore: "更多生態系項目將於未來持續建立與完善。",
      contactTitle: "Contact Us",
      footerTitle: "VIBE CITY",
    },
    investor: {
      titleZh: "投資人中心",
      titleEn: "Investor Center",
      subtitle: "Building The Future of AI × Social × Entertainment",
      intro:
        "VIBE CITY 正在打造結合 AI、社交平台、創作者文化與娛樂生態系的新世代平台。",
      belief: "我們相信下一個十年將屬於：",
      highlight: "AI × Social × Entertainment",
      accordions: [
        {
          title: "Our Vision",
          paragraphs: [
            "打造全球化 AI × Social × Entertainment 生態系。",
            "從 Vibelink 出發，逐步擴展至內容、創作者、娛樂與線下社群體驗。",
          ],
        },
        {
          title: "Current Focus",
          lead: "Vibelink",
          bullets: ["AI Radar", "People Library", "Social Feed", "Short Videos"],
          paragraphs: ["目前正進行產品驗證與早期用戶成長。"],
        },
        {
          title: "Ecosystem Roadmap",
          bullets: [
            "Vibelink",
            "VIBE TV — Planning",
            "VIBE CLUB — Planning",
            "Angel Entertainment — Planning",
            "VIBE CITY Ecosystem",
          ],
        },
        {
          title: "Investment & Partnership",
          paragraphs: ["歡迎以下夥伴與我們交流："],
          bullets: [
            "Angel Investors",
            "Strategic Partners",
            "Media Partners",
            "Technology Partners",
          ],
        },
        {
          title: "Contact",
          contacts: [
            ["Investment Inquiries", "stevenchien0726@gmail.com"],
            ["Partnership Inquiries", "stevenchien0726@gmail.com"],
            ["Instagram", "@vibe_city_official"],
          ],
        },
      ],
    },
    membership: {
      title: "VIBE Membership",
      subtitle: "One Membership. Full Ecosystem Access.",
      body: "VIBE Membership 將串連 VIBELINK、VIBE TV 與未來 VIBE CITY 生態系服務，讓會員在同一個身份中享有社交、娛樂與 AI 體驗。",
      cards: [
        ["Social", "使用 VIBELINK 與 AI Radar 探索更適合的人與社群。"],
        ["Entertainment", "未來享有 VIBE TV 原創與授權內容。"],
        ["Culture", "參與專屬活動、線下體驗與未來生態系服務。"],
      ],
      status: "Planning Stage",
      cta: "Coming Soon",
    },
    contact: {
      title: "Contact",
      subtitle: "Let’s Build The Future Together.",
      body: "歡迎品牌、投資人、創作者、媒體與技術夥伴和 VIBE CITY 聯繫。",
      items: [
        ["General Inquiries", "stevenchien0726@gmail.com"],
        ["Business & Partnership", "stevenchien0726@gmail.com"],
        ["Investment Opportunities", "stevenchien0726@gmail.com"],
        ["Instagram", "@vibe_city_official"],
      ],
    },
  },
  en: {
    language: {
      current: "English",
      zh: "中文",
      en: "English",
    },
    common: {
      back: "Back",
      menu: "MENU",
      close: "CLOSE",
      planning: "Planning Stage",
      footerTagline: "Creating brand new AI × Social × Entertainment culture.",
    },
    menu: {
      vibelink: "VIBELINK",
      tv: "VIBE TV",
      membership: "VIBE MEMBERSHIP",
      ecosystem: "VIBE Ecosystem",
      about: "About VIBE CITY",
      investor: "Investor Center",
      contact: "Contact",
    },
    home: {
      heroTitle: "VIBE CITY",
      heroSubtitle:
        "The next global AI social × entertainment culture ecosystem.",
      heroBody:
        "Starting with Vibelink, VIBE CITY is building a global platform that connects AI social discovery, entertainment content, membership, and youth culture.",
      navButtons: {
        problem: "Problem",
        solution: "Solution",
        product: "First Product",
        validation: "Validation",
      },
      problem: {
        eyebrow: "Problem",
        title: "Digital communities are losing real connection",
        body: "Modern social platforms face comparison anxiety, deeper loneliness, and fragmented content experiences.",
        cards: [
          {
            title: "Comparison Anxiety",
            body: "Highly polished feeds and constant comparison make users feel more pressure and self-doubt.",
          },
          {
            title: "Deeper Loneliness",
            body: "Even after scrolling through endless content, people still struggle to find others who truly understand them.",
          },
          {
            title: "Fragmented Content",
            body: "Social, short video, entertainment, creators, memberships, and culture are scattered across separate platforms.",
          },
        ],
        note: "We believe the next platform needs to reconnect AI social discovery, entertainment content, and membership into one ecosystem.",
      },
      solution: {
        eyebrow: "Solution",
        title: "A new cultural gateway powered by AI social and entertainment",
        cards: [
          {
            title: "Vibelink",
            label: "AI social entry point",
            body: "Vibelink helps users describe what they are looking for in natural language and discover better people, content, and communities.",
          },
          {
            title: "Vibe TV",
            label: "Content and membership ecosystem",
            body: "Vibe TV extends VIBE CITY from social discovery into entertainment content, cinematic IP, and creator culture.",
          },
        ],
      },
      product: {
        eyebrow: "First Product",
        title: "First Product: Vibelink",
        body: "Vibelink is VIBE CITY’s first core product, a new social app differentiated by AI Radar.",
        cards: [
          {
            title: "AI Radar",
            body: "Search for people and vibes using natural language instead of relying only on swipes or recommendations.",
          },
          {
            title: "People Library",
            body: "Organize people you follow, save, and interact with so relationships and content are easier to revisit.",
          },
          {
            title: "Content Feed",
            body: "Share posts, photos, short videos, and profiles to create richer social expression.",
          },
        ],
      },
      validation: {
        eyebrow: "Validation",
        title: "Big Vision, Small Validation",
        body: "VIBE CITY has a long-term vision for a global AI social entertainment ecosystem, but we are starting with the smallest verifiable product.",
        intro:
          "In phase one, we focus on Vibelink MVP, AI Radar, seed users, and App Store launch to validate demand for a new AI social entry point.",
        cards: [
          {
            title: "Can AI Radar improve social discovery?",
            body: "We test whether users want to describe who they want to meet in one simple sentence.",
          },
          {
            title: "Can Vibelink build early community density?",
            body: "We build early high-engagement seed users through campuses, KOLs, Dcard, Threads, and offline events.",
          },
          {
            title: "Can VIBE CITY become an entertainment membership brand?",
            body: "Once the social entry point is validated, we will gradually introduce Vibe TV, memberships, and content ecosystem layers.",
          },
        ],
      },
    },
    vibelink: {
      title: "VIBELINK",
      subtitle: "Find Your Vibe",
      body: "VIBELINK is VIBE CITY’s first core product, a next-generation social platform combining AI Radar, content sharing, People Library, and messaging.",
      preview: "Product Preview",
      swipe: "Swipe",
      features: [
        ["AI Radar", "Type one sentence and let AI help you find the right people."],
        ["People Library", "Organize people you follow, save, and interact with."],
        ["Feed", "Share lifestyle posts, photos, and short videos."],
        ["Message", "Start direct conversations with people you are interested in."],
      ],
      progressTitle: "Progress",
      progress: [
        "MVP Beta testing",
        "iOS TestFlight preparing",
        "App Store coming soon",
        "Android version planning",
      ],
      cta: "Join Beta",
    },
    vibeTv: {
      title: "VIBE TV",
      subtitle: "Entertainment. Culture. Stories.",
      body: "VIBE TV is a key part of the VIBE CITY entertainment ecosystem. We believe the future of entertainment is not only about watching content, but building deeper connections through stories, culture, social interaction, and AI.",
      visionTitle: "Our Vision",
      vision:
        "VIBE TV will be more than a video platform. It will be a content engine for the VIBE CITY ecosystem, connecting originals, films, and major entertainment projects with social and AI experiences.",
      directionTitle: "Future Content Direction",
      directions: [
        ["Vibe Studio Original", "Original series, shows, and films"],
        ["Movies", "Licensed movies and series"],
        ["Live Entertainment", "Offline entertainment livestreams"],
      ],
      ecosystemTitle: "VIBE Ecosystem",
      ecosystem:
        "VIBE CITY is not only building a video platform. We are building an entertainment ecosystem that combines content, social interaction, and AI.",
      ecosystemCards: [
        ["VIBELINK", "AI social platform"],
        ["VIBE TV", "Entertainment content platform"],
        ["VIBE Membership", "Cross-platform membership system"],
      ],
      membershipTitle: "Future Membership Value",
      membershipIntro: "VIBE members may gain access to:",
      membership: [
        "VIBE TV original and licensed series and films",
        "VIBELINK AI Radar social discovery",
        "Exclusive member events and future ecosystem services",
      ],
      highlight: "Entertainment Content + Social Interaction + AI Services",
      advantageTitle: "Long-Term Advantage",
      advantage:
        "Compared with traditional streaming platforms, VIBE CITY aims to create higher engagement and lower membership churn through deep integration of content, social, and AI.",
      comingTitle: "Coming Soon",
      coming:
        "VIBE TV is currently in planning and will integrate deeply with VIBELINK, VIBE Membership, and the VIBE CITY ecosystem.",
      footer: ["VIBELINK Connects People.", "VIBE TV Connects Culture."],
    },
    ecosystem: {
      title: "VIBE Ecosystem",
      subtitle: "One Ecosystem. Endless Possibilities.",
      body: "VIBE CITY is not a single product. It is an ecosystem combining social, entertainment, and AI. We believe future platforms should help people connect, explore interests, and experience culture in one connected ecosystem.",
      coreTitle: "Core Ecosystem",
      core: [
        ["VIBELINK", "AI Social Platform", "Through AI Radar, People Library, and content sharing, VIBELINK helps people find truly compatible connections."],
        ["VIBE TV", "Entertainment Platform", "Through original series, films, and entertainment content, VIBE TV creates culture and stories for VIBE CITY."],
        ["VIBE Membership", "Ecosystem Membership", "One membership for social, entertainment, and AI service experiences."],
      ],
      futureTitle: "Future Ecosystem",
      futureIntro:
        "The following ecosystem projects are in planning. We will continue building and improving the VIBE ecosystem over time.",
      future: [
        ["Angel Entertainment", "Artist, creator, and entertainment content development plan"],
        ["VIBE PURPLE", "Future lifestyle and fashion brand experience plan"],
        ["VIBE CLUB", "Offline electronic music party experience plan"],
      ],
      visionTitle: "Our Vision",
      visionLead: "Building a new:",
      visionHighlight: "AI × Social × Entertainment Ecosystem",
      visionBody:
        "So people do not just use products. They find their own Vibe inside VIBE CITY.",
      journeyTitle: "The Journey Has Just Begun",
      journey:
        "We will continue building the VIBE ecosystem from social to entertainment to AI services, step by step creating a fuller future experience.",
      journeyHighlight: "Our journey has just begun.",
      comingTitle: "Coming Soon",
      coming: "The future is just getting started.",
    },
    about: {
      title: "About VIBE CITY",
      subtitle: "Creating the Future of AI × Social × Entertainment",
      paragraphs: [
        "VIBE CITY is a next-generation digital entertainment ecosystem in the making.",
        "We believe future social platforms should be more than chat and content sharing. They should combine AI, communities, creator culture, video entertainment, and offline experiences into a new cultural gateway.",
        "From Vibelink and AI Radar to future VIBE TV, VIBE CLUB, and more ecosystem plans, VIBE CITY connects people around the world who share the same passion and dreams.",
        "This is not a single product.",
        "This is a long-term journey to build an AI × Social × Entertainment ecosystem.",
        "The journey has just begun.",
      ],
      missionTitle: "Our Mission",
      missionLead: ["Connect People.", "Create Culture.", "Build The Future."],
      mission:
        "Through technology and creativity, we help people find like-minded partners, build real connections, and create new entertainment and community culture together.",
      ecosystemTitle: "VIBE CITY Ecosystem",
      ecosystemMore:
        "More ecosystem projects will continue to be built and improved in the future.",
      contactTitle: "Contact Us",
      footerTitle: "VIBE CITY",
    },
    investor: {
      titleZh: "投資人中心",
      titleEn: "Investor Center",
      subtitle: "Building The Future of AI × Social × Entertainment",
      intro:
        "VIBE CITY is building a next-generation platform combining AI, social platforms, creator culture, and entertainment ecosystems.",
      belief: "We believe the next decade belongs to:",
      highlight: "AI × Social × Entertainment",
      accordions: [
        {
          title: "Our Vision",
          paragraphs: [
            "Build a global AI × Social × Entertainment ecosystem.",
            "Starting from Vibelink, we will gradually expand into content, creators, entertainment, and offline community experiences.",
          ],
        },
        {
          title: "Current Focus",
          lead: "Vibelink",
          bullets: ["AI Radar", "People Library", "Social Feed", "Short Videos"],
          paragraphs: ["We are currently validating the product and growing early users."],
        },
        {
          title: "Ecosystem Roadmap",
          bullets: [
            "Vibelink",
            "VIBE TV — Planning",
            "VIBE CLUB — Planning",
            "Angel Entertainment — Planning",
            "VIBE CITY Ecosystem",
          ],
        },
        {
          title: "Investment & Partnership",
          paragraphs: ["We welcome conversations with:"],
          bullets: [
            "Angel Investors",
            "Strategic Partners",
            "Media Partners",
            "Technology Partners",
          ],
        },
        {
          title: "Contact",
          contacts: [
            ["Investment Inquiries", "stevenchien0726@gmail.com"],
            ["Partnership Inquiries", "stevenchien0726@gmail.com"],
            ["Instagram", "@vibe_city_official"],
          ],
        },
      ],
    },
    membership: {
      title: "VIBE Membership",
      subtitle: "One Membership. Full Ecosystem Access.",
      body: "VIBE Membership will connect VIBELINK, VIBE TV, and future VIBE CITY ecosystem services, giving members social, entertainment, and AI experiences under one identity.",
      cards: [
        ["Social", "Use VIBELINK and AI Radar to discover better people and communities."],
        ["Entertainment", "Access future VIBE TV original and licensed content."],
        ["Culture", "Join exclusive events, offline experiences, and future ecosystem services."],
      ],
      status: "Planning Stage",
      cta: "Coming Soon",
    },
    contact: {
      title: "Contact",
      subtitle: "Let’s Build The Future Together.",
      body: "Brands, investors, creators, media, and technology partners are welcome to contact VIBE CITY.",
      items: [
        ["General Inquiries", "stevenchien0726@gmail.com"],
        ["Business & Partnership", "stevenchien0726@gmail.com"],
        ["Investment Opportunities", "stevenchien0726@gmail.com"],
        ["Instagram", "@vibe_city_official"],
      ],
    },
  },
} as const;

type TranslationTree = (typeof translations)[Locale];

const I18nContext = createContext<
  | {
      locale: Locale;
      setLocale: (locale: Locale) => void;
      t: TranslationTree;
    }
  | undefined
>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "zh";

    const stored = window.localStorage.getItem(storageKey);
    return stored === "zh" || stored === "en" ? stored : "zh";
  });

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(storageKey, nextLocale);
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }

  return context;
}
