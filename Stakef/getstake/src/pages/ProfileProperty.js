import React, { useState } from 'react'
import '../style/ProfileProperty.css';
import ProgressBar from "@ramonak/react-progress-bar";

const images = [
  'https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/121/images/1953/1778px_main_2Ic4itA2Urp2aBFh68pPSVv53bOp0quYzucaQt7s.jpeg',
  'https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/121/images/1954/1920px_main_PnJsiWqcRFydOGtm61qu0ZQoFCh5hC0yyHmGMsaz.jpeg',
  'https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/121/images/1955/1440px_main_Z9dZJ5TExJP115Xt4wu33sqQz4D0xncDEhs9DOSi.jpeg',
  'https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/121/images/1963/2400px_main_331lFLnA0Bawt3XxogY8bxXWqolU6f0FWzo8HsBj.jpeg',
  'https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/121/images/1964/2400px_main_4yLJ70muYspFX6HlG2wcH6QMANIVNXaCBClUAHoG.jpeg',
  'https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/121/images/1965/2400px_main_QY4ysQ1gIcTVyUPC2hH9r0INiMN1Koxm68wFTlwj.jpeg',
  'https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/121/images/1970/2400px_main_NNYG8AU1HD0tzeePBOildrn4eKDu9ahbRviRVIWs.jpeg',
];
const ProfileProperty = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  

  return (
    <div className='dim'>
    <div className='profileproperty-bd'>
      <h2>Properties</h2>
      <div className='filter-pro-properties'>
       <div> <buton className="pro-button-active">Available</buton> </div>
       <div> <buton className="pro-button">Funded</buton> </div>
       <div> <buton className="pro-button">Exited</buton> </div>
      </div>
  

       <div className='pro-properties-card'>
           

           <div className='pro-card'>
            <img className='pic-img' src='https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/121/images/1953/1778px_main_2Ic4itA2Urp2aBFh68pPSVv53bOp0quYzucaQt7s.jpeg'></img>
            <div className='cities'>
              <p className='dubai'> <img className='dubai-flag' src='https://media.istockphoto.com/id/1347480367/vector/united-arab-emirates-3d-rounded-country-flag-button-icon.jpg?s=612x612&w=0&k=20&c=paffSQeA724RJzvtoP46qCUfQ2FBxsyx-1FJSIuTBZI='></img> Dubai</p>
              <p className='Town'> <i id='town-icon' class='bx bx-home'></i> Townhouse</p>
              </div>  

              <div className='bed-town'>
                <h2>3 Bed Townhouse in Spring, Arabian Ranches |||</h2>
              </div>
              <div >
                <p className='pro-funded'>AED 2,454,642</p>
              </div>
              <div>
                <p className='percent'>47% funded</p>
              </div>
 <div className='pro-progressbar'>
 <ProgressBar completed={50} bgColor="#63b377" height='10px' animateOnRender={true} />

 </div>
 
     <div className='pro-last-session'>
     <div className='pro-last-row'>
      <p className='pro-annual'>Annualised return</p>
      <p className='pro-per'>9.74%</p>
     </div>
     <div className='pro-last-row'>
      <p className='pro-annual'>Annual apreciation</p>
      <p className='pro-per'>6%</p>
     </div>
     <div className='pro-last-row'>
      <p className='pro-annual'>Projected gross yield</p>
      <p className='pro-per'>6.39%</p>
     </div>
     <div className='pro-last-row'>
      <p className='pro-annual'>Projected net yield</p>
      <p className='pro-per'>5.42%</p>
     </div>

     </div>
  



    
            </div> 
                     
            <div className='pro-card'>
            <img className='pic-img' src='https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/121/images/1953/1778px_main_2Ic4itA2Urp2aBFh68pPSVv53bOp0quYzucaQt7s.jpeg'></img>
            <div className='cities'>
              <p className='dubai'> <img className='dubai-flag' src='https://media.istockphoto.com/id/1347480367/vector/united-arab-emirates-3d-rounded-country-flag-button-icon.jpg?s=612x612&w=0&k=20&c=paffSQeA724RJzvtoP46qCUfQ2FBxsyx-1FJSIuTBZI='></img> Dubai</p>
              <p className='Town'> <i id='town-icon' class='bx bx-home'></i> Townhouse</p>
              </div>  

              <div className='bed-town'>
                <h2>3 Bed Townhouse in Spring, Arabian Ranches |||</h2>
              </div>
              <div >
                <p className='pro-funded'>AED 2,454,642</p>
              </div>
              <div>
                <p className='percent'>47% funded</p>
              </div>
 <div className='pro-progressbar'>
 <ProgressBar completed={50} bgColor="#63b377" height='10px' animateOnRender={true} />

 </div>
 
     <div className='pro-last-session'>
     <div className='pro-last-row'>
      <p className='pro-annual'>Annualised return</p>
      <p className='pro-per'>9.74%</p>
     </div>
     <div className='pro-last-row'>
      <p className='pro-annual'>Annual apreciation</p>
      <p className='pro-per'>6%</p>
     </div>
     <div className='pro-last-row'>
      <p className='pro-annual'>Projected gross yield</p>
      <p className='pro-per'>6.39%</p>
     </div>
     <div className='pro-last-row'>
      <p className='pro-annual'>Projected net yield</p>
      <p className='pro-per'>5.42%</p>
     </div>

     </div>
  



    
            </div> 
            <div className='pro-card'>
              <div className='pro-head'>
                <p><i id='list-icon' class='bx bxs-magic-wand'></i> New Listing</p>
              </div>
            <img id='special-img' src='https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/121/images/1953/1778px_main_2Ic4itA2Urp2aBFh68pPSVv53bOp0quYzucaQt7s.jpeg'></img>
            <div className='cities'>
              <p className='dubai'> <img className='dubai-flag' src='https://media.istockphoto.com/id/1347480367/vector/united-arab-emirates-3d-rounded-country-flag-button-icon.jpg?s=612x612&w=0&k=20&c=paffSQeA724RJzvtoP46qCUfQ2FBxsyx-1FJSIuTBZI='></img> Dubai</p>
              <p className='Town'> <i id='town-icon' class='bx bx-home'></i> Townhouse</p>
              </div>  

              <div className='bed-town'>
                <h2>3 Bed Townhouse in Spring, Arabian Ranches |||</h2>
              </div>
              <div >
                <p className='pro-funded'>AED 2,454,642</p>
              </div>
              <div>
                <p className='percent'>47% funded</p>
              </div>
 <div className='pro-progressbar'>
 <ProgressBar completed={50} bgColor="#63b377" height='10px' animateOnRender={true} />

 </div>
 
     <div className='pro-last-session'>
     <div className='pro-last-row'>
      <p className='pro-annual'>Annualised return</p>
      <p className='pro-per'>9.74%</p>
     </div>
     <div className='pro-last-row'>
      <p className='pro-annual'>Annual apreciation</p>
      <p className='pro-per'>6%</p>
     </div>
     <div className='pro-last-row'>
      <p className='pro-annual'>Projected gross yield</p>
      <p className='pro-per'>6.39%</p>
     </div>
     <div className='pro-last-row'>
      <p className='pro-annual'>Projected net yield</p>
      <p className='pro-per'>5.42%</p>
     </div>

     </div>
  



    
            </div> 
       </div>


      
      </div>
      </div>
  )
}

export default ProfileProperty;