import Image from "next/image";
import Link from "next/link";

const problems = [
  {
    title: "比較焦慮",
    body: "用戶在大量精緻內容與社群比較中，越來越容易感到壓力與自我懷疑。",
  },
  {
    title: "孤獨感加深",
    body: "平台有很多內容與帳號，卻不一定幫助用戶找到真正有共鳴的人與社群。",
  },
  {
    title: "內容碎片化",
    body: "社交、短影音、影視娛樂、創作者、會員與文化體驗被切散在不同平台。",
  },
];

const solutions = [
  {
    title: "Vibelink",
    label: "AI 社交入口",
    body: "Vibelink 透過 AI Radar，幫助用戶用自然語言找到更適合的人、內容與社群。它不是只靠滑卡、追蹤或演算法推薦，而是讓用戶可以直接表達自己想找的 Vibe。",
  },
  {
    title: "Vibe TV",
    label: "內容與會員生態系入口",
    body: "Vibe TV 讓 VIBE CITY 從社交平台延伸出娛樂內容、影視化 IP 與創作者內容。未來將結合 Vibe 會員，打造 AI 社交 x 影音娛樂 的高價值訂閱會員方案。",
  },
];

const productFeatures = [
  {
    title: "AI Radar",
    body: "用自然語言搜尋想認識的人與 Vibe，而不是只靠滑卡或追蹤推薦。",
  },
  {
    title: "People Library",
    body: "把追蹤關係整理成更有感的社交資料夾，幫助用戶管理人際連結。",
  },
  {
    title: "Content Feed",
    body: "結合生活照、短影片與個人 Profile，形成早期社群內容池。",
  },
];

const validations = [
  {
    title: "AI Radar 是否能創造差異化社交體驗",
    body: "驗證用戶是否願意用自然語言搜尋人、內容與社群。",
  },
  {
    title: "Vibelink 是否能形成早期社群密度",
    body: "透過校園、KOL、Dcard、Threads 與實體活動，建立第一批高互動種子用戶。",
  },
  {
    title: "VIBE CITY 是否能從 App 延伸成娛樂會員品牌",
    body: "當社交入口成立後，再逐步導入 Vibe TV、會員方案與內容生態系。",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#120018] text-white">
      <section className="relative isolate min-h-screen px-5 py-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(191,75,255,0.38),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(111,66,255,0.32),transparent_30%),linear-gradient(180deg,#4c086c_0%,#230432_52%,#120018_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#120018] to-transparent" />

        <header className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <Link
            href="#"
            className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/8 px-4 py-3 shadow-2xl shadow-fuchsia-950/30 backdrop-blur"
            aria-label="VIBE CITY home"
          >
            <Image
              src="/wing-logo.png"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
              priority
            />
            <span className="text-sm font-semibold tracking-[0.24em] text-white/90">
              VIBE CITY
            </span>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/8 p-1 text-sm text-white/72 backdrop-blur sm:flex">
            <Link
              href="#vibelink"
              className="rounded-full px-4 py-2 transition hover:bg-white/12 hover:text-white"
            >
              Vibelink
            </Link>
            <Link
              href="#vision"
              className="rounded-full px-4 py-2 transition hover:bg-white/12 hover:text-white"
            >
              Vision
            </Link>
          </nav>
        </header>

        <div className="mx-auto flex min-h-[calc(100vh-96px)] w-full max-w-6xl items-center pb-20 pt-16">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex rounded-full border border-fuchsia-200/20 bg-fuchsia-200/10 px-4 py-2 text-sm font-medium text-fuchsia-100 shadow-lg shadow-fuchsia-950/30">
              AI Social x Entertainment Culture Ecosystem
            </div>

            <h1 className="text-6xl font-black leading-[0.92] tracking-normal text-white sm:text-7xl lg:text-8xl">
              VIBE CITY
            </h1>

            <p className="mt-7 max-w-3xl text-2xl font-semibold leading-snug text-fuchsia-50 sm:text-4xl">
              下一代全球最具影響力的 AI 社交 x 娛樂文化生態系
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              從 Vibelink 出發，打造結合 AI
              社交、影音內容、會員訂閱與青年娛樂文化的全球化平台。
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#vibelink"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-bold text-[#2a063d] shadow-xl shadow-fuchsia-950/30 transition hover:-translate-y-0.5 hover:bg-fuchsia-50"
              >
                Explore Vibelink
              </Link>
              <Link
                href="#vision"
                className="rounded-full border border-white/18 bg-white/10 px-6 py-3 text-center text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/16"
              >
                Investor Center
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Problem"
            title="數位社群正在失去真實連結"
            body="現在的數位社群平台，正在面臨比較焦慮、孤獨感加深與內容碎片化三個核心問題。"
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {problems.map((item) => (
              <ArticleCard key={item.title} title={item.title} body={item.body} />
            ))}
          </div>

          <p className="mt-8 rounded-3xl border border-fuchsia-200/14 bg-fuchsia-200/8 p-6 text-lg font-semibold leading-8 text-fuchsia-50 shadow-2xl shadow-fuchsia-950/20">
            市場缺少一個真正整合 AI 社交 x 娛樂文化
            的新一代 B2C 品牌。
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Solution"
            title="我們的解法：從 AI 社交入口，延伸到娛樂文化生態系"
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {solutions.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/12 bg-white/[0.07] p-7 shadow-2xl shadow-fuchsia-950/20 backdrop-blur"
              >
                <div className="mb-6 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-100">
                  {item.label}
                </div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-white/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vibelink" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/12 bg-gradient-to-br from-white/[0.11] via-fuchsia-300/[0.08] to-white/[0.04] p-6 shadow-2xl shadow-fuchsia-950/30 sm:p-10">
          <SectionIntro
            eyebrow="First Product"
            title="First Product: Vibelink"
            body="Vibelink 是 VIBE CITY 的第一個核心產品，一個以 AI Radar 為差異化入口的新型態社交 App。"
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {productFeatures.map((item) => (
              <ArticleCard key={item.title} title={item.title} body={item.body} />
            ))}
          </div>
        </div>
      </section>

      <section id="vision" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Validation"
            title="Big Vision, Small Validation"
            body="VIBE CITY 擁有全球化 AI 社交娛樂生態系的長期願景，但我們選擇從最小可驗證產品開始。"
          />

          <p className="mt-8 max-w-4xl text-lg leading-8 text-white/72">
            第一階段，我們聚焦在 Vibelink MVP、AI Radar、種子用戶與 App
            Store 上架，先驗證用戶是否真的需要一種新的 AI 社交入口。
          </p>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {validations.map((item, index) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/12 bg-[#1f052b]/82 p-6 shadow-xl shadow-fuchsia-950/20"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-fuchsia-300 text-sm font-black text-[#250330]">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold leading-7 text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/68">{item.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 rounded-3xl border border-fuchsia-200/18 bg-fuchsia-200/10 p-6 text-lg font-semibold leading-8 text-fuchsia-50">
            我們不是一次性打造龐大帝國，而是用小規模驗證，逐步證明一個全球級
            AI 社交娛樂生態系可以成立。
          </p>
        </div>
      </section>
    </main>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-fuchsia-200/80">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-black leading-tight tracking-normal text-white sm:text-5xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-5 text-lg leading-8 text-white/70">{body}</p>
      ) : null}
    </div>
  );
}

function ArticleCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-3xl border border-white/12 bg-white/[0.06] p-6 shadow-xl shadow-fuchsia-950/20 backdrop-blur">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/68">{body}</p>
    </article>
  );
}
