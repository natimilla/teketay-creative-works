import classes from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import img from "./../Assets/2kY9IJ1bNouZVKDgViMIxvFcEg0.svg";
import { useState } from "react";
import { useEffect } from "react";
import menu from "./menuIcon.svg";
import cancel from "./cancelIcon.svg";
import { HashLink } from "react-router-hash-link";
import profile from "./profile.svg";
import { useDispatch } from "react-redux";
import { authAction } from "../store/Auth";
function Header() {
  const [ismobileView, setMobileview] = useState(false);
  const [displayLinks, setdisplay] = useState(false);
  const [displayProfileLink,setDisplayLink]=useState(false);
  const dispatch=useDispatch()
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
  const removeHandler = () => {
    setdisplay((prev) => !prev);
  };
  const displayHandler = () => {
    setdisplay((prev) => !prev);
  };
  const profileDisplayLinkHandler=()=>{
    setDisplayLink(prev=>!prev)
  }
  const display = !ismobileView || displayLinks;
  const logOutHandler=()=>{
    dispatch(authAction.logOutHandler());
}
  return (
    <div className={classes.container}>
      <div className={classes.logoHolder}>
        <img src={img} alt="logo-icon" />
        <h>
          Teketay <span className={classes.color}>Creative</span> Works
        </h>
      </div>
      {ismobileView && (
        <div>
          <img
            src={menu}
            className={classes.img}
            onClick={displayHandler}
            alt="menu-icon"
          />
        </div>
      )}
      {display && (
        <div className={classes.linksContainer}>
          <ul>
            {ismobileView && (
              <div>
                <img
                  src={cancel}
                  className={classes.img}
                  onClick={removeHandler}
                  alt="cancel-icon"
                />
              </div>
            )}
            {ismobileView && (
              <div>
              <li className={classes.imgContainer}>
                <span  onClick={profileDisplayLinkHandler}>
                  <img src={profile} className={classes.img} />
                </span>
                
              </li>
              {displayProfileLink && <div className={classes.links}>
        <div className={classes.linkContainer}>
          <NavLink to="/profile/History" activeClassName={classes.active} onClick={removeHandler}>History</NavLink>
        </div>
        <div className={classes.linkContainer}>
          {" "}
          <NavLink to="/profile/ChangePassword" activeClassName={classes.active} onClick={removeHandler}>Change Password</NavLink>
        </div>
        <div className={classes.linkContainer}>
          <NavLink to="/" onClick={logOutHandler} exact activeClassName={classes.active} >Log Out</NavLink>
        </div>
      </div>}
              </div>
            )}
            <li>
              {" "}
              <NavLink
                activeClassName={classes.active}
                exact
                to="/"
                onClick={removeHandler}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={classes.active}
                to="/about"
                onClick={removeHandler}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <HashLink to="/#contact" onClick={removeHandler}>
                Contact
              </HashLink>
            </li>
            <li>
              <NavLink
                activeClassName={classes.active}
                to="/products"
                onClick={removeHandler}
              >
                Products
              </NavLink>
            </li>
            {!ismobileView &&display && (
                <li>
                  <Link to="/profile/History">
                    <img src={profile} className={classes.img} />
                  </Link>
                </li>
            )}
          </ul>
        </div>
      )}
      
    </div>
  );
}
export default Header;
