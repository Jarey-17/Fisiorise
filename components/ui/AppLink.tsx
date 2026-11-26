import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

interface AppLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

/**
 * Enlace que elige la etiqueta correcta según el destino:
 * - "/ruta"        → <Link> de Next.js (navegación del lado del cliente)
 * - "https://…"    → <a> en pestaña nueva, con rel seguro
 * - "#ancla", "mailto:", etc. → <a> normal
 */
export default function AppLink({
  href,
  className,
  children,
  onClick,
}: AppLinkProps) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const isExternal = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      className={className}
      onClick={onClick}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}
