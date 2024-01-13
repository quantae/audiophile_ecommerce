/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [productQuantity, setProductQuantity] = useState(0);

  const addToCart = (product, quantity) => {
    console.log("Add to cart button clicked", product, 'quantity: ', quantity)
    if (quantity <= 0) {
      return <p>Update cart count</p>;
    } else {
      setCart((prevCart) => [
        ...prevCart,
        {
          product,
          productQuantity: quantity,
        },
      ]);
    }
  };

  useEffect(() => {
    console.log('cart from context:', cart);
  }, [cart])

    const increment = () => {
    setProductQuantity((prevQuantity) => prevQuantity + 1);
   // console.log('increment clicked: ', productQuantity)
    }
    const decrement = () => {
    setProductQuantity((prevQuantity) => prevQuantity > 0 ? prevQuantity - 1 : 0);
   // console.log('decrement clicked: ', productQuantity)
    }
    useEffect(() => {
        console.log('productQuantity from context:', productQuantity);
      }, [productQuantity]);

  // Log the cart whenever it changes
//   useEffect(() => {
//     console.log('Updated cart:', cart);
//   }, []); // This will trigger whenever cart change


  const getTotalPrice = () => {
    return cart.reduce((total, cartItem) => {
      return total + cartItem.product.price * cartItem.productQuantity;
    }, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((totalItems, cartItem) => {
      return totalItems + cartItem.productQuantity;
    }, 0);
  };

  const cartContextValue = {
    cart,
    addToCart,
    getTotalItems,
    getTotalPrice,
    increment,
    decrement,
    productQuantity,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
