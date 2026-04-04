import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

const timeline = [
  { year: "1950s", title: "충북 청원에서 태어나다", desc: "충청북도 청원군 내수읍에서 태어나, 푸근한 시골의 정을 받으며 자랐습니다. 들판과 하늘이 첫 번째 교실이었습니다." },
  { year: "1960s", title: "청주에서 학창시절을 보내다", desc: "내수초등학교를 졸업하고 청주로 이사하여, 주성중학교와 청주기계공업고등학교 전기과에 진학했습니다. 전기에 대한 순수한 호기심이 진로를 결정짓는 순간이었습니다." },
  { year: "1972", title: "체신부 공무원으로 첫 발을 내딛다", desc: "대한민국 통신의 역사가 본격적으로 시작되던 시기, 체신부 공무원으로서 통신 기술자의 길에 들어섰습니다. 자석식 교환기에서 자동식 교환기로 전환되는 대전환의 시대였습니다." },
  { year: "1970–80s", title: "전국을 하나로 잇다", desc: "다이얼 자동식 교환기의 첫 세대로서, 서울에서 울산, 울릉도, 제주도까지 — 대한민국 구석구석을 전화선으로 연결했습니다." },
  { year: "1980–90s", title: "세계와 연결되다", desc: "국내 통신을 넘어 국제전화의 시대를 열었습니다. 일하면서 대전산업대학교에 진학하여 학업과 실무를 병행하며 끊임없이 성장했습니다." },
  { year: "1990–2000s", title: "손안의 전화기 시대를 맞이하다", desc: "가장 처음 핸드폰을 들고 다니던 세대. 편지에서 시작된 통신이 손안의 작은 기기로 완성되는 것을 직접 목격하고 만들어낸 당사자입니다." },
  { year: "2006", title: "34년의 여정을 마무리하다", desc: "KT에서 명예로운 퇴직. 자석식 교환기부터 모바일 통신까지, 대한민국 통신의 전 역사를 현장에서 함께한 34년이었습니다." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="소개"
        title="한 걸음 한 걸음,&#10;단단하게 걸어온 길"
        description="충북 청원의 푸근한 고향에서 시작해, 대한민국 통신의 역사를 현장에서 만들어온 한 기술자의 여정"
        imageSrc="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80"
      />

      {/* Timeline */}
      <section className="bg-white py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.12em] uppercase text-brown mb-4">인생여정</p>
          </FadeIn>
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-navy leading-snug mb-16">
              시간이 만들어낸 이야기
            </h2>
          </FadeIn>

          <div className="relative pl-10 md:pl-12">
            {/* Line */}
            <div className="absolute left-[7px] md:left-[9px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-brown to-brown/10" />

            {timeline.map((item) => (
              <FadeIn key={item.year}>
                <div className="relative mb-12 pl-8 md:pl-10">
                  {/* Dot */}
                  <div className="absolute -left-[33px] md:-left-[35px] top-2 w-3 h-3 rounded-full bg-brown border-[3px] border-white shadow-[0_0_0_3px_rgba(124,87,45,0.15)]" />
                  <p className="font-serif text-sm font-bold text-brown tracking-wide mb-2">{item.year}</p>
                  <h3 className="font-serif text-xl text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed max-w-xl">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
