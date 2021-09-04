import { FiX } from "react-icons/fi";
import styles from "./CartItem.module.scss";

type CartItemProps = {
  product: any;
  removeFromCart: (id: number) => void;
};

export function CartItem({ product, removeFromCart }: CartItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <img src={product.imageURLs[0]} alt={product.itemName} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.itemName}>{product.itemName.toLowerCase()}</p>
          <p className={styles.vendorName}>{product.vendorName.toUpperCase()}</p>
        </div>
        <span>${product.MSRP}</span>
      </div>
      <button className={styles.remove} onClick={() => removeFromCart(product.cartId)}>
        <FiX title="Remove item" size="24px" />
      </button>
    </div>
  );
}
