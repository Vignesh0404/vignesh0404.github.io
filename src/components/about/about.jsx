import React from 'react';
import './about.css';
import AboutImg1 from "../../assets/AvatarMaker1.svg";


const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className='about__container grid'>
        <img src={AboutImg1} alt="" className='about__img' />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description"> 
            Welcome! I'm an enthusiastic, aspiring developer who adores working on fresh initiatives and meeting new individuals. I've worked as a software developer for a year, designing & developing full stack mobile applications.
            I really believe that the best lessons and experiences in life come from stepping outside of one's comfort zone and trying new things. I'm pursuing my Masters in Information Science at  <span style={{color: "#5fc9e1", fontWeight: "bold"}}> The University of Texas at Austin</span>, where I hope to learn more about different areas of software engineering like UX/UI, Data Science, and product project management.
            I believe that in order to advance as a software engineer, it is critical to possess a solid understanding of various fields that are linked to the software life cycle. 
            
            </p>
            <div className="spacer__bottom">
              <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/14uHDSeKr14-Nv6c9W7ybL9GFdUH9yoxR/view?usp=sharing" className="btn">View Resume</a>
            </div>
          </div>
          
        </div>
      </div>
      <h1 className="about__quote">I have a strong obsession for attention to <span style={{color: "#5fc9e1"}}>detail</span>.</h1>
    </section>
  )
}

export default About
/*
<span style={{color: "#5fc9e1", fontWeight: "bold"}}>
I'm pursuing my Masters in Information Science at The University of Texas at Austin during my first semester here, where I hope to learn more about different areas of software engineering like UX/UI, Data Science, and product project management.

*/