import React from 'react';
import '../style/Wallet.css';
const transactions = [
  { id: 1, type: 'Deposit', status: 'Completed', date: '2023-08-14', wallet: 'My Wallet', amount: 100.00 },
  { id: 2, type: 'Withdrawal', status: 'Pending', date: '2023-08-15', wallet: 'Another Wallet', amount: 50.00 },
  { id: 3, type: "Withdrawal" , status: "Failed" , date:"2023-08-16", wallet:'Another Wallet', amount: 0}
  // Add more transactions here
];
const Wallet = () => {
  return (
    <div className='dim'>
    <div className='wallet-bd'>
      <h2>Wallet</h2>
    
    <div className="wallet-container">
      <div className="wallet-card card-1">
        <div className="wallet-card-head-set">
          <div className="wallet-card-title-set">Cash Balance</div>
          <button className="card-button-set">Deposit</button>
        </div>
        <div className="wallet-card-head-set">
          <div className="wallet-card-title-sett">AED  0</div>
          <button className="card-button-sett">Withdraw</button>
        </div>
      </div>
      
      <div className="wallet-card card-2">
      <div className="wallet-card-head-set">
          <div className="wallet-card-title-set">Cash Balance</div>
        </div>
        <div className="wallet-card-head-set">
        <div className="wallet-card-title-sett">AED  0</div>
      
        <i id='big-star' className='bx bx-star'></i>
       
       
        </div>
      </div>
    </div>
    <h3>Transaction</h3>
    <div className="transaction-container">
      {transactions.length > 0 ? (
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Status</th>
              <th>Date</th>
              <th>Wallet</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.type}</td>
                <td>{transaction.status}</td>
                <td>{transaction.date}</td>
                <td>{transaction.wallet}</td>
                <td>${transaction.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        
        <p className="no-transaction-message">No transactions yet.</p>
      )}
    </div>
    <div className='bank-card'>
          <div className='add-card'><h3>Cards</h3></div>
          <div className='add-bank'><h3>Banks</h3></div>
        </div>
       <div>
        
       <div className="deposit-container">
        
      <div className="deposit-card card-1">
        <div className="deposit-card-head-set">
        
          <div className="deposit-card-title-set">
            
            <i class='bx bx-credit-card-alt'></i>Add a card to enjoy instant deposits from anywhere in the world</div>
        </div>
        <div className="deposit-card-head-sett">
        
            <input className='input-bank' placeholder='+  Add a new card'></input>
         
          
        </div>
      </div>
      
      <div className="deposit-card card-2">
      <div className="deposit-card-head-set">
        
      <div className="deposit-card-title-set"><i class='bx bxs-bank'></i> Add a card to enjoy instant deposits from anywhere in the world</div>
           </div>
      <div className="deposit-card-head-sett">
      
          <input className='input-bank' placeholder='+  Add a new card'></input>
       
        
      </div>
      
      </div>
    </div>
       </div>
    
    </div>
    </div>
)
}

export default Wallet;