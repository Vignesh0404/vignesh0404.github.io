import React from 'react';
import './skills.css';
import C from '../../assets/skills/c++.svg';
import Py from '../../assets/skills/py.svg';
import JS from '../../assets/skills/js1.svg';
import Dart from '../../assets/skills/dart.svg';
import Php from '../../assets/skills/php.svg';
import Flutter from '../../assets/skills/flutter.svg';
import OpenCv from '../../assets/skills/opencv.svg';
import Reactjs from '../../assets/skills/react.svg';
import HtmlLogo from '../../assets/skills/html.svg';
import CssLogo from '../../assets/skills/css.svg';
import FlaskLogo from '../../assets/skills/flask.svg';
import Heroku from '../../assets/skills/heroku.svg';
import Git from '../../assets/skills/git.svg';
import BitBucket from '../../assets/skills/bitbucket.svg';
import Mongo from '../../assets/skills/mongodb.svg';
import Mysql from '../../assets/skills/sql.svg';
import GraphQl from '../../assets/skills/graphql.svg';
import Hasura from '../../assets/skills/hasura.svg';
import Firebase from '../../assets/skills/firebase.svg';
import D1 from '../../assets/skills/d1.svg';
import D2 from '../../assets/skills/d2.svg';
import D3 from '../../assets/skills/d3.svg';
import D4 from '../../assets/skills/d4.svg';
import D5 from '../../assets/skills/d5.svg';
import D6 from '../../assets/skills/d6.svg';
import D7 from '../../assets/skills/d7.svg';


/*
Programming Languages: Python, C/C++, Dart, HTML/CSS, JavaScript, PHP, XML.
Tools, Frameworks and Databases: Flutter, Open-CV, Flask, Git, Bit-bucket, Heroku, MongoDB, MySQL, GraphQL, Hasura, Firebase.  
*/
const Skills = () => {
  return (
    <section className="services container section" id="skills">
      <h2 className='section__title'>My Skills</h2>

      <div className='services__container grid'>
        <h3 className='skills_desc'>I like to take responsibility to craft aesthetic and accessible user experience using state of the art framework.
        </h3>

        <h2 className='skills_head'> USER EXPERIENCE DESIGN TOOLS & METHODOLOGIES
        </h2>
        <div className='skillsContainer'>
          <div className='skills'>
            <img src={D4} alt="" className='skills_img' />
            <img src={D2} alt="" className='skills_img' />
            <img src={D1} alt="" className='skills_img' />
            <img src={D7} alt="" className='skills_img' />
            {/* <img src={D5} alt="" className='skills_img' /> */}
            <img src={D3} alt="" className='skills_img' />
            <img src={D6} alt="" className='skills_img' />
          </div>  
        </div>

        <h2 className='skills_head'> PROGRAMMING LANGUAGES
        </h2>
        <div className='skillsContainer'>
          <div className='skills'>
            <img src={C} alt="" className='skills_img' />
            <img src={Py} alt="" className='skills_img' />
            <img src={JS} alt="" className='skills_img' />
            <img src={Dart} alt="" className='skills_img' />
            <img src={Php} alt="" className='skills_img' />
            <img src={HtmlLogo} alt="" className='skills_img' />
          <img src={CssLogo} alt="" className='skills_img' />
          </div>  
        </div>
        
        <h2 className='skills_head'> DEV TOOLS & FRAMEWORKS
        </h2>
        <div className='skillsContainer'>
          <div className='skills'>
          <img src={Flutter} alt="" className='skills_img' />
          <img src={Reactjs} alt="" className='skills_img' />
          <img src={OpenCv} alt="" className='skills_img' />
          <img src={FlaskLogo} alt="" className='skills_img' />
          <img src={Heroku} alt="" className='skills_img' />
          <img src={Git} alt="" className='skills_img' />
          <img src={BitBucket} alt="" className='skills_img' />
          <img src={Mongo} alt="" className='skills_img' />
          <img src={Mysql} alt="" className='skills_img' />
          <img src={Firebase} alt="" className='skills_img' />
          <img src={GraphQl} alt="" className='skills_img' />
          <img src={Hasura} alt="" className='skills_img' />
          
        </div>  
      </div>
        
      </div>
      
    </section>
  )
}

export default Skills
