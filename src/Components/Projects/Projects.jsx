import React, { useState } from 'react'
import './projects.css'
import { data } from './data'

const Projects = ({styles}) => {
  const [projects, setProjects] = useState(data)

  const toggleDesc = (id)=>{
    setProjects(prevVal => {
      return prevVal.map(project => {
        if(project.id === id){
          return {...project, showDesc: !project.showDesc}
        }else{
          return project
        }
      })
    })
  }

  return (
    <section id='projects'>
        <h2 className='project_heading'>My Projects</h2>
        <span className='project_desc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help business achieve their goals and create a strong online presence.</span>
        <div className="project_demo">
          {projects.map(project =>(
            <div className="project_list" key={project.id} style={styles.secondary}>
              <div className="project_list_head">
                <img src={project.img} alt="Project background" />
                <p style={styles.secondary}>{project.projectType}</p>
              </div>
              <div className="project_list_body">
                <h2>{project.name}</h2>
                <div>
                  <p className='show_desc' onClick={()=>toggleDesc(project.id)}>View Description</p>
                  <a href={project.deployedURL} target='blank' className='website_link'>Visit Website</a><br/>
                  <p className='github_link'>
                    GitHub Code
                    {project.projectType === "Fullstack Project" ?
                      <div className='github_link_popup'>
                        <a href={project.githubFE} target='blank' >Frontend</a>
                        <a href={project.githubBE} target='blank' >Backend</a>
                      </div>
                    :
                      <div className='github_link_popup frontend'>
                        <a href={project.githubFE} target='blank' >Frontend</a>
                      </div>
                    }
                  </p>
                </div>
              </div>
              <div className='project_list_desc' style={{top:project.showDesc ? 0 : "-12rem" ,bottom: project.showDesc? 0 : "35rem"}}>
                <p>{project.description}</p>
                <button onClick={()=>toggleDesc(project.id)} className='close_desc'>Close</button>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Projects