import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-8">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-xl text-white mb-2">성의경</h3>
            <p className="text-white/50 text-sm mb-3">
              선(線)을 잇고, 사람을 잇다
            </p>
            <p className="text-white/30 text-sm leading-relaxed">
              대한민국 통신의 역사와 함께한
              <br />한 기술자의 삶의 기록
            </p>
          </div>
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-white/50 mb-4">
              이야기
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "소개" },
                { href: "/telecom", label: "통신의 역사" },
                { href: "/gallery", label: "갤러리" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/40 hover:text-white/80 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-white/50 mb-4">
              삶
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/family", label: "가족" },
                { href: "/cosmos", label: "우주 이야기" },
                { href: "/values", label: "가치관" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/40 hover:text-white/80 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-white/25">
            &copy; 2026 성의경의 삶의 기록. 가족을 위해 만들어진 페이지입니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
