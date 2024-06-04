import React, { useState } from 'react'
import "./Project.css"

const Project = ({title,img,desc,link}) => {

    const[show,setshow]=useState(false)
  return (
    
        <a href={link} target="_blank" rel="noreferrer"  >
            <div className='project' onMouseOver={()=>setshow(true)} onMouseOut={()=>setshow(false)}>
                {
                    show ? (
                    <div className='project__content'> 
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </div>
                    ):(
                       <img src={img} alt="" /> 
                    )
                }
            </div>
        </a>
    
  )
}

export default Project