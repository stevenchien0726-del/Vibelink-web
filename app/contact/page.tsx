"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useI18n } from "@/lib/i18n";

export default function ContactPage() {
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

        <section className="relative overflow-hidden rounded-[28px] border border-white/12 bg-[linear-gradient(145deg,#5b0d80_0%,#2c073e_48%,#16001f_100%)] p-6 shadow-2xl shadow-fuchsia-950/35">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-fuchsia-300/20 to-transparent" />
          <div className="relative">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-fuchsia-100/82">
              {t.contact.subtitle}
            </p>
            <h1 className="mt-4 text-5xl font-black leading-none tracking-normal text-white">
              {t.contact.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-white/74">
              {t.contact.body}
            </p>
          </div>
        </section>

        <section className="mt-5 grid gap-3">
          {t.contact.items.map(([label, value]) => (
            <a
              key={label}
              href={
                label === "Instagram"
                  ? "https://www.instagram.com/vibe_city_official"
                  : "mailto:stevenchien0726@gmail.com"
              }
              target={label === "Instagram" ? "_blank" : undefined}
              rel={label === "Instagram" ? "noopener noreferrer" : undefined}
              className="rounded-[24px] border border-white/12 bg-white/[0.07] p-5 shadow-xl shadow-fuchsia-950/20 backdrop-blur transition hover:bg-white/[0.1]"
            >
              <h2 className="text-sm font-black uppercase tracking-[0.14em] text-fuchsia-100/72">
                {label}
              </h2>
              <p className="mt-2 break-words text-base font-bold leading-6 text-white/82">
                {value}
              </p>
            </a>
          ))}
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
