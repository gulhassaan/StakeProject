import React from 'react';
import '../style/ConfirmEmail.css';
import ProgressBar from "@ramonak/react-progress-bar";
import { NavLink } from 'react-router-dom';
const ConfirmEmail = () => {
  return (
    <div className="confirmemail-container">
       
      <div className="left-grid">
      <h1 className='top-head'>confirm your email</h1>
        <p className='confirm-link'>Confirmation link was sent to your email</p>
        <div className='confirm-img'> <img  src='https://getstake.com/assets/onboarding/email.svg'></img></div>
        <div className='letgo-btn'>
          <NavLink to="/phonenumber">  <button className="letgo-button">Let's Go!</button></NavLink>
        
        </div>
       
        <div>
        <div className='ProgressBar'>
      <ProgressBar completed={50} bgColor="#63b377" animateOnRender={true} />
      </div>
        </div>
        <div className='st'>
      <p>Step  <span className='color'>2</span>  of  <span className='color'>4</span></p>
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

export default ConfirmEmail;
