import { configureStore } from "@reduxjs/toolkit";
import display from "./display";
import CartDisplay from "./CartDisplay";
import PaymentInfo from "./PaymentInfo";
const Store=configureStore({
    reducer:{display:display,cart:CartDisplay,paymentInfo:PaymentInfo}
})
export default Store;