import React from 'react';
import '../style/CreatePassword.css';

const CreatePassword = () => {
  return (
    <div className="signup-container">
       
      <div className="left-grid">
        <div className='grid-header'>Your email has been verified!</div>
      
<div>
    <h2 className='create-pass'>
        Create Password
    </h2>
    <h2 className='pass'>Password <span className='compulsory'>*</span> </h2>
        <input className='input-pass' type="password" placeholder="Strong-Password123#" />
        <div className='instruction'>
            
    Password should have:
    <ul className='listing'>
        <li>Minimum length at 8 characters</li>
        <li> At least one uppercase character is required</li>
        <li> At least one lowercase character is required</li>
        <li> Number character(s) is required </li>
    </ul>
        </div>
    </div>   
    
     
      <div className='account-btn'>
      <button className="account-button">Create account</button>
     
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

export default CreatePassword;
