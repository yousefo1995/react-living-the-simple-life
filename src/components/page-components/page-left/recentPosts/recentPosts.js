import React from 'react'
import './recentPosts.css'
import ImageInfo from '../../image-info/image-info'
import Title from '../../../mutualComponent/title/title'
import Paragraph from '../../Paragraph/paragraph'
import ContinueReading from '../../continue-reading/continue-reading'

const RecentPosts = () => {
  return (
    <div className='recent-articles'>
      <div className='recent-articles-secondry'>
        <img src="Images/food.jpg"/>
        <ImageInfo/>
      </div>
      <div className='recent-articles-main'>
        <Title/>
        <Paragraph/>
        <ContinueReading/>
      </div>
    </div>
  )
}

export default RecentPosts
