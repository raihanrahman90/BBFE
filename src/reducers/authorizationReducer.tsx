import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AUTHENTICATED, NOT_AUTHENTICATED } from "../action/actionTypes";
import { postAPI } from "../services/HttpRequest";
import { loginAPI } from "../services/LoginRequest";

interface AuthState {
  loading: boolean,
  user: {},
  error: string
}

const initialState = {}

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async({email,password}:{email:string, password:string})=>{
    const request = await loginAPI(email, password);
    const response = await request?.data.data;
    localStorage.setItem('user', JSON.stringify(response));
    return response;
  }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers:(builder)=>{
      builder
      .addCase(loginUser.pending, (state)=>{
        state.loading = true;
        state.user = null;
        state.error = null
      })
    }
  })

export const { logout, setToken} = authSlice.actions;
export default authSlice.reducer;