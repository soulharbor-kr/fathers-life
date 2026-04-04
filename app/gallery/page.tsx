import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const photos = [
  { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80", alt: "고향 풍경", category: "고향" },
  { src: "https://images.unsplash.com/photo-1590935217281-8f102120d683?w=600&q=80", alt: "옛 교환기", category: "통신" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80", alt: "전화기", category: "통신" },
  { src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80", alt: "따뜻한 빛", category: "가족" },
  { src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80", alt: "우주 성운", category: "우주" },
  { src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80", alt: "큰 나무", category: "가치관" },
  { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80", alt: "지구", category: "우주" },
  { src: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=600&q=80", alt: "전통 건축", category: "가치관" },
  { src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80", alt: "도서관", category: "배움" },
  { src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80", alt: "기술", category: "통신" },
  { src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80", alt: "스마트폰", category: "통신" },
  { src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80", alt: "다리", category: "연결" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream pt-28 pb-12">
        <div className="max-w-[1100px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.12em] uppercase text-brown mb-4">갤러리</p>
          </FadeIn>
          <FadeIn>
            <h1 className="font-serif text-2xl md:text-4xl font-bold text-navy leading-snug mb-4">
              기억의 조각들
            </h1>
          </FadeIn>
          <FadeIn>
            <p className="text-sm text-text-light max-w-xl leading-relaxed">
              삶의 순간들을 담은 이미지 모음입니다.
              현재는 Unsplash의 분위기 이미지를 사용하고 있으며, 추후 실제 사진으로 교체됩니다.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-cream pb-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {photos.map((photo, i) => (
              <FadeIn key={i}>
                <div className="break-inside-avoid group relative rounded-2xl overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto img-grayscale group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <span className="text-xs font-medium bg-brown/80 text-white px-2 py-0.5 rounded-full">{photo.category}</span>
                      <p className="text-white text-sm mt-1">{photo.alt}</p>
                    </div>
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
