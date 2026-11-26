/**
 * A diferencia de layout.tsx, la plantilla se vuelve a montar en cada navegación,
 * así que la animación de entrada (fade-in) se repite al cambiar de página.
 * Reemplaza la transición con opacity que hacía el JS del sitio HTML original.
 */
export default function Template({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="page-enter">{children}</div>;
}
