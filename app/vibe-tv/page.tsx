"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const contentDirections = [
  {
    title: "Vibe Studio Original",
    body: "原創影集/節目與電影",
  },
  {
    title: "Movies",
    body: "授權電影與影集內容",
  },
  {
    title: "Live Entertainment",
    body: "線下娛樂活動直播",
  },
];

const ecosystemItems = [
  {
    title: "VIBELINK",
    body: "AI 社交平台",
  },
  {
    title: "VIBE TV",
    body: "娛樂內容平台",
  },
  {
    title: "VIBE Membership",
    body: "跨平台會員系統",
  },
];

const membershipValues = [
  "VIBE TV 原創與授權影集、電影內容",
  "VIBELINK AI Radar 社交探索功能",
  "專屬會員活動與未來生態系服務",
];

export default function VibeTvPage() {
  const router = useRouter();
  const [isClosing, setIsClosing] = useState(false);

  const handleBack = () => {
    if (isClosing) return;
    setIsClosing(true);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#120018] px-5 py-5 text-white">
      <motion.div
        className="mx-auto flex min-h-[calc(100vh-40px)] w-full max-w-[430px] flex-col"
        initial={{ x: 88, opacity: 0, scale: 0.96 }}
        animate={
          isClosing
            ? { x: "110%", opacity: 0, scale: 0.96 }
            : { x: 0, opacity: 1, scale: 1 }
        }
        transition={
          isClosing
            ? { duration: 0.28, ease: "easeIn" }
            : { type: "spring", stiffness: 420, damping: 32, mass: 0.8 }
        }
        onAnimationComplete={() => {
          if (isClosing) router.push("/");
        }}
      >
        <button
          type="button"
          onClick={handleBack}
          className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/12 bg-white/[0.08] px-5 py-3 text-base font-bold text-white/86 shadow-lg shadow-fuchsia-950/20 transition hover:bg-white/[0.14]"
        >
          <span className="text-xl leading-none">&lt;</span>
          Back
        </button>

        <section className="relative overflow-hidden rounded-[28px] border border-white/12 bg-[linear-gradient(145deg,#5b0d80_0%,#2c073e_48%,#16001f_100%)] p-6 shadow-2xl shadow-fuchsia-950/35">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-fuchsia-300/20 to-transparent" />
          <div className="relative">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-fuchsia-100/82">
              Entertainment. Culture. Stories.
            </p>
            <h1 className="mt-4 text-5xl font-black leading-none tracking-normal text-white">
              VIBE TV
            </h1>
            <p className="mt-5 text-base leading-7 text-white/74">
              VIBE TV 是 VIBE CITY
              娛樂生態系的重要一環。我們相信，未來的娛樂不只是觀看內容，而是透過故事、文化、社交與
              AI 建立更深層的連結。
            </p>
          </div>
        </section>

        <InfoSection title="我們的願景">
          <p>
            VIBE TV 將不只是影音平台，而是 VIBE CITY
            生態系的重要內容引擎。從原創影集、電影到大型娛樂企劃，VIBE
            TV 希望打造一個結合內容、社交與 AI 的新世代娛樂平台。
          </p>
        </InfoSection>

        <section className="mt-5">
          <SectionTitle>未來內容方向</SectionTitle>
          <div className="mt-3 grid gap-3">
            {contentDirections.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-white/12 bg-white/[0.07] p-5 shadow-xl shadow-fuchsia-950/20 backdrop-blur"
              >
                <h3 className="text-xl font-black tracking-normal text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <InfoSection title="VIBE 生態系">
          <p>
            VIBE CITY
            的策略並不只是建立一個影片平台，而是打造一個結合內容、社交與
            AI 的娛樂生態系。
          </p>
          <div className="mt-5 grid gap-3">
            {ecosystemItems.map((item) => (
              <article
                key={item.title}
                className="rounded-[20px] border border-fuchsia-100/12 bg-white/[0.07] p-4"
              >
                <h3 className="text-base font-black text-white">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold text-white/64">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </InfoSection>

        <section className="mt-5 rounded-[24px] border border-fuchsia-100/14 bg-[#22052f]/86 p-5 shadow-xl shadow-fuchsia-950/20">
          <SectionTitle>未來會員價值</SectionTitle>
          <p className="mt-3 text-base leading-7 text-white/74">
            VIBE 會員未來將可同時獲得：
          </p>
          <div className="mt-4 grid gap-3">
            {membershipValues.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white/[0.07] px-4 py-3 text-sm font-semibold leading-6 text-white/82"
              >
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-fuchsia-300 shadow-[0_0_18px_rgba(240,171,252,0.9)]" />
                {item}
              </div>
            ))}
          </div>
          <p className="mt-5 rounded-2xl bg-[#c77aea] px-4 py-4 text-center text-lg font-black text-[#1f0629]">
            娛樂內容 + 社交互動 + AI 服務
          </p>
        </section>

        <InfoSection title="長期優勢">
          <p>
            相較於傳統影音串流平台，VIBE CITY 希望透過內容、社交與 AI
            的深度整合，建立更高的用戶參與度與更低的會員流失率。
          </p>
        </InfoSection>

        <section className="mt-5 rounded-[28px] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.1),rgba(199,122,234,0.1),rgba(255,255,255,0.04))] p-6 text-center shadow-2xl shadow-fuchsia-950/25">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-fuchsia-100/82">
            Coming Soon
          </p>
          <p className="mt-4 text-base leading-7 text-white/74">
            VIBE TV 正在規劃中。未來將與 VIBELINK、VIBE 會員及 VIBE CITY
            生態系深度整合，打造全新的娛樂體驗。
          </p>
          <p className="mt-6 text-xl font-black leading-8 text-white">
            VIBELINK Connects People.
            <br />
            VIBE TV Connects Culture.
          </p>
        </section>
      </motion.div>
    </main>
  );
}

function InfoSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-5 rounded-[24px] border border-white/12 bg-white/[0.07] p-5 text-base leading-7 text-white/74 shadow-xl shadow-fuchsia-950/20 backdrop-blur">
      <SectionTitle>{title}</SectionTitle>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-black uppercase tracking-[0.2em] text-fuchsia-100/80">
      {children}
    </h2>
  );
}
