"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useI18n } from "@/lib/i18n";

const ecosystemItems = [
  { title: "Vibelink" },
  { title: "AI Radar" },
  { title: "VIBE TV", status: "Planning" },
  { title: "VIBE CLUB", status: "Planning" },
  { title: "Angel Entertainment", status: "Planning" },
  { title: "VIBE PURPLE", status: "Planning" },
];

export default function AboutPage() {
  const { t } = useI18n();
  const router = useRouter();
  const [isClosing, setIsClosing] = useState(false);

  const handleBack = () => {
    if (isClosing) return;
    setIsClosing(true);
  };

  const contacts = [
    
    ["Business & Partnership", "stevenchien0726@gmail.com", "mailto:stevenchien0726@gmail.com"],
    ["Investment Opportunities", "stevenchien0726@gmail.com", "mailto:stevenchien0726@gmail.com"],
    ["Instagram", "@vibe_city_official", "https://www.instagram.com/vibe_city_official"],
  ];

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
        <BackButton label={t.common.back} onClick={handleBack} />

        <section className="relative overflow-hidden rounded-[28px] border border-white/12 bg-[linear-gradient(145deg,#5b0d80_0%,#2c073e_48%,#16001f_100%)] p-6 shadow-2xl shadow-fuchsia-950/35">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-fuchsia-300/20 to-transparent" />
          <div className="absolute -right-16 top-16 h-40 w-40 rounded-full bg-fuchsia-400/20 blur-3xl" />
          <div className="relative">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-fuchsia-100/82">
              {t.about.subtitle}
            </p>
            <h1 className="mt-4 text-5xl font-black leading-none tracking-normal text-white">
              {t.about.title}
            </h1>
            <div className="mt-5 space-y-4 text-base leading-7 text-white/74">
              {t.about.paragraphs.map((item, index) => (
                <p
                  key={item}
                  className={
                    index === t.about.paragraphs.length - 1
                      ? "font-black text-white"
                      : undefined
                  }
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <InfoSection title={t.about.missionTitle}>
          <p className="text-2xl font-black leading-8 text-white">
            {t.about.missionLead.map((item) => (
              <span key={item}>
                {item}
                <br />
              </span>
            ))}
          </p>
          <p className="mt-4">{t.about.mission}</p>
        </InfoSection>

        <section className="mt-5 rounded-[24px] border border-fuchsia-100/14 bg-[#22052f]/86 p-5 shadow-xl shadow-fuchsia-950/20">
          <SectionTitle>{t.about.ecosystemTitle}</SectionTitle>
          <div className="mt-4 grid gap-3">
            {ecosystemItems.map((item) => (
              <article
                key={item.title}
                className="rounded-[20px] border border-white/12 bg-white/[0.07] p-4"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                {item.status ? (
                  <p className="mt-2 inline-flex rounded-full bg-fuchsia-300/14 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-fuchsia-100">
                    {item.status}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-white/64">
            {t.about.ecosystemMore}
          </p>
        </section>

        <section className="mt-5 rounded-[24px] border border-white/12 bg-white/[0.07] p-5 shadow-xl shadow-fuchsia-950/20 backdrop-blur">
          <SectionTitle>{t.about.contactTitle}</SectionTitle>
          <div className="mt-4 grid gap-3">
            {contacts.map(([label, value, href]) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-[20px] border border-white/10 bg-white/[0.06] p-4 transition hover:bg-white/[0.1]"
              >
                <p className="text-xs font-black uppercase tracking-[0.14em] text-fuchsia-100/72">
                  {label}
                </p>
                <p className="mt-2 break-words text-sm font-bold leading-6 text-white/82">
                  {value}
                </p>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-5 rounded-[28px] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.1),rgba(199,122,234,0.1),rgba(255,255,255,0.04))] p-6 text-center shadow-2xl shadow-fuchsia-950/25">
          <p className="text-2xl font-black tracking-normal text-white">
            {t.about.footerTitle}
          </p>
          <p className="mt-3 text-sm font-semibold leading-6 text-white/68">
            {t.common.footerTagline}
          </p>
        </footer>
      </motion.div>
    </main>
  );
}

function BackButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/12 bg-white/[0.08] px-5 py-3 text-base font-bold text-white/86 shadow-lg shadow-fuchsia-950/20 transition hover:bg-white/[0.14]"
    >
      <span className="h-3.5 w-3.5 rotate-45 border-b-2 border-l-2 border-white/86" />
      {label}
    </button>
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
