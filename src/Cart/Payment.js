import classes from "./Payment.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayActions } from "../store/display";
import { CartDisplayAction } from "../store/CartDisplay";
import { paymentInfoAction } from "../store/PaymentInfo";

function Payment() {
  const [name, setName] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [address, setAdress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const dispatch=useDispatch()
  const cart=useSelector(Store=>Store.cart.cart);
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const phone1numberChangeHandeler = (event) => {
    setPhone1(event.target.value);
  };
  const phone2numberChangeHandler = (event) => {
    setPhone2(event.target.value);
  };
  const adresschangeHandler = (event) => {
    setAdress(event.target.value);
  };
  const paymentMethodHandler = (event) => {
    setPaymentMethod(event.target.value);
  };
  const submitHandler=async(event)=>{
    event.preventDefault();
    const data=[]
      for(let item of cart){
        data.push({
          name:item.name,
          amount:item.amount,
          price:item.price
        })
      }
      data.push({fullname:name,
        phone1:phone1,
        phone2:phone2,
        address:address,
        paymentMethod:paymentMethod,
      })
      try{
        dispatch(displayActions.LoadingHandler())
        await fetch('https://teketay-creative-works-default-rtdb.firebaseio.com/Orders.json',{
          method:'POST',
          body:JSON.stringify(data)
        })
        dispatch(CartDisplayAction.orderSent())
        dispatch(displayActions.LoadingHandler())
        dispatch(CartDisplayAction.displayHandler())
        dispatch(CartDisplayAction.paymentDislpayHandler())
        dispatch(paymentInfoAction.paymentMethodDisplayHandler())
        dispatch(paymentInfoAction.paymentChoiceHandler(paymentMethod))
      }
      catch(error){
        dispatch(displayActions.LoadingHandler());
        dispatch(displayActions.ErrorHandeler())
      }
  }
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <form onSubmit={submitHandler}>
        <div className={classes.label}>Full Name</div>
        <div className={classes.inputTypeContainer}>
          <input
            type="text"
            className={classes.input}
            onChange={nameChangeHandler}
            required
          />
        </div>
        <div className={classes.label}>Phone Number 1</div>
        <div className={classes.inputTypeContainer}>
          <input
            type="number"
            className={classes.input}
            onChange={phone1numberChangeHandeler}
            required
          />
        </div>
        <div className={classes.label}>Phone Number 2(optional)</div>
        <div className={classes.inputTypeContainer}>
          <input
            type="number"
            className={classes.input}
            onChange={phone2numberChangeHandler}
          />
        </div>
        <div className={classes.label}>Address</div>
        <div className={classes.inputTypeContainer}>
          <input
            type="text"
            className={classes.input}
            onChange={adresschangeHandler}
            required
          />
        </div>
        <div className={classes.label}>Method Of Payment</div>
        <div>
          <div className={classes.radioContainer}>
            <input
              type="radio"
              name="option"
              value="telebir"
              checked={paymentMethod === "telebir"}
              onChange={paymentMethodHandler}
              required
            />{" "}
            <label className={classes.optionLabel}>Telebir</label>
          </div>
          <div className={classes.radioContainer}>
            <input
              type="radio"
              name="option"
              value="dashen_bank"
              checked={paymentMethod === "dashen_bank"}
              onChange={paymentMethodHandler}
            />
            <label>Dashen Bank</label>
          </div>
          <div className={classes.radioContainer}>
            <input
              type="radio"
              name="option"
              value="CBE"
              checked={paymentMethod === "CBE"}
              onChange={paymentMethodHandler}
            />{" "}
            <label>Commercial Bank Of Ethiopia</label>
          </div>
        </div>
        <div>
          <button type="submit" className={classes.button} >
            SUBMIT
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}
export default Payment;
