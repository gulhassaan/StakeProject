import React from 'react';
import { useState } from 'react';
import '../style/Header.css';
import world from '../images/world.png';
import Properties from '../pages/Properties.js';
import Goldenvisa from '../pages/Goldenvisa';
import About from '../pages/About';
import Welcome from './Welcome';
import propertyIMG from '../images/property.png';
import exit from '../images/exit.png';
import { NavLink } from 'react-router-dom';
const Header = () => {

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const closeDropdown = () => {
        setShowDropdown(false);
    };

    return (
        <div className="header">
            <div className="Header-logo">
                <a href='/'> <img src="https://getstake.com/assets/stake-logo.svg"></img></a>
            </div>



            <div className="menu">
                <NavLink className="hov" to='/properties'>
                    <span className="menu-item">Properties</span>
                </NavLink>
                <NavLink className="hov" to='/about'>
                    <span className="menu-item">About</span>
                </NavLink>
                <NavLink className="hov" to='/goldenvisa'>
                    <span className="menu-item">Golden visa</span>
                </NavLink>




                <div className="dropdown">
                    <span className="menu-item dropdown-toggle">Sell</span>
                    <div className="dropdown-content">

                        <NavLink to="/sell-with-stake">
                    <div className='option-svg'> 
                    <svg viewBox="0 0 64 64" focusable="false" class="chakra-icon css-1968w25" width="20px" name="quick-sale">
  <path d="M8 28.214L28.5291 10.6173C30.5264 8.90525 33.4736 8.90525 35.4709 10.6173L56 28.214" stroke="#41ce8e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M29.3333 56.0001H8" stroke="#41ce8e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M41.6628 15.9249V10C41.6628 8.89543 42.5583 8 43.6628 8H50.5719C51.6765 8 52.5719 8.89543 52.5719 10V25.2757" stroke="#41ce8e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M11.4281 25.2756V55.9999" stroke="#41ce8e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
  <path fill="white" clip-rule="evenodd" d="M44.4456 34.6667H37.8347C36.085 34.6669 34.6667 36.0854 34.6667 37.8351V44.4443C34.6678 45.2854 35.003 46.0916 35.5985 46.6855L43.9844 55.0722C45.2222 56.3093 47.2283 56.3093 48.4662 55.0722L55.0724 48.4676C56.3093 47.2295 56.3093 45.2234 55.0724 43.9853L46.6865 35.5986C46.0927 35.0031 45.2866 34.6678 44.4456 34.6667V34.6667Z" stroke="#41ce8e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M41.4196 41.4193C41.3734 41.4656 41.3734 41.5406 41.4197 41.5869C41.466 41.6331 41.541 41.6331 41.5873 41.5868C41.6336 41.5406 41.6336 41.4655 41.5874 41.4192C41.5411 41.373 41.4661 41.3729 41.4198 41.4191L41.4196 41.4193" stroke="#41ce8e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>

         <option  >   Sell your property</option></div>
                        </NavLink>

                       
                       <div className='option-svg'>
                       <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-9m3ogo" width="20px" name="stake-transfer-facility"><path fill="white" d="M4.22 10.89V20.89" stroke="#41ce8e" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path><path fill="white" d="M19.78 10.89V20.89" stroke="#41ce8e" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path><path fill="white" d="M14.222 20.889V16.445C14.222 15.218 13.227 14.223 12 14.223C10.773 14.223 9.77802 15.218 9.77802 16.445V20.889" stroke="#41ce8e" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path><path fill="white" d="M2 20.89H22" stroke="#41ce8e" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path><path fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M4.30101 10.889C2.60301 10.877 1.49601 9.19602 2.23201 7.74702L3.94701 4.37002C4.33801 3.60002 5.16001 3.11102 6.06201 3.11102H17.938C18.84 3.11102 19.662 3.60002 20.053 4.37002L21.769 7.74702C22.505 9.19602 21.398 10.877 19.7 10.889C18.283 10.889 17.134 9.92102 17.134 8.72602V8.67802C17.134 9.89902 15.985 10.889 14.568 10.889C13.151 10.889 12.002 9.89902 12.002 8.67802C12.002 9.89902 10.853 10.889 9.43601 10.889C8.01901 10.889 6.87001 9.89902 6.87001 8.67802V8.72602C6.86701 9.92102 5.71801 10.889 4.30101 10.889Z" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <option >

                            Exit window
                        </option>
</div>
                    </div>
                </div>
                <div className="dropdown">
                    <span className="menu-item dropdown-toggle">Learn</span>
                    <div className="dropdown-content">
                        <NavLink to="https://blog.getstake.com/" target="_blank">
                           <div className='option-svg'>
                           <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-9m3ogo" width="25px" aria-label="newspaper"><g fill="none" fill-rule="nonzero" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g><path d="M19 21V21C20.105 21 21 20.105 21 19V13C21 12.448 20.552 12 20 12H17V19C17 20.105 17.895 21 19 21Z"></path><path d="M7 8H13 M7 11.87H13 M7 16.06H10"></path><path d="M17 12V5C17 4.448 16.552 4 16 4H4C3.448 4 3 4.448 3 5V19C3 20.105 3.895 21 5 21H19"></path></g></g></svg> <option>Blog</option></div>
                        </NavLink>
                        <NavLink to="https://help.getstake.com/en/" target="_blank">
                            <div className='option-svg'> 
                            <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-9m3ogo" width="25px" aria-label="faq"><g fill="none" fill-rule="nonzero" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path fill="none" d="M3 11.291C3 13.974 4.42 16.336 6.599 17.825C6.598 18.68 6.6 19.832 6.6 21.041L10.131 19.294C10.735 19.41 11.359 19.473 12 19.473C16.952 19.473 21 15.83 21 11.291C21 6.75201 16.952 3.10901 12 3.10901C7.048 3.10901 3 6.75201 3 11.291Z M11.899 12.328V12.121C11.899 11.443 12.318 11.076 12.738 10.794C13.148 10.518 13.559 10.158 13.559 9.49402C13.559 8.57702 12.816 7.83502 11.9 7.83502C10.984 7.83502 10.24 8.57602 10.24 9.49302 M11.8979 14.667C11.8149 14.667 11.7479 14.734 11.7489 14.817C11.7489 14.9 11.8159 14.967 11.8989 14.967C11.9819 14.967 12.0489 14.9 12.0489 14.817C12.0489 14.734 11.9829 14.667 11.8979 14.667"></path></g></svg>
                            <option>Faqs</option></div>
                        </NavLink>
                        <NavLink to="https://help.getstake.com/en/collections/3845845-funding-and-withdrawals" target="_blank">
                            <div className='option-svg'>
                            <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-9m3ogo" width="25px" aria-label="notebook-bookmark"><g fill="none" fill-rule="nonzero" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g><path d="M18 21H6C4.895 21 4 20.105 4 19V5C4 3.895 4.895 3 6 3H18C19.105 3 20 3.895 20 5V19C20 20.105 19.105 21 18 21Z"></path><path d="M16 3V21"></path><path d="M12 3V9L10 8L8 9V3"></path></g></g></svg>
                                <option>Glossary</option></div>
                        </NavLink>



                    </div>
                </div>
            </div>


            <div className='res'>
                <div className="dropdown">

                    <span className="menu-item dropdown-toggle"> <img className='world' src={world}></img>En</span>

                    <div className="dropdown-content">

                        <option>ENG</option>
                        <option>عربی</option>

                    </div>
                </div>
            </div>

            <div className="login-btn">
                <NavLink to="/login"><button className="header-login-button">Login</button></NavLink>
                <NavLink to="/signup"><button className="header-getstarted-button">Get Started</button></NavLink>

                <button className="more-button" onClick={toggleDropdown}>
                    <svg viewBox="0 0 32 32" focusable="false" class="chakra-icon css-n5gr1q" aria-hidden="true" width="1.5rem" height="1.5rem"><path fill="none" d="M2.83203 17.1641L29.1654 17.1641" stroke="#121C30" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path fill="none" d="M16.166 7.83203L29.166 7.83203M2.83203 26.5L15.832 26.5" stroke="#5E6473" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </button>
            </div>
            {/* Dropdown menu */}
            {showDropdown && (
                <div className="dropdown-menu">
                    <div className='cross'>
                        <NavLink to="/properties" className="menu-item"> Properties</NavLink>
                        <NavLink to="" className="cross-sign" onClick={closeDropdown} >X</NavLink>
                    </div>

                    <NavLink to="/about" className="menu-item">About</NavLink>
                    <NavLink to="/goldenvisa" className="menu-item">Golden Visa</NavLink>
                    <NavLink to="/learn" className="menu-item">Learn</NavLink>
                    <NavLink to="/sell" className="menu-item">Sell</NavLink>
                    <div>
                        <NavLink to="login"> <button className="res-header-login-button">Login</button> </NavLink>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Header;
