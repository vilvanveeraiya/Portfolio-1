import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/protfio.jpeg';

import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Vilvan</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
  Hi, I’m <b>Vilvan</b>, a passionate <b>Java Full Stack Developer</b> from 
  <b> Pudukkottai, Tamil Nadu, India</b>.
  <br /><br />
  I enjoy building complete web applications by converting ideas into 
  real-world solutions using <b>Java, Spring Boot, React.js, and MySQL</b>.
  I focus on writing clean, efficient, and maintainable code.
  <br /><br />
  I am actively seeking opportunities where I can learn, grow, and 
  contribute as a developer. I enjoy problem-solving, continuous learning, 
  and collaborating with others to build impactful applications.
  <br /><br />
  Apart from coding, I enjoy learning new technologies and I love 
  <b> coffee</b> <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
</p>

        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home