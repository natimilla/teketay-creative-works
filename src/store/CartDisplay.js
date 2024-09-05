import { createSlice } from "@reduxjs/toolkit";
const CartDisplay = createSlice({
  name: "CartDisplay",
  initialState: { scaleUp: false ,displayCart:false,cart:[],totalPrice:0,isEmpty:true,paymentDisplay:false},
  reducers: {
    scaleUpHandler(state) {
      state.scaleUp =!state.scaleUp;
    },
    displayHandler(state){
        state.displayCart=!state.displayCart
    },
    addItemHandler(state,action){
      const result=state.cart.find(item=>item.id===action.payload.id)
      if(result){
        result.amount=result.amount+1;
        return
      }    
      state.cart.push({
            id:action.payload.id,
            src:action.payload.src,
            name:action.payload.name,
            price:action.payload.price,
            amount:1
          })
    },
    increaseAmountHandler(state,action){
      const result=state.cart.find(item=>item.id===action.payload);
      result.amount=result.amount+1
    },
    decreaseAmountHandler(state,action){
      const result=state.cart.find(item=>item.id===action.payload);
      if(result.amount===1){
        state.cart=state.cart.filter(item=>item.id!==result.id);
        return
      }
      result.amount=result.amount-1;
    },
    totalPriceHandler(state){
      state.totalPrice = 0;
      for (let item of state.cart) {
          state.totalPrice += item.price * item.amount;
      }
    },
    isEmptyHandler(state){
      if(state.cart.length===0){
        state.isEmpty=true
        return
      }
      state.isEmpty=false
    },
    orderSent(state){
      state.cart=[]
       state.isEmpty=true
    },
    paymentDislpayHandler(state){
         state.paymentDisplay=!state.paymentDisplay
    }
  },
});
export const CartDisplayAction = CartDisplay.actions;
export default CartDisplay.reducer;
