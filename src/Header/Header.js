import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import img from "./../Assets/2kY9IJ1bNouZVKDgViMIxvFcEg0.svg";
import { useState } from "react";
import { useEffect } from "react";
import menu from './menuIcon.svg';
import cancel from './cancelIcon.svg';
import { HashLink  } from "react-router-hash-link";
function Header() {
  const[ismobileView,setMobileview]=useState(false);
  const[displayLinks,setdisplay]=useState(false)
  useEffect(()=>{
    function handleResize() {
      const screenWidth = window.innerWidth;
      setMobileview(screenWidth < 1000);
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Call the function once on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const removeHandler=()=>{
    setdisplay(prev=>!prev);
  }
  const displayHandler=()=>{
    setdisplay(prev=>!prev);
  }
   const display=!ismobileView||displayLinks
  
  return (
    <div className={classes.container}>
      <div className={classes.logoHolder}>
        <img src={img} alt='logo-icon'/>
        <h>
          Teketay <span className={classes.color}>Creative</span> Works
        </h>
      </div>
        {ismobileView &&  <div><img src={menu} className={classes.img} onClick={displayHandler} alt='menu-icon'/></div>}
      {display && <div className={classes.linksContainer}>
        <ul>
        {ismobileView && <div><img src={cancel} className={classes.img} onClick={removeHandler} alt='cancel-icon'/></div>}
          <li>
            {" "}
            <NavLink activeClassName={classes.active} exact to="/" onClick={removeHandler}>
              Home
              </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/about" onClick={removeHandler}>
              About Us
            </NavLink>
          </li>
          <li>
            <HashLink  to="/#contact" onClick={removeHandler}>
              Contact
            </HashLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products" onClick={removeHandler}>
              Products
            </NavLink>
          </li>
        </ul>
      </div>}
    </div>
  );
}
export default Header;
