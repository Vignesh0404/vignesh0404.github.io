import React, {useState} from 'react';
import './work.css';
import WorkData from './workData';



const Work = () => {
  
  // const mobileData = WorkData.category === "Mobile";
  const[items, setItems] = useState(WorkData.filter(data => data.category === 'Case Studies'));
  const [activeLink, setActiveLink] = useState('Case Studies');

  // const items1 = items.category === "Mobile";

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  
  const filterItem = (categoryItem) => {
    // const itemsInital = WorkData.filter(data => data.category === 'Mobile')
    const updatedItems = WorkData.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
  }


  return (
    <section className="work container section" id="work">
    <h2 className='section__title'>Recent Work</h2>

    <div className="work__filters">
      <span className={activeLink === 'Case Studies' ? "work__item__active" : "work__item"} 
      onClick={()=>{
        filterItem("Case Studies");
        onUpdateActiveLink("Case Studies");
      }}>Case Studies</span>



      <span className={activeLink === 'Mini work' ? "work__item__active" : "work__item"} 
      onClick={()=>{
        filterItem("Mini work");
        onUpdateActiveLink("Mini work");
      }}>Mini work</span>


    </div>

    <div className="work__container grid">
      {items.map((element) => {
        const {title, desc, number, url, stack, img} = element;
        
        // if(element.category === "Mobile"){
        //   return(
        //     <h1>hello</h1>
        //   );
        // }
        return(
          <div className="work__card2">
            <img src={img} alt=""></img>
            <div className='work__card__header2'>
              <h1 className='work__card__number'>{number}</h1>
              <h2 className='work__card__title2'>{title}</h2>
              <h4 className='work__card__desc2'>{desc}</h4>
              <li className="nav__list__2">
              <p className='work__card__stack'>{stack}</p>
                <a target="_blank" rel="noopener noreferrer" href={url} className="nav__link__2">
                  <p>View Project</p>
                  {/* <i class="fa-solid fa-link"></i> */}
                </a>
            </li>
              {/* <p className='work__card__stack2'>{stack}</p> */}
              {/* <li className="nav__list__1">
              <a target="_blank" rel="noopener noreferrer" href={url} className="nav__link__1">
              <i class="fa-solid fa-link"></i>
              </a>
            </li> */}
              
            </div>
            
            
            {/* <h2 className='work__card__title'>{title}</h2>
            <h4 className='work__card__desc'>{desc}</h4>
            <p className='work__card__stack'>{stack}</p> */}
            
          </div>
          // <div className='work__card1'> 
          //   <div className='work__card__header'>
          //     <h1 className='work__card__number'>{number}</h1>
          //     <li className="nav__list__1">
          //     <a target="_blank" rel="noopener noreferrer" href={url} className="nav__link__1">
          //     <i class="fa-solid fa-link"></i>
          //     </a>
          //   </li>
              
          //   </div>
            
            
          //   <h2 className='work__card__title'>{title}</h2>
          //   <h4 className='work__card__desc'>{desc}</h4>
          //   <p className='work__card__stack'>{stack}</p>
          // </div>
  
        )
      })}
    </div>
    {/* <h1 className="work__quote_animation">Design User Experience Design User Interface</h1> */}
    {/* <h1 className="work__quote">Interested in <span style={{color: "#5fc9e1"}}>collaborating</span>?</h1> */}
    {/* <h1 className="work__quote">Interested in <span style={{color: "#5fc9e1"}}>collaborating</span>?</h1> */}
  </section>
  )
}

export default Work