import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | VIBE CITY",
  description:
    "VIBE CITY and Vibelink privacy policy covering account data, content, messages, AI Radar, cookies, security, and third-party services.",
};

const policySections = [
  {
    titleZh: "我們如何收集資料",
    bodyZh:
      "當你使用 Vibelink、建立帳號、登入、上傳內容、傳送訊息、使用 AI Radar 或瀏覽我們的服務時，我們會收集提供服務、維護安全、改善體驗與支援客戶服務所需的資料。",
    titleEn: "How We Collect Data",
    bodyEn:
      "When you use Vibelink, create an account, sign in, upload content, send messages, use AI Radar, or browse our services, we collect data needed to provide the service, maintain safety, improve the experience, and support users.",
  },
  {
    titleZh: "Google 登入資訊",
    bodyZh:
      "若你使用 Google 登入，我們可能會接收 Google 提供的基本帳號資訊，例如你的 Google 帳號識別碼、姓名、頭像與登入驗證狀態。這些資訊用於建立與保護你的 Vibelink 帳號。",
    titleEn: "Google Sign-In Information",
    bodyEn:
      "If you sign in with Google, we may receive basic account information provided by Google, such as your Google account identifier, name, profile photo, and authentication status. We use this information to create and protect your Vibelink account.",
  },
  {
    titleZh: "Email",
    bodyZh:
      "我們會收集你的 Email，以便進行帳號登入、重要通知、安全驗證、客服聯繫與帳號資料管理。",
    titleEn: "Email",
    bodyEn:
      "We collect your email address for account sign-in, important notices, security verification, customer support, and account data management.",
  },
  {
    titleZh: "User Profile",
    bodyZh:
      "你在個人檔案中提供的資料，例如名稱、頭像、簡介、興趣、社交偏好與其他公開或半公開設定，會用於呈現個人頁面、推薦連結與改善社群互動體驗。",
    titleEn: "User Profile",
    bodyEn:
      "Information you provide in your profile, such as name, avatar, bio, interests, social preferences, and other public or semi-public settings, is used to display your profile, support recommendations, and improve social interactions.",
  },
  {
    titleZh: "使用者上傳的貼文、圖片、影片",
    bodyZh:
      "你上傳或發布的貼文、圖片、影片與相關描述會儲存在服務中，並依照你的帳號設定與產品功能顯示給其他使用者或用於內容管理與安全審核。",
    titleEn: "Posts, Images, and Videos Uploaded by Users",
    bodyEn:
      "Posts, images, videos, and related descriptions that you upload or publish are stored in the service and may be shown to other users according to your account settings and product features, or used for content management and safety review.",
  },
  {
    titleZh: "聊天訊息",
    bodyZh:
      "Vibelink 可能會處理你與其他使用者之間的聊天訊息，以提供訊息傳遞、同步、通知、安全防護、濫用偵測與客服協助。",
    titleEn: "Chat Messages",
    bodyEn:
      "Vibelink may process chat messages between you and other users to provide message delivery, synchronization, notifications, safety protection, abuse detection, and customer support.",
  },
  {
    titleZh: "AI Radar 搜尋資料",
    bodyZh:
      "當你使用 AI Radar 搜尋或描述想找到的人、內容或 Vibe 時，我們可能會處理你的搜尋文字、偏好、互動結果與相關使用紀錄，用於產生搜尋結果、改善推薦品質與維護服務安全。",
    titleEn: "AI Radar Search Data",
    bodyEn:
      "When you use AI Radar to search for or describe people, content, or vibes you want to find, we may process your search text, preferences, interaction results, and related usage records to generate results, improve recommendation quality, and maintain service safety.",
  },
  {
    titleZh: "Cookies",
    bodyZh:
      "我們可能使用 Cookies 或類似技術來維持登入狀態、記住偏好、分析服務表現、防止濫用並改善網站與產品體驗。你可以透過瀏覽器設定管理 Cookies。",
    titleEn: "Cookies",
    bodyEn:
      "We may use cookies or similar technologies to keep you signed in, remember preferences, analyze service performance, prevent abuse, and improve the website and product experience. You can manage cookies through your browser settings.",
  },
  {
    titleZh: "資料安全",
    bodyZh:
      "我們會採取合理的技術與管理措施保護資料，包括存取控管、加密傳輸、權限管理與安全監控。然而，任何網路服務都無法保證百分之百安全。",
    titleEn: "Data Security",
    bodyEn:
      "We take reasonable technical and organizational measures to protect data, including access controls, encrypted transmission, permission management, and security monitoring. However, no online service can guarantee absolute security.",
  },
  {
    titleZh: "第三方服務",
    bodyZh:
      "我們可能使用 Google 與 Supabase 等第三方服務來支援登入、資料儲存、驗證、基礎架構與產品功能。這些第三方可能依其各自的政策處理必要資料。",
    titleEn: "Third-Party Services",
    bodyEn:
      "We may use third-party services such as Google and Supabase to support sign-in, data storage, authentication, infrastructure, and product features. These third parties may process necessary data according to their own policies.",
  },
  {
    titleZh: "刪除帳號與資料",
    bodyZh:
      "你可以要求刪除你的 Vibelink 帳號與相關個人資料。我們會依照適用法律、服務安全需求與必要保存義務處理刪除請求。",
    titleEn: "Account and Data Deletion",
    bodyEn:
      "You may request deletion of your Vibelink account and related personal data. We will process deletion requests according to applicable law, service safety needs, and necessary retention obligations.",
  },
];

export default function PrivacyPage() {
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

          <header className="mt-10 rounded-[28px] border border-white/12 bg-[linear-gradient(145deg,#5b0d80_0%,#2c073e_52%,#16001f_100%)] p-6 shadow-2xl shadow-fuchsia-950/35 sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-fuchsia-100/82">
              VIBELINK
            </p>
            <h1 className="mt-4 text-5xl font-black leading-none tracking-normal text-white sm:text-7xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-3xl font-black leading-tight text-fuchsia-100 sm:text-5xl">
              隱私權政策
            </p>
            <div className="mt-6 grid gap-4 text-base leading-7 text-white/74 md:grid-cols-2">
              <p>
                本隱私權政策說明 Vibelink 如何收集、使用、保護與管理你的資料。
                中文內容在上，英文內容在下。
              </p>
              <p>
                This Privacy Policy explains how Vibelink collects, uses,
                protects, and manages your data. Chinese appears first, followed
                by English.
              </p>
            </div>
          </header>

          <div className="mt-6 grid gap-4">
            {policySections.map((section, index) => (
              <article
                key={section.titleEn}
                className="rounded-[24px] border border-white/12 bg-white/[0.07] p-5 shadow-xl shadow-fuchsia-950/20 backdrop-blur sm:p-6"
              >
                <div className="flex flex-col gap-4 md:flex-row md:gap-7">
                  <div className="md:w-1/2">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-fuchsia-100/66">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-3 text-2xl font-black leading-tight tracking-normal text-white">
                      {section.titleZh}
                    </h2>
                    <p className="mt-3 text-base leading-8 text-white/76">
                      {section.bodyZh}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-4 md:w-1/2 md:border-l md:border-t-0 md:pl-7 md:pt-0">
                    <h3 className="text-xl font-black leading-tight tracking-normal text-fuchsia-100">
                      {section.titleEn}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/68 sm:text-base">
                      {section.bodyEn}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <section className="mt-6 rounded-[28px] border border-fuchsia-100/14 bg-[#22052f]/86 p-6 shadow-2xl shadow-fuchsia-950/25 sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-fuchsia-100/80">
              Contact
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-normal text-white">
              聯絡我們 / Contact Us
            </h2>
            <p className="mt-4 text-base leading-8 text-white/74">
              若你對本政策、帳號刪除或資料刪除有任何問題，請聯絡：
            </p>
            <p className="text-base leading-8 text-white/68">
              If you have questions about this policy, account deletion, or data
              deletion, please contact:
            </p>
            <a
              href="mailto:support@vibelink.com"
              className="mt-5 inline-flex max-w-full rounded-full bg-[#c77aea] px-5 py-3 text-base font-black text-[#1f0629] shadow-xl shadow-fuchsia-950/30 transition hover:bg-[#d68bf3]"
            >
              <span className="break-all">support@vibelink.com</span>
            </a>
          </section>
        </div>
      </section>
    </main>
  );
}
