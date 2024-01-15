/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// library imports
import React from "react";
import { useReducer, useState } from "react";

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
        localCount: state.localCount > 0 ? state.localCount - 1 : 0,
      };
    default:
      return { localCount: state.localCount };
  }
}

const ProductCartCountControl = ({
  item,
  showButton = true,
  cartPageQuantity,
  showCountControl = true,
}) => {
  const [isZeroQuantity, setIsZeroQuantity] = useState(true);

  const dispatchRedux = useDispatch();
  const cartItems = useSelector(selectCartItems);

  console.log("cartItems", cartItems);
  // set up local reducer hook state
  const [state, dispatch] = useReducer(reducer, initialState);
  let quantity = state.localCount;

  return (
    <div>
      <div className={styles.container}>
        <div className={`${showCountControl ?  styles.count_wrapper_bg : ""} ${styles.count_wrapper}`}>
          {showCountControl ? (
            <>
              <button
                onClick={() => dispatch({ type: "decrement" })}
                className={styles.button_minus}
              >
                -
              </button>
              <p>{cartPageQuantity ? cartPageQuantity : quantity}</p>
              <button
                onClick={() => {
                  dispatch({ type: "increment" });
                }}
                className={styles.button_plus}
              >
                +
              </button>
            </>
          ): <p>x{cartPageQuantity}</p>}
        </div>

        {showButton && (
          <Button
            label="ADD TO CART"
            onClick={() => {
              if (quantity > 0) {
                dispatchRedux(
                  addToCart({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    slug: item.slug,
                    image: item.image,
                    quantity: quantity,
                  })
                );
              } else {
                setIsZeroQuantity(false);
                setTimeout(() => {
                  setIsZeroQuantity(true);
                }, 2000);
              }
            }}
          />
        )}
      </div>
      {!isZeroQuantity && (
        <>
          <br></br>
          <p className={styles.zero_quantity}>Quantity must be at least 1</p>
        </>
      )}
    </div>
  );
};

export default ProductCartCountControl;
