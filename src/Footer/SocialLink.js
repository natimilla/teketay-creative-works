import classes from './SocialLink.module.css'
import instagram from './../Pages/Page1/FourthSlide/informationSection/SVGs/instagram.svg';
import telegram from './../Pages/Page1/FourthSlide/informationSection/SVGs/telegramLogo.svg';
function SocialLink(){
    return <div>
        <div className={classes.headingContainer} ><h className={classes.heading}> Social Links </h></div>
        <a href='https://www.instagram.com/teketaycreativeworks?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className={classes.link} ><p className={classes.links}><img src={instagram}/> instagram</p></a>
        <a href='https://t.me/teketaycreativeworks1' className={classes.link}><p className={classes.links}><img src={telegram}/> telegram</p></a> 
    </div>
}
export default SocialLink