import React from 'react'
import './projects.css'
import { projects } from './data'

const Projects = () => {
  return (
    <section id='projects'>
        <h2 className='project_heading'>My Portfolio</h2>
        <span className='project_desc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help business achieve their goals and create a strong online presence.</span>
        <div className="project_demo">
          {projects.map(project =>(
            <div className="project_list" key={project.id}>
              <div className="project_list_front">
                <h2>{project.name}</h2>
                <div>
                  <p>View Description</p>
                  <a href={project.deployedURL} target='blank' className='website_link'>Visit Website</a><br/>
                  <a href={project.githubURL} target='blank' className='github_link'>GitHub Code</a>
                </div>
                {/* <img src={project.img} alt="Project background" /> */}
              </div>
              <div className="project_list_back">

              </div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Projects