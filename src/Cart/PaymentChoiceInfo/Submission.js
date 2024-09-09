import { HashLink as Link } from "react-router-hash-link";
import classes from "./Submission.module.css";
import { useDispatch } from "react-redux";
import { paymentInfoAction } from "../../store/PaymentInfo";
function Submission() {
    const dispatch=useDispatch()
    const submissionHandler=()=>{
             dispatch(paymentInfoAction.submissionHandler())
    }
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <div>
          Your information has been successfully recorded! We are pleased to
          inform you that your order will be delivered once our team reaches out
          to you. Thank you for choosing us; we appreciate your trust in our
          services!
        </div>
        <div className={classes.buttonContainer}><Link to='/#home' className={classes.button} onClick={submissionHandler}>GO BACK TO HOME PAGE</Link></div>
      </div>
    </div>
  );
}
export default Submission;
