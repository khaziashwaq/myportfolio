import React, { Component }  from 'react';
import { about, social } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!social.length) return null

  return (
    
    <div id = "social" className='about center'>
      
      <div className="text-4xl md:text-5xl ml-5 text-center md:text-center font-medium text-black-100 mb-5">
        Let&apos;s get in touch...
      </div>
      
      <div className="py-10 mx-auto flex items-center space-x-4 justify-center">
        {social.map((link) => (
          <a
            href={link.link}
            target='_blank'
            rel="noreferrer"
            className="relative rounded-full"
          >
            <img src={link.icon} className="h-10 w-10 social" alt=""/>
          </a>
            
            
        ))}
        </div>

        <img src=".\IMG_8043.JPG" alt=''/>
      
    </div>
  )
}

export default Contact
