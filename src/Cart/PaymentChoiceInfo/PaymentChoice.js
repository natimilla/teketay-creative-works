import { useDispatch, useSelector } from "react-redux";
import classes from "./PaymentChoice.module.css";
import firebase from "firebase/app";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, remove, ref as REF } from "firebase/database";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { displayActions } from "../../store/display";
import { paymentInfoAction } from "../../store/PaymentInfo";
function PaymentChoice() {
  const bank = useSelector((Store) => Store.paymentInfo.message);
  const totalPrice = useSelector((Store) => Store.cart.totalPrice);
  const accountNumber = useSelector((Store) => Store.paymentInfo.accountNumber);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [image, setImage] = useState();
  const dispatch=useDispatch()
  const firebaseConfig = {
    apiKey: "AIzaSyDdnyMJwq2czmZEsJmU36gIS4Wpvndazqw",
    authDomain: "teketay-creative-works.firebaseapp.com",
    databaseURL: "https://teketay-creative-works-default-rtdb.firebaseio.com",
    projectId: "teketay-creative-works",
    storageBucket: "teketay-creative-works.appspot.com",
    messagingSenderId: "920356138814",
    appId: "1:920356138814:web:944a36e15e060817c1c66f",
    measurementId: "G-KCXZ1CYB6V",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app); // or getFirestore(app) for Cloud Firestore
  const storage = getStorage(app);

  const imageChangeHandler = async (event) => {
    const file = event.target.files[0];

    const imageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(imageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Calculate the upload progress as a percentage
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.error("Upload failed", error);
      },
      async () => {
        // Upload completed successfully
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setImage(downloadURL);
      }
    );
  };
   const submitHandler=async()=>{
      const data=[];
      if(!image){
        alert('Image not uploaded yet.');
        return
      }
      data.push({
        image:image
      })
      dispatch(displayActions.LoadingHandler())
     try{
      await fetch('https://teketay-creative-works-default-rtdb.firebaseio.com/Receipts.json',{
        method:'POST',
        body:JSON.stringify(data)
      })
      dispatch(displayActions.LoadingHandler());
      dispatch(paymentInfoAction.paymentMethodDisplayHandler());
      dispatch(paymentInfoAction.submissionHandler());
      setImage('')
     }
     catch(error){
      dispatch(displayActions.LoadingHandler());
        dispatch(displayActions.ErrorHandeler());
     }
   }
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <div>Hello! You have successfully placed an order.</div>
        <div className={classes.toDOList}>
          1. Please remit payment to {bank} account number{" "}
          <span className={classes.color}>{accountNumber}</span>, registered
          under the name <span className={classes.color}>Abynur Solomon</span>,
          for a total amount of{" "}
          <span className={classes.color}>{totalPrice}ETB</span>.
        </div>
        <div className={classes.toDOList}>
          2. Please send the screenshot of the receipt using{" "}
          <a href="#image">the below section</a>
        </div>
        <div>
          <input
            type="file"
            id="image-input"
            accept="image/jpeg, image/png"
            onChange={imageChangeHandler}
            className={classes.input}
            required
          />
          <p>{uploadProgress}%</p>
        </div>
        <div className={classes.buttonContainer}><div className={classes.button} onClick={submitHandler}>SEND</div></div>
      </div>
    </div>
  );
}
export default PaymentChoice;
