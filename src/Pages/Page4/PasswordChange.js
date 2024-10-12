import { useState } from "react";
import classes from "./PasswordChange.module.css";
import { useDispatch, useSelector } from "react-redux";
import { displayActions } from "../../store/display";
function PasswordChange() {
  const [password, setpassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [weak, setWeak] = useState(false);
  const [misMatch, setMismatch] = useState(false);
  const [warning, setWarning] = useState(false);
  const[warning2,setWarning2]=useState(false)
  const token=useSelector(Store=>Store.auth.token)
  const dispatch=useDispatch();
  const passWordChangeHandler = (event) => {
    setpassword(event.target.value);
  };
  const rePasswordChangeHandler = (event) => {
    setRePassword(event.target.value);
  };
  const passwordCheckHandler = () => {
    if (password.trim().length < 6) {
      setWarning(true);
      setWeak(true);
    } else {
      setWarning(false);
      setWeak(false);
    }
  };
  const rePasswordCheckHandler = () => {
     if(password.trim().length<6){
        return
     }  
    if (rePassword !== password) {
      setWarning2(true);
      setMismatch(true);
    } else {
      setWarning2(false);
      setMismatch(false);
    }
  };
  const submitHandler = async(event)=> {
    event.preventDefault();
    if (password.trim().length < 6) {
      return;
    }
    if (password !== rePassword) {
      return;
    }
    try{
        dispatch(displayActions.LoadingHandler())
        await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDdnyMJwq2czmZEsJmU36gIS4Wpvndazqw',{
            method:'POST',
            body:JSON.stringify({
                idToken:token,
                password:password,
                returnSecureToken:false
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
        setRePassword("");
        setpassword("");
        dispatch(displayActions.LoadingHandler())
    }
    catch(error){
        dispatch(displayActions.LoadingHandler())
        dispatch(displayActions.ErrorHandeler())
        console.log(error)
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.heading}>Change Your Password</div>
      <form onSubmit={submitHandler}>
        <div className={classes.label}>Enter New Password</div>
        <div className={classes.inputContainer}>
          <input
            type="password"
            className={`${classes.input} ${warning ? classes.incorrect : ''}`}
            onChange={passWordChangeHandler}
            value={password}
            onBlur={passwordCheckHandler}
          />
        </div>
       {weak &&  <div className={classes.warning}>Password must be at least 6 characters</div>}
        <div className={classes.label}>Renter Password</div>
        <div className={classes.inputContainer}>
          <input
            type="password"
            className={`${classes.input} ${warning2 ? classes.incorrect : ''}`}
            onChange={rePasswordChangeHandler}
            value={rePassword}
            onBlur={rePasswordCheckHandler}
          />
        </div>
        {misMatch && <div className={classes.warning}>Password doesn't match</div>}
        <div className={classes.buttonContainer}>
          <button className={classes.button}>Change Password</button>
        </div>
      </form>
    </div>
  );
}
export default PasswordChange;
