import React, { Component }  from 'react';
import { skills } from '../../portfolio'
import './Skills.css'


const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <div className="text-4xl md:text-5xl text-center md:text-center font-medium text-1a1a1e-300 pb-4 mb-16">
      Skills
    </div>
      <div className="grid md:grid-cols-6">
        {skills.map((skill) => (
            <div className="flex space-x-2 items-center">
              <div className="mx-auto pb-10"><img src={skill} className="skill" height="80" width="80" pd-3 alt='react'/></div>
            </div>
            
        ))}
      </div>
    </section>
  )
}

export default Skills