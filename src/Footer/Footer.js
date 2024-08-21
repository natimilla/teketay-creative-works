import Contact from "./Contact";
import classes from "./Footer.module.css";
import QuickLink from "./quickLink";
import SocialLink from "./SocialLink";
import logo from './../Assets/2kY9IJ1bNouZVKDgViMIxvFcEg0.svg';
function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}><img src={logo} className={classes.logoImage}/></div>
      <div className={classes.subContainer}>
        <Contact />
        <QuickLink />
        <SocialLink />
      </div>
      <div className={classes.footer}>
        <p>
          Teketay Creative Works 2024 | All Rights Rserved | Powered By{" "}
          <a href="https://t.me/NatiMilla">Nati Milla</a>
        </p>
      </div>
    </div>
  );
}
export default Footer;
