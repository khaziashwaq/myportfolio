import React, { Component }  from 'react';
import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <div className="text-4xl md:text-5xl text-center md:text-center font-medium text-1a1a1e-300 pb-4 mb-16">
      Projects
    </div>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
