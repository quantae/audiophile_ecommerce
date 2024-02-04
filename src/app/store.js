import { configureStore } from "@reduxjs/toolkit";
import buttonTestReducer from "../feature/TestButton/buttonSlice";
import cartReducer from "../feature/navigation_bar/cart/cartSlice";

/**
 * This is the store of the application. It is created using the configureStore function from the redux toolkit.
 */
export const store = configureStore({
    reducer: {
        buttonTest: buttonTestReducer,
        cart: cartReducer,

    }
})

