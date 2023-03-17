import React from 'react'
import './mainArticle.css'
import ImageInfo from '../../image-info/image-info'
import Title from '../../../mutualComponent/title/title'
import Subtitle from '../../../mutualComponent/sub-title/sub-title'
import Paragraph from '../../Paragraph/paragraph'
import ContinueReading from '../../continue-reading/continue-reading'

const MainArticle = () => {
  return (
    <div className='main-article'>
    <img src="Images/life.jpg"/>
    <ImageInfo/>
    <Title/>
    <Paragraph/>
    <ContinueReading/>
    </div>
  ) 
}

export default MainArticle
