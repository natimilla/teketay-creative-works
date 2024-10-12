import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
const Auth=createSlice({
    name:'Authentication',
    initialState:{token:localStorage.getItem('token'),isLogin:!!localStorage.getItem('token'),email:localStorage.getItem('email')},
    reducers:{
        
        loginHandler(state,action){
            state.token=action.payload.id;
            localStorage.setItem('token',state.token)
             state.isLogin=!!state.token;
            state.email=action.payload.email;
            localStorage.setItem('email',state.email)
           

        },
        logOutHandler(state){
            state.token=null;
            state.isLogin=!!state.token;
            localStorage.removeItem('token')
            state.email=null;
            localStorage.removeItem('email')
        }
    }
}  
)
export const authAction=Auth.actions;
export default Auth.reducer;