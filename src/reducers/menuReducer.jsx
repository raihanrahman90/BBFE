import { createSlice } from "@reduxjs/toolkit"

const menuSlice = createSlice({
    name: 'menu',
    initialState:{
        navbar:false,
        loading:false
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

export const {openLoading, closeLoading} = menuSlice.actions;
export default menuSlice.reducer;