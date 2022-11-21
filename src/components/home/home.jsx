import React from 'react';
import "./home.css";
import Me from '../../assets/AvatarMaker1.svg';
import Socials from './socials';
import ScrollDown from './scrolldown';
import Shapes from './shapes';
import TypewriterComponent from 'typewriter-effect';


const Home = () => {
  
  return (
    <section className="home container" id="home">
      <div className="intro">
      {/* <img src={Me} alt="" className="home__img" /> */}
     
      <h1 className="home__title">
           Hey there 👋🏻  
		  </h1>
      <h1 className="home__name">I am Vignesh Sankaran</h1>
      {/* <span className="home__education">full stack developer
      
      </span> */}
      <h3 className="home__subtitle">
        <TypewriterComponent 
        options={{
          loop: true,
          autoStart: true,
          delay: 75,
        }}
          onInit={(typeWriter)=> {
            typeWriter.typeString("Product Designer")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Full Stack Developer")
            .pauseFor(2000)
            .deleteAll()
            .start()
          }}
        
        />
      </h3>
      <Socials />
      
        <a href="#contact" className="btn">Let's connect</a>
        
      
      
      <ScrollDown />
      </div>
      <Shapes />
    </section>
  )
}

export default Home