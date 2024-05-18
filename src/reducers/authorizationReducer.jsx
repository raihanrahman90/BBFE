import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

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
        var token = localStorage.getItem("token");
        if(token == null){
            return {
                loading:false,
                user: null,
                error: null,
                token: null
            };
        }else{
            var userStringify = localStorage.getItem("user");
            var user = JSON.parse(userStringify);
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
            state.token = action.payload.access_token;
            localStorage.setItem("token", action.payload.access_token);
            localStorage.setItem("user", JSON.stringify(action.payload.payload));
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