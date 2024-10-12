import logo from "./logo.svg";
import "./App.css";
import Page1 from "./Pages/Page1/Page1";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Route, Switch } from "react-router-dom";
import Page2 from "./Pages/Page2/Page2";
import Page3 from "./Pages/Page3/Page3";
import Overlay from "./overlay/overlay";
import { useSelector } from "react-redux";
import Store from "./store/store";
import Cart from "./Cart/Cart";
import Orders from "./Cart/Orders";
import PaymentChoice from "./Cart/PaymentChoiceInfo/PaymentChoice";
import Submission from "./Cart/PaymentChoiceInfo/Submission";
import Authentication from "./Authentication/Authentication";
import Profile from "./Pages/Page4/Profile";


function App() {
 const loading= useSelector(Store=>Store.display.loading);
 const error=useSelector(Store=>Store.display.error);
 const submitted=useSelector(Store=>Store.display.submitted);
 const displayCart=useSelector(Store=>Store.cart.displayCart);
 const paymentMethod=useSelector(Store=>Store.paymentInfo.paymentMethod);
 const finished=useSelector(Store=>Store.paymentInfo.submitted);
 const isLogin=useSelector(Store=>Store.auth.isLogin)
 const display=submitted||error||loading
  return (
    <div className="App">
     {isLogin && <div>
      {display &&  <Overlay/>}
      <Header />
       <Cart/>
       {displayCart && <Orders/>}
      {paymentMethod &&  <PaymentChoice/>}
      {finished && <Submission/>}
      <Switch>
        <Route path="/" exact>
          <Page1 />
        </Route>
        <Route path="/about">
          <Page2 />
        </Route>
        <Route path="/products">
          <Page3 />
        </Route>
        <Route path='/profile'>
        <Profile/>
        </Route>
      </Switch>
      <Footer />
     </div>}
      {!isLogin && <Authentication/>}
    </div>
  );
}

export default App;
