import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'menu',
    initialState:{
        navbar:false
    },
    reducers:{
        openNavbar: (state)=>{
            state.navbar = true;
        },
        closeNavbar: (state)=>{
            state.navbar = false
        }
    }
})

export default userSlice.reducer;