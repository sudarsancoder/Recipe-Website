import React from 'react'
import { Link } from "react-scroll";
import "./TopContent.css"
import sudarsanCv from "../../assets/sudarsan_cv.pdf"



const TopContent = () => {
    return (
        <div className='topContent'>
            <div className='topContent__container'> 

                <h1>SUDARSAN</h1>
                 <p>Web Developer at LTIMINDTREE</p>
                
           <a target="_blank" href={sudarsanCv}  download>
                    <button className='topContent__downloadButton'> Download CV</button>
                </a>
                
                <Link to="projects" smooth={true} duration={500}>
                    <button className='topContent__workButton'>My Works</button>
                </Link>
                
            </div>
        </div>
    )
}

export default TopContent