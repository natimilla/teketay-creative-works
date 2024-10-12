import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import classes from "./Profile.module.css";
import { NavLink, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { authAction } from "../../store/Auth";
import PasswordChange from "./PasswordChange";
import History from "./History";
import { displayActions } from "../../store/display";

function Profile() {
    const dispatch=useDispatch()
    const logOutHandler=()=>{
        dispatch(displayActions.LoadingHandler())
        dispatch(authAction.logOutHandler());
        dispatch(displayActions.LoadingHandler())
    }
    const [ismobileView,setMobileview]=useState(false);
    useEffect(() => {
      function handleResize() {
        const screenWidth = window.innerWidth;
        setMobileview(screenWidth < 1000);
      }
  
      window.addEventListener("resize", handleResize);
      handleResize(); // Call the function once on mount
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  return (
    <div className={classes.container}>
     {!ismobileView &&  <div className={classes.links}>
        <div className={classes.linkContainer}>
          <NavLink to="/profile/History" activeClassName={classes.active}>History</NavLink>
        </div>
        <div className={classes.linkContainer}>
          {" "}
          <NavLink to="/profile/ChangePassword" activeClassName={classes.active}>Change Password</NavLink>
        </div>
        <div className={classes.linkContainer}>
          <NavLink to="/" onClick={logOutHandler} exact activeClassName={classes.active}>Log Out</NavLink>
        </div>
      </div>}
      <div className={classes.side}>
        <Switch>
            <Route path='/profile/ChangePassword'>
            <PasswordChange/>
            </Route>
            <Route path='/profile/History'>
            <History/>
            </Route>
        </Switch>
      </div>
     
    </div>
  );
}
export default Profile;
