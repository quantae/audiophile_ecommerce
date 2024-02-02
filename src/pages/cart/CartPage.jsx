/* eslint-disable react/prop-types */
//import React from 'react'
//dependency imports
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// component imports
import styles from "./cart_page.module.css";
import ProductCartCountControl from "../../feature/navigation_bar/cart/ProductCartCountControl";
import Button from "../../components/button/Button";

// variable and reducer imports
import { selectCartCount } from "../../feature/navigation_bar/cart/cartSlice";
import { selectCartTotal } from "../../feature/navigation_bar/cart/cartSlice";
import { selectCartItems } from "../../feature/navigation_bar/cart/cartSlice";
import { removeAllFromCart } from "../../feature/navigation_bar/cart/cartSlice";

export const CartListItem = ({ item, showCountControl, clickable = true }) => {
  const { name, price, quantity, image, slug } = item;
  const imgUrl =
    image && image.mobile.replace("./assets", "/product_assets/");
  return (
    <div className={styles.cartlist_container}>
      <img src={imgUrl} alt="item" className={styles.cart_item_img} />
      <div>
        {clickable ? (
          <Link className="Link" to={`/product/${slug}`}>
            <h5>{name}</h5>
          </Link>
        ) : (
          <h5>{name}</h5>
        )}
      
        <p className={styles.list_price}>$ {price}</p>
      </div>
      <ProductCartCountControl showButton={false} cartPageQuantity={quantity} showCountControl={showCountControl} />
    </div>
  );
};

const CartPageVariantA = ({onClick}) => {
  const cartCount = useSelector(selectCartCount);
  const total = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <section>
        <h4>Cart ({cartCount})</h4>
        <button
          className={styles.remove_all_button}
          onClick={() => dispatch(removeAllFromCart())}
        >
          Remove all
        </button>
      </section>
      <div>
        {cartItems.length === 0 ? (
          <h3>Cart is empty</h3>
        ) : (
          cartItems.map((item) => <CartListItem item={item} key={item.id} />)
        )}

        <section>
          <h4 className={styles.total}>Total</h4>
          <h4 className={styles.total_amount}>$ {total}</h4>
        </section>
        <Button label="CHECKOUT" className={styles.checkout_button} onClick={onClick}/>
      </div>
    </div>
  );
};

const CartPageVariantB = ({onClick}) => {
  const cartCount = useSelector(selectCartCount);
  const total = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);

  // const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <section>
        <h4>SUMMARY ({cartCount} ITEMS)</h4>
        {/* <button
          className={styles.remove_all_button}
          onClick={() => dispatch(removeAllFromCart())}
        >
          Remove all
        </button> */}
      </section>
      <div>
        {cartItems.length === 0 ? (
          <h3>Cart is empty</h3>
        ) : (
          cartItems.map((item) => <CartListItem item={item} key={item.id} showCountControl={false} />)
        )}

        <section>
          <h5 className={styles.total}>SUBTOTAL</h5>
          <h5 className={styles.total_amount}>$ {total}</h5>
        </section>
        <section>
          <h5 className={styles.total}>SHIPPING</h5>
          <h5 className={styles.total_amount}>$ 50</h5>
        </section>
        <section>
          <h5 className={styles.total}>VAT (INCLUDED)</h5>
          <h5 className={styles.total_amount}>$ 250</h5>
        </section>
        <section>
          <h4 className={styles.total}>GRAND TOTAL</h4>
          <h4 className={styles.grand_total}>$ {50 + 250 + total}</h4>
        </section>
        <Button label="CONTINUE & PAY" className={styles.checkout_button} onClick={onClick}/>
      </div>
    </div>
  );
};




const CartPage = ({variant, onClick}) => {

  switch (variant) {
    case "A":
      return <CartPageVariantA onClick={onClick}/>;
    case "B":
      return <CartPageVariantB onClick={onClick} />;
    default:
      return null;
  }

}

export default CartPage;