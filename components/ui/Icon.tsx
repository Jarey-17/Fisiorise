import { ICONS, WHATSAPP_PATHS, type IconName } from "@/constants/icons";

interface IconProps {
  name: IconName;
  className?: string;
  strokeWidth?: number;
  /** Si se omite, el tamaño lo define el CSS de `className`. */
  size?: number;
}

/** Icono outline decorativo (se oculta a lectores de pantalla). */
export default function Icon({
  name,
  className,
  strokeWidth = 2,
  size,
}: IconProps) {
  const icon: string | readonly string[] = ICONS[name];
  const paths = typeof icon === "string" ? [icon] : icon;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {paths.map((d) => (
        <path
          key={d}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d={d}
        />
      ))}
    </svg>
  );
}

export function WhatsAppIcon({
  className,
  size = 14,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {WHATSAPP_PATHS.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
