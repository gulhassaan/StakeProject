import React from 'react';
import '../style/VerifyNumber.css';
import ProgressBar from "@ramonak/react-progress-bar";
import { NavLink } from 'react-router-dom';

const VerifyNumber = () => {
  return (
    <div className="signup-container">
       
      <div className="left-grid">
        <div className='grid-header'>Your email has been verified!</div>
      
<div>
    <h2 className='create-number'>
        Verify phone number 
    </h2>
    <h2 className='number'>Please enter the one-time-password(OTP) sent to your <br></br> number.
      </h2>

    <div className="verify-number">
              
              <input className='number-input' type="tel" placeholder="*******" />
            </div>
       <a href='' className='OTP'>Resend OTP</a>
    </div>   
    
     
      <div  className='verify-btn'>
        <NavLink to="/">  <button className="verify-button">Verify</button></NavLink>
      
     

      
      
      </div>
        
        <div className='ProgressBar'>
        <ProgressBar completed={100} bgColor="#63b377" animateOnRender={true} />
        </div>
        <div className='st'>
      <p>Step <span className='color'>4</span>  of  <span className='color'>4</span></p>
      </div>
      </div>

      <div className="right-grid">
       
        <img src='https://getstake.com/assets/stake-white.svg'></img>
        <h1 className='say-hello'>Say hello <br>
        </br>
              to passive income</h1>
        <button className="language-button">English</button>
        <button className="language-button">عربي</button>
      </div>
    </div>
  );
};

export default VerifyNumber;
