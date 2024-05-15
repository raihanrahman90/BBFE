import { configureStore } from "@reduxjs/toolkit";
import authorization from "./authorizationReducer";

const store = configureStore({
    reducer:{
        auth:authorization
    }
})
export default store;