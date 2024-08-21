import classes from "./informationSection.module.css";
import location from "./SVGs/location.svg";
import phone from "./SVGs/phoneLogo.svg";
import telegram from "./SVGs/telegramLogo.svg";
import instagram from "./SVGs/instagram.svg";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
function InformationSection() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={classes.container} data-aos="fade-up">
      <div className={classes.heading}>Let's get in touch</div>
      <div className={classes.description}>
        {" "}
        We're open for any suggestion or just to have a chat.{" "}
      </div>
      <div className={classes.informationContainer}>
        <div className={classes.imgContainer}>
          {" "}
          <img src={location} className={classes.img} alt="icon-image" />
        </div>
        <div>
          <div className={classes.infoheading}>Address : </div>
          <div className={classes.infoDescription}>
            <a href=""> Megenagna, Hidase Bulding ,3rd Floor</a>
          </div>
        </div>
      </div>
      <div className={classes.informationContainer}>
        <div className={classes.imgContainer}>
          {" "}
          <img src={phone} className={classes.img} alt="icon-image" />
        </div>
        <div>
          <div className={classes.infoheading}> Phone : </div>
          <div className={classes.infoDescription}>
            <a href="tel:+251912365942"> +251 912365942 </a>
          </div>
        </div>
      </div>
      <div className={classes.informationContainer}>
        <div className={classes.imgContainer}>
          {" "}
          <img src={telegram} className={classes.img} alt="icon-image" />
        </div>
        <div>
          <div className={classes.infoheading}> Telegram : </div>
          <div className={classes.infoDescription}>
            <a href="https://t.me/teketaycreativeworks1">
              @teketaycreativeworks
            </a>
          </div>
        </div>
      </div>
      <div className={classes.informationContainer}>
        <div className={classes.imgContainer}>
          {" "}
          <img src={instagram} className={classes.img} alt="icon-image" />
        </div>
        <div>
          <div className={classes.infoheading}>Instagram : </div>
          <div className={classes.infoDescription}>
            <a href="https://www.instagram.com/teketaycreativeworks?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              {" "}
              teketaycreativeworks{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InformationSection;
