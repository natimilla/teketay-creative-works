import { createSlice } from "@reduxjs/toolkit";
const Display=createSlice({
    name:'Display',
    initialState:{submitted:false,error:false,loading:false},
    reducers:{
        LoadingHandler(state){
            state.loading=!state.loading
        },
        ErrorHandeler(state){
            state.error=!state.error
        },
        submittedHandler(state){
            state.submitted=!state.submitted
        }
    }
})
export const displayActions=Display.actions;
export default Display.reducer;