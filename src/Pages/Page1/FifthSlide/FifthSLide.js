import { useState } from "react";
import classes from "./FifthSlide.module.css";
import minus from "./minus.svg";
import plus from "./plus.svg";
function FifthSlide() {
  const [openFaq1, setOpenFaq1] = useState(false);
  const SlideHandler1 = () => {
    setOpenFaq1((prev) => !prev);
  };
  const [openFaq2, setOpenFaq2] = useState(false);
  const SlideHandler2 = () => {
    setOpenFaq2((prev) => !prev);
  };
  const [openFaq3, setOpenFaq3] = useState(false);
  const SlideHandler3 = () => {
    setOpenFaq3((prev) => !prev);
  };
  const [openFaq4, setOpenFaq4] = useState(false);
  const SlideHandler4 = () => {
    setOpenFaq4((prev) => !prev);
  };
  return (
    <div className={classes.container}>
      <div className={classes.heading}>FAQ</div>
      <div className={classes.allContainer}>
        <div className={classes.faqContainer} onClick={SlideHandler1}>
          <div
            className={`${classes.imgContainer} ${
              openFaq1 ? classes.active : " "
            }`}
          >
            <p>What types of metal products does the company offer?</p>
            <img src={openFaq1 ? minus : plus} alt="change icon" />
          </div>

          {openFaq1 && (
            <p className={classes.description}>
              {" "}
              We offer variety of metal works ranging from wall arts to
              household partitions
            </p>
          )}
        </div>
        <div className={classes.faqContainer} onClick={SlideHandler2}>
          <div
            className={`${classes.imgContainer} ${
              openFaq2 ? classes.active : " "
            }`}
          >
            <p>
              How long does it typically take to fulfill an order for the
              company's metal products?
            </p>
            <img src={openFaq2 ? minus : plus} alt="change Icon" />
          </div>

          {openFaq2 && (
            <p className={classes.description}>
              Well it varies on the product ordered but the maximum delivery
              date is with in two weeks.
            </p>
          )}
        </div>
        <div className={classes.faqContainer} onClick={SlideHandler3}>
          <div
            className={`${classes.imgContainer} ${
              openFaq3 ? classes.active : " "
            }`}
          >
            <p>
              How long can customers expect the company's metal products to last
              under normal use and conditions?
            </p>
            <img src={openFaq3 ? minus : plus} alt="change Icon" />
          </div>

          {openFaq3 && (
            <p className={classes.description}>
              As a general guideline, customers can expect our high-quality
              steel products to have an average lifespan of 10-15 years under
              normal use and proper maintenance
            </p>
          )}
        </div>

        <div className={classes.faqContainer} onClick={SlideHandler4}>
          <div
            className={`${classes.imgContainer} ${
              openFaq4 ? classes.active : " "
            }`}
          >
            <p>
              What factors influence the pricing of the company's metal
              products, and are there any volume discounts available?
            </p>
            <img src={openFaq4 ? minus : plus} alt="change Icon" />
          </div>

          {openFaq4 && (
            <p className={classes.description}>
              The specific discount thresholds and percentages can vary
              depending on the product, but as a general guideline, orders over
              100 units may qualify for a 5-10% discount, while orders over 500
              units could receive a 10-15% discount.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
export default FifthSlide;
