'use client'

import { useState } from 'react'
import { Menu, LogIn, Globe2 } from 'lucide-react'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

export default function HomePage() {
  const [open, setOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#2a063d] text-white">
      <section className="mx-auto min-h-screen w-full max-w-[430px] bg-gradient-to-b from-[#7a0b8f] via-[#4b0869] to-[#16001f] px-4 pt-4">
        <header className="flex items-center justify-between">
          <div
  className="
    flex
    h-[55px]
    w-[200px]
    items-center
    gap-4
    rounded-[16px]
    bg-[linear-gradient(to_right,#b8b8b8_0%,#b3b3b3_5%,#adadad_10%,#a7a7a7_14%,#a0a0a0_18%,#989898_24%,#909090_28%,#888888_32%,#7e7e7e_38%,#747474_43%,#686868_50%,#5c5c5c_63%,#505050_72%,#444444_80%,#383838_91%,#2a2a2a_100%)]
    px-5
    shadow-lg
  "
>
  <Image
  src="/wing-logo.png"
  alt="Vibe Wing"
  width={42}
  height={42}
  className="h-[42px] w-[42px] object-contain shrink-0"
/>

  <Image
  src="/vibe-city-logo.png"
  alt="Vibe City"
  width={165}
  height={50}
  className="h-[50px] w-auto object-contain"
/>
</div>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-[60px] w-[144px] items-center justify-center gap-3 rounded-[14px] bg-white/25 text-[18px] font-medium shadow-lg backdrop-blur transition active:scale-95"
          >
            <Menu size={26} />
            {open ? 'CLOSE' : 'MENU'}
          </button>
        </header>

        <AnimatePresence>
  {open && (
    <motion.div
      className="mt-6 flex justify-center"
      initial={{ opacity: 0, y: -18, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -14, scale: 0.96 }}
      transition={{
        type: 'spring',
        stiffness: 320,
        damping: 28,
      }}
    >
      <nav className="w-[305px] rounded-[14px] bg-[#b58acb] px-7 py-9 text-center shadow-xl backdrop-blur">
        <div className="flex flex-col gap-7 text-[22px] font-black tracking-wide drop-shadow">
          <button>VIBELINK</button>
          <button>VIBE TV</button>
          <button>VIBE生態系</button>
          <button>VIBE會員</button>
          <button>關於VIBE CITY</button>
          <button>投資人中心</button>
        </div>

        <div className="my-7 h-px w-full bg-white/80" />

        <div className="flex flex-col gap-5 text-[22px] font-black">
          <button className="flex items-center justify-center gap-5">
            <LogIn size={22} />
            登入
          </button>

          <button className="flex items-center justify-center gap-5">
            <Globe2 size={22} />
            中文
          </button>
        </div>
      </nav>
    </motion.div>
  )}
</AnimatePresence>
      </section>
    </main>
  )
}