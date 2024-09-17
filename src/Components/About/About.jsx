import React from 'react'
import './About.css'
import about from '../../img/about.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about} alt="" className='about-img'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVESITY</h3>
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ratione. Quisquam fugiat id consequuntur facere praesentium nihil ullam, illo, sunt recusandae eligendi aliquid? Tenetur provident necessitatibus explicabo, expedita ab aliquid.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ratione. Quisquam fugiat id consequuntur facere praesentium nihil ullam, illo, sunt recusandae eligendi aliquid? Tenetur provident necessitatibus explicabo, expedita ab aliquid.</p>
        </div>
    </div>
  )
}

export default About