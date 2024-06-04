import React from 'react'
import { Element } from 'react-scroll';
import Project from '../Project/Project.js';
import "./ProjectContainer.css";
import intern from '../../assets/intern.jpg'
import internproof from '../../assets/internproof.pdf';
import Booking from "../../assets/Booking.png"
import Eshop from "../../assets/Eshop.png"
import Course from "../../assets/Course.png"

const ProjectContainer = () => {

  const projects = [
    {
      img: intern,
      title: "Internship",
      desc: "Completed Mindtree’s internship on MERN stack from 14th march 2022 to 12th june 2022.",
      link: intern,
    },
    {
      img: Booking,
      title: "Booking Website",
      desc: "It is a tour package and hotel room booking website. Front-end, back-end, and database are done with React.js, Node.js, and Mongo.db, respectively.",
      link: Booking,
    },
    {
      img: Eshop,
      title: "Ecommerce Website",
      desc: "In this website, The products are just displayed using React-Redux for state management.",
      link: Eshop,
    },
    {
      img: Course ,
      title: "React.js & Redux Course",
      desc: "In this course, I have learned React 17 and Redux concepts with hands-on experience in pluralsight.",
      link: Course,
    },
    
  ]

  return (
    <Element className='projectcontainer' id="projects">
      
      <h1>Projects & Certifications</h1>
      <p>Here the some of my projects & Certifications are displayed below  </p>
      
      <div className="projectcontainer__projects" oncontextmenu="return false;">
        {
          projects.map((project, index) => {
            return(
            <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link} />
          )
        }
          )
        }
      </div>
    </Element>
  )
}

export default ProjectContainer