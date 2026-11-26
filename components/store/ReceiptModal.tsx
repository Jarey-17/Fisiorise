import { useEffect } from "react";
import { STORE_DATA } from "@/constants";
import { PAYMENT_METHODS } from "@/constants/products";
import { formatCurrency, formatPrice, type Receipt } from "@/lib/pos";

interface ReceiptModalProps {
  receipt: Receipt;
  /** Cierra el recibo sin tocar el carrito (clic fuera o Escape). */
  onDismiss: () => void;
  /** Cierra el recibo y vacía el carrito para empezar otra venta. */
  onNewSale: () => void;
}

export default function ReceiptModal({
  receipt,
  onDismiss,
  onNewSale,
}: ReceiptModalProps) {
  const { receipt: labels } = STORE_DATA;
  const payment = PAYMENT_METHODS.find(({ id }) => id === receipt.method);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onDismiss();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onDismiss]);

  return (
    <div
      className="pos-modal-overlay open"
      onClick={(event) => {
        if (event.target === event.currentTarget) onDismiss();
      }}
    >
      <div
        className="pos-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="receipt-title"
      >
        <div className="pos-modal__icon" aria-hidden="true">
          {labels.icon}
        </div>
        <h2 id="receipt-title" className="pos-modal__title">
          {labels.title}
        </h2>
        <p className="pos-modal__subtitle">{payment?.receiptMessage}</p>

        <div className="pos-receipt">
          <div className="pos-receipt__row">
            <span>{labels.date}</span>
            <span>{receipt.date}</span>
          </div>
          <div className="pos-receipt__row">
            <span>{labels.method}</span>
            <span className="pos-receipt__method">{receipt.method}</span>
          </div>
          <hr className="pos-receipt__divider" />
          {receipt.items.map((item) => (
            <div key={item.id} className="pos-receipt__row">
              <span>
                {item.emoji} {item.name} x{item.qty}
              </span>
              <span>{formatPrice(item.price * item.qty)}</span>
            </div>
          ))}
          <div className="pos-receipt__row pos-receipt__total">
            <span>{labels.totalPaid}</span>
            <span>{formatCurrency(receipt.total)}</span>
          </div>
        </div>

        <button
          type="button"
          className="btn btn--primary btn--full"
          onClick={onNewSale}
        >
          {labels.newSale}
        </button>
      </div>
    </div>
  );
}
