import React from 'react'
import './intro.css'
// import mypic from '../../Assets/vignesh_cropped.png'
import mypic from '../../Assets/vignesh2.png'


const Intro = () => {
  return (
    <section id='intro'>
        <div className="intro_content">
            <span className='hello'>Hello,</span>
            <span className='intro_text'>I'm <span className='intro_name'>Vignesh</span><br/>MERN Stack Developer</span>
            <p className='intro_para'>Iam a skilled Web Developer with experience in creating <br/> visually appealing and user friendly websites</p>
            <a href="https://drive.google.com/file/d/1s4ERHui6APTH1jt7Y7Vc3KhSw6NBVLib/view?usp=sharing" target='blank' className="resume_btn">View Resume</a>
        </div>
        <img className='bg' src={mypic} alt="My cover" />
    </section>
  )
}

export default Intro