import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        {/* <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/> */}
      </div>
      <div className="about-right">
         {/* <h3>Greetings from Flyanza
        </h3>  */}
        <h2>At <h3>Flyanza✈️</h3>We make your travel experience smoother and more affordable.</h2>

        <p>Our team, backed by years of expertise in the travel industry, is dedicated to revolutionizing the way people experience travel. We’re not just here to help you book flights or trips; we’re focused on creating a seamless, efficient, and user-friendly process that saves time and eliminates the unnecessary stress associated with traditional booking methods. By leveraging the latest technology and deep industry insights, we’re cutting down on high costs and passing those savings on to our customers.
        </p>
      </div>
    </div>
  )
}

export default About