import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Child Safety Standards | VIBE CITY",
  description:
    "Vibelink child safety standards and CSAE policy for Google Play compliance.",
};

const prohibitedItems = [
  "Child sexual abuse material (CSAM)",
  "Grooming or sexual exploitation of minors",
  "Any content that sexualizes children",
  "Human trafficking or exploitation involving minors",
];

export default function ChildSafetyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#120018] text-white">
      <section className="relative isolate px-5 pb-14 pt-5 sm:px-8 sm:pb-20 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_0%,rgba(199,122,234,0.38),transparent_32%),radial-gradient(circle_at_82%_8%,rgba(111,66,255,0.28),transparent_30%),linear-gradient(180deg,#4c086c_0%,#230432_46%,#120018_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-[#120018] to-transparent" />

        <div className="mx-auto w-full max-w-5xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.08] px-5 py-3 text-base font-bold text-white/86 shadow-lg shadow-fuchsia-950/20 transition hover:bg-white/[0.14]"
          >
            <span className="h-3.5 w-3.5 rotate-45 border-b-2 border-l-2 border-white/86" />
            Back
          </Link>

          <article className="mt-10 rounded-[28px] border border-white/12 bg-[linear-gradient(145deg,#5b0d80_0%,#2c073e_52%,#16001f_100%)] p-6 shadow-2xl shadow-fuchsia-950/35 sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-fuchsia-100/82">
              VIBELINK
            </p>
            <h1 className="mt-4 text-5xl font-black leading-none tracking-normal text-white sm:text-7xl">
              Child Safety Standards
            </h1>

            <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-white/76 sm:text-lg">
              <p>
                Vibelink is committed to providing a safe environment for all
                users.
              </p>

              <p>
                We have zero tolerance for child sexual abuse and exploitation
                (CSAE).
              </p>

              <div>
                <p>Our platform strictly prohibits:</p>
                <ul className="mt-4 space-y-3">
                  {prohibitedItems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#c77aea]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                Users can report inappropriate content or accounts through our
                in-app reporting tools or by contacting us.
              </p>

              <p>
                Reports are reviewed promptly, and appropriate actions,
                including content removal and permanent account suspension, will
                be taken when violations are confirmed.
              </p>

              <div>
                <p className="font-black text-fuchsia-100">Contact:</p>
                <a
                  href="mailto:support@vibecity.app"
                  className="mt-3 inline-flex max-w-full rounded-full bg-[#c77aea] px-5 py-3 text-base font-black text-[#1f0629] shadow-xl shadow-fuchsia-950/30 transition hover:bg-[#d68bf3]"
                >
                  <span className="break-all">support@vibecity.app</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
