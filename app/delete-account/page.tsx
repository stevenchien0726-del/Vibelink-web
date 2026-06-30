import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Account | VIBE CITY",
  description:
    "Instructions for requesting deletion of a Vibelink account and related personal data.",
};

export default function DeleteAccountPage() {
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
              Delete Account
            </h1>

            <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-white/76 sm:text-lg">
              <p>
                If you would like to delete your Vibelink account and related
                personal data, please contact us at:
              </p>

              <a
                href="mailto:support@vibecity.app"
                className="inline-flex max-w-full rounded-full bg-[#c77aea] px-5 py-3 text-base font-black text-[#1f0629] shadow-xl shadow-fuchsia-950/30 transition hover:bg-[#d68bf3]"
              >
                <span className="break-all">support@vibecity.app</span>
              </a>

              <p>
                Please include the email address or Google account used to sign
                in to Vibelink.
              </p>

              <p>
                After we verify your request, we will delete your account,
                profile information, posts, and related personal data within 30
                days.
              </p>

              <p>
                Some information may be retained if required for legal,
                security, or fraud prevention purposes.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
