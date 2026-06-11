"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useI18n } from "@/lib/i18n";

export default function VibeEcosystemPage() {
  const { t } = useI18n();
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
        <BackButton label={t.common.back} onClick={handleBack} />

        <Hero title={t.ecosystem.title} subtitle={t.ecosystem.subtitle}>
          {t.ecosystem.body}
        </Hero>

        <section className="mt-5">
          <SectionTitle>{t.ecosystem.coreTitle}</SectionTitle>
          <div className="mt-3 grid gap-3">
            {t.ecosystem.core.map(([title, label, body]) => (
              <article
                key={title}
                className="rounded-[24px] border border-white/12 bg-white/[0.07] p-5 shadow-xl shadow-fuchsia-950/20 backdrop-blur"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-fuchsia-100/70">
                  {label}
                </p>
                <h2 className="mt-2 text-2xl font-black tracking-normal text-white">
                  {title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/70">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-[24px] border border-fuchsia-100/14 bg-[#22052f]/86 p-5 shadow-xl shadow-fuchsia-950/20">
          <SectionTitle>{t.ecosystem.futureTitle}</SectionTitle>
          <p className="mt-3 text-base leading-7 text-white/74">
            {t.ecosystem.futureIntro}
          </p>
          <div className="mt-4 grid gap-3">
            {t.ecosystem.future.map(([title, body]) => (
              <article
                key={title}
                className="rounded-[20px] border border-white/12 bg-white/[0.07] p-4"
              >
                <div className="mb-3 inline-flex rounded-full bg-fuchsia-300/14 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-fuchsia-100">
                  {t.common.planning}
                </div>
                <h3 className="text-lg font-black text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/68">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <InfoSection title={t.ecosystem.visionTitle}>
          <p>{t.ecosystem.visionLead}</p>
          <p className="mt-4 rounded-2xl bg-[#c77aea] px-4 py-4 text-center text-lg font-black text-[#1f0629]">
            {t.ecosystem.visionHighlight}
          </p>
          <p className="mt-4">{t.ecosystem.visionBody}</p>
        </InfoSection>

        <InfoSection title={t.ecosystem.journeyTitle}>
          <p>{t.ecosystem.journey}</p>
          <p className="mt-5 text-xl font-black leading-8 text-white">
            {t.ecosystem.journeyHighlight}
          </p>
        </InfoSection>

        <section className="mt-5 rounded-[28px] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.1),rgba(199,122,234,0.1),rgba(255,255,255,0.04))] p-6 text-center shadow-2xl shadow-fuchsia-950/25">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-fuchsia-100/82">
            {t.ecosystem.comingTitle}
          </p>
          <p className="mt-4 text-xl font-black leading-8 text-white">
            {t.ecosystem.coming}
          </p>
        </section>
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

function Hero({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-white/12 bg-[linear-gradient(145deg,#5b0d80_0%,#2c073e_48%,#16001f_100%)] p-6 shadow-2xl shadow-fuchsia-950/35">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-fuchsia-300/20 to-transparent" />
      <div className="absolute -right-14 top-12 h-36 w-36 rounded-full bg-fuchsia-400/20 blur-3xl" />
      <div className="relative">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-fuchsia-100/82">
          {subtitle}
        </p>
        <h1 className="mt-4 text-5xl font-black leading-none tracking-normal text-white">
          {title}
        </h1>
        <p className="mt-5 text-base leading-7 text-white/74">{children}</p>
      </div>
    </section>
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
