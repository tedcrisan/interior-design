import styles from "./ShopItem.module.scss";

type ShopItemProps = {
  product: any;
  addToCart: (product: any) => void;
};

export function ShopItem({ product, addToCart }: ShopItemProps) {
  return (
    <div className={styles.container}>
      <img src={product.imageURLs[0]} alt={product.itemName} />
      <div className={styles.content}>
        <div className={styles.topText}>
          <p className={styles.itemName}>{product.itemName.toLowerCase()}</p>
          <p className={styles.vendorName}>{product.vendorName.toUpperCase()}</p>
        </div>
        <div className={styles.bottomText}>
          <button onClick={() => addToCart(product)}>+ Add to Cart</button>
          <p>${product.MSRP}</p>
        </div>
      </div>
    </div>
  );
}
