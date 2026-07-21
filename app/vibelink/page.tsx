"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useI18n } from "@/lib/i18n";

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

export default function VibelinkPage() {
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

        <Hero title={t.vibelink.title} subtitle={t.vibelink.subtitle}>
          {t.vibelink.body}
        </Hero>

        <section className="mt-5">
          <div className="mb-3 flex items-end justify-between gap-3 px-1">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-fuchsia-100/82">
              {t.vibelink.preview}
            </h2>
            <p className="text-xs font-semibold text-white/48">
              {t.vibelink.swipe}
            </p>
          </div>
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
          {t.vibelink.features.map(([title, body]) => (
            <InfoCard key={title} title={title} body={body} />
          ))}
        </section>

        <section className="mt-5 rounded-[24px] border border-fuchsia-100/14 bg-[#22052f]/86 p-5 shadow-xl shadow-fuchsia-950/20">
          <SectionTitle>{t.vibelink.progressTitle}</SectionTitle>
          <div className="mt-4 grid gap-3">
            {t.vibelink.progress.map((item) => (
              <div
                key={item.title}
                className="flex min-w-0 items-center justify-between gap-3 rounded-2xl bg-white/[0.07] px-4 py-3 text-sm font-semibold text-white/82"
              >
                <span className="min-w-0 truncate font-bold text-white/90">
                  {item.title}
                </span>
                <span
                  className={`shrink-0 whitespace-nowrap rounded-full border px-3 py-1 text-xs font-black ${
                    item.tone === "available"
                      ? "border-fuchsia-200/35 bg-fuchsia-300/20 text-fuchsia-50 shadow-[0_0_18px_rgba(232,121,249,0.18)]"
                      : item.tone === "complete"
                        ? "border-emerald-200/25 bg-emerald-300/10 text-emerald-100"
                        : "border-white/15 bg-white/[0.06] text-white/65"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        <a
          href="https://apps.apple.com/tw/app/vibelink-social/id6778701913"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex h-20 w-full items-center justify-center rounded-[30px] bg-[#c77aea] px-6 text-center text-xl font-black text-[#1f0629] shadow-2xl shadow-fuchsia-950/35 transition hover:-translate-y-0.5 hover:bg-[#d68bf3] active:translate-y-0 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-100 focus-visible:ring-offset-2 focus-visible:ring-offset-[#120018]"
        >
          {t.vibelink.cta}
        </a>
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
        <p className="text-sm font-black uppercase tracking-[0.22em] text-fuchsia-100/82">
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

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-[24px] border border-white/12 bg-white/[0.07] p-5 shadow-xl shadow-fuchsia-950/20 backdrop-blur">
      <h2 className="text-xl font-black tracking-normal text-white">{title}</h2>
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
