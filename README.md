# FisioRise

Sitio web profesional de la Dra. Dina Reyes, fisiatra y especialista en logopedia con atención en Estelí y Ocotal, Nicaragua.

La plataforma presenta sus servicios de fisiatría integral, terapia de lenguaje, terapia online e intervención temprana, además de recursos gratuitos, libros digitales y opciones de contacto para agendar citas. Está diseñada como una página informativa accesible, responsiva y orientada a mostrar una atención humana, cercana y no invasiva para pacientes de todas las edades. También incluye una **tienda tipo punto de venta** (`/tienda`).

## Tecnologías

- [Next.js 16](https://nextjs.org/) (App Router) y React 19
- TypeScript
- CSS plano con variables y nomenclatura BEM (sin frameworks de estilos)
- `next/font` (Poppins y la fuente local *Neulis Cursive*) y `next/image`

## Requisitos

- Node.js **20.9 o superior**
- npm

## Primeros pasos

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando             | Qué hace                                         |
| ------------------- | ------------------------------------------------ |
| `npm run dev`       | Servidor de desarrollo con recarga en caliente   |
| `npm run build`     | Compila la versión de producción                 |
| `npm start`         | Sirve la compilación de producción               |
| `npm run lint`      | Revisa el código con ESLint                      |
| `npm run typecheck` | Verifica los tipos con TypeScript                |

## Rutas

| Ruta      | Contenido                                                                  |
| --------- | -------------------------------------------------------------------------- |
| `/`       | Navbar, hero, servicios, e-books, descargas, captación de contactos y footer |
| `/tienda` | Punto de venta: catálogo con filtros y búsqueda, carrito, IVA y recibo     |

Ambas páginas se generan de forma estática en el build.

## Estructura del proyecto

```
app/
  layout.tsx          Layout raíz: <html lang="es">, fuentes y metadatos SEO
  template.tsx        Animación de entrada (fade-in) en cada navegación
  page.tsx            Página principal (/)
  tienda/page.tsx     Tienda (/tienda)
  globals.css         Todos los estilos del sitio
  fonts/              Neulis Cursive (.ttf)
components/
  layout/             Navbar (menú móvil) y Footer
  home/               Hero, Services, Ebooks, Downloads, LeadMagnet y LeadForm
  store/              Pos (estado), Catalog, Cart, ReceiptModal y StoreHeader
  ui/                 Icon, AppLink y Reveal (animación al hacer scroll)
constants/
  index.ts            Textos, enlaces y datos de contacto del sitio
  products.ts         Catálogo, categorías, métodos de pago e IVA de la tienda
  icons.ts            Paths SVG de los iconos
lib/
  pos.ts              Cálculo de totales y formato de montos (C$)
  reveal.ts           Retrasos escalonados de la animación de entrada
public/images/        Logos (SVG) y foto de perfil
public/descargas/     PDF del espacio de descargas
```

## Cómo editar el contenido

- **Textos, enlaces, WhatsApp, correo y direcciones:** `constants/index.ts`. Los componentes solo leen de ahí.
- **Productos de la tienda, precios, stock y el IVA:** `constants/products.ts`.
- **Colores, tipografías, radios y sombras:** variables CSS al inicio de `app/globals.css` (`--color-primary`, `--color-secondary`, `--color-neutral`, …).
- **Imágenes:** colócalas en `public/images/` y referencia la ruta como `/images/archivo.ext`.
- **Documentos para descargar:** copia el PDF a `public/descargas/` y agrega una entrada (`title`, `description`, `file` y, opcional, `size`) a `DOWNLOADS_DATA.list` en `constants/index.ts`. La sección y sus enlaces del menú y del pie aparecen solos; si la lista queda vacía, desaparecen.
  > **Ojo:** todo lo que está en `public/` es accesible por cualquiera que conozca la URL, aunque no esté enlazado. Publica solo documentos que puedan ser públicos y evita nombres de archivo con datos personales.
- **Foto que aparece al pasar el cursor sobre el hero:** `HERO_DATA.hoverImage` en `constants/index.ts`. Hoy repite la foto de perfil; reemplázala por una foto de sesión clínica.

### Agregar una página

Crea `app/<nombre>/page.tsx`; la ruta `/<nombre>` queda disponible. Para enlazarla usa `AppLink` (o `next/link`) y agrégala a `ROUTES` y a los enlaces de `NAVBAR_DATA` si debe aparecer en el menú.

## Migración desde HTML/CSS/JS

El sitio original era estático (`index.html`, `Pos.html`, `styles/main.css`, `scripts/Main.ts`). Equivalencias:

| Antes                            | Ahora                                                                          |
| -------------------------------- | ------------------------------------------------------------------------------ |
| `index.html`                     | `app/page.tsx` + `components/home/*`, `components/layout/*`                    |
| `Pos.html` (JS inline)           | `app/tienda/page.tsx` + `components/store/*` (estado con `useState`)           |
| `styles/main.css`                | `app/globals.css` (mismas clases; el diseño se conserva)                       |
| `scripts/Main.ts` y scripts inline | `Navbar` (menú móvil), `LeadForm`, `Footer` (año), `Reveal` (scroll), `template.tsx` (transición) |
| `assets/images/`                 | `public/images/`                                                               |
| `assets/fonts/`                  | `app/fonts/` (cargadas con `next/font/local`)                                  |
| Poppins vía `@import` de Google  | `next/font/google` (se sirve desde el propio dominio)                          |
| `pos.html` / `index.html`        | `/tienda` / `/`                                                                |

Se eliminaron `@tailwindcss/cli` y `tailwindcss` de las dependencias: el CSS no los usaba.

## Pendientes conocidos

- **Formulario de contacto:** `components/home/LeadForm.tsx` aún no envía los datos a ningún servicio de correo (hay un `TODO`).
- **Anclas sin sección:** `#nosotros` (Conóceme), `#contacto` (Agenda tu cita) y `#online` (Terapia Online) están enlazadas, pero esas secciones todavía no existen en la página.
- **E-books gratuitos:** el botón *Descargar* apunta a `#recursos`; falta enlazar los archivos reales.
- **Tienda:** es una demo en memoria. No descuenta stock, no persiste las ventas ni procesa pagos reales.
- **Imagen para redes sociales:** `og:image` usa un SVG, que la mayoría de redes (Facebook, WhatsApp, X) no muestra. Conviene crear un PNG/JPG de 1200×630 en `public/images/` y apuntar `IMAGES`/`metadata` a él.

## Despliegue

Compatible con [Vercel](https://vercel.com/) sin configuración adicional. También puede ejecutarse en cualquier servidor con Node.js:

```bash
npm run build
npm start
```

## Flujo de trabajo con Git

- **`develop`** es la rama de integración: todo cambio entra aquí, normalmente desde una rama de trabajo (`feat/…`, `fix/…`) mediante un Pull Request.
- **`main`** solo recibe lo que ya está completo y probado, siempre desde `develop`.
- Ninguna de las dos se elimina; `develop` se mantiene siempre.

```
feat/mi-cambio ──PR──▶ develop ──(área completa)──▶ main
```
