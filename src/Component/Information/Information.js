import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Information.css'

const Information = () => {
    const {project} = useParams([])
    const [details, setDetails] = useState([])

    useEffect( () => {
        fetch('/Project.json')
        .then(res=>res.json()) 
        .then(data => setDetails(data))
        // .then(data => console.log(data))
    } ,[])

    const product = details.find(pd => pd.id == project)
    console.log(product)
    
    return (
        <div className='first-container'>
        <div className='img-style'>
        <img width="200px" src={product?.img} alt="" />
        <img width="200px" src={product?.img1} alt="" />
        <img width="200px" src={product?.img2} alt="" />
        <img width="200px" src={product?.img3} alt="" />
        </div>
        <h2>this is all informatioin:{project}</h2>
        <h3>Name : {product?.name}</h3>
       <button>
       <a href={product?.live} target="_blank" className='link-style'>Visit the side</a>
       </button>

        <h3>Description : {product?.describtion}</h3>
    </div>
    );
};

export default Information;