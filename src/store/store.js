import { configureStore } from "@reduxjs/toolkit";
import display from "./display";
import CartDisplay from "./CartDisplay";
import PaymentInfo from "./PaymentInfo";
import Auth from "./Auth";
const Store = configureStore({
  reducer: {
    display: display,
    cart: CartDisplay,
    paymentInfo: PaymentInfo,
    auth: Auth,
  },
});
export default Store;
