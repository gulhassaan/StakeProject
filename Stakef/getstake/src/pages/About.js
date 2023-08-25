import React from 'react';
import '../style/About.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import iphone from "../images/iphoneDef.png";

const About = () => {
  return (
    <div>
      <Header />
      <div className='about-section'>
        <h2><span className='about-heading'>About Us</span></h2>
        <h1 className='about-des'>
          We’re on a mission to empower everyone to own <br></br> and build wealth through Real Estate.
        </h1>


      </div>
      <div className='a-img'>
        <img src='https://getstake.com/assets/about/team-2x.jpg'></img>
      </div>



      {/* This div is for left right grid of about under image* */}

      <div className="about-section-grid"> {/*This div is for left and right grid */}

        <div class="a-firstgrid">{/* left grid for text* */}
          <div className="a-firstgrid-data">
            <h2 className='a-heading'>We’re creating a world where real estate is fully digital, accessible, borderless and liquid. </h2>

          </div>
        </div>
        <div className="a-secondgrid-data">
          <p className='a-para'>Real estate is one the most important asset class to own in order to build long-term wealth, but it’s highly inaccessible, illiquid, and complicated. There’s tonnes of paperwork, large down payment requirements, and the market is completely illiquid. On top of that, great deals take a lot of time and connections to secure.</p>
          <p className='a-para'>Stake is a digital real estate investment platform, built to change this. We leverage our network and expertise, built up over 20+ years leading the biggest real estate companies in Dubai, to source the best properties in our markets, and break down the entry barrier for investors to only AED 500 (c. 136 USD). The rest is on us - we manage your all of your investments, from acquisition to exit, and distribute monthly rental payments and sales income directly to your Stake wallet.</p>
          <p className='a-para'>With Stake, you can start building a global real estate portfolio in minutes, and start generating lifetime passive income to support the life you deserve.
          </p>

        </div>
        <div>

        </div>
      </div>
      {/**New section */}
      <div className='About-cards'>
        <div class="A-cards-container">
          <div class="A-card">

            <h1 className='numbers-text'>2021</h1>
            <p1>Launch date</p1>
          </div>
          <div class="A-card">

            <h1 className='numbers-text'>32</h1>
            <p1>Team members</p1>
          </div>
          <div class="A-card">

            <h1 className='numbers-text'>17</h1>
            <p1>Employee nationalities</p1>
          </div>
          <div class="A-card">

            <h1 className='numbers-text'>AED 183M+</h1>
            <p1>Value of properties funded</p1>
          </div>
        </div>


        <h2 class="A-collaboration">As featured in</h2>

        <div class="A-logo">

          <img className='About-log' src='https://getstake.com/assets/published-in/time.svg'></img>
          <img className='About-log' src='https://getstake.com/assets/published-in/tech-crunch.svg'></img>
          <img className='About-log' src='https://getstake.com/assets/published-in/forbes.svg'></img>
          <img className='About-log' src='https://getstake.com/assets/published-in/gulf-business.svg'></img>
          <img className='About-log' src='https://getstake.com/assets/published-in/entrepreneur-me.svg'></img>
          <img className='About-log' src='https://getstake.com/assets/published-in/the-national.svg'></img>
        </div>

      </div>




      <div className='leadership-team'>

        <h2>Leadership Team</h2>
        <p>Our team has decades of leadership experience at market leaders in <br>
        </br> the real estate, technology, financial services, consulting and creative <br>
          </br> sectors.</p>
        <div className='leadership-cards'>
          <div className='leader-card'><img src='https://getstake.com/assets/about/leaders/leader-1.png'></img><p className='linkedin'>in</p> <h2>Rami Tbbara</h2><p>Co-Founder & Co-CEO</p> <img className='com-logo' src='https://getstake.com/assets/about/leaders/leader-po-1.svg'></img> </div>
          <div className='leader-card'><img src='https://getstake.com/assets/about/leaders/leader-2.png'></img><p className='linkedin'>in</p><h2>Rami Tbbara</h2><p>Co-Founder & Co-CEO</p> <img className='com-logo' src='https://getstake.com/assets/about/leaders/leader-po-2.svg'></img> </div>
          <div className='leader-card'><img src='https://getstake.com/assets/about/leaders/leader-3.png'></img><p className='linkedin'>in</p><h2>Rami Tbbara</h2><p>Co-Founder & Co-CEO</p> <img className='com-logo' src='https://getstake.com/assets/about/leaders/leader-po-3.svg'></img> </div>
          <div className='leader-card'><img src='https://getstake.com/assets/about/leaders/leader-4.png'></img><p className='linkedin'>in</p><h2>Rami Tbbara</h2><p>Co-Founder & Co-CEO</p>  <img className='com-logo' src='https://getstake.com/assets/about/leaders/leader-po-1.svg'></img> </div>
        </div>

        <div className='leadership-cards'>
          <div className='leader-card'><img src='https://getstake.com/assets/about/leaders/leader-5.png'></img><p className='linkedin'>in</p> <h2>Rami Tbbara</h2><p>Co-Founder & Co-CEO</p> <img className='com-logo' src='https://getstake.com/assets/about/leaders/leader-po-5.svg'></img> </div>
          <div className='leader-card'><img src='https://getstake.com/assets/about/leaders/leader-6.png'></img><p className='linkedin'>in</p><h2>Rami Tbbara</h2><p>Co-Founder & Co-CEO</p><img className='com-logo' src='https://getstake.com/assets/about/leaders/leader-po-6.svg'></img></div>
          <div className='leader-card'><img src='https://getstake.com/assets/about/leaders/leader-7.png'></img><p className='linkedin'>in</p><h2>Rami Tbbara</h2><p>Co-Founder & Co-CEO</p><img className='com-logo' src='https://getstake.com/assets/about/leaders/leader-po-7.svg'></img></div>
          <div className='leader-card'><img src='https://getstake.com/assets/about/leaders/leader-8.png'></img><p className='linkedin'>in</p><h2>Rami Tbbara</h2><p>Co-Founder & Co-CEO</p><img className='com-logo' src='https://getstake.com/assets/about/leaders/leader-po-8.svg'></img></div>
        </div>


        <div className='stake-platform'>
          <div className='plat'><h2>Join us at stake</h2></div>
          <h2>Help us to make global real estate accessible to everyone</h2>
          <p>We’re always searching for highly talented individuals to help lead our <br>
          </br> expansion into international markets and new business lines</p>
          <button>View open position</button>
        </div>

      </div>

      <div className='assessment'>
        <h1>Responsile Investing</h1>
        <p>Stake has recently been assessed by the Supervisory Board of <span className='guidance-group'><b> Guidance Financial Group</b></span>, a <br>
        </br> leading financial services firm specialized in the fields of Shariah-compliant investments and <br>
          </br> financing as well as Shariah advisory services. <br></br><br></br>

          We have submitted an application to our regulator, the DFSA, for an Islamic Window <br>
          </br> endorsement on our license. Should we receive approval, we will then be allowed to offer <br>
          </br> Shariah-compliant Islamic Financial Business through the Islamic Window alongside the <br>
          </br> conventional business that we currently carry out.</p>
        <div className='download'>
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 13.5V12H18v7.5h1.5v-3h2.25V15H19.5v-1.5h3Zm-8.25 6h-3V12h3a2.252 2.252 0 0 1 2.25 2.25v3a2.252 2.252 0 0 1-2.25 2.25Zm-1.5-1.5h1.5a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75h-1.5V18Zm-4.5-6H4.5v7.5H6v-2.25h2.25a1.502 1.502 0 0 0 1.5-1.5V13.5a1.501 1.501 0 0 0-1.5-1.5ZM6 15.75V13.5h2.25v2.25H6Z" fill="#A3ABBA"></path><path d="M16.5 10.5v-3a.684.684 0 0 0-.225-.525l-5.25-5.25A.682.682 0 0 0 10.5 1.5H3A1.504 1.504 0 0 0 1.5 3v18A1.5 1.5 0 0 0 3 22.5h12V21H3V3h6v4.5A1.504 1.504 0 0 0 10.5 9H15v1.5h1.5Zm-6-3V3.3l4.2 4.2h-4.2Z" fill="#A3ABBA"></path></svg>
          <p>Assessment Results from Guidance Financial Group</p>
          <a href='../images/Stake.pdf' download>Download</a>
        </div>
      </div>


      <div className='board-members'>
       
          <h2>Board members</h2>
          <div className='board-member-cards'>
            <div className='board-member-card'><img src='https://getstake.com/assets/about/leaders/board-member-1.png'></img><p className='linkedin'>in</p> <h2>Rami Tbbara</h2><p>Co-Founder & Co-CEO</p> <img className='com-logo' src='https://getstake.com/assets/about/leaders/leader-po-1.svg'></img> </div>
            <div className='board-member-card'><img src='https://getstake.com/assets/about/leaders/board-member-2.png'></img><p className='linkedin'>in</p><h2>Rami Tbbara</h2><p>Co-Founder & Co-CEO</p> <img className='com-logo' src='https://getstake.com/assets/about/leaders/leader-po-2.svg'></img> </div>
            <div className='board-member-card'><img src='https://getstake.com/assets/about/leaders/board-member-3.png'></img><p className='linkedin'>in</p><h2>Rami Tbbara</h2><p>Co-Founder & Co-CEO</p> <img className='com-logo' src='https://getstake.com/assets/about/leaders/leader-po-3.svg'></img> </div>
            <div className='board-member-card'><img src='https://getstake.com/assets/about/leaders/board-member-4.png'></img><p className='linkedin'>in</p><h2>Rami Tbbara</h2><p>Co-Founder & Co-CEO</p>  <img className='com-logo' src='https://getstake.com/assets/about/leaders/leader-po-1.svg'></img> </div>
          </div>
  <div className='sponsors-area'>
    <p>Our backers</p>
    <div className='sponsor-companies'>
    <img src='https://getstake.com/assets/about/backers/backer-1.svg'></img>
    <img src='https://getstake.com/assets/about/backers/backer-2.svg'></img>
    <img src='https://getstake.com/assets/about/backers/backer-3.svg'></img>
    <img src='https://getstake.com/assets/about/backers/backer-4.svg'></img>
    <img src='https://getstake.com/assets/about/backers/backer-5.svg'></img>
    </div>

    <div className='sponsor-companies'>
    <img src='https://getstake.com/assets/about/backers/backer-6.svg'></img>
    <img src='https://getstake.com/assets/about/backers/backer-7.svg'></img>
    <img src='https://getstake.com/assets/about/backers/backer-8.svg'></img>
    <img src='https://getstake.com/assets/about/backers/backer-9.svg'></img>
    <img className='extra' src='https://getstake.com/assets/about/backers/backer-10.svg'></img>
    </div>
  </div>
      </div>



      <div className='duplicate'>
      <div className='left-duplicate'>
        <h2>Ready to get <br></br> started?</h2>
        <p>It only takes 3 minutes to download our <br>
        </br>app, sign up , and invest</p>
        
        <div className='left-dup-store'>
          <a><img src='https://getstake.com/assets/app-store.svg'></img></a>
          <a><img src='https://getstake.com/assets/play-store.svg'></img></a>
          <a className='none'><img src='https://getstake.com/assets/home/banner/qrcode.svg'></img></a>
        </div>
        </div>
      <div className='right-duplicate'>
        <img className="iphoneDef" src={iphone}></img>
      </div>
   </div>
       
      <Footer />
    </div>

  )
}

export default About