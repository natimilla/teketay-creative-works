import { useEffect, useRef, useState } from 'react';
import classes from './Authentication.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { displayActions } from '../store/display';
import { authAction } from '../store/Auth';
import { Helmet } from 'react-helmet';
function Authentication(){
    const[isLogin,setisLogin]=useState(true);
    const[incorrectPassword,setincorrectPassword]=useState(false);
    const[inCorrectEmail,setincorrectEmail]=useState(false);
    const[ErrorMessage,setErrorMessage]=useState('')

    const dispatch=useDispatch();
    const email=useRef();
    const password=useRef();
    const enteringOptionHandler=()=>{
        setisLogin(prev=>!prev)
        setincorrectEmail(false);
        setincorrectPassword(false);
        setErrorMessage('')
          }
          const emailcheckingHandler=()=>{
            const currentEmail=email.current.value;
            if(currentEmail.trim().length<7 || !currentEmail.includes('@')){
              setincorrectEmail(true)
            }
            else{
              setincorrectEmail(false)
            }
          }
          const passwordCheckingHandler=()=>{
            const currentPassword=password.current.value;
            if(currentPassword.trim().length<6){
                setincorrectPassword(true)
              }
            else{
              setincorrectPassword(false)
            }
          }
    const submitHandler=async(event)=>{
      event.preventDefault();
      dispatch(displayActions.LoadingHandler())
      const currentEmail=email.current.value;
      const currentPassword=password.current.value;
      if(currentPassword.trim().length<6){
        dispatch(displayActions.LoadingHandler())
        return;
      }
      
      let url;
      if(isLogin){
         url= 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdnyMJwq2czmZEsJmU36gIS4Wpvndazqw'
      }
      if(!isLogin){
          url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdnyMJwq2czmZEsJmU36gIS4Wpvndazqw'
      } 
         try{
          const response=await fetch(url,
            {
              method:'POST',
              body:JSON.stringify({
                email:currentEmail,
                password:currentPassword,
                returnSecureToken:true
              }),
              headers:{
                'Content-Type': 'application/json'
              }
            }
          )
          if(!response.ok){
            let errorMessage
           const data=await response.json();
           if(data && data.error && data.error.message){
              errorMessage=data.error.message;
              if(errorMessage==='EMAIL_EXISTS'){
                setincorrectEmail(true);
                setErrorMessage('EMAIL EXISTS')
              }
              if(errorMessage==='INVALID_LOGIN_CREDENTIALS'){
                setincorrectEmail(true);
                setErrorMessage('INVALID LOGIN CREDENTIALS');
                setincorrectPassword(true);
              }
             
           }
    
          }  
          else{
            const data=await response.json();
            console.log(data)
            dispatch(authAction.loginHandler({id:data.idToken,email:currentEmail}))
          }
          dispatch(displayActions.LoadingHandler())
         }
         catch(error){
          dispatch(displayActions.LoadingHandler())
          dispatch(displayActions.ErrorHandeler())
         }   
         
      }
    
    return  <div className={classes.container}>
      <Helmet>
        <title>{isLogin ? 'Teketay Creative works Sign in Page': 'Teketay Creative works Sign Up Page'}</title>
        <meta name="teketay creatuve works" content="This is the authentication page of teketay creative works" />
      </Helmet>
        <div className={classes.subContainer}>
        <div className={classes.heading}>{isLogin ? 'SIGN IN' : 'SIGN UP'}</div>
        <div className={classes.subSubContainer}>
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.label}>Your Email</div>
            <div className={classes.inputContainer}><input type='email' className={`${classes.input} ${inCorrectEmail ? classes.incorrect :''}`} ref={email} onChange={emailcheckingHandler}/></div>
            {inCorrectEmail && <div className={classes.warning} > {ErrorMessage}</div>}
            <div className={classes.label}>Your Password</div>
            <div className={classes.inputContainer} ><input type='password' className={`${classes.input} ${incorrectPassword ? classes.incorrect :''}`} ref={password} onChange={passwordCheckingHandler}/></div>
            {incorrectPassword && !isLogin &&<div className={classes.warning}> Password must be at least 6 characters</div>}
            {incorrectPassword && isLogin && <div className={classes.warning} > {ErrorMessage}</div>}
            <div className={classes.buttonContainer}><button className={classes.button}>{isLogin ? 'Log in':'Create Account'}</button></div>
          </form>
          
          <div className={classes.enteringOption} onClick={enteringOptionHandler}>{isLogin ? 'Create New Account' : 'Enter By Existing Account'}</div>
        
        </div>
        </div>
    </div>
}
export default Authentication