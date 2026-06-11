import Link from "next/link";

const coreItems = [
  {
    title: "VIBELINK",
    label: "AI Social Platform",
    body: "透過 AI Radar、People Library 與內容分享，幫助人們找到真正適合認識的人。",
  },
  {
    title: "VIBE TV",
    label: "Entertainment Platform",
    body: "透過原創影集、電影與娛樂內容，創造屬於 VIBE CITY 的文化與故事。",
  },
  {
    title: "VIBE Membership",
    label: "Ecosystem Membership",
    body: "一個會員，同時享有社交、娛樂與 AI 服務體驗。",
  },
];

const futureItems = [
  {
    title: "Angel Entertainment",
    body: "藝人、創作者與娛樂內容發展計劃",
  },
  {
    title: "VIBE PURPLE",
    body: "未來潮流品牌體驗計劃",
  },
  {
    title: "VIBE CLUB",
    body: "線下電音派對體驗計劃",
  },
];

export default function VibeEcosystemPage() {
  return (
    <main className="min-h-screen bg-[#120018] px-5 py-5 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-40px)] w-full max-w-[430px] flex-col">
        <Link
          href="/"
          className="mb-8 inline-flex w-fit items-center rounded-full border border-white/12 bg-white/[0.08] px-5 py-3 text-base font-bold text-white/86 shadow-lg shadow-fuchsia-950/20 transition hover:bg-white/[0.14]"
        >
          ← Back
        </Link>

        <section className="relative overflow-hidden rounded-[28px] border border-white/12 bg-[linear-gradient(145deg,#5b0d80_0%,#2c073e_48%,#16001f_100%)] p-6 shadow-2xl shadow-fuchsia-950/35">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-fuchsia-300/20 to-transparent" />
          <div className="absolute -right-14 top-12 h-36 w-36 rounded-full bg-fuchsia-400/20 blur-3xl" />
          <div className="relative">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-fuchsia-100/82">
              One Ecosystem. Endless Possibilities.
            </p>
            <h1 className="mt-4 text-5xl font-black leading-none tracking-normal text-white">
              VIBE Ecosystem
            </h1>
            <p className="mt-5 text-base leading-7 text-white/74">
              VIBE CITY 不只是單一產品，而是一個結合社交、娛樂與 AI
              的生態系。我們相信未來的平台不應該只有內容，也不應該只有社交，而是讓人們在同一個生態系中建立連結、探索興趣與體驗文化。
            </p>
          </div>
        </section>

        <section className="mt-5">
          <SectionTitle>Core Ecosystem</SectionTitle>
          <div className="mt-3 grid gap-3">
            {coreItems.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-white/12 bg-white/[0.07] p-5 shadow-xl shadow-fuchsia-950/20 backdrop-blur"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-fuchsia-100/70">
                  {item.label}
                </p>
                <h2 className="mt-2 text-2xl font-black tracking-normal text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-[24px] border border-fuchsia-100/14 bg-[#22052f]/86 p-5 shadow-xl shadow-fuchsia-950/20">
          <SectionTitle>Future Ecosystem</SectionTitle>
          <p className="mt-3 text-base leading-7 text-white/74">
            以下生態系項目正在規劃中，我們將會在未來持續建立與完善 VIBE
            生態系。
          </p>
          <div className="mt-4 grid gap-3">
            {futureItems.map((item) => (
              <article
                key={item.title}
                className="rounded-[20px] border border-white/12 bg-white/[0.07] p-4"
              >
                <div className="mb-3 inline-flex rounded-full bg-fuchsia-300/14 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-fuchsia-100">
                  Planning Stage
                </div>
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/68">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <InfoSection title="Our Vision">
          <p>打造全新的：</p>
          <p className="mt-4 rounded-2xl bg-[#c77aea] px-4 py-4 text-center text-lg font-black text-[#1f0629]">
            AI × Social × Entertainment Ecosystem
          </p>
          <p className="mt-4">
            讓人們不只是使用產品，而是在 VIBE CITY 找到屬於自己的 Vibe。
          </p>
        </InfoSection>

        <InfoSection title="The Journey Has Just Begun">
          <p>
            我們將持續建立與完善 VIBE 生態系，從社交、娛樂到 AI
            服務，一步一步打造更完整的未來體驗。
          </p>
          <p className="mt-5 text-xl font-black leading-8 text-white">
            Our journey has just begun.
          </p>
        </InfoSection>

      </div>
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
