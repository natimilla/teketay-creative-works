import FifthSlide from "./FifthSlide/FifthSLide";
import FirstSlide from "./FirstSlide/FirstSlide";
import FourthSlide from "./FourthSlide/FourthSlide";
import classes from "./Page1.module.css";
import SecondSlide from "./SecondSlide/SecondSlide";
import ThirdSlide from "./ThirdSlide/ThirdSlide";
import { Helmet } from "react-helmet";
function Page1() {
  return (
    <div className={classes.container}>
      <Helmet>
        <title>Teketay Creative works Home Page</title>
        <meta name="teketay creatuve works" content="This is the home page of teketay creative works" />
      </Helmet>
      <FirstSlide />
      <SecondSlide />
      <ThirdSlide />
      <FourthSlide/>
      <FifthSlide/>
    </div>
  );
}
export default Page1;
