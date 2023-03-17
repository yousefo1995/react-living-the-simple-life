import React from 'react';
import "./header-right.css"
import NavElement from './nav-element/nav-element'
const Headerright = () => {
  const navList = [ {text:'Home'},{text:'About'},{text:'Recent'}];

  return (
    <ul className='nav'>
        {navList.map((item) => <NavElement text={item.text} />)}
    </ul>
  )
}

export default Headerright
