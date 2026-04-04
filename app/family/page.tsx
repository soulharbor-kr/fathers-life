import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

export default function FamilyPage() {
  return (
    <>
      <PageHero
        label="가족"
        title="선(線)이 이어지듯,&#10;사랑도 이어집니다"
        description="전화선으로 사람을 이었던 기술자가, 가정에서는 사랑으로 세대를 잇습니다"
        imageSrc="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1600&q=80"
      />

      <section className="bg-warm py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          {/* Wife */}
          <FadeIn>
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-black/5 max-w-2xl mb-8">
              <span className="material-symbols-outlined text-3xl text-brown mb-4 block">favorite</span>
              <h3 className="font-serif text-xl text-navy mb-3">사랑하는 아내</h3>
              <p className="text-sm text-text-light leading-relaxed">
                고등학교 선생님이셨던 당숙모의 소개로 만난 인연. &ldquo;이뻐서 소개해주셨다&rdquo;는 그 한마디에 모든 이야기가 담겨 있습니다.
                만남 후 11개월 만에 결혼하여, 지금까지 함께 인생의 모든 계절을 걸어왔습니다.
              </p>
            </div>
          </FadeIn>

          {/* Children & Grandchildren */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <FadeIn>
              <div className="bg-white rounded-2xl p-8 border border-black/5">
                <span className="material-symbols-outlined text-3xl text-brown mb-4 block">child_care</span>
                <h3 className="font-serif text-lg text-navy mb-3">자녀</h3>
                <p className="text-sm text-text-light leading-relaxed">
                  이쁜 딸과 사랑하는 아들, 그리고 듬직한 사위와 고운 며느리까지. 든든한 가족이 삶의 가장 큰 자산입니다.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="bg-white rounded-2xl p-8 border border-black/5">
                <span className="material-symbols-outlined text-3xl text-brown mb-4 block">diversity_1</span>
                <h3 className="font-serif text-lg text-navy mb-3">손자 넷</h3>
                <p className="text-sm text-text-light leading-relaxed">
                  네 명의 손자가 할아버지의 세상을 더 넓고 젊게 만들어줍니다. 둘째 손자의 우주에 대한 질문은 새로운 공부의 시작이 되었습니다.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Quote */}
          <FadeIn>
            <div className="text-center py-8">
              <blockquote className="font-serif text-3xl md:text-4xl text-navy mb-4">
                &ldquo;행복해.&rdquo;
              </blockquote>
              <p className="text-sm text-text-light italic">— 가족을 이야기할 때 가장 먼저 나온 말</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
