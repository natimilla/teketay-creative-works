import classes from './Main.module.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
function Main(){
    return <div className={classes.container}>
       <div>
       <div className={classes.headingContainer}>
        <h>Precision, <span className={classes.color}>Passion, and</span> Perfection<br></br> in <span className={classes.color}>Every Steel</span> Masterpiece.</h>
       </div>
       <div className={classes.linkContainer}>
        <Link to='/products' className={classes.link}>Products</Link>
        <HashLink to='/#contact' className={classes.link}>Contact Us</HashLink>
       </div>
       </div>
    </div>
}
export default Main;