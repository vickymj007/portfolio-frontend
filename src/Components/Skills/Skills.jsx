import React from 'react'
import './skills.css'
import htmllogo from '../../Assets/html.png'
import csslogo from '../../Assets/css.png'
import jslogo from '../../Assets/js.png'
import nodelogo from '../../Assets/node.png'
import reactlogo from '../../Assets/react.png'
import tailwindlogo from '../../Assets/tailwind.png'
import mongodblogo from '../../Assets/mongodb.png'


const Skills = () => {
  return (
    <section id="skills">
        <span className='skill_title'>My Skills</span>
        <span className='skill_desc'>Iam a skilled Web Developer with experience in creating visually appealing and user friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, Javascript, React, NodeJS, ExpressJS, MongoDB and MySQL, as well as design software such as Adobe Photoshop.</span>
        <div className="skill_icons">
            <div className='skill_icon_list'>
              <img src={htmllogo} alt="HTML Logo" />
              <p>HTML</p>
            </div>
            <div className='skill_icon_list'>
              <img src={csslogo} alt="CSS Logo" />
              <p>CSS</p>
            </div>
            <div className='skill_icon_list'>
              <img src={jslogo} alt="Javascript Logo" />
              <p>Javascript</p>
            </div>
            <div className='skill_icon_list'>
              <img src={reactlogo} alt="React Logo" />
              <p>React</p>
            </div>
            <div className='skill_icon_list'>
              <img src={nodelogo} alt="NodeJS Logo" />
              <p>NodeJS</p>
            </div>
            <div className='skill_icon_list'>
              <img src={mongodblogo} alt="MongoDB Logo" />
              <p>MongoDB</p>
            </div>
            <div className='skill_icon_list'>
              <img src={tailwindlogo} alt="Tailwind CSS Logo" />
              <p>Tailwind CSS</p>
            </div>
        </div>
    </section>
  )
}

export default Skills