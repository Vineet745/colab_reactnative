import { createSlice } from "@reduxjs/toolkit";

const calendarslice = createSlice({
    name:"Calendar",
    initialState:{calendarvisible:false},
    reducers:{
         calendardata:(state)=>{
            state.calendarvisible = !state.calendarvisible
         }
    }

})

export const {calendardata} = calendarslice.actions;

export default calendarslice.reducer;