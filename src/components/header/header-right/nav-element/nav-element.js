import React from 'react'
import './nav-element.css'

const NavElement = (props) => {
  console.log(props.text,'text')
  return (
    <li className="nav-component">
      <a href="#">{props.text}</a>
    </li>
  )
} 
 
export default NavElement
