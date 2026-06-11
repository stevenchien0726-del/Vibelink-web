"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useI18n } from "@/lib/i18n";

type InvestorAccordionItem = {
  title: string;
  lead?: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  contacts?: readonly (readonly [string, string])[];
};

export default function InvestorPage() {
  const { t } = useI18n();
  const router = useRouter();
  const [isClosing, setIsClosing] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>("0");

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

        <section className="relative overflow-hidden rounded-[28px] border border-white/12 bg-[linear-gradient(145deg,#5b0d80_0%,#2c073e_48%,#16001f_100%)] p-6 shadow-2xl shadow-fuchsia-950/35">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-fuchsia-300/20 to-transparent" />
          <div className="absolute -right-16 top-14 h-40 w-40 rounded-full bg-fuchsia-400/20 blur-3xl" />
          <div className="relative">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-fuchsia-100/82">
              {t.investor.titleEn}
            </p>
            <h1 className="mt-4 text-5xl font-black leading-none tracking-normal text-white">
              {t.investor.titleZh}
            </h1>
            <p className="mt-4 text-lg font-black leading-7 text-white">
              {t.investor.subtitle}
            </p>
            <div className="mt-5 space-y-4 text-base leading-7 text-white/74">
              <p>{t.investor.intro}</p>
              <p>{t.investor.belief}</p>
              <p className="rounded-2xl bg-[#c77aea] px-4 py-4 text-center text-lg font-black text-[#1f0629]">
                {t.investor.highlight}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-5 grid gap-3">
          {t.investor.accordions.map((item, index) => (
            <AccordionCard
              key={item.title}
              title={item.title}
              isOpen={openItem === String(index)}
              onToggle={() =>
                setOpenItem((current) =>
                  current === String(index) ? null : String(index),
                )
              }
            >
              <AccordionContent item={item} />
            </AccordionCard>
          ))}
        </section>

        <footer className="mt-5 rounded-[28px] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.1),rgba(199,122,234,0.1),rgba(255,255,255,0.04))] p-6 text-center shadow-2xl shadow-fuchsia-950/25">
          <p className="text-2xl font-black tracking-normal text-white">
            VIBE CITY
          </p>
          <p className="mt-3 text-sm font-semibold leading-6 text-white/68">
            {t.common.footerTagline}
          </p>
        </footer>
      </motion.div>
    </main>
  );
}

function AccordionContent({
  item,
}: {
  item: InvestorAccordionItem;
}) {
  const contacts = item.contacts;

  if (contacts) {
    return (
      <div className="grid gap-3">
        {contacts.map(([label, value]) =>
          label === "Instagram" ? (
            <a
              key={label}
              href="https://www.instagram.com/vibe_city_official"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 transition hover:bg-white/[0.1]"
            >
              <p className="text-xs font-black uppercase tracking-[0.14em] text-fuchsia-100/72">
                {label}
              </p>
              <p className="mt-1 text-sm font-bold text-white/82">{value}</p>
            </a>
          ) : (
            <a
              key={label}
              href="mailto:stevenchien0726@gmail.com"
              className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 transition hover:bg-white/[0.1]"
            >
              <p className="text-xs font-black uppercase tracking-[0.14em] text-fuchsia-100/72">
                {label}
              </p>
              <p className="mt-1 break-words text-sm font-bold text-white/82">
                {value}
              </p>
            </a>
          ),
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {"lead" in item && item.lead ? (
        <p className="text-lg font-black text-white">{item.lead}</p>
      ) : null}
      {"paragraphs" in item && item.paragraphs
        ? item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
        : null}
      {"bullets" in item && item.bullets ? (
        <ul className="grid gap-2">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_14px_rgba(240,171,252,0.9)]" />
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
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

function AccordionCard({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <article className="overflow-hidden rounded-[24px] border border-white/12 bg-white/[0.07] shadow-xl shadow-fuchsia-950/20 backdrop-blur">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
        aria-expanded={isOpen}
      >
        <h2 className="text-lg font-black tracking-normal text-white">
          {title}
        </h2>
        <span
          className={`h-3 w-3 shrink-0 rotate-45 border-white/86 transition-transform duration-300 ${
            isOpen
              ? "translate-y-0.5 rotate-[225deg] border-b-2 border-r-2"
              : "-translate-y-0.5 border-b-2 border-r-2"
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/10 px-5 pb-5 pt-4 text-sm leading-6 text-white/72">
              {children}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
