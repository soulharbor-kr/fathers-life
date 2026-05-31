import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const PHONE_NUMBER = "010-XXXX-XXXX";

type CaseData = {
  emoji: string;
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  problem: { heading: string; body: string };
  process: { step: string; desc: string }[];
  result: { summary: string; quote: string; quoteBy: string };
  relatedServices: string[];
};

const cases: Record<string, CaseData> = {
  nujeom: {
    emoji: "⚡",
    title: "누전, 범인을 찾다",
    subtitle: "3년 넘게 반복되던 차단기 문제, 하루 만에 해결",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&q=80",
    badge: "전기 · 누전",
    problem: {
      heading: "거실 불이 하루에도 몇 번씩 꺼졌어요",
      body: `분전반 차단기가 자꾸 내려간다고 연락이 왔습니다. 3년 전부터 반복되는 문제인데 어느 전기 업체에서도 원인을 못 찾았다고 하셨어요.

처음 가봤을 때 분전반 상태를 보니 낌새가 있었습니다. 회로가 여러 개인데 어느 회로에서 새는지 하나씩 따져봐야 했습니다.`,
    },
    process: [
      { step: "분전반 전체 점검", desc: "차단기별 전류값을 측정하고 어느 회로에서 이상이 있는지 범위를 좁혔습니다." },
      { step: "절연 저항 측정", desc: "각 회로의 절연 저항을 측정했더니 화장실 쪽 회로에서 수치가 현저히 낮게 나왔습니다." },
      { step: "배선 추적", desc: "화장실 천장 배선을 따라가 보니 습기로 인해 전선 피복이 녹아있는 지점을 발견했습니다." },
      { step: "배선 교체 및 마감", desc: "해당 구간 전선을 새것으로 교체하고 방습 처리 후 마감했습니다." },
    ],
    result: {
      summary: "3년간 반복되던 차단기 트립 현상이 완전히 사라졌습니다. 절연 저항 수치도 정상 범위로 돌아왔고, 화재 위험도 함께 제거됐습니다.",
      quote: "이거 어떻게 아셨어요? 3년 넘게 고생했는데 이렇게 빨리 찾아주실 줄 몰랐어요. 정말 감사합니다.",
      quoteBy: "둔산동 아파트 주민",
    },
    relatedServices: ["전기 · 콘센트", "조명 · LED"],
  },

  jaumun: {
    emoji: "🚪",
    title: "자동문이 멈췄어요",
    subtitle: "오전에 연락, 오후에 완료 — 당일 해결 사례",
    image: "https://images.unsplash.com/photo-1606676539940-12768ce0e762?w=1600&q=80",
    badge: "자동문 · 도어",
    problem: {
      heading: "아침마다 손으로 밀어야 했어요",
      body: `공동현관 자동문이 갑자기 작동을 멈췄습니다. 입주민들이 아침마다 무거운 문을 손으로 밀어야 했고, 특히 어르신들과 유모차 끌고 다니시는 분들이 많이 불편해하셨다고 했습니다.

관리소에서 업체에 문의했더니 부품 교체가 필요하다며 며칠 걸린다는 답변을 받으셨다고 했습니다.`,
    },
    process: [
      { step: "구동부 점검", desc: "모터와 기어박스 상태를 확인했습니다. 모터 자체는 살아있었습니다." },
      { step: "제어기 진단", desc: "제어기 내부를 열어보니 센서 신호 연결 불량이 발견됐습니다. 커넥터 접점 불량이었습니다." },
      { step: "접점 정비 및 리셋", desc: "접점을 청소하고 재결합한 뒤 제어기를 리셋했습니다." },
      { step: "레일 및 센서 조정", desc: "문짝 레일 상태와 감지 센서 각도를 재조정하여 작동 완료했습니다." },
    ],
    result: {
      summary: "부품 교체 없이 접점 정비만으로 당일 복구했습니다. 모터가 살아있다는 걸 현장에서 바로 판단한 덕분에 며칠 기다릴 필요 없이 그날 오후에 정상 작동됐습니다.",
      quote: "이렇게 빨리 고쳐질 줄 몰랐어요. 업체는 며칠 걸린다 했는데 오셔서 한 시간도 안 됐잖아요.",
      quoteBy: "월평동 아파트 관리소장",
    },
    relatedServices: ["자동문 · 도어", "기타 시설"],
  },

  hwajangshil: {
    emoji: "🚽",
    title: "화장실이 말썽이에요",
    subtitle: "혼자 사시는 어머니 댁 화장실, 깔끔하게 정비",
    image: "https://images.unsplash.com/photo-1581166397057-235af2b3c6dd?w=1600&q=80",
    badge: "화장실 · 배관",
    problem: {
      heading: "물이 계속 흐르고, 수전도 새요",
      body: `아들분이 연락을 해오셨습니다. 혼자 사시는 어머니 댁 화장실 변기에서 물이 계속 졸졸 흐르고, 세면대 수전에서도 물이 새고 있다고요.

어머니가 오래 참으셨는지 수도요금이 많이 나왔다고 하셨습니다. 직접 가서 보니 변기 내부 부력구가 낡아서 수위를 못 잡고 있었고, 수전은 패킹이 완전히 닳아있었습니다.`,
    },
    process: [
      { step: "상태 진단", desc: "변기 탱크를 열어보니 부력구와 배수 밸브 모두 교체가 필요한 상태였습니다." },
      { step: "변기 내부 부품 교체", desc: "부력구, 배수 밸브, 연결 호스를 새것으로 교체했습니다. 수위 조절도 새로 맞췄습니다." },
      { step: "수전 패킹 교체", desc: "세면대 수전을 분리하여 닳은 패킹을 교체하고 재결합했습니다." },
      { step: "실리콘 마감", desc: "변기 주변 실리콘이 들떠있어 새로 쳐서 마감했습니다. 깔끔하게 정리했습니다." },
    ],
    result: {
      summary: "변기 물 새는 소리가 사라지고 수전 누수도 완전히 해결됐습니다. 다음 달 수도요금이 많이 줄었다고 나중에 연락을 주셨습니다.",
      quote: "어머니가 얼마나 좋아하시던지. 오래 불편하셨을 텐데 이렇게 깔끔하게 해결해주셔서 감사해요.",
      quoteBy: "둔산동 고객 아들",
    },
    relatedServices: ["화장실 · 배관", "기타 시설"],
  },

  garodeung: {
    emoji: "💡",
    title: "가로등이 깜빡거려요",
    subtitle: "단지 내 가로등 5개, 하루 작업으로 모두 해결",
    image: "https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?w=1600&q=80",
    badge: "조명 · LED",
    problem: {
      heading: "밤에 단지가 너무 어두워요",
      body: `아파트 단지 내 가로등 5개 중 3개는 깜빡거리고, 2개는 아예 안 들어온다는 연락을 받았습니다. 주민들이 밤에 다니기 무섭다고 관리소에 여러 번 민원을 넣은 상황이었습니다.

가로등은 기존 형광등 방식이었는데, 안정기 노후화와 함께 램프도 수명이 다해있었습니다.`,
    },
    process: [
      { step: "전체 상태 파악", desc: "5개 가로등 각각 램프 상태, 안정기 작동 여부, 배선 상태를 확인했습니다." },
      { step: "LED 교체 결정", desc: "기존 형광등 방식보다 LED 방식이 수명도 길고 밝기도 나은 것을 설명하고 교체를 진행했습니다." },
      { step: "LED 램프 및 안정기 교체", desc: "5개 모두 LED 램프로 교체했고, 노후 안정기 2개는 LED 전용 드라이버로 교체했습니다." },
      { step: "배선 점검 및 방수 마감", desc: "가로등 내부 배선 상태를 정비하고 빗물 침투를 막는 방수 마감을 했습니다." },
    ],
    result: {
      summary: "5개 가로등이 모두 정상 점등됐습니다. LED 교체로 기존보다 훨씬 밝아졌고, 관리소에서는 전기요금도 줄어들었다고 나중에 알려주셨습니다.",
      quote: "밤에 다니기가 훨씬 좋아졌어요. 애들이 밖에 나가서 놀아도 이제 안심이 되네요.",
      quoteBy: "관저동 아파트 주민",
    },
    relatedServices: ["조명 · LED", "기타 시설"],
  },

  konsentu: {
    emoji: "🔌",
    title: "콘센트에서 불꽃이 튀어요",
    subtitle: "노후 콘센트의 화재 위험, 빠르게 제거",
    image: "https://images.unsplash.com/photo-1660330589693-99889d60181e?w=1600&q=80",
    badge: "전기 · 콘센트",
    problem: {
      heading: "주방 콘센트에서 불꽃이 튀었어요",
      body: `주방에서 전기밥솥 플러그를 꽂을 때마다 불꽃이 튀고 탄내가 난다고 연락이 왔습니다. 놀라서 플러그를 빼두고 사용을 못 하고 계신다고 했습니다.

이런 증상은 콘센트 내부 접점이 산화되거나 탄화된 경우가 많습니다. 빠르게 처리하지 않으면 화재로 이어질 수 있어 즉시 방문했습니다.`,
    },
    process: [
      { step: "전원 차단 및 안전 확보", desc: "분전반에서 해당 회로 차단기를 내리고 작업 전 안전을 확인했습니다." },
      { step: "콘센트 분리 및 내부 확인", desc: "콘센트를 분리하니 내부 접점이 검게 탄화되어 있었습니다. 예상대로였습니다." },
      { step: "배선 상태 점검", desc: "탄화된 부분 주변 배선도 함께 확인했습니다. 다행히 배선 자체는 이상이 없었습니다." },
      { step: "콘센트 교체 및 복구", desc: "콘센트를 새것으로 교체하고 접지 연결 상태도 확인한 뒤 마감했습니다." },
    ],
    result: {
      summary: "화재로 이어질 수 있는 위험 요소를 제거했습니다. 교체 후 불꽃 현상도, 탄내도 완전히 사라졌습니다. 노후 주택의 콘센트는 주기적으로 점검이 필요합니다.",
      quote: "큰일 날 뻔 했네요. 빨리 연락드려서 다행이에요. 다른 콘센트도 한번 봐달라고 했더니 두 개 더 찾아주셨어요.",
      quoteBy: "탄방동 아파트 주민",
    },
    relatedServices: ["전기 · 콘센트", "조명 · LED"],
  },

  yeecho: {
    emoji: "🌿",
    title: "풀이 무릎까지 자랐어요",
    subtitle: "단지 구석구석, 예초기 들고 하루 작업",
    image: "https://images.unsplash.com/photo-1426927308491-6380b6a9936f?w=1600&q=80",
    badge: "조경 · 예초",
    problem: {
      heading: "화단이 완전히 잡초밭이 됐어요",
      body: `봄이 지나고 여름이 되자 아파트 단지 화단과 주차장 경계 잡초가 걷잡을 수 없이 자랐습니다. 조경 업체에 맡기려니 비용이 만만치 않다고 하셨습니다.

무릎까지 올라온 잡초, 보도블록 사이로 비집고 나온 풀뿌리, 화단 경계석도 안 보일 지경이었습니다.`,
    },
    process: [
      { step: "작업 구역 파악", desc: "단지 전체를 돌며 예초가 필요한 구역과 제거가 필요한 잡초 분포를 파악했습니다." },
      { step: "예초기 작업", desc: "잡초가 많은 구역부터 예초기로 작업을 진행했습니다. 화단, 화단 경계, 주차장 사이 구간 순으로 처리했습니다." },
      { step: "뿌리 제거 및 정리", desc: "예초 후 드러난 잡초 뿌리를 손으로 정리했습니다. 특히 보도블록 사이 뿌리는 꼼꼼히 제거했습니다." },
      { step: "폐기물 정리", desc: "작업 후 예초된 풀과 잡초를 모아 정리하고 깔끔하게 마무리했습니다." },
    ],
    result: {
      summary: "하루 작업으로 단지 전체가 단정해졌습니다. 화단 경계석이 다시 보이고, 주차장 주변도 깔끔해졌습니다. 주민들이 지나가다 말을 걸어오셨습니다.",
      quote: "어르신 오시면 온 단지가 깨끗해져요. 어르신 덕분이에요. 올 가을에도 꼭 부탁드려요.",
      quoteBy: "갈마동 아파트 주민",
    },
    relatedServices: ["조경 · 예초", "기타 시설"],
  },
};

export async function generateStaticParams() {
  return Object.keys(cases).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = cases[slug];
  if (!c) return {};
  return {
    title: `${c.title} — 수리 사례 | 성의경`,
    description: c.subtitle,
  };
}

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = cases[slug];
  if (!c) notFound();

  return (
    <>
      {/* 히어로 */}
      <header className="relative h-[55vh] min-h-[360px] flex items-end overflow-hidden">
        <Image
          src={c.image}
          alt={c.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />
        <div className="relative z-10 max-w-[1100px] w-full mx-auto px-6 pb-12">
          <Link
            href="/repair"
            className="inline-flex items-center gap-1 text-white/50 hover:text-white text-xs mb-6 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            수리 서비스로 돌아가기
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{c.emoji}</span>
            <span className="text-xs font-medium bg-amber/80 text-white px-3 py-1 rounded-full">
              {c.badge}
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-2">
            {c.title}
          </h1>
          <p className="text-white/60 text-sm md:text-base">{c.subtitle}</p>
        </div>
      </header>

      {/* 본문 */}
      <div className="bg-white">
        <div className="max-w-[780px] mx-auto px-6 py-16 space-y-20">

          {/* 상황 */}
          <FadeIn>
            <section>
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-amber mb-4">문제 상황</p>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-navy mb-5">
                {c.problem.heading}
              </h2>
              <div className="text-sm text-text-light leading-[2] whitespace-pre-line">
                {c.problem.body}
              </div>
            </section>
          </FadeIn>

          {/* 과정 */}
          <FadeIn>
            <section>
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-amber mb-4">작업 과정</p>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-navy mb-8">
                이렇게 해결했습니다
              </h2>
              <div className="space-y-6">
                {c.process.map((p, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber/10 border border-amber/30 flex items-center justify-center">
                      <span className="text-xs font-bold text-amber">{i + 1}</span>
                    </div>
                    <div className="pt-0.5">
                      <h3 className="font-serif text-base text-navy font-bold mb-1">{p.step}</h3>
                      <p className="text-sm text-text-light leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* 결과 */}
          <FadeIn>
            <section>
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-amber mb-4">결과</p>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-navy mb-5">
                이렇게 해결됐습니다
              </h2>
              <p className="text-sm text-text-light leading-[2] mb-8">{c.result.summary}</p>
              <blockquote className="bg-cream rounded-2xl p-8 border-l-4 border-amber">
                <p className="font-serif text-base md:text-lg text-navy leading-relaxed mb-4">
                  &ldquo;{c.result.quote}&rdquo;
                </p>
                <footer className="text-xs text-text-light">— {c.result.quoteBy}</footer>
              </blockquote>
            </section>
          </FadeIn>

          {/* 관련 서비스 */}
          <FadeIn>
            <section className="border-t border-black/5 pt-12">
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-amber mb-4">관련 서비스</p>
              <div className="flex flex-wrap gap-2 mb-10">
                {c.relatedServices.map((s) => (
                  <span
                    key={s}
                    className="text-sm bg-amber-bg border border-amber/20 text-amber px-4 py-1.5 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-navy rounded-2xl p-8 text-center">
                <p className="font-serif text-lg text-white mb-2">비슷한 문제가 있으신가요?</p>
                <p className="text-white/50 text-sm mb-6">사진 한 장 보내주시면 제가 먼저 연락드립니다.</p>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber text-white rounded-full text-sm font-medium hover:bg-amber-light transition-colors"
                >
                  <span className="material-symbols-outlined text-base">phone</span>
                  {PHONE_NUMBER}
                </a>
              </div>
            </section>
          </FadeIn>

        </div>
      </div>

      {/* 하단 네비 */}
      <div className="bg-cream py-8 border-t border-black/5">
        <div className="max-w-[780px] mx-auto px-6 flex justify-between items-center">
          <Link
            href="/repair"
            className="inline-flex items-center gap-1 text-sm text-text-light hover:text-navy transition-colors"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            수리 서비스 전체 보기
          </Link>
          <Link
            href="/about"
            className="text-sm text-text-light hover:text-navy transition-colors"
          >
            성의경 소개 →
          </Link>
        </div>
      </div>
    </>
  );
}
