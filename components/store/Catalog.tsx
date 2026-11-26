import { STORE_DATA } from "@/constants";
import {
  CATEGORIES,
  type CategoryFilter,
  type Product,
} from "@/constants/products";
import { formatPrice } from "@/lib/pos";

interface CatalogProps {
  products: Product[];
  category: CategoryFilter;
  query: string;
  onCategoryChange: (category: CategoryFilter) => void;
  onQueryChange: (query: string) => void;
  onAdd: (product: Product) => void;
}

export default function Catalog({
  products,
  category,
  query,
  onCategoryChange,
  onQueryChange,
  onAdd,
}: CatalogProps) {
  return (
    <div className="pos-catalog">
      <input
        type="text"
        className="pos-catalog__search"
        placeholder={STORE_DATA.searchPlaceholder}
        aria-label="Buscar producto"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
      />

      <div className="pos-catalog__tabs">
        {CATEGORIES.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={`pos-tab${category === id ? " active" : ""}`}
            aria-pressed={category === id}
            onClick={() => onCategoryChange(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="pos-products">
        {products.length === 0 ? (
          <p className="pos-products__empty">{STORE_DATA.noResults}</p>
        ) : (
          products.map((product) => (
            <button
              key={product.id}
              type="button"
              className="pos-product-card"
              onClick={() => onAdd(product)}
            >
              <span className="pos-product-card__emoji" aria-hidden="true">
                {product.emoji}
              </span>
              <span className="pos-product-card__name">{product.name}</span>
              <span className="pos-product-card__price">
                {formatPrice(product.price)}
              </span>
              <span className="pos-product-card__stock">
                {product.cat === "ebooks" ? "Digital" : `Stock: ${product.stock}`}
              </span>
            </button>
          ))
        )}
      </div>
    </div>
  );
}
