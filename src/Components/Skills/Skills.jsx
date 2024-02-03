import React from 'react'
import './skills.css'
import {data} from './skillsData'



const Skills = ({styles}) => {
  return (
    <section id="skills">
        <span className='skill_title'>My Skills</span>
        <span className='skill_desc'>Iam a skilled Web Developer with experience in creating visually appealing and user friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, Javascript, React, NodeJS, ExpressJS, MongoDB and MySQL, as well as design software such as Adobe Photoshop.</span>
        <div className="skill_icons">
          {data.map(skill=>(
            <div className='skill_icon_list' key={skill.id} style={styles.secondary}>
              <img src={skill.icon} alt={skill.name} />
              <p>{skill.name}</p>
          </div>
          ))}
        </div>
    </section>
  )
}

export default Skills