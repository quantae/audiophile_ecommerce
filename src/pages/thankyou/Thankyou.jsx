/* eslint-disable no-unused-vars */
// dependency imports
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CartListItem } from "../cart/CartPage";

// component imports
import styles from "./thankyou.module.css";
import Button from "../../components/button/Button";
import ConfirmationIcon from '../../assets/product_assets/checkout/icon-order-confirmation.svg?react';
import ForwardIcon from "../../assets/icons/forwardArrow.svg?react";

// variable imports
import {
  selectCartItems,
  selectCartCount,
  selectCartTotal,
  removeAllFromCart
} from "../../feature/navigation_bar/cart/cartSlice";


export const CheckoutSummary = () => {
  return (
    <div>
      <CartListItem />
    </div>
  );
};

const Thankyou = () => {
  const [showAll, setShowAll] = useState(false)
  const navigate = useNavigate();
  const cartCount = useSelector(selectCartCount);
  const total = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <section className={styles.order_confirm_header_container}>
        <ConfirmationIcon/>
        <h2>THANK YOU FOR YOUR ORDER</h2>
        <p>You will receive an email confirmation shortly.</p>
      </section>
      <div>
        <div className={styles.summary_list_container}>
        {
      <>
        <CartListItem
          item={cartItems[0]}
          key={cartItems[0].id}
          showCountControl={false}
          clickable={false}
        />
        {!showAll && cartItems.length > 1 && (
          <>
        <hr/>
            <p className={styles.and_other_items} onClick={() => setShowAll(true)}>and {cartCount - 1} other <span className={styles.other_items}>item(s)</span></p>
           
          </>
        )}
        {showAll &&
          cartItems.slice(1).map((item) => (
            <CartListItem
              item={item}
              key={item.id}
              showCountControl={false}
            />
          ))}
      </>
    }
        </div>

        <section className={styles.grand_total}>
          <h5 className={styles.total}>GRAND TOTAL</h5>
          <h4 className={styles.total_amount}>$ {total}</h4>
        </section>
        <Button
          label="BACT TO HOME"
          className={styles.checkout_button}
          onClick={() => {
            dispatch(removeAllFromCart());
            navigate("/")}}
        />
      </div>
    </div>
  );
};

export default Thankyou;
