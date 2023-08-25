import React, { useState } from 'react';
import "../style/Profile.css";
import ContentRenderer from './ContentRenderer';
import Passport from '../images/passport.png';
import { NavLink } from 'react-router-dom';



const Profile = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [sidebarClosed, setSidebarClosed] = useState(false);
    const [selectedContent, setSelectedContent] = useState(null);
    const [supportPopup,setSupportPopup]=useState(false);
    const handleSupportPopup = (e)=>{
      
    }
    // const [contentMargin, setContentMargin] = useState('0%'); // Initialize with 0% margin
    const handleArrowClick = (e) => {
      const arrowParent = e.target.parentElement.parentElement;
      arrowParent.classList.toggle("showMenu");
      setShowMenu(!showMenu);
      // setSidebarClosed(!sidebarClosed); // Toggle the sidebarClosed state
      // setShowMenu(false); 
     
    };
  const handleMenuItemClick =(content) =>{
    setSelectedContent(content);
    // setContentMargin(content === 'properties' ? '25%' : '0%'); // Set margin to 25% for 'properties', 0% otherwise
  }
   
  
  return (
    <div>
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'/>
    <div className={`sidebar ${sidebarClosed ? 'close' : ''}`}>
        <div className="logo-details">
          <span className="logo_name">
            <img src='https://getstake.com/assets/stake-logo.svg'></img>
          </span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#" onClick={()=> handleMenuItemClick('profileproperty')}>
              <i className='bx bx-home-alt' ></i>
              <span className="link_name">Properties</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={()=> handleMenuItemClick('wallet')}>
              <i className='bx bx-wallet-alt' ></i>
              <span className="link_name">Wallet</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={()=> handleMenuItemClick('portfolio')}>
              <i className='bx bx-stats' ></i>
              <span className="link_name">Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={()=> handleMenuItemClick('rewards')}>
              <i className='bx bx-star' ></i>
              <span className="link_name">Rewards</span>
            </a>
          </li>
          <li className='last-li'>
            <a href="#" onClick={()=> handleMenuItemClick('cart')}>
              <i className='bx bx-cart'></i>
              <span className="link_name">Cart</span>
            </a>
          </li>
          <li>
            <div className="iocn-link">
              <a href="#">
                <i className='bx bx-collection' ></i>
                <span className="link_name">Hassaan</span>
              </a>
              <i className='bx bxs-chevron-down arrow' onClick={handleArrowClick}></i>
            </div>
            <ul className={`sub-menu ${showMenu ? 'showMenu' : ''}`}>
              <li><a className="link_name" href="#">Profile</a></li>
            
              <li><a href="#"  onClick={()=>handleMenuItemClick('setting')}>My Profile</a></li>
              <li><a href="#">Bookmarks</a></li>
              <li><a href="#">Logout</a></li>
        
            </ul>
          </li>
          {/* ... Other menu items ... */}
          <div className='help-support'>
          <li>
              <a href=''>
              <i class='bx bxs-message-dots' ></i>
              <span className="link_name">Help and support</span>
              </a>
           
            </li>
          </div>
         
          
        </ul>
        

        <div className='profile-last-section'>
         <div className='profile-image-section'> <img src='https://getstake.com/assets/app_logo.svg'></img></div>
         <div className='profile-heading'> 
         <div><p>Download our mobile app</p></div>
         <div className='download-app-link'>    
              <a href='https://apps.apple.com/app/stake-property-investing/id1591107922'>iphone</a>
              <a href='https://play.google.com/store/apps/details?id=com.stake.investments.money.investor'>Android</a></div>
         </div>
        </div>
        
         
            
      </div>
      {/* <section className="home-section">
        <div className="home-content">
          <i className='bx bx-menu' onClick={handleSidebarToggle}></i>
          <span className="text">Drop Down Sidebar</span>
          {renderContent()}
        </div>
      </section> */}

      {/* <div className="content-wrapper" style={{ marginLeft: contentMargin }}> */}
        <ContentRenderer selectedContent={selectedContent} />
    
    </div>
  );
}
 
export default Profile;