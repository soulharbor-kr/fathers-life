import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const highlights = [
  {
    href: "/telecom",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    label: "통신의 역사",
    title: "자석식에서 스마트폰까지",
    desc: "대한민국 통신 34년의 현장을 걸어온 기록",
  },
  {
    href: "/family",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80",
    label: "가족",
    title: "행복해.",
    desc: "사랑하는 아내, 자녀, 그리고 네 명의 손자 이야기",
  },
  {
    href: "/cosmos",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80",
    label: "우주 이야기",
    title: "75세, 새로운 우주가 열리다",
    desc: "손자의 질문에서 시작된 우주 공부 여정",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <header className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1600&q=80"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/70 to-navy/90" />
        <div className="relative z-10 px-6 py-32 max-w-3xl">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/50 mb-6">
              Est. 1951 · 대한민국 통신의 산증인
            </p>
          </FadeIn>
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-6xl font-black text-white leading-[1.2] mb-6 tracking-tight">
              선(線)을 잇고,
              <br />
              사람을 잇다
            </h1>
          </FadeIn>
          <FadeIn>
            <p className="text-base md:text-lg font-light text-white/65 leading-relaxed mb-10">
              자석식 교환기부터 스마트폰까지 —
              <br />
              대한민국 통신 34년의 현장을 걸어온 한 기술자의 이야기
            </p>
          </FadeIn>
          <FadeIn>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 border border-white/20 rounded-full text-white text-sm backdrop-blur-sm hover:bg-white/20 transition-all"
            >
              이야기 읽기
              <span className="material-symbols-outlined text-lg">arrow_downward</span>
            </Link>
          </FadeIn>
        </div>
      </header>

      {/* About Summary */}
      <section className="bg-cream py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.12em] uppercase text-brown mb-4">소개</p>
          </FadeIn>
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-navy leading-snug mb-12">
              충북의 푸근한 고향에서
              <br />
              세상을 잇는 기술자로
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "location_on", title: "고향", desc: "충청북도 청원군 내수읍. 푸근한 기억이 서린 곳에서 태어나 자라며, 세상에 대한 호기심의 씨앗을 품었습니다." },
              { icon: "school", title: "배움의 길", desc: "내수초등학교에서 시작하여 청주에서 중·고등학교를 마치고, 일하면서 대학까지 — 배움을 멈추지 않는 삶." },
              { icon: "bolt", title: "전기와의 인연", desc: '"원래 전기를 좋아했어. 그냥 좋아했어." 고등학교 전기과에서 시작된 인연은 평생의 천직이 되었습니다.' },
            ].map((card) => (
              <FadeIn key={card.title}>
                <div className="bg-white rounded-2xl p-8 border border-black/5 hover:-translate-y-1 transition-transform duration-300">
                  <span className="material-symbols-outlined text-3xl text-brown mb-4 block">{card.icon}</span>
                  <h3 className="font-serif text-lg text-navy mb-3">{card.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.12em] uppercase text-brown mb-4">하이라이트</p>
          </FadeIn>
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-navy leading-snug mb-12">삶의 이야기들</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <FadeIn key={h.href}>
                <Link href={h.href} className="group block">
                  <div className="relative h-56 rounded-2xl overflow-hidden mb-4">
                    <Image src={h.image} alt={h.title} fill className="object-cover img-grayscale group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-medium bg-brown/80 text-white px-3 py-1 rounded-full backdrop-blur-sm">{h.label}</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-lg text-navy group-hover:text-brown transition-colors mb-1">{h.title}</h3>
                  <p className="text-sm text-text-light">{h.desc}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
