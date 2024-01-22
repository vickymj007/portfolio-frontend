import React, { useState } from 'react'
import './education.css'
import { education } from './data'

const Education = () => {
    
    const [windowID, setWindowID] = useState(1)
    let windowData = education.find(data => data.id === windowID)

  return (
    <section id='education'>
        <h2 className='education_heading'>Education</h2>
        <div className='sliding_window'>
            <nav>
                {education.map(data=>(
                    <p onClick={()=>setWindowID(data.id)} className={data.id === windowID ? "activeNav" : ""} key={data.id}>{data.type}</p>
                ))}
            </nav>
            <div className='sliding_window_body'>
                <h3>{windowData.instituteName} - <span>{windowData.passedOutYear}</span></h3>
                <p className='course_name'>{windowData.degree}</p>
                <span>-{windowData.percentage}</span>
            </div>
        </div>
    </section>
  )
}

export default Education