import React from 'react';
import '../style/Setting.css';
const Setting = () => {
  return (
    <div className='dim'>
    <div className='setting-bd'>
      <h2>Profile & Settings</h2>
       
       <div className='setting-cards'>
        <div className='setting-card-one'>
            <div><img src='https://getstake.com/assets/onboarding/stake-tier-1.svg'></img></div>
            <div className='st-intro'><p>Stake intro</p></div>
            <div className='intro-des'><p>View your tier progression and <br>
            </br> benefits</p></div>
        </div>
        <div className='setting-card-two'>
        <div><i id="setting-icons"class='bx bx-user'></i></div>
            <div className='st-intro'><p>Account information</p></div>
            <div className='intro-des'><p>View and manage your personal <br>
            </br> details</p></div>
        </div>
        <div className='setting-card-three'>
        <div><i id="setting-icons"class='bx bx-heart'></i></div>
            <div className='st-intro'><p>Preferences</p></div>
            <div className='intro-des'><p>Customize language, currency, and <br>
            </br> notifications</p></div>
        </div>
       </div>




       <div className='setting-cards'>
        <div className='setting-card-one'>
            <div className='rating'>✩✩✩</div>
            <div className='st-intro'><p>Rate us</p></div>
            <div className='intro-des'><p>Your review matters to us </p></div>
        </div>
        <div className='setting-card-two'>
        <div><i id="setting-icons"class='bx bxs-pencil'></i></div>
            <div className='st-intro'><p>Submit feedback</p></div>
            <div className='intro-des'><p>Share your thoughts or request a <br>
            </br>feature</p></div>
        </div>
        <div className='setting-card-three'>
        <div><i id="setting-icons"class='bx bx-gift'></i></div>
            <div className='st-intro'><p>Refer a friend</p></div>
            <div className='intro-des'><p>Invite your friends and receive rewards</p></div>
        </div>
       </div>



       <div className='setting-cards'>
        <div className='setting-card-one'>
            <div><i id="setting-icons"class='bx bxl-blogger'></i></div>
            <div className='st-intro'><p>Stake Blog</p></div>
            <div className='intro-des'><p>Stay informed with industry insights <br>
            </br> and updates</p></div>
        </div>
        <div className='setting-card-two'>
        <div><i id="setting-icons"class='bx bx-book-bookmark'></i></div>
            <div className='st-intro'><p>Glossary</p></div>
            <div className='intro-des'><p>Understand and financial terms and  <br>
            </br> concepts</p></div>
        </div>
        <div className='setting-card-three'>
        <div><i id="setting-icons"class='bx bx-video'></i></div>
            <div className='st-intro'><p>How it works</p></div>
            <div className='intro-des'><p>A visual guide to how we operate</p> </div>
        </div>
       </div>





      </div>
      </div>
  )
}

export default Setting;