import { useEffect } from "react";
import classes from "./ChatSection.module.css";
import 'aos/dist/aos.css'; 
import Aos from "aos"

import { useState } from "react";
import { useDispatch } from "react-redux";
import { displayActions } from "../../../../store/display";
function ChatSection() {
  const dispatch=useDispatch()
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const[message,setMessage]=useState('')
  const nameChangeHandler=(event)=>{
    setName(event.target.value)
  }
  const emailChangeHandler=(event)=>{
    setEmail(event.target.value)
  }
  const phoneChangeHandler=(event)=>{
    setPhone(event.target.value)
  }
  const messageChangeHandler=(event)=>{
    setMessage(event.target.value)
  }
  const submitHandler = async(event) => {
    event.preventDefault();
    dispatch(displayActions.LoadingHandler());
    const data=[];
    data.push({
      name:name,
      phone:phone,
      message:message,
      email:email,
    })
    try{
      await fetch('https://teketay-creative-works-default-rtdb.firebaseio.com/message.json',{
        method:'POST',
        body:JSON.stringify(data)
      })
    }
    catch(error){
      dispatch(displayActions.LoadingHandler());
      dispatch(displayActions.ErrorHandeler);
      return
    }
    setEmail('');
    setMessage('');
    setName('');
    setPhone('')
    dispatch(displayActions.LoadingHandler());
    dispatch(displayActions.submittedHandler())
  };
  
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className={classes.container} data-aos='fade-up'>
      <div className={classes.heading}> Get in touch </div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.infoContainer}>
          <div className={classes.inputTypeContainer}>
            <div className={classes.label}>
              <label> FULL NAME </label>
            </div>
            <div className={classes.inputContainer}>
              <input type="text" className={classes.textInput} onChange={nameChangeHandler} value={name} required/>
            </div>
          </div>
          <div className={classes.inputTypeContainer}>
            <div className={classes.label}>
              <label> EMAIL </label>
            </div>
            <div className={classes.inputContainer}>
              <input type="email" className={classes.textInput} onChange={emailChangeHandler} value={email} required/>
            </div>
          </div>
        </div>
        <div className={classes.label}>
          <label> PHONE </label>
        </div>
        <div className={classes.inputContainer}>
          <input type="number" className={classes.textInput} onChange={phoneChangeHandler} value={phone} required />
        </div>
        <div className={classes.label}>
          <label> MESSAGE </label>
        </div>
        <div className={classes.inputContainer}>
          <textarea cols="20" className={classes.textInput} onChange={messageChangeHandler} value={message} required></textarea>
        </div>
        <div className={classes.buttonContainer}>
        <button type="submit" className={classes.button}> Send Message </button>
        </div>
        
      </form>
    </div>
  );
}
export default ChatSection;
