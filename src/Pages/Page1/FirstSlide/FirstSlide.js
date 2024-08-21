import classes from "./FirstSlide.module.css";
import video from "./../../../Assets/video_2024-08-12_17-46-02.mp4";
import Main from "./Main";
function FirstSlide() {
  return <div className={classes.container} id='home'>
    <div className={classes.overlay}></div>
    <Main/>
    <video src={video} autoPlay muted preload="auto" loop playbackRate={0.25} />
  </div>;
}
export default FirstSlide;
