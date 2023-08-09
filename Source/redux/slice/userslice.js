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
        logoutuser:(state,action)=>{
            state.token = action.payload
        }
    }
})

export const {loginuser,registeruser,logoutuser} = userSlice.actions;

export default userSlice.reducer;