import React, {useState} from 'react';
import './work.css';
import WorkData from './workData';


const Work = () => {
  
  // const mobileData = WorkData.category === "Mobile";
  const[items, setItems] = useState(WorkData.filter(data => data.category === 'Mobile'));
  const [activeLink, setActiveLink] = useState('Mobile');

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
    <h2 className='section__title'>Recent Works</h2>

    <div className="work__filters">
      {/* <span className="work__item" onClick={()=> setItems(WorkData)}>All categories</span> */}

      <span className={activeLink === 'Mobile' ? "work__item__active" : "work__item"} 
      onClick={()=>{
        filterItem("Mobile");
        onUpdateActiveLink("Mobile");
      }}>Mobile</span>


      <span className={activeLink === 'Web' ? "work__item__active" : "work__item"} 
      onClick={()=>{
        filterItem("Web");
        onUpdateActiveLink("Web");
      }}>Web</span>


      {/* <span className="work__item" onClick={()=> filterItem("ML")}>ML</span> */}


      <span className={activeLink === 'UX/UI' ? "work__item__active" : "work__item"} 
      onClick={()=>{
        filterItem("UX/UI");
        onUpdateActiveLink("UX/UI");
      }}>UX/UI</span>

    </div>

    <div className="work__container grid">
      {items.map((element) => {
        const {title, desc, number, url} = element;
        
        // if(element.category === "Mobile"){
        //   return(
        //     <h1>hello</h1>
        //   );
        // }
        return(
          <div className='work__card1'> 
            <div className='work__card__header'>
              <h1 className='work__card__number'>{number}</h1>
              <li className="nav__list__1">
              <a target="_blank" rel="noopener noreferrer" href={url} className="nav__link__1">
              <i class="fa-solid fa-link"></i>
              </a>
            </li>
              
            </div>
            
            
            <h2 className='work__card__title'>{title}</h2>
            <h4 className='work__card__desc'>{desc}</h4>
            {/* <p className='work__card__stack'>{category}</p> */}
          </div>
          // <div className='work__card' key = {id}>
          //   <div className="work__thumbnail">
          //     <img src={image} alt="" className="work__img" />
          //     <div className='work__mask'></div>
          //   </div>
          //     <span className="work__category">{category}</span>
          //     <h3 className='work__title'>{title}</h3>
          //     <h4 className='work__desc'>{desc}</h4>
          //     <a href="#" className="work__button">
          //       <i className="icon-link work__button-icon"></i>
          //     </a>
          // </div>
        )
      })}
    </div>
    {/* <h1 className="work__quote_animation">Design User Experience Design User Interface</h1> */}
    <h1 className="work__quote">Interested in <span style={{color: "#5fc9e1"}}>collaborating</span>?</h1>
  </section>
  )
}

export default Work