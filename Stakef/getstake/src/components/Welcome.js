import React from 'react';
import '../style/Welcome.css';
import video from '../images/video.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { sculptureList } from '../pages/Data';
import { useState } from 'react';
import { useEffect } from 'react';
import mobile from '../images/iphone1.png';
import { NavLink } from 'react-router-dom';
const Welcome = () => {
  const [index, setIndex] = useState(0);
  const { showMore, setShowMore } = useState(false);

  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;


  useEffect(() => {
    handleNextClick(); // Call the function when the component loads to set the default image
  }, []);

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
      document.querySelector('.carousal-moving-image').classList.add('animate-slide');
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  // function handleClick() {
  //   console.log("Clicked")
  //   setIndex(index + 1);
  // }

  let sculpture = sculptureList[index];
  console.log(sculpture);

  return (

    <div>
      <Header />
      <div className="container"> {/*This div is for left and right grid*/}
        <div className="text-container">{/* Left grid text one* */}

          <h1>
            The modern way for anyone to invest in real estate
          </h1>
          <p>Digitally invest in prime rental properties from only <br>
          </br> AED 500 (USD 136), no matter where you are in the <br>
            </br> world!</p>
          <div className='svg-container-home'>

            <div className='svg-video'><svg viewBox="0 0 32 32" focusable="false" class="chakra-icon css-1djj3et" width="50px" aria-hidden="true"><rect x="10.6667" y="10.6667" width="12" height="12" fill="white"></rect><path d="M16.0003 1.21875C24.1639 1.21875 30.7818 7.83667 30.7818 16.0003C30.7818 24.1639 24.1639 30.7818 16.0003 30.7818C7.83667 30.7818 1.21875 24.1639 1.21875 16.0003C1.21875 7.83667 7.83667 1.21875 16.0003 1.21875ZM12.9714 12.4947V19.4885C12.9714 20.1188 13.6428 20.4987 14.1658 20.1827L19.9728 16.6866C20.4908 16.3757 20.4925 15.6092 19.9728 15.2983L14.1658 11.8005C13.6939 11.5164 12.9714 11.7921 12.9714 12.4947Z" fill="#41CE8E"></path></svg></div>
            <div className='svg-video-link'><NavLink to="https://youtu.be/hh_MktLVtDU">How it works</NavLink>   </div>

          </div>

          <div className='stores'>
            <a className='appstore' href='https://apps.apple.com/app/stake-property-investing/id1591107922'><img src="https://getstake.com/assets/app-store.svg"></img></a>
            <a className='googleplay' href='https://play.google.com/store/apps/details?id=com.stake.investments.money.investor'><img src="https://getstake.com/assets/play-store.svg"></img></a>
            <a className='qrcode' href='/'><img src="https://getstake.com/assets/home/banner/qrcode.svg"></img></a>
          </div>


        </div>
        <div class="parent">{/* Right grid mobile image one* */}
          <img src={mobile}></img>
          {/* <img class="image2" src="https://getstake.com/assets/common/iphone-13-pro-frame.webp" />
      <img class="image1" src="https://getstake.com/assets/home/banner/banner-phone.svg"/> */}
        </div>

      </div>

      <div className='test'>
        <div><h4>318 K+</h4><p>registered users</p></div>
        <div><h4>AED 183M+</h4><p>in property transactions</p></div>
        <div><h4>197</h4><p>user nationalities</p></div>
        <div><h4>AED 5.7M+</h4><p>rental income paid</p></div>
      </div>

      <div className='centered-link'>{/* This div is for link of trustpilot* */}
        <a className='trustpilotlink' href="https://www.trustpilot.com/review/getstake.com?utm_medium=trustbox&utm_source=MicroReviewCount">
          See <span className='bold-text'>2020</span> reviews on <span className='bold-text'>Trustpilot</span> <span class='green-star'>★</span>
        </a>
      </div>






      <section>{/**This is new section that is for "How it works" */}
        <div className='How-works'>
          <h1>How it works</h1>
        </div>
        <div className='How-works-des'>
          <p>Stake is available to savvy investors all over the world</p>
        </div>
        <div className="columns-container">
          <div className="column" draggable="true" onClick={handleNextClick} disabled={!hasNext}>
            <button className="column-button" >01</button>
            <h2 className="column-heading">Browse</h2>
            <p className="column-description" >Sign up in less than 3 minutes and browse our collection of properties</p>
          </div>
          <div className="column" draggable="true" onClick={handleNextClick} disabled={!hasNext}>
            <button className="column-button">02</button>
            <h2 className="column-heading">Purchase</h2>
            <p className="column-description">uy a piece of the ones you love, starting from only AED 500</p>
          </div>
          <div className="column" draggable="true" onClick={handleNextClick} disabled={!hasNext}>
            <button className="column-button">03</button>
            <h2 className="column-heading">Own</h2>
            <p className="column-description">Sit back and track your income and investments online</p>
          </div>
          <div className="column" draggable="true" onClick={handleNextClick} disabled={!hasNext}>
            <button className="column-button">04</button>
            <h2 className="column-heading">Exit</h2>
            <p className="column-description">Hold, exit or resell your Stake in a way that suits your financial goals</p>
          </div>
        </div>
      </section>





      <div className='moving-carousal'>
        <h2>

        </h2>
        <h3>

        </h3>
        <div className='carousal-moving-section'>
          <img className='carousal-moving-image'
            src={sculpture.url}
            alt={sculpture.alt}
          />
          <div className='box-on-image'>
            <p>
              {sculpture.description}
            </p>
          </div>
          <img className='image-on-image' src={sculpture.url2}></img>
          <div className='overlap-moving'>
            <h2>So, how will you make money?</h2>
            <p>
              Stake was built to empower everyone to own and build wealth through real estate
            </p>

          </div>
        </div>




        <div className='money-card'>
          <div className='money-card-f'>
            <img src='https://getstake.com/assets/home/makemoney/new-monthly-cashflow.svg'></img>
            <h3>Monthly rental income</h3>
            <p>Consistent passive income from monthly rental payments</p>
          </div>
          <div className='money-card-s'>
            <img src='https://getstake.com/assets/home/makemoney/1-bed-burj.svg'></img>
          </div>
          <div className='money-card-t'>
            <img src='https://getstake.com/assets/home/makemoney/new-property-value.svg'></img>
            <h3>Long term capital appreciation</h3>
            <p>Watch your investment grow as the property value appreciates</p>
          </div>
        </div>








        {/**Div for smartest way card section */}

        <div class="smartest-section">
          <h1 class="heading">Real estate investing made easy</h1>
          <p class="paragraph">90% of the worlds millionaires made their fortunes through real estate, but it’s highly inaccessible, <br>
          </br> illiquid, and complicated - that’s where we come in!</p>

          <div class="cards-container">
            <div class="card">
              <img className='head-logo' src='https://getstake.com/assets/home/modernway/1.svg'></img>
              <h3>Invest in real estate from only AED 500</h3>
              <p1>With fractionalised properties there is no mortgage or large down payments required</p1>
            </div>
            <div class="card">
              <img className='head-logo' src='https://getstake.com/assets/home/modernway/2.svg'></img>
              <h3>Digital and diversified real estate investing</h3>
              <p>Buy shares in prime rental properties and manage your diversified portfolio online through our mobile app and web platform</p>
            </div>
            <div class="card">
              <img className='head-logo' src='https://getstake.com/assets/home/modernway/3.svg'></img>
              <h3>Hassle-free ownership</h3>
              <p>We handle the entire sales process, screen tenants and manage the property, saving you time and money!</p>
            </div>
            <div class="card">
              <img className='head-logo' src='https://getstake.com/assets/home/modernway/4.svg'></img>
              <h3>Trusted entity with real estate expertise</h3>
              <p>Stake is regulated by the DFSA and our team has held leadership positions at the biggest developers in Dubai for over 20 years</p>
            </div>
          </div>
        </div>




      </div>
      <Footer />
    </div>

  );
};

export default Welcome;
