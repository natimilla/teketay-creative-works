import spinner from './Spinner.svg';
import classes from './Loading.module.css'
function Loading(){
    return <div >
        <div><img src={spinner}/></div>
        <div className={classes.loading}>Loading...</div>
    </div>
}
export default Loading;