import React from 'react'

const CardWidget = (props) => {
  return (
    <div className="timeline__item">
        <i className={props.icon}></i>
        <span className="timeline__date">{props.year}</span>
        <h3 className="timeline__title">{props.title}</h3>
        <h5 className='timeline_tags'>{props.keywords}</h5>
        <p className='timeline__desc'>{props.desc}</p>
        
    </div>
  )
}

export default CardWidget