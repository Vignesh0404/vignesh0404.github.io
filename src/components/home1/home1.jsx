import React from 'react'
import './home1.css'
import Socials1 from './socials1';
import ScrollDown1 from './scrolldown1';


const Home1 = () => {
  return (
    <section  id="home1">
    <div className="home-container">  
    <div className="i-intro" >
        <div className="i-left">
            <div className="i-name">
                Hello there, I'm Vignesh.
            </div>
            <div className="i-subtitle">
                Product designer who loves simplifying complex systems into accessible user and developer friendly experiences.
                Currently, I'm a graduate student at The University of Texas at Austin studying Information Science focusing on Human Computer Interaction. 
                
            </div>
            <div className="i-sub-sub">Feel free to view my work and to get in touch. If you're looking for Vignesh, who develop software? <a href='https://vignesh-devv.github.io/' style={{
              textDecoration: 'underline', color: '#fff', textDecorationThickness: '0.1rem',  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
            }}>Here</a>.</div>
            <Socials1 />
            <div className="buttonCenter">
            <a href="#contact" className="btn">Let's connect</a></div>
        </div>
        <div className="i-right">
            
        </div>
    </div>
    {/* <ScrollDown1 /> */}
    </div>
    </section>
  )
}

export default Home1