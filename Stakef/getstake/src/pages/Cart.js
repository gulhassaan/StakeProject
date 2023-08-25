import React from 'react'
import '../style/Cart.css';
const Cart = () => {
  return (
    <div className='dim'>
    <div className='cart-bd'>
     <h2>
     Cart 
     </h2>
     <div className='cart-items'>
       
       <div className='circle-cart'>
      <i id='big-cart-logo' class='bx bx-cart'></i>
      </div>
     <h1>Your cart is empty</h1>
     <p>Looks like you haven’t added any properties in your cart</p>
     <a href='/profile#' className="cart-navlink-button">
          View Properties
        </a>
     </div>




    </div>
    </div>
  )
}

export default Cart;