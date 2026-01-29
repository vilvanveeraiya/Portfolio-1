import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Vilvan</b> and I am from pudukkottai,Tamilnadu, India.
            I'm a <b>Full stack  developer</b> and I  have completed my Graduated <b>Bsc Computer Science</b>. <br/><br/>
          
           
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding 
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      
<div className='skills'>
  
  <Skills skill='Java' />
  <Skills skill='Spring Boot' />
 
 
  <Skills skill='MySQL' />

  <Skills skill='React.js' />
  <Skills skill='HTML' />
  <Skills skill='CSS' />
  <Skills skill='JavaScript' />

  <Skills skill='Git' />
  <Skills skill='GitHub' />
  <Skills skill='Postman' />

</div>

    </>
  )
}

export default About