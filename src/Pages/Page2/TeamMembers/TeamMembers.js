import Abynur from './Images/Abynur.jpg';
import Bemnjew from './Images/Bemnjew.jpg';
import Eyodab from './Images/Eyoab.jpg';
import Saron from './Images/Saron.jpg';
import Thitina from './Images/Tihtina.jpg';
import seyoum from './Images/seyoum.jpg';
import yabsira from './Images/Yabsira.jpg';
import classes from './TeamMembers.module.css';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
function TeamMembers(){
    const DUMMY_FILE=[{
        Name:"Seyoum Tadesse",
        src:seyoum,
        Job:'Sales & Content Creator',
    },
    {
        Name:"Abynur Solomon",
        src:Abynur,
        Job:'Creative Director',
    },
    {
        Name:"Saron Girma",
        src:Saron,
        Job:'Sales & Bazaar coordinator',
    },
    {
        Name:"Eyoab Degefu",
        src:Eyodab,
        Job:'Product & Interior Designer',
    },
    {
        Name:"Bemnet Retta",
        src:Bemnjew,
        Job:'Social Media Manager',
    },
    {
        Name:"Yeabsira Mekonen",
        src:yabsira,
        Job:"Product & Interior Designer",
    },
    {
        Name:"Tihitina chane",
        src:Thitina,
        Job:'Finance Manager & Coordinator',
    }]
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    return <div className={classes.container}>
            <div className={classes.heading}>Our Team Members</div>
            <div className={classes.horizontalLineContainer}><hr className={classes.horizontalLine}/> </div>
            <div className={classes.listsContainer}>
              {DUMMY_FILE.map((item)=>{
                return <div className={classes.listContainer} data-aos='zoom-in-up'>
                    <div className={classes.imageContainer}><img src={item.src} className={classes.img}/></div>
                    <div>
                        <div className={classes.description}> Name: {item.Name}</div>
                        <div className={classes.description}> Job Title: {item.Job}</div>
                    </div>
                </div>
              })}
            </div>
    </div>
}
export default TeamMembers;