import classes from './Contact.module.css';
import instagram from './../Pages/Page1/FourthSlide/informationSection/SVGs/instagram.svg';
import telegram from './telegramLogo.svg';
import phone from './phoneLogo.svg';
import mail from './mail.svg';
import location from './location.svg'
function Contact(){
   return <div>
    <h className={classes.heading}>Teketay<span className={classes.headingSpan}> Creative</span> Works</h>
    <div>
    <a href='' className={classes.linkLogo}><img src={location}/></a>
    <a href='https://www.instagram.com/teketaycreativeworks?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className={classes.linkLogo}><img src={instagram}/></a>
    <a href='https://t.me/teketaycreativeworks1' className={classes.linkLogo}><img src={telegram}/></a>
    </div>
    <div className={classes.linkContainer}>
    <a href="tel:0912365942" className={classes.link}><img src={phone}/> +251 912365942</a>
    </div>
    
    <div className={classes.linkContainer}>
    <a href="mail:@teketaycreativeworks"className={classes.link}><img src={mail}/> @teketaycreativeworks</a>
    </div>
    <div className={classes.linkContainer}>
    <a href="https://maps.app.goo.gl/6z1BSQ7BBRk19Pm29"><img src={location}/> Megenagna,Hidase Building 5th Floor</a>
    </div>
    
   </div>
}
export default Contact