import { createSlice } from "@reduxjs/toolkit";


// set initial states of the cart
const initialState = {
    cartCount: 0,
    cartItems: [
        {
            id: 1,
            name: "item1",
            price: 10.00,
            quantity: 1,
        },
        {
            id: 2,
            name: "item2",
            price: 20.00,
            quantity: 30,
        }
    ],
}
// create reducer
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

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

// export the action reducers

// export actions to store
export default cartSlice.reducer;