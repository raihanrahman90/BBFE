import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'cart',
    initialState:{
        item:[]
    },
    reducers:{
        openNavbar: (state)=>{
            state.navbar = true;
        },
        closeNavbar: (state)=>{
            state.navbar = false;
        },
        openLoading: (state)=>{
            state.loading = true;
        },
        closeLoading: (state)=>{
            state.loading = false;
        }
    }
})

export default userSlice.reducer;