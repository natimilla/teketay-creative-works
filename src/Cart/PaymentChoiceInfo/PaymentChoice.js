import { useSelector } from "react-redux";
import classes from "./PaymentChoice.module.css";
function PaymentChoice() {
  const bank=useSelector(Store=>Store.paymentInfo.message);
  const totalPrice=useSelector(Store=>Store.cart.totalPrice);
  const accountNumber=useSelector(Store=>Store.paymentInfo.accountNumber)
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <div>Hello! You have successfully placed an order.</div>
        <div className={classes.toDOList}>1.  Please remit payment to {bank} account number <span className={classes.color}>{accountNumber}</span>, registered under the
        name <span className={classes.color}>Abynur Solomon</span>, for a total amount of <span className={classes.color}>{totalPrice}ETB</span>.</div>
        <div className={classes.toDOList}>2. Please send the screenshot of the receipt using <a href='mailto:@gmail.com'>this link</a></div>
      </div>
     
    </div>
  );
}
export default PaymentChoice;
