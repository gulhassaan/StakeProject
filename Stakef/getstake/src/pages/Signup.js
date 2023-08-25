import React from 'react';
import '../style/Signup.css';
import ProgressBar from "@ramonak/react-progress-bar";
import { NavLink } from 'react-router-dom';
const Signup = () => {
 
  return (
    <div className="signup-container">
       
      <div className="signup-left-grid">
      <h1 className='top-head'>Join Stake</h1>
        <h2>Full Name</h2>
        <input type="text" placeholder="Enter your full name" />

        <h2>Email</h2>
        <input type="email" placeholder="Enter your email" />

        <p>We will never share your email</p>

            
     <div className="signup-btn">
<NavLink to="/confirmemail"><button className="signup-button">Let's Go!</button></NavLink>
    
     </div>
     <div  className="signin-link">
        <p>Already a member? <NavLink to="/login"> <span className='color'>Sign in</span></NavLink> </p>
        </div>
        <div className='ProgressBar'>
      <ProgressBar completed={25} bgColor="#63b377"  animateOnRender={true} />
      </div>
      <div className='st'>
      <p>Step <span className='color'>1</span>  of  <span className='color'>4</span></p>
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

export default Signup;
