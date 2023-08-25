import React from 'react';
import { useState } from 'react';
import '../style/Portfolio.css';
import ProgressBar from "@ramonak/react-progress-bar";
const transactions = [
  { id: 1, type: 'Apartment', location:"Lahore",  amount: 100.00 },
  { id: 2, type: 'Residential',location:"Isllamabad", amount: 50.00 },
  { id: 3, type: "Commercial" ,location:"Faisalabad",  amount: 0}
  // Add more transactions here
];
const Portfolio = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className='dim'>
    <div className='portfolio-bd'>
      <h2>Portfolio</h2>
      <div className="big-card">
      {/* Step-1: Portfolio Value */}
      <div className="portfolio-value"  onMouseEnter={togglePopup} onMouseLeave={togglePopup}>
          <p>Portfolio Value <i class='bx bx-info-circle'></i></p> 
        {showPopup && (
          <div className="profile-popup">
            <h2>Portfolio Value</h2>
            <p>The total value of your pending investments, <br>
            </br> cash balance, and all of your Stakes (based on <br>
            </br> the latest valuation of the properties)</p>
            <button className="popup-close-button" onClick={togglePopup}>
              &#x2715;
            </button>
          </div>
        )}
      </div>

      {/* Step-2: Heading */}
      <h1 className="portfolio-heading">AED 0</h1>

      {/* Step-3: Centered Content */}
      <div className="centered-content">
        <p>Invest in properties <br>
        </br> to start building your <br>
        </br> wealth</p>
        <a href='/profile#' className="portfolio-navlink-button">
          Buy Properties
        </a>
      </div>
    </div>
    <h3>Key financials</h3>
    
    <div className="financial-card-container">
      <div className="financial-card">
      
        <div className="financial-card-content">
        <i id='logos' class='bx bx-coin-stack'></i>
          <p></p>
        </div>
        
        <div className="financial-card-content" onMouseEnter={togglePopup}>
          <p className='font-p'>Monthly income <i class='bx bx-info-circle'></i>
          </p>
          
          <p className='font-p'>Jul 2023</p>
        </div>
      </div>

      <div className="financial-card">
      <div className="financial-card-content">
      <i id='logos' class='bx bxs-coin-stack' ></i>
          <p className='font-AED'>AED 0</p>
        </div>
        
        <div className="financial-card-content">
          <p className='font-p'>Total income<i class='bx bx-info-circle'></i></p>
          <p className='font-p'>as of July 2023</p>
        </div>
      </div>

      <div className="financial-card">
      <div className="financial-card-content">
      <i id='logos' class='bx bx-line-chart-down'></i>
          <p className='font-AED'>AED 0</p>
        </div>
        
        <div className="financial-card-content">
          <p className='font-p'>Capital <i class='bx bx-info-circle'></i></p>
          <p className='font-p'>as of July 2023</p>
        </div>
      </div>
    </div>
   





   
    <div className='quick-invest'>
          <div className='add-quick'><h3>Quick insights</h3></div>
          <div className='add-invest'><h3>Annual investment limit<i class='bx bx-info-circle'></i>
</h3></div>
        </div>
    
    <div className="quick-card-container">
      <div className="quick-card">
      
        <div className="quick-card-content">
        <i id='logos' class='bx bx-home-alt'></i>
          <p></p>
        </div>
        
        <div className="quick-card-content">
          <p className='font-p'>number of properties <br></br> </p>
          <p className='font-z'><b>0</b></p>
          {/* <p>Jul 2023</p> */}
        </div>
      </div>

      <div className="quick-card">
      <div className="quick-card-content">
      <i id='logos' class='bx bxs-notepad'></i>
          <p></p>
        </div>
        
        <div className="quick-card-content">
          <p className='font-p'>Portfolio<br></br> occupancy<i class='bx bx-info-circle'></i></p>
          <p className='font-z'><b>0%</b></p>         
          {/* <p>as of July 2</p> */}
        </div>
      </div>

      <div className="quick-card">
      <div className="quick-card-content">
      <i id='logos' class='bx bx-line-chart-down'></i>
          <p></p>
        </div>
        
        <div className="quick-card-content">
          <p className='font-p'>Annualised rental yield <i class='bx bx-info-circle'></i></p>
          <p className='font-z'><b>0%</b></p>
          {/* <p>as of July 2023</p> */}
        </div>
      </div>
      <div className="investment-card">
      <div className="investment-card-content">
        <div>
        <p>0% of limit used</p>
        </div>
      
      <div className='investment-progressbar'>
      <ProgressBar completed={0} bgColor="#63b377" height='10px' animateOnRender={true} />
      </div>
    <div className='investment-limit'>
     
    <div className='investment-list'>
  <p>Annual limit</p>
  <p className='only'><i className='bx bxs-circle'></i> Invested   YTD</p>
  <p ><i class='bx bxs-circle'></i> Available to invest</p>
</div>

    <div className='investment-pricing'>
     <p>AED 183,500</p>
     <p>AED 0</p>
     <p>AED 183,500</p>
    </div>

    </div>
        </div>
      </div>
    </div>

    <h3>Owned Stakes (0)</h3>
    <div className="transaction-container">
      {transactions.length > 0 ? (
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Location</th>
              <th>Investment Value</th>
              <th>Rent earned</th>
            
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.type}</td>
                <td>{transaction.location}</td>
                <td>${transaction.amount.toFixed(2)}</td>
                <td>${transaction.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        
        <p className="no-transaction-message">No transactions yet.</p>
      )}
    </div>







    <h3>Pending investments (0)</h3>
    <div className="transaction-container">
      {transactions.length > 0 ? (
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Location</th>
              <th>Investment amount</th>
              <th>Expected rent</th>
              
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.type}</td>
                <td>{transaction.location}</td>
                <td>${transaction.amount.toFixed(2)}</td>
                <td>${transaction.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        
        <p className="no-transaction-message">No transactions yet.</p>
      )}
    </div>








      </div>
      </div>
  )
}

export default Portfolio;

