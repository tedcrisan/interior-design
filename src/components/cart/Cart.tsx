import { useState, useEffect } from "react";
import { CartItem } from "./CartItem";
import styles from "./Cart.module.scss";

type CartProps = {
  showCart: boolean;
  shoppingCart: any;
  removeFromCart: (id: number) => void;
};

export function Cart({ showCart, shoppingCart, removeFromCart }: CartProps) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let tempTotal = 0;
    shoppingCart.forEach((product: any) => (tempTotal = tempTotal + product.MSRP));
    setTotal(tempTotal);
  }, [shoppingCart]);

  return (
    <div className={`${styles.container} ${showCart ? styles.show : ""}`}>
      <div className={styles.list}>
        {shoppingCart.map((product: any) => (
          <CartItem key={product.cartId} product={product} removeFromCart={removeFromCart} />
        ))}
      </div>

      <div className={styles.total}>
        <span>Total:</span>
        <span>${total}</span>
      </div>
      <div className={styles.checkout}>
        <button className={styles.checkoutButton}>CHECKOUT</button>
      </div>
    </div>
  );
}
