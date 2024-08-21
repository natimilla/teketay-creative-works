import { useEffect } from 'react';
import classes from './CompanyPortfolio.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
function CompanyPortfolio(){
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    const DUMMY_FILE=[{
        heading:"Crafting Captivating Metal Art",
        description:"At Teketay Creative Works, we are a passionate team of metal artists and engineers who have dedicated ourselves to the pursuit of captivating, one-of-a-kind metal sculptures and installations. Founded just 3 years ago, our young but ambitious company has quickly made a name for itself by pushing the boundaries of what's possible with this versatile medium.",
    },
    {
        heading:"A Fusion of Tradition and Innovation",
        description:"Drawing inspiration from both time-honored metalworking techniques and cutting-edge digital design tools, we create stunning works of art that seamlessly blend the organic and the modern. Whether it's a towering public sculpture or an intimate decorative piece, each Teketay creation is imbued with a sense of wonder and a deep appreciation for the expressive potential of metal.",
    },
    {
        heading:"Mastering a Wide Spectrum of Metals",
        description:"Our team of skilled artisans possesses deep expertise across a diverse range of metal types, including steel, aluminum, brass, copper, and specialty alloys. This versatility allows us to tackle a wide array of project requirements, from large-scale industrial commissions to bespoke architectural features and exclusive private collections.",
    },
    {
        heading:"Sustainable Practices, Exceptional Quality",
        description:"Sustainability is a key pillar of our operations at Teketay. We take great pride in utilizing eco-friendly manufacturing processes that minimize waste and maximize the use of recycled materials. This commitment to environmental responsibility is matched by our uncompromising dedication to quality, ensuring that each Teketay creation is built to the highest standards of craftsmanship and durability.",
    }]
    return <div className={classes.container}>
           {DUMMY_FILE.map((item)=>{
             return <div className={classes.listContainer} data-aos='zoom-in-up'>
                <div className={classes.headingContainer}>
                    <div className={classes.heading}>{item.heading}</div>
                    <div className={classes.horizontalLineContainer}><hr className={classes.horizontalLine}/> </div>
                </div>
                <div className={classes.description}>{item.description}</div>
                </div>
           })} 
    </div>
}
export default CompanyPortfolio;