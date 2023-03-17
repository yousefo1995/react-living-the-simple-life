import React from 'react'
import "./page-left.css"
import MainArticle from './mainArticle/mainArticle';
import RecentPosts from './recentPosts/recentPosts';
const Pageleft = () => {
  return (
    <div  className='page-main-content'>
      <MainArticle/>
      <RecentPosts/>
      <RecentPosts/>
      <RecentPosts/>
    </div>
  )
}

export default Pageleft
