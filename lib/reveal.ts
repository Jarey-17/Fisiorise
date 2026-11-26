/** Retrasos disponibles (clases .reveal-delay-N en globals.css). */
export type RevealDelay = 1 | 2 | 3 | 4;

/**
 * Retraso para el elemento n-ésimo (desde 0) de una cuadrícula: solo existen
 * clases de retraso para las primeras 4 tarjetas.
 *
 * Vive fuera de Reveal.tsx porque ese módulo es "use client" y los Server
 * Components no pueden invocar funciones exportadas desde allí.
 */
export function staggerDelay(index: number): RevealDelay | undefined {
  return index < 4 ? ((index + 1) as RevealDelay) : undefined;
}
