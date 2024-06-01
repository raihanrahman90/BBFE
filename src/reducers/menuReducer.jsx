import { createSlice } from "@reduxjs/toolkit"

const menuSlice = createSlice({
    name: 'menu',
    initialState:{
        navbar:false,
        loading:false,
        sidebarMobile:false,
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
        },
        openSidebarMobile:(state)=>{
            state.sidebarMobile = true;
        },
        closeSidebarMobile: (state)=>{
            state.sidebarMobile = false;
        }
    }
})

export const {openLoading, closeLoading, openSidebarMobile, closeSidebarMobile} = menuSlice.actions;
export default menuSlice.reducer;