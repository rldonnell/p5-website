import Link from "next/link";

type Variant = "forest" | "ink";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
}

const VARIANTS: Record<Variant, string> = {
  forest:
    "bg-forest text-bone hover:bg-ink hover:text-bone border-forest hover:border-ink",
  ink: "bg-transparent text-ink hover:bg-ink hover:text-bone border-ink",
};

export default function ButtonLink({
  href,
  children,
  variant = "forest",
  external = false,
}: ButtonLinkProps) {
  const className = `inline-flex items-center justify-center border px-7 py-3.5 text-[14px] tracking-cta uppercase font-medium transition-colors duration-150 ${VARIANTS[variant]}`;

  if (external || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
