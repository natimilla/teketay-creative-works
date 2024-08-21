
import ChatSection from "./ChatSection/ChatSection"
import classes from "./FourthSlide.module.css"
import InformationSection from "./informationSection/informationSection"
function FourthSlide(){
    return <div className={classes.container} id='contact'>
             <div className={classes.heading}>Contact Us</div>
             <div className={classes.horizontalContainer}><hr className={classes.horizontalLine}/></div>
             <div className={classes.subContainer} >
             <InformationSection/>
             <ChatSection/>
             </div>
             
    </div>
}
export default FourthSlide