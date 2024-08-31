import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {jwtDecode} from 'jwt-decode';
import { postAPI } from "../utils/DefaultRequest";

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async(userCredential)=>{
        try{
            const response = await postAPI('login', userCredential);
            return response;
        } catch(e){
            return {};
        }

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
            try{
                let user = jwtDecode(token);
                return {
                    loading:false,
                    user:user,
                    error:null,
                    token:token
                };                    
            } catch (e) {
                return {
                    loading:false,
                    user: null,
                    error: null,
                    token: null
                };
            }
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
            let data = action.payload;
            state.loading = false;
            if(data.isSuccess){
                state.error = null;
                state.token = data.data.accessToken;
                localStorage.setItem("token", data.data.token);
                localStorage.setItem("refreshToken", data.data.refreshToken);
            }else{
                state.error = action.message;
            }
        })
        .addCase(loginUser.rejected, (state, action)=>{
            console.log(state);
            state.loading = false;
            state.user = null;
            state.token = null;
            if(action.error.message === 'Request failed with status code 401') {
                state.error = 'access denied';
            };
        })
    }
})

export default userSlice.reducer;