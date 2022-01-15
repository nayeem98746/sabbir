import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'

const Project = ({project}) => {
    const {id, name, img} = project
    return (
        <div className="service ">
        <img width="300px" className='img-style' src={img} alt="" />
        <h3 className='name-text' >{name}</h3>
        <Link to={`/information/${id}`} ><button className="btn-class">information{name.toLowerCase()} </button></Link>
    </div>
    );
};

export default Project;
