import React from 'react'
import './mainWidget.css'
import Title from '../../../mutualComponent/title/title'
import Paragraph from '../../Paragraph/paragraph'

const Mainwidget = () => {
  return (
    <div>
      <Title/>
      <img src='images/about-me.jpg'/>
      <Paragraph/>
    </div>
  )
} 

export default Mainwidget
