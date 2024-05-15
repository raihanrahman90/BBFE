import { combineReducers } from "@reduxjs/toolkit";
import authorization from "./authorizationReducer";

const reducer = combineReducers({
    authorization
});
export default reducer;