"use client";

import { useCallback, useState } from "react";
import {
  AnimatePresence,
  motion,
  type Transition,
  type Variants,
} from "framer-motion";
import { Globe2, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type Locale, useI18n } from "@/lib/i18n";

const menuPanelVariants: Variants = {
  closed: { opacity: 0, y: -10 },
  open: { opacity: 1, y: 0 },
};

const menuPanelTransition: Transition = {
  duration: 0.18,
  ease: [0.22, 1, 0.36, 1],
};

export default function HomePage() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const scrollToTop = () => {
    const startPosition = window.scrollY;
    const duration = 500;
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(0, startPosition * (1 - progress));

      if (progress < 1) window.requestAnimationFrame(animateScroll);
    };

    window.requestAnimationFrame(animateScroll);
  };

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    const headerOffset = 80;
    const startPosition = window.scrollY;
    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;
    const distance = targetPosition - startPosition;
    const duration = 500;
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(0, startPosition + distance * progress);

      if (progress < 1) window.requestAnimationFrame(animateScroll);
    };

    window.requestAnimationFrame(animateScroll);
  };

  const selectLocale = (nextLocale: Locale) => {
    setLocale(nextLocale);
    setLanguageOpen(false);
  };

  const closeMenu = useCallback(() => {
    setOpen(false);
    setLanguageOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setLanguageOpen(false);
    setOpen((current) => !current);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#120018] text-white">
      <div className="pointer-events-auto fixed inset-x-0 top-0 z-[99999] w-full px-4 pt-4 sm:px-8 lg:px-12">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
          <button
            type="button"
            onClick={scrollToTop}
            className="flex h-[68px] w-[192px] items-center justify-center gap-2 rounded-[22px] border border-black/5 bg-[#e5e5e5] px-4 shadow-2xl shadow-fuchsia-950/30 transition active:scale-95 sm:w-[210px]"
            aria-label="Back to VIBE CITY home"
          >
            <Image
              src="/wing-logo.png"
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 shrink-0 object-contain"
              priority
            />
            <span className="text-lg font-black tracking-normal text-[#1f1f1f]">
              VIBE CITY
            </span>
          </button>

          <button
            type="button"
            onClick={toggleMenu}
            className="flex h-[64px] w-[132px] items-center justify-center gap-3 rounded-[22px] bg-[#b76bd6]/55 text-[17px] font-bold text-white shadow-2xl shadow-fuchsia-950/30 backdrop-blur transition active:scale-95 sm:w-[150px]"
            aria-expanded={open}
            aria-controls="home-menu"
          >
            <Menu size={26} strokeWidth={2.4} />
            {open ? t.common.close : t.common.menu}
          </button>
        </header>

        <AnimatePresence initial={false}>
          {open ? (
            <>
              <motion.button
                type="button"
                aria-label="Close menu"
                className="fixed inset-0 z-[99997] cursor-default bg-transparent"
                onClick={closeMenu}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.12 }}
              />

              <div className="fixed left-1/2 top-[108px] z-[99998] w-[78%] max-w-[330px] -translate-x-1/2 sm:max-w-[460px]">
                <motion.nav
                  id="home-menu"
                  className="relative transform-gpu rounded-[24px] bg-[#b98bd0] px-7 py-8 text-center text-[#1f1f1f] shadow-2xl shadow-fuchsia-950/35 will-change-transform"
                  variants={menuPanelVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={menuPanelTransition}
                >
                  <div className="hidden">
                    <button
                      type="button"
                      onClick={() => setLanguageOpen((current) => !current)}
                      className="flex items-center gap-2 rounded-full border border-[#5f496b]/30 bg-white/20 px-3 py-2 text-sm font-black text-[#1f1f1f]"
                      aria-expanded={languageOpen}
                    >
                      <Globe2 size={16} strokeWidth={2.4} />
                      {t.language.current}
                      <span className="text-xs">▼</span>
                    </button>

                    <AnimatePresence>
                      {languageOpen ? (
                        <motion.div
                          className="absolute right-0 mt-2 w-36 overflow-hidden rounded-2xl border border-[#5f496b]/20 bg-[#efe3f4] py-2 text-left shadow-xl"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                        >
                          {(["zh", "en"] as const).map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => selectLocale(item)}
                              className="flex w-full items-center gap-2 px-4 py-2 text-sm font-black transition hover:bg-white/60"
                            >
                              <span className="w-4">
                                {locale === item ? "✓" : ""}
                              </span>
                              {item === "zh" ? t.language.zh : t.language.en}
                            </button>
                          ))}
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>

                  <div className="flex flex-col gap-6 text-[21px] font-black tracking-wide">
                    <Link href="/vibelink" onClick={closeMenu}>
                      {t.menu.vibelink}
                    </Link>
                    <Link href="/vibe-tv" onClick={closeMenu}>
                      {t.menu.tv}
                    </Link>
                    <a
                      href="https://vibe-membership-web.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                    >
                      {t.menu.membership}
                    </a>
                    <Link
                      href="/vibe-ecosystem"
                      onClick={closeMenu}
                    >
                      {t.menu.ecosystem}
                    </Link>
                    <Link href="/about" onClick={closeMenu}>
                      {t.menu.about}
                    </Link>
                    <Link href="/investor" onClick={closeMenu}>
                      {t.menu.investor}
                    </Link>
                    
                  </div>

                  <div className="relative mx-auto mt-7 flex w-fit flex-col items-center">
                    <button
                      type="button"
                      onClick={() => setLanguageOpen((current) => !current)}
                      className="flex items-center gap-2 rounded-full border border-[#5f496b]/30 bg-white/20 px-4 py-2 text-sm font-black text-[#1f1f1f]"
                      aria-expanded={languageOpen}
                    >
                      <Globe2 size={16} strokeWidth={2.4} />
                      {t.language.current}
                      <span className="text-xs">▼</span>
                    </button>

                    <AnimatePresence>
                      {languageOpen ? (
                        <motion.div
                          className="absolute left-1/2 top-full z-10 mt-2 w-36 -translate-x-1/2 overflow-hidden rounded-2xl border border-[#5f496b]/20 bg-[#efe3f4] py-2 text-left shadow-xl"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                        >
                          {(["zh", "en"] as const).map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => selectLocale(item)}
                              className="flex w-full items-center gap-2 px-4 py-2 text-sm font-black transition hover:bg-white/60"
                            >
                              <span className="w-4">
                                {locale === item ? "✓" : ""}
                              </span>
                              {item === "zh" ? t.language.zh : t.language.en}
                            </button>
                          ))}
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </motion.nav>
              </div>
            </>
          ) : null}
        </AnimatePresence>
      </div>

      <section className="relative isolate px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(191,75,255,0.38),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(111,66,255,0.32),transparent_30%),linear-gradient(180deg,#4c086c_0%,#230432_52%,#120018_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#120018] to-transparent" />

        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-black leading-[0.92] tracking-normal text-white sm:text-7xl lg:text-8xl">
              {t.home.heroTitle}
            </h1>
            <p className="mt-7 max-w-3xl text-2xl font-semibold leading-snug text-fuchsia-50 sm:text-4xl">
              {t.home.heroSubtitle}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              {t.home.heroBody}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: t.home.navButtons.problem, id: "problem" },
                { label: t.home.navButtons.solution, id: "solution" },
                { label: t.home.navButtons.product, id: "vibelink" },
                { label: t.home.navButtons.validation, id: "vision" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-full border border-white/12 bg-white/[0.08] px-4 py-2 text-sm font-semibold text-white/80 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/[0.14] hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative mt-10 -mx-4 overflow-hidden sm:-mx-8 lg:-mx-12">
            <div className="absolute -inset-4 bg-fuchsia-500/18 blur-3xl" />
            <figure className="relative overflow-hidden">
              <Image
                src="/vibe-city-home-ecosystem.png"
                alt="VIBE CITY AI social entertainment ecosystem"
                width={1024}
                height={1536}
                className="h-auto w-full object-cover"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#120018_0%,transparent_10%,transparent_88%,#120018_100%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#120018_0%,transparent_9%,transparent_91%,#120018_100%)]" />
            </figure>
          </div>
        </div>
      </section>

      <section id="problem" className="scroll-mt-28 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow={t.home.problem.eyebrow}
            title={t.home.problem.title}
            body={t.home.problem.body}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {t.home.problem.cards.map((item) => (
              <ArticleCard key={item.title} title={item.title} body={item.body} />
            ))}
          </div>
          <p className="mt-8 rounded-3xl border border-fuchsia-200/14 bg-fuchsia-200/8 p-6 text-lg font-semibold leading-8 text-fuchsia-50 shadow-2xl shadow-fuchsia-950/20">
            {t.home.problem.note}
          </p>
        </div>
      </section>

      <section id="solution" className="scroll-mt-28 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow={t.home.solution.eyebrow}
            title={t.home.solution.title}
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {t.home.solution.cards.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/12 bg-white/[0.07] p-7 shadow-2xl shadow-fuchsia-950/20 backdrop-blur"
              >
                <div className="mb-6 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-100">
                  {item.label}
                </div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-white/70">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="vibelink" className="scroll-mt-28 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/12 bg-gradient-to-br from-white/[0.11] via-fuchsia-300/[0.08] to-white/[0.04] p-6 shadow-2xl shadow-fuchsia-950/30 sm:p-10">
          <SectionIntro
            eyebrow={t.home.product.eyebrow}
            title={t.home.product.title}
            body={t.home.product.body}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {t.home.product.cards.map((item) => (
              <ArticleCard key={item.title} title={item.title} body={item.body} />
            ))}
          </div>
        </div>
      </section>

      <section id="vision" className="scroll-mt-28 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow={t.home.validation.eyebrow}
            title={t.home.validation.title}
            body={t.home.validation.body}
          />
          <p className="mt-8 max-w-4xl text-lg leading-8 text-white/72">
            {t.home.validation.intro}
          </p>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {t.home.validation.cards.map((item, index) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/12 bg-[#1f052b]/82 p-6 shadow-xl shadow-fuchsia-950/20"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-fuchsia-300 text-sm font-black text-[#250330]">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold leading-7 text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
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
      {body ? <p className="mt-5 text-lg leading-8 text-white/70">{body}</p> : null}
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
