import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    src: "/vibelink-ai-radar.png",
    alt: "VIBELINK AI Radar input screen",
  },
  {
    src: "/vibelink-people-match.png",
    alt: "VIBELINK AI Radar people recommendation screen",
  },
  {
    src: "/vibelink-feed-wall.png",
    alt: "VIBELINK feed photo wall screen",
  },
];

const features = [
  {
    title: "AI Radar",
    body: "輸入一句話，AI 幫你找到適合認識的人。",
  },
  {
    title: "People Library",
    body: "整理你追蹤、收藏與互動過的人。",
  },
  {
    title: "Feed",
    body: "分享生活貼文、照片與短影音。",
  },
  {
    title: "Message",
    body: "與你感興趣的人直接開始聊天。",
  },
];

const progress = [
  "MVP Beta 測試中",
  "iOS TestFlight 準備中",
  "App Store 即將上線",
  "Android 版本規劃中",
];

export default function VibelinkPage() {
  return (
    <main className="min-h-screen bg-[#120018] px-5 py-5 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-40px)] w-full max-w-[430px] flex-col">
        <Link
          href="/"
          className="mb-8 inline-flex w-fit items-center rounded-full border border-white/12 bg-white/[0.08] px-4 py-2 text-sm font-bold text-white/86 shadow-lg shadow-fuchsia-950/20 transition hover:bg-white/[0.14]"
        >
          ← Back
        </Link>

        <section className="relative overflow-hidden rounded-[28px] border border-white/12 bg-[linear-gradient(145deg,#5b0d80_0%,#2c073e_48%,#16001f_100%)] p-6 shadow-2xl shadow-fuchsia-950/35">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-fuchsia-300/20 to-transparent" />
          <div className="relative">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-fuchsia-100/82">
              Find Your Vibe
            </p>
            <h1 className="mt-4 text-5xl font-black leading-none tracking-normal text-white">
              VIBELINK
            </h1>
            <p className="mt-5 text-base leading-7 text-white/74">
              VIBELINK 是 VIBE CITY 的第一個核心產品，一個結合 AI
              雷達、內容分享、People Library 與即時訊息的下一代社交平台。
            </p>
          </div>
        </section>

        <section className="mt-5">
        
          <div className="-mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {galleryImages.map((image, index) => (
              <figure
                key={image.src}
                className="relative aspect-[9/16] w-[72%] shrink-0 snap-center overflow-hidden rounded-[26px] border border-white/12 bg-white/[0.06] shadow-2xl shadow-fuchsia-950/30 first:ml-0 last:mr-5"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 430px) 70vw, 290px"
                  className="object-cover"
                  priority={index === 0}
                />
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-5 grid gap-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[24px] border border-white/12 bg-white/[0.07] p-5 shadow-xl shadow-fuchsia-950/20 backdrop-blur"
            >
              <h2 className="text-xl font-black tracking-normal text-white">
                {feature.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/70">
                {feature.body}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-5 rounded-[24px] border border-fuchsia-100/14 bg-[#22052f]/86 p-5 shadow-xl shadow-fuchsia-950/20">
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-fuchsia-100/80">
            目前進度
          </h2>
          <div className="mt-4 grid gap-3">
            {progress.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white/[0.07] px-4 py-3 text-sm font-semibold text-white/82"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-300 shadow-[0_0_18px_rgba(240,171,252,0.9)]" />
                {item}
              </div>
            ))}
          </div>
        </section>

        <a
          href="https://vibelink-beta-access.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex h-20 items-center justify-center rounded-[30px] bg-[#c77aea] px-6 text-xl font-black text-[#1f0629] shadow-2xl shadow-fuchsia-950/35 transition hover:-translate-y-0.5 hover:bg-[#d68bf3] active:translate-y-0"
        >
          加入 Beta
        </a>
      </div>
    </main>
  );
}
