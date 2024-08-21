import { useDispatch } from 'react-redux'
import classes from './Loading.module.css'
import { displayActions } from '../store/display';
function Error(){
    const dispatch=useDispatch();
    const removeHandler=()=>{
        dispatch(displayActions.ErrorHandeler())
    }
    return <div>
        <div className={classes.loading}>Ooops Something went Wrong</div>
        <div><button className={classes.button} onClick={removeHandler}>OK</button></div>
    </div>
}
export default Error