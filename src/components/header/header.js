import React from 'react';
import "./header.css"
import Headerright from './header-right/header-right';
import Headerleft from './header-left/header-left';

const Header = () => {
  return (
  <div className='head-container'>
   <div className='head-content'>
      <Headerleft/>
      <Headerright/>
    </div>
  </div>
  )
}

export default Header
