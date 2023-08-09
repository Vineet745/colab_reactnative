import { createSlice } from "@reduxjs/toolkit";

const modalslice = createSlice({
    name:"modal",
    initialState:{modalvisible:false, modal2Visible:false},
    reducers:{
        modalvalue:(state)=>{
            state.modalvisible=!state.modalvisible
        },
        modal2value:(state)=>{
            state.modal2Visible=!state.modal2Visible
        }
    }
})
export const {modalvalue,modal2value} = modalslice.actions;

export default modalslice.reducer;