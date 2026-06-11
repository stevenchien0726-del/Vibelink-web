"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useI18n } from "@/lib/i18n";

export default function VibeTvPage() {
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

        <Hero title={t.vibeTv.title} subtitle={t.vibeTv.subtitle}>
          {t.vibeTv.body}
        </Hero>

        <InfoSection title={t.vibeTv.visionTitle}>
          <p>{t.vibeTv.vision}</p>
        </InfoSection>

        <section className="mt-5">
          <SectionTitle>{t.vibeTv.directionTitle}</SectionTitle>
          <div className="mt-3 grid gap-3">
            {t.vibeTv.directions.map(([title, body]) => (
              <InfoCard key={title} title={title} body={body} />
            ))}
          </div>
        </section>

        <InfoSection title={t.vibeTv.ecosystemTitle}>
          <p>{t.vibeTv.ecosystem}</p>
          <div className="mt-5 grid gap-3">
            {t.vibeTv.ecosystemCards.map(([title, body]) => (
              <article
                key={title}
                className="rounded-[20px] border border-fuchsia-100/12 bg-white/[0.07] p-4"
              >
                <h3 className="text-base font-black text-white">{title}</h3>
                <p className="mt-1 text-sm font-semibold text-white/64">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </InfoSection>

        <section className="mt-5 rounded-[24px] border border-fuchsia-100/14 bg-[#22052f]/86 p-5 shadow-xl shadow-fuchsia-950/20">
          <SectionTitle>{t.vibeTv.membershipTitle}</SectionTitle>
          <p className="mt-3 text-base leading-7 text-white/74">
            {t.vibeTv.membershipIntro}
          </p>
          <div className="mt-4 grid gap-3">
            {t.vibeTv.membership.map((item) => (
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
            {t.vibeTv.highlight}
          </p>
        </section>

        <InfoSection title={t.vibeTv.advantageTitle}>
          <p>{t.vibeTv.advantage}</p>
        </InfoSection>

        <section className="mt-5 rounded-[28px] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.1),rgba(199,122,234,0.1),rgba(255,255,255,0.04))] p-6 text-center shadow-2xl shadow-fuchsia-950/25">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-fuchsia-100/82">
            {t.vibeTv.comingTitle}
          </p>
          <p className="mt-4 text-base leading-7 text-white/74">
            {t.vibeTv.coming}
          </p>
          <p className="mt-6 text-xl font-black leading-8 text-white">
            {t.vibeTv.footer[0]}
            <br />
            {t.vibeTv.footer[1]}
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

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-[24px] border border-white/12 bg-white/[0.07] p-5 shadow-xl shadow-fuchsia-950/20 backdrop-blur">
      <h3 className="text-xl font-black tracking-normal text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/70">{body}</p>
    </article>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-black uppercase tracking-[0.2em] text-fuchsia-100/80">
      {children}
    </h2>
  );
}
