import styles from "./Nav.module.scss";

type NavProps = {
  toggleCart: () => void;
};

export function Nav({ toggleCart }: NavProps) {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Fülhaus Shop</div>
      <button className={styles.cartButton} onClick={() => toggleCart()}>
        CART
      </button>
    </div>
  );
}
