import React from 'react'
import'./NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers on your Email</h1>
        <p>Subscribe to our newsletter and saty updated</p>
        <div>
            <input type="email"  placeholder='YOur email here'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter