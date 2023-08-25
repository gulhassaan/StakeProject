import React from 'react';
import ProfileProperty from './ProfileProperty.js';
import Wallet from './Wallet.js';
import Portfolio from './Portfolio.js';
import Rewards from './Rewards.js';
import Cart from './Cart.js';
import Setting from './Setting.js';
const ContentRenderer = ({ selectedContent }) => {
  if (selectedContent === 'profileproperty') {
    return <ProfileProperty/>;
  }
  if (selectedContent === 'wallet') {
    return <Wallet />;
  }
  if (selectedContent === 'portfolio') {
    return <Portfolio />;
  }
  if (selectedContent === 'rewards') {
    return <Rewards />;
  }
  if (selectedContent === 'cart') {
    return <Cart/>;
  }
  if(selectedContent === 'setting'){
    return <Setting/>
  }
  
  return null;
};

export default ContentRenderer;
