import classes from "./Orders.module.css";
import image from "./stair.jpg";
import { useDispatch, useSelector } from "react-redux";
import { CartDisplayAction } from "../store/CartDisplay";
import { displayActions } from "../store/display";
import Payment from "./Payment";
function Orders() {
    const dispatch=useDispatch();
    const cart=useSelector(Store=>Store.cart.cart);
    const totalPrice=useSelector(Store=>Store.cart.totalPrice);
    const display=useSelector(Store=>Store.cart.isEmpty);
    const paymentDisplay=useSelector(Store=>Store.cart.paymentDisplay)
    const displayHandler=()=>{
     dispatch(CartDisplayAction.displayHandler())
    }
    const increaseAmountHandler=(id)=>{
      dispatch(CartDisplayAction.increaseAmountHandler(id))
      dispatch(CartDisplayAction.totalPriceHandler())
      dispatch(CartDisplayAction.isEmptyHandler())
    }
    const decreaseAmountHandler=(id)=>{
      dispatch(CartDisplayAction.decreaseAmountHandler(id))
      dispatch(CartDisplayAction.totalPriceHandler())
      dispatch(CartDisplayAction.isEmptyHandler())
    }
    const sendOrderHandler=async()=>{
    
      dispatch(CartDisplayAction.paymentDislpayHandler())
    }
    
  return (
    <div className={classes.container} >
      <div className={classes.subContainer}>
        <div className={classes.header}>Total Orders</div>
        {display && <div>No items added yet.</div>}
        {cart.map(item=>{
         return <div>
          <div className={classes.imageContainer}>
          <div>
            <div>
              <img src={item.src} className={classes.img} />
            </div>
            <div className={classes.name}>{item.name}</div>
            <div className={classes.price}>{item.price} ETB</div>
          </div>
          <div className={classes.amountContainer}>
            <div className={classes.Amount}>
              Amount <span className={classes.amount}>{item.amount}</span>
            </div>
            <div className={classes.buttonContainer}>
              <div className={classes.button} onClick={()=>{increaseAmountHandler(item.id)}}> Add +</div>
              <div className={classes.button} onClick={()=>{decreaseAmountHandler(item.id)}}>Reduce -</div>
            </div>
          </div>
        </div>
        
         </div>
        })}
          <div className={classes.totalPriceContainer}>
        <div></div>
       {!display &&  <div>
          <div className={classes.totalPrice}>Total Price : {totalPrice}ETB</div>
          <div className={classes.buttonContainer}>
            <div className={classes.button} onClick={sendOrderHandler}>Order</div>
            <div className={classes.button}  onClick={displayHandler}>Cancel</div>
          </div>
        </div>}
        {display &&  <div className={classes.button}  onClick={displayHandler}>Cancel</div>}
        </div>
        {paymentDisplay && !display && <Payment/>}
      </div>
    </div>
  );
}
export default Orders;
