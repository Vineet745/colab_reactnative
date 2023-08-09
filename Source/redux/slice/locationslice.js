import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name:"location",
    initialState:{location:[]},
    reducers:{
        selectlocation:(state,action)=>{
            state.location.push(action.payload)
        },
        
    }
})

export const {selectlocation} = locationSlice.actions

export default locationSlice.reducer;