import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'cart',
    initialState:{
        item:[]
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
            console.log(action)
            state.loading = false;
            state.error = null;
            state.user = action.payload.payload;
            state.token = action.payload.access_token;
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