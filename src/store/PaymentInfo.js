import { createSlice } from "@reduxjs/toolkit";
const PaymentInfo=createSlice({
    name:'payment_info',
    initialState:{message:'',accountNumber:'',accountHolderName:'Abynur Solomon',paymentMethod:false,submitted:false},
    reducers:{
        paymentChoiceHandler(state,action){
            if(action.payload==='telebir'){
                state.message='Telebir';
                state.accountNumber='0912345639'
            }
            if(action.payload==='dashen_bank'){
                state.message='Dashen Bank ';
                state.accountNumber='50537585311'
            }
            if(action.payload==='CBE'){
                state.message='CBE Bank ';
                state.accountNumber='1000317410909'
            }
        },
        paymentMethodDisplayHandler(state){
            state.paymentMethod=!state.paymentMethod
        },
        submissionHandler(state){
            state.submitted=!state.submitted
        }
    }
})
export const paymentInfoAction=PaymentInfo.actions;
export default PaymentInfo.reducer