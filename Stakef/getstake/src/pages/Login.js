import React from 'react'
import { NavLink } from 'react-router-dom';
import '../style/Login.css';
const Login = () => {
  return (
    <div className='bd'>
     <div class="custom-shape-divider-bottom-1691931231">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
</div>
        <div className='card-setting'>
           <div className="login-card">
      <div className="card">
        <div className='login-logo'>
        <img src="https://getstake.com/assets/stake-logo.svg" alt="Logo"  />
        </div>
     
      
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="E.g. yourname@company.com" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button className="login-button">Login</button>
        <div>
          <NavLink to="/ForgotPassword">
          <span className='forgot-link'>  Forgot password</span>
          </NavLink>
        </div>
        <div>
          <p className='terms-para'>By clicking Log In you agree to stake's <span className='bold'>Terms & Conditions</span> and <span className='bold'> Key role.</span></p>
        </div>

      </div>
      <div className='gotosignup'>
        <h>Don't have an account.<span > <NavLink to="/signup" className='joinus'> Join us today</NavLink></span> </h>
      </div>
      <div className='DFSA'>
        <p>Regulated by the DFSA</p>
      </div>
    </div>
    
        </div>
    </div>
  )
}

export default Login;