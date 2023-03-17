import React from 'react'
import "./page-component.css"
import Pageleft from './page-left/page-left'
import Pageright from './page-right/pageRight'

const Pagecomponent = () => {
  return (
    <div>
    <div className='page-container'>
      <Pageleft/>
      <Pageright/>
    </div>
    </div>
  )
}

export default Pagecomponent
