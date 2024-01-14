/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// library imports
import React from "react";
import { useReducer } from "react";

// component imports
import styles from "./product_cart_count_control.module.css";
import Button from "../../../components/button/Button";


// variable and elector imports eg. redux selectors, utils, etc
import { addToCart, selectCartItems } from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";


// initial state for this local count
const initialState = { localCount: 0 };

// reducer function for this local count
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { localCount: state.localCount + 1 };
    case "decrement":
      return {
        localCount: state.localCount > 0 ? state.localCount - 1 : 0
      };
    default:
      return { localCount: state.localCount };
  }
}



const ProductCartCountControl = ({item}) => {
  const dispatchRedux = useDispatch();
  const cartItems = useSelector(selectCartItems);

  console.log("cartItems", cartItems);
  // set up local reducer hook state
  const [state, dispatch] = useReducer(reducer, initialState);
  let quantity = state.localCount;

  return (
    <div className={styles.container}>
      <div className={styles.count_wrapper}>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className={styles.button_minus}
        >
          -
        </button>
        <p>{quantity}</p>
        <button
          onClick={() => dispatch({ type: "increment" })}
          className={styles.button_plus}
        >
          +
        </button>
      </div>
      <Button label="ADD TO CART" onClick={() => dispatchRedux(addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        slug: item.slug,
        quantity: quantity,
      }))}/>
    </div>
  );
};

export default ProductCartCountControl;
