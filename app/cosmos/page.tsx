import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const interests = [
  { icon: "auto_awesome", text: "천문학 — 밤하늘 너머의 이야기" },
  { icon: "swap_calls", text: "웜홀 — 시공간을 잇는 통로" },
  { icon: "rocket_launch", text: "초광속 여행 — 빛보다 빠르게 먼 우주로" },
  { icon: "globe", text: "태양계 너머 — 인류가 살 수 있는 새로운 세상" },
];

export default function CosmosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1600&q=80"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cosmos/90 to-cosmos/70" />
        <div className="relative z-10 max-w-[1100px] mx-auto px-6 py-32">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-brown-light mb-4">우주 이야기</p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            75세, 새로운 우주가
            <br />
            열리다
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cosmos py-24" style={{
        backgroundImage: "radial-gradient(ellipse at 10% 20%, rgba(30,60,120,0.3) 0%, transparent 50%), radial-gradient(ellipse at 90% 80%, rgba(80,40,100,0.2) 0%, transparent 50%)"
      }}>
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Story */}
            <div>
              <FadeIn>
                <p className="text-lg text-white/85 leading-relaxed mb-4">
                  2025년, 둘째 손자의 우주에 대한 끝없는 질문이 새로운 여정의 시작이 되었습니다.
                </p>
              </FadeIn>
              <FadeIn>
                <p className="text-sm text-white/55 leading-relaxed mb-10">
                  술도 내려놓고, 매일 즐겁게 우주를 공부하기 시작했습니다. 해보니 너무 재미있어서, 사랑하는 아내에게도 설명을 늘어놓곤 합니다.
                </p>
              </FadeIn>

              <FadeIn>
                <h3 className="font-serif text-base text-white/80 mb-4">최고의 관심사</h3>
                <ul className="space-y-0">
                  {interests.map((item) => (
                    <li key={item.icon} className="flex items-center gap-3 py-3 border-b border-white/[0.06] text-sm text-white/60">
                      <span className="material-symbols-outlined text-xl text-brown-light">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            {/* Quote card */}
            <FadeIn>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-10 text-center flex flex-col justify-center">
                <blockquote className="font-serif text-lg text-white/80 leading-relaxed italic mb-6">
                  &ldquo;우리가 태양계를 떠난 먼 우주에
                  <br />
                  빛보다 빨리 가서 살 수 있는 세상이
                  <br />
                  언제 올지 최고 관심이야&rdquo;
                </blockquote>
                <p className="text-sm text-white/40">
                  통신선을 이었던 기술자가 이제는
                  <br />
                  별과 별 사이의 길을 꿈꿉니다
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
