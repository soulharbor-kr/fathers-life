import Image from "next/image";

export default function PageHero({
  label,
  title,
  description,
  imageSrc,
  dark = false,
}: {
  label: string;
  title: string;
  description: string;
  imageSrc: string;
  dark?: boolean;
}) {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      <Image
        src={imageSrc}
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div
        className={`absolute inset-0 ${
          dark
            ? "bg-gradient-to-b from-black/70 to-black/50"
            : "bg-gradient-to-b from-navy/80 to-navy/60"
        }`}
      />
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 py-32">
        <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/50 mb-4">
          {label}
        </p>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
          {title}
        </h1>
        <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
