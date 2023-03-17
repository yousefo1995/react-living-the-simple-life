import React from 'react';
import "./pageRight.css"
import Recentwidget from './recentWidget/recentWidget';
import Mainwidget from './mainWidget/mainWidget';
import Title from '../../mutualComponent/title/title';

const Pageright = () => {
  return (
    <div className='widgets'>
    
      <div className='side-bar-widget'>
      <Mainwidget/>
      </div>
      
      <div className='side-bar-widget'>
      <Title/>
      <Recentwidget/>
      <Recentwidget/>
      <Recentwidget/>
      </div>
     
    </div>
  )
}

export default Pageright
