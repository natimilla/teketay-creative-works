import classes from './Lists.module.css';
import variable from './../Svgs/variable.svg';
import interior from './../Svgs/interiorDesign.svg';
import businessCard from './../Svgs/businessCard.svg';
import Custom from './../Svgs/custom.svg';
import quality from './../Svgs/quality.svg';
import sustainable from './../Svgs/sustainable.svg';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
function Lists(){
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    return <div className={classes.container}>
       <div className={classes.listsContainer} data-aos='zoom-in-up'>
           <div className={classes.listContainer}>
            <div ><img src={variable} className={classes.img} alt='Icon-image' /></div>
            <div  className={classes.heading}>Variable Steel Works</div>
            <div  className={classes.decription}>Crafting high-quality, customizable steel works for diverse applications</div>
           </div>
           <div className={classes.listContainer} >
            <div ><img src={interior} className={classes.img} alt='Icon-image'/></div>
            <div  className={classes.heading}>Interior Devices</div>
            <div  className={classes.decription}>Designing and manufacturing steel-based interior devices, such as shelving systems, room dividers, and accent pieces</div>
           </div>
           <div className={classes.listContainer} >
            <div  ><img src={businessCard} className={classes.img} alt='Icon-image'/></div>
            <div  className={classes.heading}>Business Card Holders</div>
            <div  className={classes.decription}>Specializing in crafting steel-based business card holders and complementary accessories</div>
           </div>
       </div>

       <div className={classes.listsContainer}  data-aos='zoom-in-up'>
           <div className={classes.listContainer} >
            <div><img src={Custom} className={classes.img} alt='Icon-image'/></div>
            <div className={classes.heading}>Custom Solutions</div>
            <div className={classes.decription}>Collaborating closely with clients to understand their needs and develop tailored solutions</div>
           </div>
           <div className={classes.listContainer} >
            <div  ><img src={quality} className={classes.img} alt='Icon-image'/></div>
            <div  className={classes.heading}>Quality and Craftsmanship</div>
            <div  className={classes.decription}>Unwavering commitment to quality and attention to detail in the manufacturing process</div>
           </div>
           <div className={classes.listContainer} >
            <div  ><img src={sustainable} className={classes.img} alt='Icon-image'/></div>
            <div  className={classes.heading}>Sustainability </div>
            <div  className={classes.decription}> Incorporation of sustainable practices and eco-friendly materials in Teketay's production processes </div>
           </div>
       </div>
</div>
}
export default Lists