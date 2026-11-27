import {
  TAX_RATE,
  type CartItem,
  type PaymentMethod,
} from "@/constants/products";

/** Instantánea de una venta cobrada, mostrada en el recibo. */
export interface Receipt {
  date: string;
  method: PaymentMethod;
  items: CartItem[];
  total: number;
}

/** "25 nov 2026 02:30 p. m." (locale es-NI) */
export function formatReceiptDate(date: Date): string {
  const day = date.toLocaleDateString("es-NI", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const time = date.toLocaleTimeString("es-NI", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${day} ${time}`;
}

/** 150 → "C$ 150.00" */
export function formatCurrency(amount: number): string {
  return `C$ ${amount.toFixed(2)}`;
}

/** 0 → "Gratis", cualquier otro valor → "C$ 150.00" */
export function formatPrice(amount: number): string {
  return amount === 0 ? "Gratis" : formatCurrency(amount);
}

export function calculateTotals(items: CartItem[]) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * TAX_RATE;
  return { subtotal, tax, total: subtotal + tax };
}

export function countUnits(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.qty, 0);
}
