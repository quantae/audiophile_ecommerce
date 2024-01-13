import { configureStore } from "@reduxjs/toolkit";
import buttonTestReducer from "../feature/TestButton/buttonSlice";
import cartReducer from "../feature/navigation_bar/cartIcon/cartSlice";


export const store = configureStore({
    reducer: {
        buttonTest: buttonTestReducer,
        cart: cartReducer,

    }
})

