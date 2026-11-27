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
  guideCover: "/images/guia-fractura-portada.jpg",
} as const;

/**
 * Funciones que dependen de un backend que todavía no existe. Mientras estén
 * en `false`, la web muestra un aviso de "Llegará pronto" en su lugar.
 */
export const FEATURES = {
  /** /tienda: catálogo, carrito y cobro (sin inventario ni pagos reales aún). */
  store: false,
  /** Catálogo de e-books (sin archivos ni pagos aún). */
  ebooks: false,
  /** Formulario de la comunidad (todavía no envía los datos a ningún servicio). */
  newsletter: false,
} as const;

export const COMING_SOON_LABEL = "Llegará pronto";

/** Cifras de la práctica, usadas en el hero, "Conóceme" y el pie de página. */
export const PRACTICE_STATS = {
  years: 3,
  patients: "+150",
};

export const APP_DATA = {
  name: "Dra. Dina Reyes",
  role: "Doctora Fisiatra Dina Reyes",
};

export const SEO_DATA = {
  title: "Dra. Dina Reyes | Fisiatra y Logopedia en Estelí",
  description:
    "Recupera tu libertad de movimiento y habla con confianza. Rehabilitación basada en evidencia, cercana, no invasiva y para todas las edades.",
  storeTitle: "Tienda — Dra. Dina Reyes",
};

export const CONTACT_DATA = {
  phone: "+505 8403 7542",
  whatsappUrl:
    "https://wa.me/50584037542?text=Hola,%20me%20interesa%20agendar%20una%20cita",
  onlineWhatsappUrl:
    "https://wa.me/50584037542?text=Hola,%20me%20interesa%20la%20terapia%20online",
  email: "dinaerg20@gmail.com",
  emailUrl:
    "mailto:dinaerg20@gmail.com?subject=Consulta&body=Hola,%20me%20interesa%20agendar%20una%20cita.",
  locations: [
    {
      label: "Ocotal — Clínica Radiomédica Bautista",
      mapUrl:
        "https://www.google.com/maps/place/Cl%C3%ADnica+Radiom%C3%A9dica+Bautista/@13.6280418,-86.4764999,19.94z",
    },
    {
      label: "Estelí — Clínica Central",
      mapUrl: "https://www.google.com/maps/@13.0898896,-86.3545098,21z?hl=en",
    },
  ],
};

export interface NavLinkItem {
  href: string;
  label: string;
}

export interface DownloadItem {
  title: string;
  description: string;
  /** Ruta pública del archivo dentro de public/, p. ej. "/descargas/guia.pdf". */
  file: string;
  /** Peso legible, p. ej. "1 MB" (opcional). */
  size?: string;
  /** Número de páginas (opcional). */
  pages?: number;
  /** Portada: si existe, la tarjeta se muestra destacada (opcional). */
  cover?: { src: string; alt: string; width: number; height: number };
  /** Qué incluye el documento (opcional). */
  highlights?: string[];
}

export const GUIDE = {
  title: "De la fractura a la recuperación integral",
  file: "/descargas/de-la-fractura-a-la-recuperacion-integral.pdf",
};

/**
 * Espacio de descargas. Los archivos van en public/descargas/ y TODO lo que
 * está en public/ es accesible por cualquiera que conozca la URL: publica solo
 * documentos que puedan ser públicos. Con la lista vacía la sección y sus
 * enlaces no se muestran.
 */
export const DOWNLOADS_DATA = {
  id: "descargas",
  title: "Centro de ",
  titleHighlight: "Descargas",
  description: "Recursos gratuitos en PDF para acompañar tu recuperación.",
  navLabel: "Descargas",
  buttonLabel: "Descargar PDF",
  freeLabel: "Gratis",
  list: [
    {
      title: GUIDE.title,
      description:
        "Guía basada en evidencia para recuperarte de fracturas de piernas y cadera: qué está pasando dentro de tu hueso, qué puedes hacer tú en cada etapa y qué dice de verdad la ciencia.",
      file: GUIDE.file,
      size: "1 MB",
      pages: 37,
      cover: {
        src: IMAGES.guideCover,
        alt: `Portada de la guía «${GUIDE.title}»`,
        width: 655,
        height: 927,
      },
      highlights: [
        "Las 6 fases de la recuperación, con señales para avanzar",
        "18 ejercicios explicados paso a paso",
        "Los 7 pilares: nutrición, dolor, sueño, salud mental y más",
        "Semáforo de alarma y mitos frente a evidencia",
      ],
    },
  ] satisfies DownloadItem[],
};

/** Enlace de menú hacia las descargas; vacío si no hay documentos. */
const DOWNLOADS_NAV_LINKS: NavLinkItem[] =
  DOWNLOADS_DATA.list.length > 0
    ? [{ href: `#${DOWNLOADS_DATA.id}`, label: DOWNLOADS_DATA.navLabel }]
    : [];

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
    { href: "#recuperacion", label: "Recuperación" },
    ...DOWNLOADS_NAV_LINKS,
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
  ctaSecondary: {
    href: CONTACT_DATA.onlineWhatsappUrl,
    label: "Terapia Online (Nacional)",
  },
  trustIndicators: [
    "Atención Empática",
    "Basada en evidencia",
    "Para todas las edades (0-65)",
  ],
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
    number: PRACTICE_STATS.patients,
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

/* Biografía tomada de la guía «De la fractura a la recuperación integral». */
export const ABOUT_DATA = {
  id: "nosotros",
  eyebrow: "Conóceme",
  title: "Dra. Dina ",
  titleHighlight: "Reyes",
  role: "Médica fisiatra · Medicina Física y Rehabilitación",
  paragraphs: [
    "Soy médica general egresada de la UNAN-Managua y especialista en Fisiatría, la rama de la medicina que se dedica a la rehabilitación. Mi meta es ayudarte a comprender tu dolor, recuperar movimiento y volver a lo que es importante para ti, con un enfoque médico, humano y basado en evidencia.",
    "Acompañaba a mis pacientes en la rehabilitación de fracturas cuando un accidente me dejó ocho fracturas, entre ellas las de ambas piernas. Me tocó recorrer el mismo camino desde la cama del hospital. Por eso hoy trabajo con dos miradas: la de la especialista que conoce la evidencia y la de la paciente que sabe lo que pesa cada ejercicio.",
  ],
  quote:
    "El día que me tocó estar del otro lado de la camilla aprendí que el miedo baja cuando entiendes qué está pasando dentro de tu hueso y qué te toca hacer hoy.",
  trainingTitle: "Formación",
  training: [
    "Medicina general (UNAN-Managua)",
    "Fisiatría",
    "Medicina deportiva",
    "Electromiografía",
    "Rehabilitación ortopédica",
    "Estimulación temprana",
    "Terapia del lenguaje",
  ],
  stats: [
    { value: String(PRACTICE_STATS.years), label: "años de experiencia" },
    { value: PRACTICE_STATS.patients, label: "pacientes recuperados" },
    { value: "2", label: "sedes: Estelí y Ocotal" },
  ],
  image: {
    src: IMAGES.profile,
    alt: "Dra. Dina Reyes, médica fisiatra",
    width: 640,
    height: 640,
  },
};

export interface RecoveryPhase {
  phase: string;
  name: string;
  time: string;
  work: string;
  next: string;
}

/* Extracto de «El mapa en 60 segundos» y «Los siete pilares» de la guía. */
export const RECOVERY_DATA = {
  id: "recuperacion",
  title: "Tu recuperación, ",
  titleHighlight: "paso a paso",
  description:
    "La recuperación de una fractura no es una espera a ciegas: avanza por etapas que se pueden reconocer. Cada una tiene un trabajo concreto y una señal que te dice cuándo pasar a la siguiente.",
  workLabel: "Tu trabajo",
  nextLabel: "Pasas cuando",
  phases: [
    {
      phase: "Fase 0",
      name: "Urgencia e inmovilización",
      time: "Días 0 a 7",
      work: "Entender tu plan y preguntar antes de salir del hospital.",
      next: "Tienes indicaciones claras de cuánto apoyar y cómo moverte.",
    },
    {
      phase: "Fase 1",
      name: "Protección",
      time: "Semanas 0 a 6",
      work: "Mover lo que te permitieron y frenar la pérdida de músculo.",
      next: "El dolor baja y tu equipo te autoriza a apoyar más.",
    },
    {
      phase: "Fase 2",
      name: "Movilidad y primera carga",
      time: "Semanas 6 a 12",
      work: "Recuperar el movimiento, apoyar según lo indicado y caminar con ayudas.",
      next: "Apoyas lo indicado sin que el dolor aumente al día siguiente.",
    },
    {
      phase: "Fase 3",
      name: "Fuerza y equilibrio",
      time: "Meses 3 a 6",
      work: "Ganar fuerza de pie, trabajar el equilibrio y dejar las ayudas poco a poco.",
      next: "Haces tu día a día con seguridad y el miedo ya no manda.",
    },
    {
      phase: "Fase 4",
      name: "Retorno a la vida activa",
      time: "Meses 6 a 12",
      work: "Volver al trabajo, al deporte y a exigencias mayores, de forma progresiva.",
      next: "Tu equipo te da el alta funcional.",
    },
    {
      phase: "Fase 5",
      name: "Después",
      time: "Del mes 12 en adelante",
      work: "Mantener la fuerza, revisar tu salud ósea y decidir si se retira el material de la cirugía.",
      next: "Esto ya es tu vida, no una fase.",
    },
  ] satisfies RecoveryPhase[],
  note: "Los plazos son una guía, no una fecha límite: cambian según el hueso, el tipo de fractura, la cirugía y tu edad. Avanzas por señales, no por calendario.",
  pillarsTitle: "Siete pilares que te acompañan en todas las fases",
  pillars: [
    "Nutrición",
    "Movimiento y carga",
    "Músculo perdido",
    "Dolor",
    "Sueño, tabaco y alcohol",
    "Salud mental",
    "Entorno y cuidadores",
  ],
  goldenRule: {
    title: "La regla de oro",
    text: "Lo que puedes mover, muévelo. Lo que puedes cargar, cárgalo. Lo que tu equipo te pidió proteger, protégelo.",
  },
  cta: { href: `#${DOWNLOADS_DATA.id}`, label: "Descarga la guía completa" },
};

export type MythVerdict = "false" | "partial";

export interface MythItem {
  belief: string;
  verdict: MythVerdict;
  evidence: string;
}

/* Selección de «Mitos frente a evidencia» de la guía. */
export const MYTHS_DATA = {
  id: "mitos",
  title: "Mitos frente a ",
  titleHighlight: "evidencia",
  description:
    "Algunos consejos, repetidos con mucha seguridad, pueden frenar tu recuperación sin que lo notes. Esto es lo que dice la ciencia.",
  verdictLabels: { false: "Falso", partial: "En parte" } satisfies Record<
    MythVerdict,
    string
  >,
  list: [
    {
      belief: "Hay que estar quieto para que el hueso suelde.",
      verdict: "false",
      evidence:
        "Mover lo permitido y cargar a tiempo suele ayudar o, como mínimo, no perjudicar.",
    },
    {
      belief: "El hueso suelda siempre en seis semanas.",
      verdict: "false",
      evidence:
        "Depende del hueso y de la fractura. En fracturas de tibia operadas con clavo, la consolidación promedio fue de unas 21 a 22 semanas.",
    },
    {
      belief: "Si duele, te estás haciendo daño.",
      verdict: "partial",
      evidence:
        "Una molestia leve que se va en menos de 24 horas suele ser normal. El dolor fuerte, creciente o punzante sí es una señal para parar.",
    },
    {
      belief:
        "Si la radiografía muestra el hueso consolidado, la recuperación está completa.",
      verdict: "false",
      evidence:
        "El hueso suele ir por delante del músculo, del equilibrio y de la confianza.",
    },
    {
      belief: "Un cigarrito no hace nada.",
      verdict: "false",
      evidence:
        "Fumar se asocia con más del doble de riesgo de que la consolidación se retrase o no ocurra.",
    },
    {
      belief: "El colágeno cura la fractura.",
      verdict: "false",
      evidence:
        "No hay ensayos en humanos que lo demuestren; hay uno en curso.",
    },
  ] satisfies MythItem[],
  note: "Información educativa: no sustituye la valoración de tu equipo tratante.",
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
    "Material especializado para acompañar tu recuperación en casa, basado en evidencia y en la experiencia clínica.",
  // Se muestra mientras FEATURES.ebooks sea false.
  comingSoon: {
    title: "Nuevos e-books en camino",
    text: `Estoy preparando más guías para acompañarte en casa. Mientras tanto, descarga gratis «${GUIDE.title}».`,
    action: { href: `#${DOWNLOADS_DATA.id}`, label: "Ir a descargas" },
  },
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
    "Cuidar tu cuerpo empieza con la información correcta. En ",
  descriptionBold: "Fisiatips",
  descriptionEnd:
    " compartiré tips claros sobre dolor, movimiento y rehabilitación, basados en evidencia y pensados para tu vida diaria.",
  benefits: [
    "Tips prácticos sobre dolor, movimiento y ejercicio terapéutico",
    "Resúmenes de evidencia explicados en simple",
    "Aviso de nuevas guías y recursos gratuitos",
  ],
  // Se muestra en lugar del formulario mientras FEATURES.newsletter sea false.
  comingSoon: {
    title: "La comunidad Fisiatips",
    text: "El registro estará disponible muy pronto. Mientras tanto, la guía gratuita ya está lista para descargar.",
    action: { href: `#${DOWNLOADS_DATA.id}`, label: "Descargar la guía" },
  },
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

export const CONTACT_SECTION_DATA = {
  id: "contacto",
  title: "Agenda tu ",
  titleHighlight: "cita",
  description:
    "Escríbeme y coordinamos tu cita presencial en Estelí u Ocotal, o tu terapia online desde cualquier parte de Nicaragua.",
  whatsapp: {
    title: "WhatsApp",
    text: "La forma más rápida de agendar.",
    cta: "Escríbeme por WhatsApp",
  },
  online: {
    title: "Terapia online",
    text: "Orientación, ejercicios terapéuticos y seguimiento sin salir de casa.",
    cta: "Consultar terapia online",
  },
  email: {
    title: "Correo",
    text: "Para consultas, alianzas y charlas educativas.",
  },
  locationsTitle: "Dónde atiendo",
};

export const FOOTER_DATA = {
  brandName: APP_DATA.name,
  description: `Fisiatra con ${PRACTICE_STATS.years} años de experiencia acompañando a pacientes en Estelí y Ocotal. Atención presencial y online para todas las edades.`,
  whatsappCta: "Escríbeme por WhatsApp",
  navigation: {
    title: "Navegar",
    links: [
      { href: "#servicios", label: "Servicios" },
      { href: "#nosotros", label: "Conóceme" },
      { href: "#recuperacion", label: "Tu recuperación" },
      ...DOWNLOADS_NAV_LINKS,
      { href: "#ebooks", label: "E-books" },
      { href: "#recursos", label: "Comunidad Fisiatips" },
      { href: ROUTES.store, label: "Tienda" },
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
    phoneLabel: `${CONTACT_DATA.phone} (WhatsApp)`,
  },
  disclaimer:
    "El contenido de este sitio es educativo y no sustituye una valoración médica individual.",
  copyright: "Todos los derechos reservados.",
  regionNote: "Estelí & Ocotal, Nicaragua",
};

export const STORE_DATA = {
  headerTitle: "🛒 Tienda Fisiorise",
  backLabel: "Inicio",
  logoAlt: "Logo",
  // Se muestra en /tienda mientras FEATURES.store sea false.
  comingSoon: {
    title: "La tienda está en camino",
    text: "Muy pronto podrás adquirir aquí productos y recursos para tu recuperación. Mientras tanto, escríbeme por WhatsApp si necesitas algo.",
    action: { href: CONTACT_DATA.whatsappUrl, label: "Escríbeme por WhatsApp" },
  },
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
