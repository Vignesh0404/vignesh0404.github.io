import React from 'react';
import './about.css';
import AboutImg1 from "../../assets/AvatarMaker1.svg";
import AboutImg01 from "../../assets/viggy_yellow.png";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className='about__container grid'>
        <img src={AboutImg01} alt="" className='about__img' />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description"> 
            <span style={{fontSize: "1.25rem", fontWeight: "300", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"}}> Hola! I am a Product Designer based in<span style={{color: "#5fc9e1", fontWeight: "600",fontSize: "1.25rem",fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"}}> Austin, Texas</span> striving to create inclusive, intuitive & seamless experiences. 
            
            I believe that in order to advance as a designer/engineer in the field of software, it is critical to possess a solid understanding of various fields that are linked to the end to end software life cycle.
            In 2021, I graduated from the Anna University, India with a Bachelor's degree in Computer Science where I had an in-depth experience on taking a product from a napkin sketch to a real shipped product.
            </span> 
            
            <br></br><br />
            <span style={{fontSize: "1.25rem", fontWeight: "300",fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", color: "white"}}>Other than designing or developing, you can find me watching the <span style={{color: "#ffd15c", fontWeight: "600", fontSize: "1.25rem",fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"}}>Lakers</span> blow 4th quarter leads or playing some basketball and CSGO.</span>
            </p>
            
            
            <br />
            <p className='about__quote1'><span style={{color: "#5fc9e1",fontWeight: "600",fontSize: "1.25rem",fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"}}>I use the rigor of research and the imagination of design to solve challenges and produce experiences that matter. </span></p>

            <div className="spacer__bottom">
              <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1C71sSsSvltrVIuFxnMXU4FZ4DAj8MlXN/view?usp=sharing" className="btn">View Resume</a>
              <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1Wl6Ji8ki2q086o7RKLN-m9hyIlOs_P53/view?usp=sharing" className="btn01">View Portfolio</a>
            </div>
          </div>
          
        </div>
      </div>
      <h1 className="about__quote">I’m obsessed with attention to <span style={{color: "#5fc9e1"}}>detail</span>.</h1>
    </section>
  )
}

export default About
/*
<span style={{color: "#5fc9e1", fontWeight: "bold"}}>
I'm pursuing my Masters in Information Science at The University of Texas at Austin during my first semester here, where I hope to learn more about different areas of software engineering like UX/UI, Data Science, and product project management.
 I'm pursuing my Master's in Information Science at </span>  <span style={{color: "#5fc9e1", fontWeight: "600",fontSize: "1.25rem" ,fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"}}> The University of Texas at Austin</span><span style={{fontSize: "1.25rem", fontWeight: "300", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"}}>, where I hope to get an in-depth knowledge in building softwares.
*/