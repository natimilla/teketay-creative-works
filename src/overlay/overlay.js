import Error from './error';
import Loading from './Loading';
import classes from './overlay.module.css';

import { useSelector } from 'react-redux';
import Success from './successful';
function Overlay(){
    const loading= useSelector(Store=>Store.display.loading);
    const error=useSelector(Store=>Store.display.error);
    const submitted=useSelector(Store=>Store.display.submitted);
    return <div className={classes.container}>
        {error && <Error/>}
        {submitted && <Success/>}
        {loading && <Loading/>}
    </div>
}
export default Overlay