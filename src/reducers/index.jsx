import { configureStore } from "@reduxjs/toolkit";
import authorizationReducer from "./authorizationReducer";

const store = configureStore({
    reducer:{
        auth:authorizationReducer
    }
})

export default store;