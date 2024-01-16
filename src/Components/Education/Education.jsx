import React from 'react'
import './education.css'
import { education } from './data'

const Education = () => {
  return (
    <section id='education'>
        <h2 className='education_heading'>Education</h2>
        <div className='education_wrapper'>
            {education.map(data =>(
                <div key={data.id} className='education_list'>
                    <div className='list_head'>
                        <h3>{data.type} <span>-{data.passedOutYear}</span></h3>
                    </div>
                    <div className='list_body'>
                        <h3>{data.instituteName}</h3>
                        <p className='course_name'>{data.degree}</p><span>-{data.percentage}</span>
                    </div>
                </div>
            ))}
        </div>

    </section>
  )
}

export default Education