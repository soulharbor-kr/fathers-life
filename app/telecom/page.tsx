import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const eras = [
  {
    gen: "1세대",
    icon: "settings",
    title: "자석식 교환기",
    desc: "교환원이 직접 선을 연결하던 시대. 통신의 가장 원초적인 형태에서 모든 것이 시작되었습니다.",
    image: "https://images.unsplash.com/photo-1590935217281-8f102120d683?w=500&q=80",
  },
  {
    gen: "2세대",
    icon: "dialpad",
    title: "자동식 교환기",
    desc: "다이얼을 돌리면 자동으로 연결되는 혁명. 이 전환의 첫 세대 기술자로서 전국망을 구축했습니다.",
    image: "https://images.unsplash.com/photo-1563884705074-7c8b15f16295?w=500&q=80",
  },
  {
    gen: "3세대",
    icon: "public",
    title: "국제전화",
    desc: "바다 건너 세계와 목소리를 주고받는 시대. 대한민국이 세계와 연결되는 순간을 만들었습니다.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80",
  },
  {
    gen: "4세대",
    icon: "smartphone",
    title: "이동통신",
    desc: "선 없이, 어디서든 통화할 수 있는 시대. 가장 먼저 핸드폰을 들고 다닌 세대의 일원이었습니다.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&q=80",
  },
];

export default function TelecomPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1563884705074-7c8b15f16295?w=1600&q=80"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/90 to-dark-bg/70" />
        <div className="relative z-10 max-w-[1100px] mx-auto px-6 py-32">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-brown-light mb-4">통신의 역사</p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            편지에서 스마트폰까지,
            <br />
            내가 걸어온 통신의 길
          </h1>
          <p className="text-base text-white/60 max-w-xl leading-relaxed">
            &ldquo;사람과 사람 간의 통신이라는 개념이 예전에는 아예 없었어.
            편지로 주고받던 시절이었지...&rdquo;
          </p>
        </div>
      </section>

      {/* 4 Eras */}
      <section className="bg-dark-bg py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {eras.map((era) => (
              <FadeIn key={era.gen}>
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300 group">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={era.image}
                      alt={era.title}
                      fill
                      className="object-cover img-grayscale group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-[0.7rem] font-medium tracking-widest uppercase text-brown-light mb-3">{era.gen}</p>
                    <span className="material-symbols-outlined text-3xl text-white/70 mb-3 block">{era.icon}</span>
                    <h3 className="font-serif text-base text-white mb-2">{era.title}</h3>
                    <p className="text-xs text-white/50 leading-relaxed">{era.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Quote */}
          <FadeIn>
            <div className="mt-16 pt-12 border-t border-white/[0.06] text-center">
              <blockquote className="font-serif text-xl md:text-2xl text-white/75 italic">
                &ldquo;너무 즐거운 보람찬 통신의 완전 역사였지&rdquo;
              </blockquote>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
