/** Catálogo, categorías y métodos de pago de la tienda (/tienda). */

export type ProductCategory =
  | "ebooks"
  | "equipos"
  | "suplementos"
  | "accesorios";

export type CategoryFilter = "todos" | ProductCategory;

export type PaymentMethod = "efectivo" | "tarjeta" | "transferencia";

export interface Product {
  id: number;
  name: string;
  cat: ProductCategory;
  /** Precio en córdobas (C$). 0 = gratis. */
  price: number;
  emoji: string;
  stock: number;
}

export interface CartItem extends Product {
  qty: number;
}

/** IVA aplicado en la tienda (15 %). */
export const TAX_RATE = 0.15;

export const CATEGORIES: { id: CategoryFilter; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "ebooks", label: "E-books" },
  { id: "equipos", label: "Equipos" },
  { id: "suplementos", label: "Suplementos" },
  { id: "accesorios", label: "Accesorios" },
];

export const PAYMENT_METHODS: {
  id: PaymentMethod;
  label: string;
  icon: string;
  /** Mensaje que se muestra en el recibo tras cobrar. */
  receiptMessage: string;
}[] = [
  {
    id: "efectivo",
    label: "Efectivo",
    icon: "💵",
    receiptMessage: "Pago recibido en efectivo 💵",
  },
  {
    id: "tarjeta",
    label: "Tarjeta",
    icon: "💳",
    receiptMessage: "Pago con tarjeta procesado 💳",
  },
  {
    id: "transferencia",
    label: "Transferencia",
    icon: "📱",
    receiptMessage: "Transferencia confirmada 📱",
  },
];

export const PRODUCTS: Product[] = [
  // E-books
  { id: 1, name: "Guía Estrés Físico y Cervical", cat: "ebooks", price: 0, emoji: "📗", stock: 999 },
  { id: 2, name: "Tips de Habla y Estimulación Temprana", cat: "ebooks", price: 0, emoji: "📘", stock: 999 },
  { id: 3, name: "Pausas Activas en la Oficina", cat: "ebooks", price: 150, emoji: "📙", stock: 999 },
  { id: 4, name: "Plan de Rehabilitación Neurológica", cat: "ebooks", price: 250, emoji: "📕", stock: 999 },
  // Equipos
  { id: 5, name: "Banda Elástica de Resistencia (set x3)", cat: "equipos", price: 320, emoji: "🎽", stock: 15 },
  { id: 6, name: "Rodillo de Espuma (Foam Roller)", cat: "equipos", price: 580, emoji: "🟦", stock: 8 },
  { id: 7, name: "Pelota de Terapia 65cm", cat: "equipos", price: 750, emoji: "🏐", stock: 5 },
  { id: 8, name: "TENS Portatil (electroestimulador)", cat: "equipos", price: 2400, emoji: "⚡", stock: 3 },
  // Suplementos
  { id: 9, name: "Colágeno Hidrolizado 300g", cat: "suplementos", price: 450, emoji: "💊", stock: 20 },
  { id: 10, name: "Magnesio Complex (60 cáps)", cat: "suplementos", price: 360, emoji: "🧴", stock: 12 },
  { id: 11, name: "Omega-3 Premium (90 cáps)", cat: "suplementos", price: 520, emoji: "🐟", stock: 10 },
  { id: 12, name: "Vitamina D3 + K2 (60 cáps)", cat: "suplementos", price: 290, emoji: "☀️", stock: 18 },
  // Accesorios
  { id: 13, name: "Gel Frío/Calor Reutilizable", cat: "accesorios", price: 180, emoji: "🧊", stock: 25 },
  { id: 14, name: "Muñequera de Soporte", cat: "accesorios", price: 220, emoji: "🤝", stock: 14 },
  { id: 15, name: "Rodillera Funcional", cat: "accesorios", price: 380, emoji: "🦵", stock: 9 },
  { id: 16, name: "Cojín Lumbar Ergonómico", cat: "accesorios", price: 490, emoji: "🪑", stock: 6 },
];
