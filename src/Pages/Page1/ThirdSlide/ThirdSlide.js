import CarouselFadeExample from './Caousel/CarouselFadeExample';
import Header from './Header/Header';
import classes from './ThirdSlide.module.css'
function ThirdSlide(){
    return <div className={classes.container}>
               <Header/>
               <CarouselFadeExample/>
    </div>
}
export default ThirdSlide;