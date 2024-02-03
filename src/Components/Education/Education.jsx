import React, { useState } from 'react'
import './education.css'
import { education } from './data'

const Education = ({styles, darkMode}) => {
    const [windowID, setWindowID] = useState(1)
    let windowData = education.find(data => data.id === windowID)

  return (
    <section id='education'>
        <h2 className='education_heading'>Education</h2>
        <div className='sliding_window' style={styles.secondary}>
            <nav style={styles.nav}>
                {education.map(data=>(
                    <p 
                        onClick={()=>setWindowID(data.id)} 
                        className={data.id === windowID ? "activeNav" : ""} 
                        style={darkMode ? 
                            {backgroundColor: data.id === windowID ? "rgb(60, 60, 60)" : "black"}
                            :   
                            {backgroundColor: data.id === windowID ? "white" : "#e9ecef"}}
                        key={data.id}
                    >
                        <span className='before' style={styles.before}></span>
                            {data.type}
                        <span className='after' style={styles.after}></span>
                    </p>
                ))}
            </nav>
            <div className='sliding_window_body'>
                <h3>{windowData.instituteName} - <span>{windowData.passedOutYear}</span></h3>
                <p className='course_name' style={styles.button}>{windowData.degree}</p>
                <span>-{windowData.percentage}</span>
            </div>
        </div>
    </section>
  )
}

export default Education