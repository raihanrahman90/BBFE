import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import {jwtDecode} from 'jwt-decode';

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async(userCredential)=>{
        const request = await axios.post('http://localhost:8000/api/auth/login', userCredential);
        const response = await request.data;
        return response;
    }
);

const userSlice = createSlice({
    name: 'auth',
    initialState:()=>{
        const token = localStorage.getItem("token");
        if(token == null){
            return {
                loading:false,
                user: null,
                error: null,
                token: null
            };
        }else{
            let user = jwtDecode(token);
            return {
                loading:false,
                user:user,
                error:null,
                token:token
            };
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loginUser.pending, (state)=>{
            state.loading = true;
            state.user = null;
            state.error = null;
            state.token = null;
        })
        .addCase(loginUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.error = null;
            state.user = action.payload.payload;
            state.token = action.payload.accessToken;
            localStorage.setItem("token", action.payload.accessToken);
            localStorage.setItem("refreshToken", action.payload.refreshToken);
        })
        .addCase(loginUser.rejected, (state, action)=>{
            state.loading = false;
            state.user = null;
            state.token = null;
            console.log(action.error.message);
            if(action.error.message === 'Request failed with status code 401') {
                state.error = 'access denied';
            };
        })
    }
})

export default userSlice.reducer;