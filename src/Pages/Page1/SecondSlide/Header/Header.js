import classes from './Header.module.css';
function Header(){
    return <div> 
      <div className={classes.heading}> Our Services </div>
      <div className={classes.horizontalContainer} ><hr className={classes.horizontalLine}/></div>
    </div>
}
export default Header