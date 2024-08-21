import { useDispatch } from 'react-redux';
import classes from './Loading.module.css'
import { displayActions } from '../store/display';
function Success(){
    const dispatch=useDispatch();
    const successHandler=()=>{
        dispatch(displayActions.submittedHandler())
    }
    return <div>
        <div className={classes.loading}>Succesfully Submitted</div>
        <div><button className={classes.button} onClick={successHandler}>OK</button></div>
    </div>
}
export default Success;