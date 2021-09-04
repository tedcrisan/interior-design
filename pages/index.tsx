import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Nav } from "../src/components/nav";
import { Hero } from "../src/components/hero";
import { Shop } from "../src/components/shop";
import { Cart } from "../src/components/cart";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const [showCart, setShowCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState<any>([]);

  useEffect(() => {
    fetch("https://main-api.fulhaus.com/fulhaus-tech-test/get-products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const toggleCart = () => setShowCart(!showCart);
  const addToCart = (product: any) =>
    setShoppingCart((prev: any) => [...prev, { ...product, cartId: Date.now() }]);
  const removeFromCart = (id: number) => {
    setShoppingCart((prev: any) => prev.filter((product: any) => product.cartId !== id));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Fülhaus</title>
        <meta name="description" content="Designed to be Different" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav toggleCart={toggleCart} />
      <Hero />
      <Shop products={products} addToCart={addToCart} />
      <Cart showCart={showCart} shoppingCart={shoppingCart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Home;
