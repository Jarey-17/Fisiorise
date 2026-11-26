"use client";

import { useCallback, useState } from "react";
import {
  PRODUCTS,
  type CartItem,
  type CategoryFilter,
  type PaymentMethod,
  type Product,
} from "@/constants/products";
import { calculateTotals, formatReceiptDate, type Receipt } from "@/lib/pos";
import Cart from "./Cart";
import Catalog from "./Catalog";
import ReceiptModal from "./ReceiptModal";

/** Punto de venta: catálogo filtrable + carrito + recibo. Estado solo en memoria. */
export default function Pos() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [category, setCategory] = useState<CategoryFilter>("todos");
  const [query, setQuery] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("efectivo");
  const [receipt, setReceipt] = useState<Receipt | null>(null);

  const normalizedQuery = query.toLowerCase();
  const visibleProducts = PRODUCTS.filter(
    (product) =>
      (category === "todos" || product.cat === category) &&
      product.name.toLowerCase().includes(normalizedQuery),
  );

  function addToCart(product: Product) {
    setCart((items) =>
      items.some((item) => item.id === product.id)
        ? items.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
          )
        : [...items, { ...product, qty: 1 }],
    );
  }

  function changeQuantity(productId: number, delta: number) {
    setCart((items) =>
      items
        .map((item) =>
          item.id === productId ? { ...item, qty: item.qty + delta } : item,
        )
        .filter((item) => item.qty > 0),
    );
  }

  function checkout() {
    setReceipt({
      date: formatReceiptDate(new Date()),
      method: paymentMethod,
      items: cart,
      total: calculateTotals(cart).total,
    });
  }

  function startNewSale() {
    setCart([]);
    setReceipt(null);
  }

  const dismissReceipt = useCallback(() => setReceipt(null), []);

  return (
    <>
      <div className="pos-main">
        <Catalog
          products={visibleProducts}
          category={category}
          query={query}
          onCategoryChange={setCategory}
          onQueryChange={setQuery}
          onAdd={addToCart}
        />
        <Cart
          items={cart}
          paymentMethod={paymentMethod}
          onPaymentMethodChange={setPaymentMethod}
          onQuantityChange={changeQuantity}
          onCheckout={checkout}
          onClear={() => setCart([])}
        />
      </div>

      {receipt && (
        <ReceiptModal
          receipt={receipt}
          onDismiss={dismissReceipt}
          onNewSale={startNewSale}
        />
      )}
    </>
  );
}
