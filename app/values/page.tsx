import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

const values = [
  {
    icon: "account_tree",
    title: "족보와 뿌리",
    desc: "어디에서 왔는지를 아는 것이 어디로 가는지를 아는 것의 시작. 족보를 통해 가문의 역사를 기록하고 보존하는 일에 깊은 관심을 가지고 있습니다.",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=500&q=80",
  },
  {
    icon: "temple_buddhist",
    title: "조상에 대한 예",
    desc: "전통 유교 문화의 가르침처럼, 조상에게 잘하는 것이 후손으로서의 도리라고 믿습니다. 뿌리가 깊은 나무가 흔들리지 않듯이.",
    image: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=500&q=80",
  },
  {
    icon: "menu_book",
    title: "평생 배움",
    desc: "일하면서 대학을 다니고, 75세에 우주를 공부하는 삶. 배움에는 나이가 없다는 것을 몸소 증명하고 있습니다.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&q=80",
  },
  {
    icon: "link",
    title: "잇는 삶",
    desc: "전화선으로 사람을 잇고, 족보로 세대를 잇고, 가르침으로 지혜를 잇는다. 기술자의 본질은 결국 '연결'이었습니다.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&q=80",
  },
];

export default function ValuesPage() {
  return (
    <>
      <PageHero
        label="가치관"
        title="뿌리를 기억하고,&#10;미래를 잇는다"
        description="평생을 관통하는 신념과 가치, 그리고 후손에게 전하고 싶은 이야기"
        imageSrc="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1600&q=80"
      />

      <section className="bg-cream py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <FadeIn key={v.title}>
                <div className="bg-white rounded-2xl overflow-hidden border border-black/5 hover:-translate-y-1 transition-transform duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={v.image}
                      alt={v.title}
                      fill
                      className="object-cover img-grayscale group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <span className="material-symbols-outlined text-3xl text-brown mb-3 block">{v.icon}</span>
                    <h3 className="font-serif text-lg text-navy mb-3">{v.title}</h3>
                    <p className="text-sm text-text-light leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
