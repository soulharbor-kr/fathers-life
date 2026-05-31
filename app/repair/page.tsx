import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "수리 서비스 — 성의경",
  description: "KT 통신 34년 + 시설관리 20년. 전기·설비·생활수리 전문가 성의경의 출장 수리 서비스.",
};

// ⚠️ TODO: 실제 전화번호로 교체 필요
const PHONE_NUMBER = "010-XXXX-XXXX";
const SERVICE_AREA = "대전 서구";
const OPERATION_HOURS = "평일 오전 9시 ~ 오후 1시";

const trustBadges = [
  { icon: "bolt", text: "전기 기술 54년" },
  { icon: "apartment", text: "아파트 관리 20년" },
  { icon: "handshake", text: "사장님이 직접 옵니다" },
  { icon: "check_circle", text: "견적은 무료입니다" },
];

const miniTimeline = [
  { year: "1972", desc: "체신부 입사 · 전기 기술 시작" },
  { year: "2006", desc: "KT 명예퇴직 (34년)" },
  { year: "2006", desc: "요양병원 시설 담당 (5년)" },
  { year: "2011", desc: "스카이로드 관리소장 (5년)" },
  { year: "2016", desc: "마루미 아파트 시설과장 (4년)" },
  { year: "2020", desc: "현 아파트 시설과장 (현재)" },
];

const storyCases = [
  {
    slug: "nujeom",
    emoji: "⚡",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
    title: "누전, 범인을 찾다",
    quote: '"불이 자꾸 내려가요"',
    desc: "어디서 새는지 모르겠다던 누전, 배선 하나하나 추적해서 원인을 찾아드렸어요. \"이거 어떻게 아셨어요?\" 그게 20년 경력입니다.",
  },
  {
    slug: "jaumun",
    emoji: "🚪",
    image: "https://images.unsplash.com/photo-1606676539940-12768ce0e762?w=600&q=80",
    title: "자동문이 멈췄어요",
    quote: "당일 해결",
    desc: "아침마다 수동으로 열어야 했던 공동현관 자동문. 부품 확인부터 조정까지, 당일 해결해드렸습니다.",
  },
  {
    slug: "hwajangshil",
    emoji: "🚽",
    image: "https://images.unsplash.com/photo-1581166397057-235af2b3c6dd?w=600&q=80",
    title: "화장실이 말썽이에요",
    quote: "깔끔하게 교체",
    desc: "물이 새는 변기, 잠기지 않는 수전. 혼자 사시는 어머니 댁 화장실, 깔끔하게 교체해드렸습니다.",
  },
  {
    slug: "garodeung",
    emoji: "💡",
    image: "https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?w=600&q=80",
    title: "가로등이 깜빡거려요",
    quote: "밤길이 밝아집니다",
    desc: "아파트 단지 가로등 수리부터 각 세대 LED 교체까지. 밝아지면 주민분들 표정도 밝아집니다.",
  },
  {
    slug: "konsentu",
    emoji: "🔌",
    image: "https://images.unsplash.com/photo-1660330589693-99889d60181e?w=600&q=80",
    title: "콘센트에서 불꽃이 튀어요",
    quote: "빠르게 처리",
    desc: "노후된 콘센트·스위치 교체. 작은 불편이 큰 사고 되기 전에 빠르게 처리해드립니다.",
  },
  {
    slug: "yeecho",
    emoji: "🌿",
    image: "https://images.unsplash.com/photo-1426927308491-6380b6a9936f?w=600&q=80",
    title: "풀이 무릎까지 자랐어요",
    quote: '"어르신 덕분이에요"',
    desc: "예초기 들고 단지 구석구석. 깔끔해진 화단 보시고 \"어르신 덕분이에요\" 하실 때가 제일 좋아요.",
  },
];

const photoGallery = [
  { src: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80", alt: "전기 작업 현장" },
  { src: "https://images.unsplash.com/photo-1553873002-785d775854c9?w=800&q=80", alt: "시설 점검" },
  { src: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&q=80", alt: "수리 도구" },
  { src: "https://images.unsplash.com/photo-1613206485381-b028e578e791?w=800&q=80", alt: "작업 현장" },
];

const services = [
  { emoji: "⚡", title: "전기 · 콘센트", desc: "콘센트·스위치 교체, 누전 탐지, 배선 점검", price: "3만원~" },
  { emoji: "💡", title: "조명 · LED", desc: "형광등·LED 교체, 센서등 설치, 인테리어 조명", price: "3만원~" },
  { emoji: "🚽", title: "화장실 · 배관", desc: "변기 교체, 수전 교체, 간단한 배관 수리", price: "8만원~" },
  { emoji: "🚪", title: "자동문 · 도어", desc: "자동문 점검·수리, 잠금장치, 경첩 교체", price: "8만원~" },
  { emoji: "🌿", title: "조경 · 예초", desc: "잔디 정리, 예초 작업, 화단 주변 정비", price: "협의" },
  { emoji: "🔦", title: "기타 시설", desc: "가로등 수리, 공용 시설 점검, 기타 집수리", price: "협의" },
];

const targetCustomers = [
  {
    emoji: "🏠",
    title: "아파트 주민",
    desc: "관리소에 맡기기엔 작고 업체 부르기엔 비용이 아까운 일",
  },
  {
    emoji: "👴",
    title: "어르신 가정",
    desc: "혼자 계신 어머니·아버지 댁 — 전구 하나, 문손잡이 하나도 직접 가드립니다",
  },
  {
    emoji: "🏪",
    title: "소형 상가 · 사무실",
    desc: "간판 조명, 화장실 수리 — 빠르고 합리적으로",
  },
];

export default function RepairPage() {
  return (
    <>
      {/* ── 섹션 1: 히어로 ── */}
      <header className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1626501244050-ad05a356bb27?w=1600&q=80"
          alt="전기 수리 전문가"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy/95" />
        <div className="relative z-10 px-6 py-32 max-w-3xl">
          <FadeIn>
            <span className="inline-block text-xs font-medium tracking-[0.15em] uppercase text-amber-light/80 bg-amber/20 border border-amber/30 px-4 py-1.5 rounded-full mb-8">
              출장 수리 서비스 · {SERVICE_AREA}
            </span>
          </FadeIn>
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-6xl font-black text-white leading-[1.2] mb-6">
              고쳐드릴게요.
              <br />
              <span className="text-amber-light">오래 해봤거든요.</span>
            </h1>
          </FadeIn>
          <FadeIn>
            <p className="text-base md:text-lg font-light text-white/65 leading-relaxed mb-10">
              KT 통신 34년 + 시설관리 20년
              <br />
              전기·설비·생활수리 전문가 성의경의 출장 서비스
            </p>
          </FadeIn>
          <FadeIn>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-amber text-white rounded-full text-sm font-medium hover:bg-amber-light transition-colors shadow-lg"
            >
              <span className="material-symbols-outlined text-lg">phone</span>
              전화 문의하기
            </a>
          </FadeIn>
        </div>
      </header>

      {/* ── 섹션 2: 신뢰 배지 ── */}
      <section className="bg-amber py-5">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((b) => (
              <div key={b.text} className="flex items-center gap-3 justify-center text-white">
                <span className="material-symbols-outlined text-xl">{b.icon}</span>
                <span className="text-sm font-medium">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 섹션 3: 경력 스토리 ── */}
      <section className="bg-cream py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.12em] uppercase text-amber mb-4">경력 스토리</p>
          </FadeIn>
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-navy leading-snug mb-16">
              이 손이 고쳐온 것들
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* 좌측: 장인어른 목소리 + 사진 */}
            <FadeIn>
              <div className="space-y-6">
                <div className="relative h-56 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1553873002-785d775854c9?w=800&q=80"
                    alt="시설 점검 작업"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                </div>
                <blockquote className="border-l-4 border-amber pl-6">
                  <p className="font-serif text-lg text-navy leading-relaxed">
                    "고등학교 전기과를 나와 체신부에 입사한 게 1972년이에요.
                    그때부터 전기가 제 평생 직업이 됐죠.
                  </p>
                </blockquote>
                <p className="text-text-light leading-relaxed text-sm">
                  KT를 나온 뒤엔 요양병원, 상가, 아파트를 돌아다니며
                  누전도 잡고, 변기도 갈고, 가로등도 고쳤어요.
                </p>
                <p className="text-text-light leading-relaxed text-sm">
                  사람들이 불편해하던 게 해결됐을 때
                  그 얼굴이 좋아서 — 계속 하게 됐습니다."
                </p>
                <div className="bg-white rounded-2xl p-6 border border-black/5">
                  <p className="text-xs font-medium tracking-widest uppercase text-amber mb-1">핵심 경력</p>
                  <p className="font-serif text-3xl font-bold text-navy">54년</p>
                  <p className="text-sm text-text-light">1972년부터 지금까지, 전기 기술 한 길</p>
                </div>
              </div>
            </FadeIn>

            {/* 우측: 미니 타임라인 */}
            <FadeIn>
              <div className="relative pl-8">
                <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber to-amber/10" />
                {miniTimeline.map((item, i) => (
                  <div key={i} className="relative mb-7">
                    <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-amber border-[3px] border-white shadow-[0_0_0_2px_rgba(217,119,6,0.2)]" />
                    <p className="text-xs font-bold text-amber tracking-wide mb-0.5">{item.year}</p>
                    <p className="text-sm text-text-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 사진 갤러리 스트립 ── */}
      <section className="bg-white py-16">
        <div className="max-w-[1100px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.12em] uppercase text-amber mb-6">현장의 손길</p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {photoGallery.map((photo, i) => (
              <FadeIn key={i}>
                <div className="relative h-40 md:h-52 rounded-xl overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover img-grayscale"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 섹션 4: 수리 사례 ── */}
      <section className="bg-cream py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.12em] uppercase text-amber mb-4">수리 사례</p>
          </FadeIn>
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-navy leading-snug mb-12">
              이런 일들을 해드렸어요
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {storyCases.map((c) => (
              <FadeIn key={c.title}>
                <Link href={`/repair/cases/${c.slug}`} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden border border-black/5 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={c.image}
                        alt={c.title}
                        fill
                        className="object-cover img-grayscale group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                      <div className="absolute bottom-3 left-4 flex items-center gap-2">
                        <span className="text-xl">{c.emoji}</span>
                        <span className="font-serif text-sm text-white font-bold">{c.title}</span>
                      </div>
                    </div>
                    <div className="p-5 flex items-start justify-between gap-3">
                      <div>
                        <span className="text-xs text-amber font-medium">{c.quote}</span>
                        <p className="text-sm text-text-light leading-relaxed mt-2">{c.desc}</p>
                      </div>
                      <span className="material-symbols-outlined text-base text-text-light group-hover:text-amber transition-colors flex-shrink-0 mt-0.5">arrow_forward</span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 섹션 5: 서비스 메뉴 & 요금 ── */}
      <section className="bg-amber-bg py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.12em] uppercase text-amber mb-4">서비스 & 요금</p>
          </FadeIn>
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-navy leading-snug mb-12">
              도와드릴 수 있는 일들
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {services.map((s) => (
              <FadeIn key={s.title}>
                <div className="bg-white rounded-2xl p-6 border border-amber/20 hover:border-amber/50 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{s.emoji}</span>
                      <div>
                        <h3 className="font-serif text-base text-navy font-bold">{s.title}</h3>
                        <p className="text-xs text-text-light mt-0.5">{s.desc}</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-amber whitespace-nowrap">{s.price}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="bg-white/70 rounded-2xl p-6 border border-amber/20 text-sm text-text-light space-y-1">
              <p>* 출장비 별도 (근거리 무료 협의)</p>
              <p>* 재료비 실비 청구</p>
              <p>* 견적 무료 — 먼저 사진 보내주세요</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 섹션 6: 이런 분께 딱입니다 ── */}
      <section className="bg-white py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.12em] uppercase text-amber mb-4">대상 고객</p>
          </FadeIn>
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-navy leading-snug mb-12">
              이런 분께 딱입니다
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {targetCustomers.map((t) => (
              <FadeIn key={t.title}>
                <div className="bg-cream rounded-2xl p-8 border border-black/5 text-center hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-4xl block mb-4">{t.emoji}</span>
                  <h3 className="font-serif text-lg text-navy font-bold mb-3">{t.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{t.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 섹션 7: 연락하기 ── */}
      <section className="bg-navy py-24">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-amber-light/70 mb-4">Contact</p>
          </FadeIn>
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-white leading-snug mb-4">
              편하게 연락 주세요
            </h2>
          </FadeIn>
          <FadeIn>
            <p className="text-white/50 text-sm mb-14">
              견적은 무료입니다. 사진 한 장이면 충분해요.
            </p>
          </FadeIn>

          <div className="space-y-4 mb-12">
            <FadeIn>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <a href={`tel:${PHONE_NUMBER}`} className="block group">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-2xl text-amber-light">phone</span>
                    <span className="font-serif text-3xl md:text-4xl font-bold text-white tracking-wider group-hover:text-amber-light transition-colors">
                      {PHONE_NUMBER}
                    </span>
                  </div>
                  <p className="text-white/40 text-sm">{OPERATION_HOURS}</p>
                </a>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-xl text-amber-light">location_on</span>
                  <span className="text-white text-sm font-medium">서비스 지역</span>
                </div>
                <p className="text-white/50 text-sm">{SERVICE_AREA} 및 인근 지역</p>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <p className="font-serif text-white/40 text-sm italic leading-relaxed">
              "고장난 게 있으면 사진 찍어 보내주세요.
              <br />제가 먼저 전화 드리겠습니다."
            </p>
          </FadeIn>

          <FadeIn>
            <div className="mt-12 pt-12 border-t border-white/10">
              <Link href="/" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                ← 성의경 홈으로
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
