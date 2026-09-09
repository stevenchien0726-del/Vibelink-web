import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, AtSign, Compass, Download, Radar, Sparkles, UserRound } from "lucide-react";
import { type CampusRoadmap } from "@/lib/campus-roadmap";
import { vibelinkLinks } from "@/lib/vibelink-links";
import styles from "./campus-roadmap.module.css";
import { InterstellarNavigation } from "./interstellar-navigation";

const icons = [Compass, Download, UserRound, AtSign, Radar];

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
        <a className={styles.button} href="#step-1">{roadmap.hero.cta} <span aria-hidden="true">↘</span></a>
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
  const Icon = icons[index];
  return (
    <section id={`step-${index + 1}`} tabIndex={-1} className={styles.step} aria-labelledby={`step-title-${index + 1}`}>
      <div className={styles.node} aria-hidden="true"><Icon size={23} /><span>0{index + 1}</span></div>
      <div className={styles.stepBody}>
        <p className={styles.eyebrow}>STEP 0{index + 1} / {step.label}</p>
        <h2 id={`step-title-${index + 1}`}>{step.title}</h2>
        <div className={styles.copy}>{step.paragraphs.map(text => <p key={text}>{text}</p>)}</div>
        {step.id === "world" ? <div className={styles.features}>{roadmap.features.map(([title, body], i) => { const FeatureIcon = [Radar, AtSign, Compass][i]; return <div key={title}><FeatureIcon size={22} aria-hidden="true" /><div><h3>{title}</h3><p>{body}</p></div></div>; })}</div> : null}
        {step.id === "download" ? <DownloadLinks /> : null}
        {step.id === "profile" ? <><p className={styles.smallLabel}>MISSION</p><InstructionList items={roadmap.missions} /><aside className={styles.tip}><h3>{roadmap.tip.title}</h3><p>{roadmap.tip.body}</p></aside></> : null}
        {step.id === "tag" ? <><AtomicTagHighlight tag={roadmap.campus.tag} /><InstructionList items={roadmap.tagInstructions} /><p className={styles.welcome}>{roadmap.welcome.title}<span>{roadmap.welcome.body}</span></p></> : null}
        {step.id === "radar" ? <><PromptExamples roadmap={roadmap} /><p className={styles.equation}><strong>{roadmap.campus.tag}</strong> + 自然語言<br /><span>= 校園 AI 搜尋</span></p><InstructionList items={roadmap.radarInstructions} /></> : null}
        <a className={index === 4 ? styles.button : styles.next} href={`#step-${index === 4 ? 2 : index + 2}`} aria-describedby={index === 4 ? "radar-download-hint" : undefined}>{step.cta}</a>
        {index === 4 ? <p id="radar-download-hint" className={styles.hint}>{roadmap.radarHint}</p> : null}
      </div>
      <div className={styles.sideLabel} aria-hidden="true"><span>0{index + 1}</span>{step.label}</div>
    </section>
  );
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
  return <section className={styles.completion} aria-label="完成 RoadMap">
    <p className={styles.eyebrow}>THE NEXT CHAPTER IS YOURS</p>
    <p className={styles.hint}>完成 App 中的探索後，展開你的校園旅程。</p>
    <details>
      <summary className={styles.button}>{completion.trigger}</summary>
      <div className={styles.completionContent}>
        <span className={styles.confetti} aria-hidden="true">🎉</span>
        <h2>{completion.title}</h2>
        {completion.paragraphs.map(text => <p key={text}>{text}</p>)}
        <div className={styles.completionEntries}>{completion.entries.map(([title, body], index) => { const EntryIcon = [Compass, Radar, AtSign][index]; return <details key={title}><summary><EntryIcon aria-hidden="true" size={24} /><span>{title}</span><span aria-hidden="true">↗</span></summary><p>{body}</p></details>; })}</div>
      </div>
    </details>
  </section>;
}
