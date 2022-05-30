import React, { Component }  from 'react';
import "./Certification.css"
import { certification } from "../../portfolio"


const CertificationsContainer=()=> {
  if (!certification.length) return null

  return (
    <div className=" max-w-6xl mx-auto p-5 py-20" id="certifications">
    <div className="text-4xl md:text-5xl text-center md:text-center font-medium text-1a1a1e-300 pb-4 mb-16">
      Certifications
    </div>
    {certification.map((exp) => 
       (
        <div className="w-full shadow-md p-5 rounded-lg mb-10 card">
          <div className=" grid md:grid-cols-4 gap-4 md:order-2">
            <div className="w-full h-40 flex items-center justify-center">
              <img
                className="max-h-full max-w-full rounded-md"
                src={
                  exp.img
                }
                alt=""
              />
            </div>
            <div className="md:col-span-3 space-y-4 my-auto">
              <div className="text-lg md:text-3xl ">
                {exp.name}
              </div>
              <div className="md:flex justify-between">
                <div className="text-xl text-slate-500 ">{exp.position}</div>
                <div className=" text-slate-400">{exp.date}</div>
              </div>
              <div className=" text-gray-1000 font-extralight text-md pb-5">
                {exp.des}
              </div>
            </div>
            <a href={exp.link} target='_blank' rel='noreferrer'>
                <span type='button' className='btn btn--outline'>
                click to check for certification
                </span>
                </a>
          </div>
        </div>
      )
    )}
  </div>
    
  )
}

export default CertificationsContainer