import React, { useState, useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";
import './App.css';
import SideBar from './components/sidebar/sidebar';
import NavBar from './components/navBar/navBar';

import Home1 from './components/home1/home1';
import About from './components/about/about';
import Work from './components/work/work';
import Skills from './components/skills/skills';
import Timeline from './components/timeline/timeline';
import Contact from './components/contact/contact';


const App = () => {
  console.log(window.location)
  let component
  // switch (window.location.pathname) {
  //   case "/#home":
  //     component = <Home />
  //     break
    
  //   case "/#about":
  //     component = <About />
  //     break  

  //     case "/#skills":
  //       component = <Skills />
  //       break 
        
        
  //     case "/#timeline":
  //       component = <Timeline />
  //       break
        
  //       case "/#work":
  //         component = <Work />
  //         break 
          
  //       case "/#contact":
  //         component = <Contact />
  //         break  
  // }
  
   
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
  
  
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  
 
  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;
  
  return isLoading ?
    <>
    <div className='splash__screen'>
      <HashLoader color='#fff' isLoading={isLoading} css ={override} size={100}  />
    </div>
    </>
     :
        <>
          <NavBar />
          
          <main className='main'>
          {component}
            <Home1 />
            <Work />
            <About />
            <Skills />
            <Timeline />
            
            <Contact />
            </main>
        </>
}
  
export default App;

