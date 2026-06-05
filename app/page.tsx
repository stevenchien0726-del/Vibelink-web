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
              rounded-[16px]
              border
              border-black/5
              bg-[#e5e5e5]
              px-4
              shadow-md
            "
          >
            <Image
              src="/wing-logo.png"
              alt="Vibe Wing"
              width={35}
              height={35}
              className="ml-2 h-[35px] w-[35px] shrink-0 object-contain"
            />

            <Image
  src="/VIBE CITY簡約英文字.png"
  alt="VIBE CITY"
  width={270}
  height={72}
  className="ml-1 h-[72px] w-auto object-contain"
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
                <div className="flex flex-col gap-7 text-[22px] font-semibold tracking-wide text-[#1f1f1f]">
                  <button>VIBELINK</button>
                  <button>VIBE TV</button>
                  <button>VIBE生態系</button>
                  <button>VIBE會員</button>
                  <button>關於VIBE CITY</button>
                  <button>投資人中心</button>
                </div>

                <div className="my-7 h-[2.5px] w-full bg-black/25" />

                <div className="flex flex-col gap-5 text-[22px] font-semibold text-[#1f1f1f]">
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