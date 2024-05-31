import { configureStore } from "@reduxjs/toolkit";
import authorizationReducer from "./authorizationReducer";
import menuReducer from "./menuReducer";

const store = configureStore({
    reducer:{
        auth: authorizationReducer,
        menu: menuReducer
    }
})

export default store;