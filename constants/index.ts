import type { IconName } from "./icons";

/* =============================================
   Contenido del sitio. Editar aquí para cambiar textos, enlaces y datos
   de contacto sin tocar los componentes.
   ============================================= */

export const SITE_URL = "https://fisiorise.com";

export const ROUTES = {
  home: "/",
  store: "/tienda",
} as const;

export const IMAGES = {
  logo: "/images/IMAGOTIPO-MULTICOLOR-HORIZONTAL-BLOQUE.svg",
  isotype: "/images/ISOTIPO-578045.svg",
  profile: "/images/profile-photo.png",
} as const;

export const APP_DATA = {
  name: "Dra. Dina Reyes",
  role: "Doctora Fisiatra Dina Reyes",
};

export const SEO_DATA = {
  title: "Dra. Dina Reyes | Fisiatra y Logopedia en Estelí",
  description:
    "Recupera tu libertad de movimiento y habla con confianza. Tratamientos cercanos, no invasivos y para todas las edades.",
  storeTitle: "Tienda — Dra. Dina Reyes",
};

export const CONTACT_DATA = {
  phone: "+505 8403 7542",
  whatsappUrl:
    "https://wa.me/50584037542?text=Hola,%20me%20interesa%20agendar%20una%20cita",
  email: "dinaerg20@gmail.com",
  emailUrl:
    "mailto:dinaerg20@gmail.com?subject=Consulta&body=Hola,%20me%20interesa%20agendar%20una%20cita.",
};

export interface NavLinkItem {
  href: string;
  label: string;
}

export const NAVBAR_DATA = {
  logo: {
    src: IMAGES.logo,
    alt: APP_DATA.role,
    // Dimensiones intrínsecas (viewBox) del SVG; el alto real lo fija el CSS.
    width: 4189,
    height: 1133,
  },
  links: [
    { href: "#servicios", label: "Servicios" },
    { href: "#nosotros", label: "Conóceme" },
    { href: "#ebooks", label: "E-books" },
    { href: ROUTES.store, label: "Tienda" },
  ] satisfies NavLinkItem[],
  cta: { href: "#contacto", label: "Agenda tu cita" },
  menuLabels: { open: "Abrir menú", close: "Cerrar menú" },
};

export const HERO_DATA = {
  badge: "Bienestar Integral",
  titlePrimary: "Recupera tu ",
  titleHighlight: "libertad",
  titleSecondary: " y vive sin limitaciones.",
  description:
    "Tratamientos no invasivos para todas las edades. Empatía, profesionalismo y educación para que retomes el control de tu cuerpo, ya sea presencial o desde casa.",
  ctaPrimary: { href: "#contacto", label: "Agenda tu cita presencial" },
  ctaSecondary: { href: "#online", label: "Terapia Online (Nacional)" },
  trustIndicators: ["Atención Empática", "Para todas las edades (0-65)"],
  image: {
    src: IMAGES.profile,
    alt: "Fisioterapia y recuperación",
    width: 640,
    height: 640,
  },
  // Imagen que aparece en hover — reemplazar por la foto de una sesión clínica.
  hoverImage: {
    src: IMAGES.profile,
    alt: "Sesión de rehabilitación",
    label: "En sesión de rehabilitación",
  },
  stats: {
    number: "+1000",
    label: "Pacientes recuperados",
  },
};

export type Tone = "primary" | "secondary";

export interface ServiceItem {
  title: string;
  description: string;
  icon: IconName;
  tone: Tone;
}

export const SERVICES_DATA = {
  id: "servicios",
  title: "Acompañamiento ",
  titleHighlight: "Especializado",
  description:
    "Un enfoque humano y profesional orientado a tratar la raíz del dolor o limitación, sin fricciones y a tu ritmo.",
  list: [
    {
      title: "Fisiatría Integral",
      description:
        "Evaluación y tratamiento no invasivo para recuperar la movilidad perdida por lesiones musculares, articulares o neurológicas.",
      icon: "user",
      tone: "primary",
    },
    {
      title: "Logopedia",
      description:
        "Tratamientos empáticos y pacientes para superar trastornos del habla, lenguaje y la comunicación en niños y adultos.",
      icon: "chat",
      tone: "secondary",
    },
    {
      title: "Terapia Online",
      description:
        "Consultas accesibles sin importar dónde estés (Nivel Nacional). Recibe orientación, ejercicios terapéuticos y seguimiento sin salir de casa.",
      icon: "desktop",
      tone: "primary",
    },
    {
      title: "Intervención Temprana",
      description:
        "Atención a recién nacidos y niños (0-12 años) con enfoque respetuoso para potenciar su desarrollo psicomotor y cognitivo natural.",
      icon: "smile",
      tone: "secondary",
    },
  ] satisfies ServiceItem[],
};

export type EbookCover = "default" | "green" | "peach";

export interface EbookItem {
  title: string;
  description: string;
  icon: IconName;
  cover: EbookCover;
  /** Precio en C$. 0 = gratis. */
  price: number;
  /** Insignia sobre la portada (opcional). */
  badge?: string;
  cta: { href: string; label: string; variant: "primary" | "secondary" };
}

export const EBOOKS_DATA = {
  id: "ebooks",
  title: "E-books & ",
  titleHighlight: "Recursos",
  description:
    "Material especializado para acompañar tu recuperación en casa, con el respaldo de años de experiencia clínica.",
  list: [
    {
      title: "Guía de Manejo del Estrés Físico y Cervical",
      description:
        "Técnicas prácticas para aliviar la tensión cervical, mejorar la postura y reducir el dolor de cabeza desde casa.",
      icon: "book",
      cover: "default",
      price: 0,
      badge: "Gratis",
      cta: { href: "#recursos", label: "Descargar", variant: "primary" },
    },
    {
      title: "Tips de Habla y Estimulación Temprana",
      description:
        "Actividades sencillas para estimular el desarrollo del lenguaje en niños de 0 a 5 años, con enfoque empático y respetuoso.",
      icon: "smile",
      cover: "green",
      price: 0,
      badge: "Gratis",
      cta: { href: "#recursos", label: "Descargar", variant: "primary" },
    },
    {
      title: "Pausas Activas en la Oficina",
      description:
        "Rutinas de 5 minutos para prevenir lesiones posturales en trabajo de escritorio. Ejercicios ilustrados paso a paso.",
      icon: "heart",
      cover: "peach",
      price: 150,
      cta: { href: ROUTES.store, label: "Comprar", variant: "secondary" },
    },
    {
      title: "Plan de Rehabilitación Neurológica en Casa",
      description:
        "Protocolo semanal de ejercicios para pacientes en recuperación neurológica, adaptable a distintos niveles de movilidad.",
      icon: "clipboard",
      cover: "default",
      price: 250,
      cta: { href: ROUTES.store, label: "Comprar", variant: "secondary" },
    },
  ] satisfies EbookItem[],
};

export const LEAD_MAGNET_DATA = {
  id: "recursos",
  title: "Potencia tu recuperación desde hoy con nuestra comunidad.",
  description:
    "Cuidar tu cuerpo empieza con la información correcta. Descarga gratis mis ",
  descriptionBold: "E-books y Tips prácticos",
  descriptionEnd:
    " para aliviar lesiones comunes, mejorar la postura en la oficina, y ejercicios en casa.",
  benefits: [
    "Guía para manejo del estrés físico y cervical (E-book)",
    "Tips de habla y estimulación temprana",
    "Rutinas en video para pausas activas",
  ],
  formBox: {
    badge: "100% Gratis",
    title: "Accede al contenido",
    subtitle: "Déjame tu correo y te enviaré el material de inmediato.",
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "Tu correo electrónico",
    btnText: "¡Quiero el material!",
    footerWarning: "Tus datos están seguros. Odiamos el spam tanto como tú.",
  },
};

export const FOOTER_DATA = {
  brandName: APP_DATA.name,
  description:
    "Fisiatra y logopeda con más de una década acompañando familias en Estelí y Ocotal. Atención presencial y online para todas las edades.",
  whatsappCta: "Escríbeme por WhatsApp",
  navigation: {
    title: "Navegar",
    links: [
      { href: "#servicios", label: "Servicios" },
      { href: "#ebooks", label: "E-books gratuitos" },
      { href: "#recursos", label: "Comunidad & Tips" },
      { href: ROUTES.store, label: "Tienda de productos" },
      { href: "#contacto", label: "Agendar cita" },
    ] satisfies NavLinkItem[],
  },
  specialties: {
    title: "Especialidades",
    links: [
      { href: "#servicios", label: "Fisiatría Integral" },
      { href: "#servicios", label: "Logopedia" },
      { href: "#servicios", label: "Terapia Online (Nacional)" },
      { href: "#servicios", label: "Intervención Temprana (0–12 años)" },
    ] satisfies NavLinkItem[],
  },
  contact: {
    title: "Contacto",
    locations: [
      {
        label: "Ocotal — Clínica Radiomédica Bautista",
        mapUrl:
          "https://www.google.com/maps/place/Cl%C3%ADnica+Radiom%C3%A9dica+Bautista/@13.6280418,-86.4764999,19.94z",
      },
      {
        label: "Estelí — Clínica Central",
        mapUrl:
          "https://www.google.com/maps/@13.0898896,-86.3545098,21z?hl=en",
      },
    ],
    phoneLabel: `${CONTACT_DATA.phone} (WhatsApp)`,
  },
  copyright: "Todos los derechos reservados.",
  regionNote: "Estelí & Ocotal, Nicaragua",
};

export const STORE_DATA = {
  headerTitle: "🛒 Tienda Fisiorise",
  backLabel: "Inicio",
  logoAlt: "Logo",
  searchPlaceholder: "🔍 Buscar producto...",
  noResults: "Sin resultados",
  cart: {
    title: "Venta actual",
    empty: "Agrega productos para comenzar",
    subtotal: "Subtotal",
    tax: "IVA (15%)",
    total: "Total",
    paymentLabel: "Método de pago",
    checkout: "Cobrar",
    clear: "Vaciar carrito",
  },
  receipt: {
    title: "¡Venta exitosa!",
    icon: "✅",
    date: "Fecha",
    method: "Método",
    totalPaid: "Total pagado",
    newSale: "Nueva venta",
  },
};
