import React, { Component }  from 'react';
import { about } from '../../portfolio'
import './About.css'
import pfp from './pfp.png'

const About = () => {
  const { name, role, description, resume} = about

  return (
    <div className='about center'>
      {name && (
        <h1 className='about_name mb-8'>
          Hi, I am <span className='about__name mx-auto'>{name}.</span>
        </h1>
      )}
    <div className="grid grid-rows-2 grid-flow-col">
        <div className="md:row-span-5 ...">
      {role && <h3 className='about__role'>{role}.</h3>}
      <p className='about__desc mx-auto mb-8'>{description && description}<a href="https://pict.edu/" target="_blank" rel='noreferrer' className='link'> Pune Institute of Computer Technology.</a> Skilled at writing well-designed, testable and efficient code using current best practices in Web development. A fast learner, natural leader, hard worker and a team player who is proficient in an array of various technologies.</p></div>
        <div className="md:row-span-2 md:col-span-2 flexx"><img src={pfp} alt='' className='rounded mx-auto'/></div>
    </div>
      

      <div className='about__contact center mx-auto'>
        {resume && (
          <a href='https://drive.google.com/file/d/15mdYPsCerr-DsnBS3iCRYtmcuP6HiSMM/view?usp=sharing' target='_blank' rel='noreferrer'>
            <span type='button' className='btn btn--outline mx-auto'>
            resume
            </span>
          </a>
        )}
      </div>
    </div>
  )
}

export default About
