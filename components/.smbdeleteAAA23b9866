import Link from "next/link";
import Image from "next/image";

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Approach", href: "/#approach" },
  { label: "What we do", href: "/#what-we-do" },
  { label: "Toolkit", href: "/the-id-suite/" },
  { label: "Who we work with", href: "/markets/" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
  { label: "Playbook", href: "/#playbook" },
  { label: "Contact", href: "/contact/" },
];

export default function Nav() {
  return (
    <header className="w-full">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-6 md:py-8 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center" aria-label="P5 home">
          <Image
            src="/images/p5-coin.png"
            alt="P5"
            width={512}
            height={512}
            priority
            className="h-10 w-10 md:h-12 md:w-12"
          />
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
          href="/#playbook"
          className="md:hidden text-[12px] tracking-cta uppercase text-forest"
        >
          Playbook
        </Link>
      </div>
    </header>
  );
}
