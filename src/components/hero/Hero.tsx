import styles from "./Hero.module.scss";

export function Hero() {
  const scrollToShop = () => {
    const shop = document.getElementById("shop");
    shop?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.hero}>
      <div className={styles.callToAction}>
        <p>Patio Furniture</p>
        <button className={styles.shopButton} onClick={() => scrollToShop()}>
          SHOP
        </button>
      </div>
    </div>
  );
}
