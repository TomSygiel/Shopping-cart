import React from 'react'
import { Link } from 'react-router-dom'
import clip from '../images/videoclip2.mp4'

class About extends React.Component {
  render() {
    return(
      <div className="about-container">

        <div className="hero">
          <video autoPlay muted loop className="my-video" >
            <source src={clip} type="video/mp4" />
          </video>
          <div class="middle">
            <div class="text">brand.</div>
          </div>
        </div>

        <p>
          This work is a web storefront build using React and Redux. It is my first time using redux and it is definitely a work in progress. The project has been created with the help of online resources and official documentation. I hope you enjoyed this demo and thank you for visiting.
        </p>

        <p>
          All images are property of their rightful owners and I do not claim ownership of any of the materials used. This project has been created for non-commercial use and purely for the purpose of learning.
        </p>

        <h2 className="about-heading">Welcome to <Link to="/" className="home-link">brand.</Link></h2>
        
      </div>
    )
  }
} 

export default About