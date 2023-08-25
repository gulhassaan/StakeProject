import React from 'react';
import '../style/PhoneNumber.css';
    import ProgressBar from "@ramonak/react-progress-bar";
    import { NavLink } from 'react-router-dom';
        
const PhoneNumber = () => {
  return (
    <div className="phonenumber-container">
       
      <div className="left-grid">
        <div className='grid-header'>Your email has been verified!</div>
      
<div>
    <h2 className='create-number'>
        Enter phone number <span className='compulsory'>*</span>
    </h2>
    <h2 className='number'>Please enter your phone number to continue  </h2>

    <div className="mobile-number">
              <select>
                <option value="+1" >+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+92">+92 (PAK)</option>
                <option value="+91">+91 (IND)</option>
              </select>
              <input className='number-input' type="tel" placeholder="Enter your mobile number" />
            </div>
       
    </div>   
    
     
      <div className='num-btn'>
        <NavLink to="/verifynumber"> <button className="num-button">Next</button></NavLink>
     
     
     
     
      
      </div>
      <div className='ProgressBar'>
      <ProgressBar completed={75} bgColor="#63b377" animateOnRender={true} />
      </div>
      <div className='st'>
      <p>Step <span className='color'>3</span>  of  <span className='color'>4</span></p>
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

export default PhoneNumber;
