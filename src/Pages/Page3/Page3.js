import Heading from "./Heading";
import Home from "./Home";
import classes from "./Page3.module.css";
import Stair_cases from "./StairCases";
import Wall_arts from "./Wall-arts";
import { Helmet } from "react-helmet";
function Page3() {
  return (
    <div className={classes.container}>
      <Helmet>
        <title>Teketay Creative Works Products Page</title>
        <meta
          name="Products"
          content="This page contains some of the products of the company"
        />
      </Helmet>
      <div>
        <Heading />
        <Home />
        <Wall_arts />
        <Stair_cases />
      </div>
    </div>
  );
}
export default Page3;
