import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AUTHENTICATED, NOT_AUTHENTICATED } from "../action/actionTypes";

interface AuthState {
    token: string,
    email:string,
    name:string
}

const initialState = {}

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      logout(state) {
        state = initialState;
      },
      setToken(state, action: PayloadAction<AuthState>) {
        state = action.payload
      },
    },
  })

export const { logout, setToken} = authSlice.actions;
export default authSlice.reducer;