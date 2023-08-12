import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{token:null},
    reducers:{
        registeruser:(state,action)=>{
            state.token = action.payload
        },
        loginuser:(state,action)=>{
            state.token = action.payload
        },
        logoutuser:(state)=>{
            state.token = ''
        }
    }
})

export const {loginuser,registeruser,logoutuser} = userSlice.actions;

export default userSlice.reducer;