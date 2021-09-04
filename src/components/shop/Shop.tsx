import { ShopItem } from "./shopItem";
import styles from "./Shop.module.scss";

type ShopProps = {
  products: any;
  addToCart: (product: any) => void;
};

export function Shop({ products, addToCart }: ShopProps) {
  return (
    <div id="shop" className={styles.container}>
      {products.map((product: any) => (
        <ShopItem key={product._id} product={product} addToCart={addToCart}></ShopItem>
      ))}
    </div>
  );
}
