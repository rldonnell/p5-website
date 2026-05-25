import Link from "next/link";

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Approach", href: "/#approach" },
  { label: "What we do", href: "/#what-we-do" },
  { label: "Toolkit", href: "/the-id-suite/" },
  { label: "Who we work with", href: "/markets/" },
  { label: "Plan of Record", href: "/#plan-of-record" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  return (
    <header className="w-full">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-6 md:py-8 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl md:text-[28px] font-medium tracking-tight text-ink"
          aria-label="P5 home"
        >
          P5
        </Link>
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-7 lg:gap-9 text-[13px] tracking-nav text-taupe"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-ink transition-colors duration-150"
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#plan-of-record"
          className="md:hidden text-[12px] tracking-cta uppercase text-forest"
        >
          Plan of Record
        </Link>
      </div>
    </header>
  );
}
