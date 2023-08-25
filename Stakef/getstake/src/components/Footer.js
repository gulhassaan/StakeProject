import React from 'react';
import '../style/Footer.css';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
       
        <div className="footer-columns">
          
          
        <div className="footer-logo">
          <img src="https://getstake.com/assets/stake-white.svg" alt="Company Logo" />
        </div>
        <div className="footer-description">
          <p>Office 182, Level 1, Gate Avenue, DIFC, Dubai</p>
        </div>
<div class="footer-container">
  
  <div class="footer-box">
    
    <div class="link-column">
      
      <a href="#">Properties</a>
      <a href="#">About</a>
      <a href="#">Golden visa</a>
      <a href="#">Sell with stake</a>
    </div>
  </div>
  <div class="footer-box">
    <div class="link-column">
      <a href="#">Learn</a>
      <a href="#">Blog</a>
      <a href="#">FAQS</a>
      <a href="#">Glossary</a>
    </div>
  </div>
  <div class="footer-box">
    <div class="link-column">
      <a href="#">Contact with us</a>
      <a href="https://nexthome.pk/">Nexthome.pk</a>
      <div className='media'>
        <a href='https://nexthome.pk/'>
        <img className='media-logo'  src={facebook} ></img>
        </a>
      <a href='https://nexthome.pk/'>
      <img className='media-logo' src={instagram}></img>
      </a>
      <a href='https://nexthome.pk/'>
      <img className='media-logo' src={twitter}></img>
      </a>
      <a href='https://nexthome.pk/'>
      <img className='media-logo' src={linkedin}></img>
      </a>

      </div>
      
    </div>
  </div>
  
</div>


        
        </div>
        <div className="footer-bottom">
        <p>@ 2023 Stake Reserved | Privacy | Developed</p>
      </div>
      </div>
     
    </footer>
  );
};

export default Footer;
