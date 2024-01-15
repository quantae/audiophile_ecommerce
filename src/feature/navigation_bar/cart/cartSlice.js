import { createSlice } from "@reduxjs/toolkit";


// set initial states of the cart
const initialState = {
    cartCount: 0,
    cartTotal:0,
    cartItems: [
        // {
        //     id: 100,
        //     name: "item1",
        //     slug:"item1",
        //     price: 10.00,
        //     quantity: 1,
        // },
        // {
        //     id: 200,
        //     name: "item2",
        //     slug:"item2",
        //     price: 20.00,
        //     quantity: 2,
        // }
    ],
}
// create reducer
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // add item to cart reducer
        addToCart: {
            reducer(state, action) {
               //First find out if the item exists in the cart alrady
               const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === action.payload.id);
                // if item exists in the cart
                if (itemIndex >= 0) {
                    // increment the quantity
                    state.cartItems[itemIndex].quantity += action.payload.quantity;
                    
                } else {
                    // else add item to cart
                    state.cartItems.push(action.payload);
                }

            }
        },
        removeAllFromCart(state,) {
            state.cartItems = [];
            state.cartCount = 0;
            state.cartTotal = 0;
        }
    }
})

// create selector to access state in other components
export const selectCartCount = (state) => {
    let count = 0
   state.cart.cartItems.forEach((item) => {
        count += item.quantity
   })
   return  count;
}
export const selectCartTotal = (state) => {
    let total = 0
    state.cart.cartItems.forEach((item) => {
        total += item.price * item.quantity
    })
    return total;
}
export const selectCartItems = (state) => state.cart.cartItems;

// export the action reducers
export const { addToCart, removeAllFromCart } = cartSlice.actions;

// export actions to store
export default cartSlice.reducer;