import React from 'react'
import "../style/Rewards.css";
import { NavLink } from 'react-router-dom';
import ProgressBar from "@ramonak/react-progress-bar";
const Rewards = () => {
  return (
    <div className='dim'>
      <div className='reward-bd'>
        <h2>Rewards</h2>

        <div className="reward-card">
          <div className='left-reward'>
            <div className='left-side-reward'>
            <p className='reward-earned'>Total rewards earned<i class='bx bx-info-circle'></i></p>
            <p className='AED'>AED 0</p>
            <p className='view-balance'>View current balance <NavLink> <i id='stake-intro-i' class='bx bxs-chevron-right'></i> </NavLink>  </p>
            </div>
            <div className='right-side-reward'>
            <p></p>
            <i id='reward-star' class='bx bx-star'></i>
            <p></p>
            </div>
            </div>
          <div className="vertical-line"></div> {/* Vertical line */}
          <div className='right-reward'>
          <div className='left-side-reward'>
            <p className='cashback'><i id='icons-reward' class='bx bxs-coin-stack'></i>     Cashback         <i class='bx bx-info-circle'></i></p>
            <p className='referral'><i id='icons-reward' class='bx bxs-user'></i>           Referrals          <i class='bx bx-info-circle'></i></p>
            <p className='promotion'><i id='icons-reward'class='bx bx-aperture'></i>        Promotion      <i class='bx bx-info-circle'></i></p>
            </div>
            <div className='right-side-reward'>
          
            <p className='AED-s'>AED 0</p>
            <p className='AED-s'>AED 0</p>
            <p className='AED-s'>AED 0</p>
        
            </div>
          </div>
        </div>






           <div className='stake-intro'>
           <div className='intro-card'>
            <div className='intro-f'>
             <h2> <img id='stake-intro-img' src='https://getstake.com/assets/onboarding/stake-tier-1.svg'></img> Stake intro </h2>
              <i id='stake-intro-i' class='bx bxs-chevron-right'></i>
            </div>
            <div className='intro-s'>
              <p className='p-s'>AED 0</p>
              <p className='p-ss'>Invested YTD 2023</p>
            </div>
            <div className='intro-t'>
            <ProgressBar completed={0} bgColor="#63b377"  animateOnRender={true} />
            </div>
            <div className='intro-e'>
               <p>Invest <b>AED 25,000</b> by 12/31/2023 to reach Plus </p>
            </div>
           </div>
           <div className='refer-card'>
           <div className='refer-f'>
             <h2> <i id='gift' className='bx bx-gift'></i> Refer and earn</h2>
              <i class='bx bxs-chevron-right'></i>
            </div>
            <div className='refer-para'>
              <p>Invite your friends and you’ll both receive a rewards balance to invest in our properties!</p>
            </div>
              <div className='under-line'>
              </div>
              <div className='signup-gift'>
                <p><i id='tick' class='bx bx-check'></i> Friends get <b>AED 250</b> upon signing up</p>
              </div>
              <div className='signup-giftt'>
              <p><i id='tick' class='bx bx-check'></i> Friends get <b>AED 250</b> after they invest <b></b> AED 2,000</p>
              </div>
              <div className='share'>
                <p>Share your link</p>
              </div>
              <div className='share-your-link'>
                <div className='copy-link'> <input placeholder='https://getstake.com/signup?HassaanGul'></input> </div>
                <div> <NavLink> <button className='copy-link-btn'> <i class='bx bx-copy-alt'></i> copy link</button> </NavLink> </div>
              </div>
           
           </div>
           </div>







      </div>
    </div>
  )
}

export default Rewards;
