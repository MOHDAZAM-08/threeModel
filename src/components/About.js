import React from 'react'
import './About.css'
import img1 from '../assets/apple watch 2.jpg'
import img2 from '../assets/apple watch 3.jpg'

export default function About() {
  return (
    <>
      <div className='about'>
        <div className="sleep">
            <div className="content">
            <p id='para'>Heart rate</p>
            <h1>Track your heart health without missing a beat.</h1>
            </div>
            <div className="Img">
                <img src={img1} alt="" />
            </div>

        </div>
        <div className="heart">
        <div className="content">
            <p id='para'>Sleep</p>
            <h1>Get a closer look at your shut-eye.</h1>
            </div>
            <div className="Img">
                <img src={img2} alt="" />
            </div>
        </div>
        
        </div>
    </>
  )
}
