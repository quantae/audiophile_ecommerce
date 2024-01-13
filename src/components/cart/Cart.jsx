/* eslint-disable react/prop-types */
//import React from 'react'

import Button from "../button/Button";
import styles from "./cart.module.css";

import { CartCounter, PriceTag } from "../product_detailed_features/ProductDetailedFeatures";

function CartItemCount({count}) {
  return (
    <div className={styles.cart_item_count}>
      <h6>Cart (3){count}</h6>
      <p>Remove all</p>
    </div>
  );
}   

function CartItem() {
  return (
    <div className={styles.cart_item}>
      <div className={styles.cart_item_img_wraper}>
        <img src="https://www.litoscreen.com/waterproof-magnetic-sport-stereo-wireless-bluetooths-headphone-earphones_p33.html" alt="item"/>
      </div>
      <div>
        <PriceTag price="1200" />
      </div>
      <div>
        <CartCounter />
      </div>
    </div>
  );
}

const Total = () => (
  <div className={styles.total}>
    <p>Total</p>
    <PriceTag price="1200" />
  </div>
);

const Cart = () => {
  return (
    <div className={styles.cart_container}>
      
        <CartItemCount />
        <CartItem />
        <CartItem />
        <CartItem />
        <Total />

        <Button label="Checkout" />
     
    </div>
  );
};

export default Cart;
