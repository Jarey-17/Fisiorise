import { STORE_DATA } from "@/constants";
import {
  PAYMENT_METHODS,
  type CartItem,
  type PaymentMethod,
} from "@/constants/products";
import {
  calculateTotals,
  countUnits,
  formatCurrency,
  formatPrice,
} from "@/lib/pos";

interface CartProps {
  items: CartItem[];
  paymentMethod: PaymentMethod;
  onPaymentMethodChange: (method: PaymentMethod) => void;
  onQuantityChange: (productId: number, delta: number) => void;
  onCheckout: () => void;
  onClear: () => void;
}

export default function Cart({
  items,
  paymentMethod,
  onPaymentMethodChange,
  onQuantityChange,
  onCheckout,
  onClear,
}: CartProps) {
  const { subtotal, tax, total } = calculateTotals(items);
  const { cart } = STORE_DATA;

  return (
    <aside className="pos-cart" aria-label={cart.title}>
      <div className="pos-cart__header">
        <span className="pos-cart__title">{cart.title}</span>
        <span className="pos-cart__count">{countUnits(items)}</span>
      </div>

      <div className="pos-cart__items">
        {items.length === 0 ? (
          <p className="pos-cart__empty">{cart.empty}</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="pos-cart-item">
              <span className="pos-cart-item__emoji" aria-hidden="true">
                {item.emoji}
              </span>
              <div className="pos-cart-item__info">
                <div className="pos-cart-item__name">{item.name}</div>
                <div className="pos-cart-item__price">
                  {formatPrice(item.price * item.qty)}
                </div>
              </div>
              <div className="pos-cart-item__qty">
                <button
                  type="button"
                  className="pos-qty-btn"
                  aria-label={`Quitar una unidad de ${item.name}`}
                  onClick={() => onQuantityChange(item.id, -1)}
                >
                  −
                </button>
                <span className="pos-qty-num">{item.qty}</span>
                <button
                  type="button"
                  className="pos-qty-btn"
                  aria-label={`Agregar una unidad de ${item.name}`}
                  onClick={() => onQuantityChange(item.id, 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="pos-cart__summary">
        <div className="pos-cart__row">
          <span>{cart.subtotal}</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="pos-cart__row">
          <span>{cart.tax}</span>
          <span>{formatCurrency(tax)}</span>
        </div>
        <div className="pos-cart__row pos-cart__row--total">
          <span>{cart.total}</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>

      <div className="pos-cart__actions">
        <p className="pos-cart__label">{cart.paymentLabel}</p>
        <div className="pos-payment-methods">
          {PAYMENT_METHODS.map(({ id, label, icon }) => (
            <button
              key={id}
              type="button"
              className={`pos-pay-btn${paymentMethod === id ? " selected" : ""}`}
              aria-pressed={paymentMethod === id}
              onClick={() => onPaymentMethodChange(id)}
            >
              <span className="pos-pay-btn__icon" aria-hidden="true">
                {icon}
              </span>
              {label}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="btn btn--primary btn--full"
          disabled={items.length === 0}
          onClick={onCheckout}
        >
          {cart.checkout}
        </button>
        <button type="button" className="pos-clear-btn" onClick={onClear}>
          {cart.clear}
        </button>
      </div>
    </aside>
  );
}
