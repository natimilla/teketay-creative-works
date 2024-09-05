import { useDispatch, useSelector } from "react-redux";
import classes from "./Cart.module.css";
import cart from "./cart.svg";
import Store from "../store/store";
import { CartDisplayAction } from "../store/CartDisplay";
function Cart() {
    const scale=useSelector(Store=>Store.cart.scaleUp);
    const dispatch=useDispatch();
   const displayHandler=()=>{
    dispatch(CartDisplayAction.displayHandler())
   }
  return (
    <div className={classes.container}>
      <div className={classes.subContainer} onClick={displayHandler} >
        <img src={cart} className={`${classes.img} ${scale ? classes.scale:''}`} />
      </div>
    </div>
  );
}
export default Cart;
