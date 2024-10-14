import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link'
import classes from './quickLink.module.css';
function QuickLink(){
    return <div className={classes.container}>
        <div className={classes.headingContainer}><h className={classes.heading}>Quick Links</h></div>
        <p><HashLink to='/#home' className={classes.Link}>Home</HashLink></p>
        <p><HashLink to='/#services'className={classes.Link}>Services</HashLink></p>
        <p><HashLink to='/products#home'className={classes.Link}>Products</HashLink></p>
       <p><Link to='/About'className={classes.Link}>About us</Link></p>  
        <p><HashLink to='/#contact'className={classes.Link}>Contact us</HashLink></p>
    </div>
}
export default QuickLink