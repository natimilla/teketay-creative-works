import classes from './Header.module.css'
function Header(){
    return <div className={classes.container}>
        <div>
        <div className={classes.heading}>Featured Products</div>
        <div className={classes.horizontalContainer} ><hr className={classes.horizontalLine}/></div>
        </div>
    </div>
}
export default Header