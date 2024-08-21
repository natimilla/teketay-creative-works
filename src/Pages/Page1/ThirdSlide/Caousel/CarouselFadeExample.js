import Carousel from "react-bootstrap/Carousel";
import classes from "./Carousel.module.css";
import owel from "./Images/owel.jpg";
import clock from "./Images/clock.jpg";
import stairs from "./Images/stair.jpg";
import Light from "./Images/Light.jpg";
import Meskel from "./Images/Meskel.jpg";
import table from "./Images/Table.jpg";
function CarouselFadeExample() {
  return (
    <Carousel fade className={classes.carousel}>
      <Carousel.Item>
      <div>
          <div className={classes.overlayContainer}>
          <div className={classes.overlay}></div>
          </div>
          
          <img src={Meskel} className={classes.img} alt='carousel-image' />
        </div>
        <Carousel.Caption className={classes.carousel}>
          <h3>THE CROSS</h3>
          <p>The harmony of metal and faith..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div>
          <div className={classes.overlayContainer}>
          <div className={classes.overlay}></div>
          </div>
          
          <img src={clock} className={classes.img} alt='carousel-image' />
        </div>
        <Carousel.Caption className={classes.carousel}>
          <h3>Metal Clock</h3>
          <p>Sleek, contemporary metal clock featuring a minimalist, modern design.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div>
          <div className={classes.overlayContainer}>
          <div className={classes.overlay}></div>
          </div>
          
          <img src={stairs} className={classes.img} alt='carousel-image' />
        </div>
        <Carousel.Caption className={classes.carousel}>
          <h3>Safe & stylish handrails</h3>
          <p>
          Durable, stylish metal handrails provide safe, secure support with a refined, architectural aesthetic.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div>
          <div className={classes.overlayContainer}>
          <div className={classes.overlay}></div>
          </div>
          
          <img src={owel} className={classes.img} alt='carousel-image' />
        </div>
        <Carousel.Caption className={classes.carousel}>
          <h3>An Owlsome Metal Masterpiec</h3>
          <p>
          Mesmerizing metal sculpture featuring a majestic, owl-inspired design crafted with exceptional artistry and attention to detail.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div>
          <div className={classes.overlayContainer}>
          <div className={classes.overlay}></div>
          </div>
          
          <img src={Light} className={classes.img} alt='carousel-image' />
        </div>
        <Carousel.Caption className={classes.carousel}>
          <h3>ELEGANCE LIGHT</h3>
          <p>
          Illuminate your space with contemporary flair using our stylish metal table lamp.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div>
          <div className={classes.overlayContainer}>
          <div className={classes.overlay}></div>
          </div>
          
          <img src={table} className={classes.img} alt='carousel-image' />
        </div>

        <Carousel.Caption className={classes.carousel}>
          <h3>ONE TABLE, THREE FORM</h3>
          <p>
          Triple the function, triple the style—this metal table adapts to your needs in three unique ways!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
