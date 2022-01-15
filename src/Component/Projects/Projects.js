import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';
import './Projects.css'

const Projects = () => {
    const [projects, setProjects]= useState([])

    useEffect( () => {
        fetch('/Project.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    } ,[])
    return (
        <div className='bg-color'> 
        <div className="row">
        <h2 className="text-style"> MY PROJECTS</h2>
        <div className="service-container">
            {
                projects.map(project => <Project
                key={project.id}
                project={project}
                ></Project>)
            }
        
        </div>
        
    </div>
    </div>
    );
};

export default Projects;