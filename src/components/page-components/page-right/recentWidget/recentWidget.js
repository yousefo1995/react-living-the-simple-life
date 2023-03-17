import React from 'react'
import './recentWidget.css'
import Subtitle from '../../../mutualComponent/sub-title/sub-title'
import Paragraph from '../../Paragraph/paragraph'

const RecentWidget = () => {
  return (
    <div className='widget-recent-post'>
      <img src='images/food.jpg'/>
      <Subtitle/>
    </div>
  )
}

export default RecentWidget
