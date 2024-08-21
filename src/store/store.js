import { configureStore } from "@reduxjs/toolkit";
import display from "./display";
const Store=configureStore({
    reducer:{display:display}
})
export default Store;