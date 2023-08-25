import React from 'react';
import { useState } from 'react';
import '../style/Goldenvisa.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

import "../style/Popup.css";



const Goldenvisa = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const submitForm = () => {
    // Handle form submission logic here
    setIsOpen(false); // Close the popup after form submission
  };
  return (
    <div><Header />
      <div className='background-image'>
        <section>
          <div className='goldenvisa-section'>
            <h3><span className='goldenvisa-heading'>Your golden visa made easy with Stake</span>
            </h3>
            <h1 className='goldenvisa-des'>
              Invest from anywhere in the world and <br></br>  secure your UAE Golden Visa
            </h1>
          </div>
          <div className='visa-box'>{/* This div is for box mentioned details* */}
            <div className='visaStyle'>
              <p> <span className='visa-para'>USD 545,000</span>  <br></br>Minimum investment</p>
              <p>  <span className='visa-para'> 2% Cashback</span>  <br></br>Equivalent on all investments</p>
              <p>  <span className='visa-para'>10+ years </span> <br></br>VIsa validity period</p>
              <p>  <span className='visa-para'>All family </span> <br></br> Members sponsored</p>
            </div>

          </div>
        </section>
      </div>


      {/**Popup section starting div */}
      <div className="page-container">
        {!isOpen ? (
          <button className="callback-btn" onClick={togglePopup}>
            Request Callback
          </button>
        ) : (
          <div className="popup-container">
            <div className="popup-content">
              <h2>Get your Golden Visa with Stake</h2>
              <p>A dedicated representative from our team will walk you through how to <br>
              </br> invest remotely via Stake and secure a UAE Golden Visa for you <br>
                </br> and your family!</p>
              <input type="text" placeholder="Enter your name" />
              <input type="email" placeholder="Enter your email" />
              <div className="mobile-number">
                <select>
                  <option value="+1">+1 (USA)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+92">+92 (PAK)</option>
                  <option value="+91">+91 (IND)</option>
                </select>
                <input type="tel" placeholder="Enter your mobile number" />
              </div>
              <label>
                <input type="checkbox" /> Confirm terms
              </label>
              <button onClick={submitForm}>Submit</button>
              <button className="close-btn" onClick={togglePopup}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/**Popup section ending div */}






      <div className='beach'>
        <img src="https://getstake.com/assets/golden-visa/golden-visa-hero.png"></img>
      </div>
      <div className='goldenvisa-section'>
        <h3><span className='what-goldenvisa-heading'>What is a Golden visa?</span>
        </h3>

        <p>The United Arab Emirates (UAE) Golden Visa is a long-term residency program that offers a <br></br>
          range of benefits and we’re offering it to anyone who invests a minimum of AED <br></br>
          2,000,000 (c. USD 545,000) on our platform.</p>
      </div>





      {/* This div is for grid used left image and right text* */}

      <div className="section"> {/*This div is for left and right grid*/}
        <div className="img-section">{/* Left grid image one* */}
          <img class="image" src="https://getstake.com/assets/golden-visa/golden-visa-what.png" />
        </div>
        <div class="goldenparent">{/* Right grid for text one* */}
          <div className="vertical-box">
            <div className="box">
              <h2>Secure a long-term residency</h2>
              <p>The Golden Visa offers a 10-year renewable residency permit.This means that <br>
              </br>you can live and work in the UAE for a longer period of time without having to <br>
                </br> worry about renewing your visa.</p>
            </div>
            <div className="box">
              <h2>Bring the whole family</h2>
              <p>As a golden visa holder you can sponsor your entire family, including spouse <br>
              </br>and children regardless of their ages. The whole family will be entitled to <br>
                </br> access to world-class healthcare, education, and employment opportunities <br>
                </br> in the UAE.</p>
            </div>
            <div className="box">
              <h2>Travel freely</h2>
              <p>Work from anywhere, move around with ease, and return to the UAE without <br>
              </br>any concerns about your residency status.</p>
            </div>
            <div className="box">
              <h2>Access the world’s fastest growing markets</h2>
              <p>The Golden Visa gives you the opportunity to tap into the UAE's thriving <br>
              </br> business ecosystem, which includes free zones, tax incentives, and access to <br>
                </br>top talent.</p>
            </div>
          </div>
        </div>

      </div>





      {/**Div for smartest way card section */}
      <div className='body'>
        <div class="smartest-section">
          <h1 class="heading">The smartest way to get your <br>
          </br> Golden Visa</h1>
          <p class="paragraph">Join the growing Fintech revolution in the global financial landscape and capitalise on <br>
          </br> Dubai's exceptional real estate potential with Stake's innovative collaboration with DIFC.</p>

          <div class="cards-container">
            <div class="card">
              <img className='head-logo' src='https://getstake.com/assets/golden-visa/golden-visa-smart-accessibility.svg'></img>
              <h1>Accessibility</h1>
              <p>Invest in Dubai's prime real <br>
              </br> estate market from anywhere in<br>
                </br> the world, allowing you to <br>
                </br> obtain your long-term <br>
                </br> residency in the UAE while <br>
                </br> diversifying your investment <br>
                </br> portfolio.</p>
            </div>
            <div class="card">
              <img className='head-logo' src='https://getstake.com/assets/golden-visa/golden-visa-smart-diversification.svg'></img>
              <h1>Diversification</h1>
              <p>Spread your capital across <br>
              </br> multiple prime properties in <br>
                </br> Dubai for a diversified real <br>
                </br> estate portfolio with minimized <br>
                </br> risk and higher potential returns.</p>
            </div>
            <div class="card">
              <img className='head-logo' src='https://getstake.com/assets/golden-visa/golden-visa-smart-hassle-free.svg'></img>
              <h1>Hassle-free Investing</h1>
              <p>Experience a seamless, mobile- <br>
              </br> first digital platform that saves <br>
                </br> you time and money by <br>
                </br> eliminating paperwork and <br>
                </br> managing your property <br>
                </br> investments end-to-end.</p>
            </div>
            <div class="card">
              <img className='head-logo' src='https://getstake.com/assets/golden-visa/golden-visa-smart-best-deals.svg'></img>
              <h1>Best Investment Deals</h1>
              <p>Generate rental income faster <br>
              </br> and ensure a stable revenue <br>
                </br> stream with ready-to-occupy <br>
                </br> properties, eliminating the need <br>
                </br> for off-plan investments.</p>
            </div>
          </div>

          <h2 class="collaboration">In Collaboration With</h2>

          <div class="smart-logo">
            <img src="https://getstake.com/assets/common/difc.svg" alt="Logo" />
          </div>
        </div>
      </div>


      {/* This div is for left right grid of golden visa with stake* */}

      <div className="stake-section"> {/*This div is for left and right grid stake visa*/}

        <div class="firstgrid">{/* left grid for text and callback button * */}
          <div className="firstgrid-data">
            <h1 className='f-heading'>Get your Golden Visa with Stake  </h1>
            <p className='f-para'>Secure your Golden Visa today while investing <br>
            </br> in a diversified real estate portfolio through a <br></br> seamless, hassle-free digital platform.</p>
            <div className="page-container-2">
              {!isOpen ? (
                <button className="callback-btn-2" onClick={togglePopup}>
                  Request Callback
                </button>
              ) : (
                <div className="popup-container">
                  <div className="popup-content">
                    <h2>Get your Golden Visa with Stake</h2>
                    <p>A dedicated representative from our team will walk you through how to <br>
                    </br> invest remotely via Stake and secure a UAE Golden Visa for you <br>
                      </br> and your family!</p>
                    <h3>Full Name</h3>
                    <input className='nameinput' type="text" placeholder="Enter your name" />
                    <h3>Email</h3>
                    <input className='emailinput' type="email" placeholder="Enter your email" />
                    <h3>Contact Number</h3>
                    <div className="mobile-number">
                      <select>
                        <option value="+1">+1 (USA)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+92">+92 (PAK)</option>
                        <option value="+91">+91 (IND)</option>
                      </select>
                      <input type="tel" placeholder="Enter your mobile number" />
                    </div>

                    <label>

                      <input type="checkbox" /> I confirm terms  and conditions            </label>
                    <button className='submit-btn' onClick={submitForm}>Submit</button>
                    <button className="close-btn" onClick={togglePopup}>
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="img-stake">{/* right grid for image* */}
          <img class="imagestake" src="https://getstake.com/assets/golden-visa/golden-visa-app.png" />
        </div>

      </div>

      {/**Div for dark blue card section */}
      <div className='Membership'>
        <div class="elite-section">
          <h1 class="elite-heading">Automatically unlock <span className='elite-text'>Elite</span> <br></br> membership</h1>
          <p class="elite-paragraph">The Stake Elite membership represents our most valuable clients and comes <br>
          </br> with a range of exceptional benefits and tailored services</p>

          <div class="elite-cards">
            <div class="elite-card">
              <img className='head-logo' src='https://getstake.com/assets/golden-visa/golden-visa-smart-accessibility.svg'></img>
              <h1>USD 200+</h1>
              <p>for each qualified referral.</p>
            </div>
            <div class="elite-card">
              <img className='head-logo' src='https://getstake.com/assets/golden-visa/golden-visa-smart-diversification.svg'></img>
              <h1>2% cashback</h1>
              <p>equivalent on all investments</p>
            </div>
            <div class="elite-card">
              <img className='head-logo' src='https://getstake.com/assets/golden-visa/golden-visa-smart-hassle-free.svg'></img>
              <h1>Dedicated support</h1>
              <p>from our team of experts</p>
            </div>

          </div>



        </div>
      </div>


      {/**Reviews section */}

      <div className='Review'>
        <div class="review-section">

          <h1 class="review-heading">See what our investors have <br>
          </br> to say about Stake</h1>

          <div class="review-paragraph">
            <div className='R-start'>
              <h1 className='rstar'>★★★★★</h1>
            </div>
            <div className='R-paragraph'>
              <p className='rpara'> I’m on my ninth investment with Stake now. It’s always nice to see the “You’ve been paid” notification <br>
              </br> pop up at the end of the month to tell me that my dividends are in. I am excited to continue to grow <br>
                </br> my monthly occurring investment returns with Stake.</p>
            </div>
            <div className='R-logo'>

              <h1> <img src='https://getstake.com/assets/golden-visa/golden-visa-hamade-avatar.png'>

              </img> Hamade L. <br></br> <span className='review-user'>Elite tier member</span> </h1>
            </div>



          </div>




        </div>
      </div>

      {/** Co founder section  */}

      <div className='co-founder'>
        <div className='co-logo'> <img src='https://getstake.com/assets/golden-visa/golden-visa-rami-avatar.png'></img> </div>
        <div className='co-des'><h1>Rami Tabbara </h1> <p>Co-Founder & Co-CEO</p> </div>
        <div className='co-statement'>
          <p>
             We are proud to introduce the Golden Visa in collaboration with the DIFC, demonstrating our joint <br>
            </br> commitment to further innovation in the Fintech space and revolutionize real estate in the region. As the first <br>
            </br> digital investment platform to offer this service, we’re opening doors for global investors to capitalize on <br>
            </br> Dubai’s unmatched real estate potential. This truly is a golden opportunity because everyone wants a piece of <br>
            </br> Dubai, and we’ve made it extremely easy to get started. This initiative is a testament to our unwavering <br>
            </br> commitment to continue doing exactly that.
       </p>

        </div>
      </div>



      {/**Frequently questions asked */}

      <div className='questions'>
        <div className='Q-heading'>
          <h1>Frequently asked questions</h1>
        </div>
        <div className='Q-paragraph'>
          <p>Here’s some of the most common questions about getting your Golden Visa <br>
          </br> on Stake! You can also reach out to us if you have any questions and our team <br>
            </br> will take care of you!</p>
        </div>
      </div>


      {/**Question answer div section */}


      <Footer />
    </div>
  )
}
export default Goldenvisa;