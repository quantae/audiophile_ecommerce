/* eslint-disable react/prop-types */
//import React from 'react'

import Button from "../../../components/button/Button";
import styles from "./product_cart_count_control.module.css";

import { CartCounter, PriceTag } from "../../../components/product_detailed_features/ProductDetailedFeatures";

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
