import React from 'react';
import './timeline.css';
import TimelineData from './data.jsx';
import CardWidget from './cardWidget';

const Timeline = () => {
  return (
    <section className="resume container section" id="timeline">
      <h2 className='section__title'>My Experiences</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {TimelineData.map((val, id) => {
            if (val.category === "experience"){
              return (
                <CardWidget key={id} icon={val.icon} title={val.title}
                  year= {val.year} desc= {val.desc} keywords= {val.keywords}
                />
              )
            }
          })}
        </div>

        <div className="timeline grid">
          {TimelineData.map((val, index) => {
            if (val.category === "experience1"){
              return (
                <CardWidget key={index} icon={val.icon} title={val.title}
                  year= {val.year} desc= {val.desc} keywords= {val.keywords}
                />
              )
            }
          })}
        </div>
      </div>
      <h1 className="work__quote">Interested in <span style={{color: "#5fc9e1"}}>collaborating</span>?</h1>
    </section>
  )
}

export default Timeline