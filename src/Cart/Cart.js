import { useDispatch, useSelector } from "react-redux";
import classes from "./Cart.module.css";
import cart from "./cart.svg";
import Store from "../store/store";
import { CartDisplayAction } from "../store/CartDisplay";
function Cart() {
    const scale=useSelector(Store=>Store.cart.scaleUp);
    const totalAmount=useSelector(Store=>Store.cart.totalAmount)
    const dispatch=useDispatch();
   const displayHandler=()=>{
    dispatch(CartDisplayAction.displayHandler())
   }
  return (
    <div className={classes.container}>
      <div className={classes.subContainer} onClick={displayHandler} >
        <div className={`${classes.imgContainer} ${scale ? classes.scale:''}`}><img src={cart} className={classes.img} />
        <span className={classes.totalAmount}>{totalAmount}</span></div>
      </div>
    </div>
  );
}
export default Cart;
