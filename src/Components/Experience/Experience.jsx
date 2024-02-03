import React from 'react'
import './experience.css'
import { experience } from './data'
import { MdWork } from "react-icons/md";
import { FaHouseMedicalFlag } from "react-icons/fa6";


const Experience = ({styles}) => {
  return (
    <section id="experience">
        <h2 className='work_heading'>Work Experience <span>(Non-IT)</span></h2>
        <div className='work_container'>
            {experience.map(work =>(
                <div className='work_list' key={work.id} style={styles.secondary}>
                    <h3>{work.companyName}</h3>
                    <p className='work_period' style={{backgroundColor:work.currentlyWorking ? "green" : "red"}}>{work.startDate}-{work.endDate}</p>
                    <p className='designation' style={styles.nav}><MdWork/> {work.designation}</p>
                    <p className='work_role'>{work.role}</p>
                    <span style={styles.heading}> <FaHouseMedicalFlag/> {work.industry}</span>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Experience