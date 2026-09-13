import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, AtSign, Compass, Download, Gamepad2, Radar, Sparkles, UserRound } from "lucide-react";
import { type CampusRoadmap } from "@/lib/campus-roadmap";
import { vibelinkLinks } from "@/lib/vibelink-links";
import styles from "./campus-roadmap.module.css";
import { CampusCommunities } from "./campus-communities";
import { InterstellarNavigation } from "./interstellar-navigation";

const icons = [Compass, Download, UserRound, AtSign, Radar, Gamepad2];

export function CampusRoadmapPage({ roadmap }: { roadmap: CampusRoadmap }) {
  return (
    <main lang="zh-Hant" className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="返回 VIBE CITY 官網">
          <Image src="/wing-logo.png" alt="" width={32} height={32} />VIBE CITY
        </Link>
        <span className={styles.edition}>{roadmap.campus.code} CAMPUS / 01</span>
      </header>
      <RoadmapHero roadmap={roadmap} />
      <RoadmapPath roadmap={roadmap} />
      <RoadmapCompletion roadmap={roadmap} />
      <footer className={styles.footer}>
        <p>Find Your Vibe.<br /><span>Build Your Campus.</span></p>
        <Link href="/">VIBE CITY <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </footer>
    </main>
  );
}

function RoadmapHero({ roadmap }: { roadmap: CampusRoadmap }) {
  return (
    <section className={styles.hero} aria-labelledby="roadmap-title">
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>{roadmap.hero.brand}</p>
        <h1 id="roadmap-title">Campus<br /><span>RoadMap</span><span className={styles.titleDot}>.</span></h1>
        <p className={styles.lead}>{roadmap.hero.lead}</p>
        <p>{roadmap.hero.intro}</p>
      </div>
      <InterstellarNavigation tag={roadmap.campus.tag} code={roadmap.campus.code} titles={roadmap.steps.map(step => step.title)} />
    </section>
  );
}

function RoadmapPath({ roadmap }: { roadmap: CampusRoadmap }) {
  return <div className={styles.path}>{roadmap.steps.map((step, index) => <RoadmapStep key={step.id} roadmap={roadmap} index={index} />)}</div>;
}

function InstructionList({ items }: { items: string[] }) {
  return <ol className={styles.instructions}>{items.map((item, index) => <li key={item}><span aria-hidden="true">{["①", "②", "③", "④", "⑤", "⑥"][index]}</span>{item}</li>)}</ol>;
}

function RoadmapStep({ roadmap, index }: { roadmap: CampusRoadmap; index: number }) {
  const step = roadmap.steps[index];
  const screenshot = roadmap.campus.screenshots?.[step.id];
  const Icon = icons[index];
  return (
    <section id={`step-${index + 1}`} tabIndex={-1} className={styles.step} aria-labelledby={`step-title-${index + 1}`}>
      <div className={styles.node} aria-hidden="true"><Icon size={23} /><span>0{index + 1}</span></div>
      <div className={styles.stepBody}>
        <p className={styles.eyebrow}>STEP 0{index + 1} / {step.label}</p>
        <h2 id={`step-title-${index + 1}`}>{step.title}</h2>
        {step.id === "interests" ? <p className={styles.exploreBadge}>自由探索</p> : null}
        <div className={styles.copy}>{step.paragraphs.map(text => <p key={text}>{text}</p>)}</div>
        {screenshot ? <Image {...screenshot} alt={screenshot.alt} className={styles.stepScreenshot} sizes="(max-width: 767px) calc(100vw - 106px), (max-width: 965px) calc(50vw - 82px), 400px" loading="lazy" /> : null}
        {step.id === "world" ? <div className={styles.features}>{roadmap.features.map(([title, body], i) => { const FeatureIcon = [Radar, AtSign, Compass][i]; return <div key={title}><FeatureIcon size={22} aria-hidden="true" /><div><h3>{title}</h3><p>{body}</p></div></div>; })}</div> : null}
        {step.id === "download" ? <DownloadLinks /> : null}
        {step.id === "profile" ? <><p className={styles.smallLabel}>MISSION</p><InstructionList items={roadmap.missions} /><aside className={styles.tip}><h3>{roadmap.tip.title}</h3><p>{roadmap.tip.body}</p></aside></> : null}
        {step.id === "tag" ? <><AtomicTagHighlight tag={roadmap.campus.tag} /><InstructionList items={roadmap.tagInstructions} /><p className={styles.welcome}>{roadmap.welcome.title}<span>{roadmap.welcome.body}</span></p></> : null}
        {step.id === "radar" ? <><PromptExamples roadmap={roadmap} /><p className={styles.equation}><strong>{roadmap.campus.tag}</strong> + 自然語言<br /><span>= 校園 AI 搜尋</span></p><InstructionList items={roadmap.radarInstructions} /></> : null}
        {step.id === "interests" ? <InterestInstructions /> : null}
        <a className={styles.next} href={index === roadmap.steps.length - 1 ? "#completion" : `#step-${index + 2}`}>{step.cta}</a>
        {step.id === "radar" ? <p className={styles.hint}><a className={styles.next} href="#step-2">返回下載區 →</a></p> : null}
      </div>
      <div className={styles.sideLabel} aria-hidden="true"><span>0{index + 1}</span>{step.label}</div>
    </section>
  );
}

function InterestInstructions() {
  return <>
    <p className={styles.hint}>先挑一個你有興趣的社群加入就好，也可以稍後再探索。</p>
    <CampusCommunities />
    <div className={styles.interestGuide}>
      <h3>如何在 App 加入社群</h3>
      <InstructionList items={["打開 Vibelink，進入 Profile。", "找到 @Atomic Tags，搜尋上方的英文標籤名稱。", "按下搜尋，點開對應社群。", "點擊「加入」；已加入者可直接繼續探索。"]} />
      <p className={styles.hint}>也可以從推薦社群或更多社群中尋找。</p>
      <h3>加入後，用 AI Radar 找同好</h3>
      <InstructionList items={["回到 AI Radar，點擊輸入欄的「@」。", "搜尋並選取剛加入的社群標籤。", "輸入想找的人的特徵，再按 Search。"]} />
      <p className={styles.hint}>先從 App 的「@」入口選取標籤，再輸入自然語言：</p>
      <ul className={styles.radarExamples} aria-label="興趣 AI Radar 搜尋範例">
        {[["@minecraft", "找喜歡生存模式、願意一起蓋基地的人"], ["@gym", "找喜歡重訓、想交流訓練的人"], ["@movie", "找喜歡科幻電影、想聊電影的人"]].map(([tag, prompt]) => <li key={tag}><p>選取 <strong>{tag}</strong></p><p>輸入「{prompt}」</p></li>)}
      </ul>
      <p className={styles.hint}>遊戲與興趣社群可能包含其他學校的朋友。</p>
      <p className={styles.hint}>社群正在累積第一批成員；暫時找不到人時，可以減少搜尋條件，或之後再回來看看。</p>
    </div>
    <p><a className={styles.button} href="#step-2">下載 Vibelink</a></p>
  </>;
}

function DownloadLinks() {
  return <div className={styles.downloads}>
    <a className={styles.button} href={vibelinkLinks.appStore} target="_blank" rel="noopener noreferrer">App Store 下載 <ArrowUpRight size={18} aria-hidden="true" /><span className={styles.srOnly}>（在新分頁開啟）</span></a>
    <a className={styles.button} href={vibelinkLinks.googlePlay} target="_blank" rel="noopener noreferrer">Google Play 下載<span className={styles.srOnly}>（在新分頁開啟）</span></a>
  </div>;
}

function AtomicTagHighlight({ tag }: { tag: string }) {
  return <div className={styles.atomicTag}><span className={styles.smallLabel}>ATOMIC NETWORK</span><strong>{tag}</strong><span className={styles.tagStatus}><span aria-hidden="true">●</span> YOUR CAMPUS. YOUR PEOPLE.</span></div>;
}

function PromptExamples({ roadmap }: { roadmap: CampusRoadmap }) {
  return <ul className={styles.prompts} aria-label="AI Radar 搜尋範例">{roadmap.prompts.map(prompt => <li key={prompt}><Sparkles size={15} aria-hidden="true" /><span>{prompt}</span></li>)}</ul>;
}

function RoadmapCompletion({ roadmap }: { roadmap: CampusRoadmap }) {
  const completion = roadmap.completion;
  return <section id="completion" tabIndex={-1} className={styles.completion} aria-label="完成 RoadMap">
    <p className={styles.eyebrow}>THE NEXT CHAPTER IS YOURS</p>
    <p className={styles.hint}>完成 App 中的探索後，展開你的校園旅程。</p>
    <details>
      <summary className={styles.button}>{completion.trigger}</summary>
      <div className={styles.completionContent}>
        <span className={styles.confetti} aria-hidden="true">🎉</span>
        <h2>{completion.title}</h2>
        {completion.paragraphs.map(text => <p key={text}>{text}</p>)}
        <div className={styles.completionEntries}>{completion.entries.map(([title, body], index) => { const EntryIcon = [Compass, Radar, AtSign][index]; return <details key={title}><summary><EntryIcon aria-hidden="true" size={24} /><span>{title}</span></summary><p>{body}</p></details>; })}</div>
      </div>
    </details>
  </section>;
}
