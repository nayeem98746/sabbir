import React from 'react';
import css from '../../Images/another img/css3.jpg'
import js from '../../Images/another img/js.png'
import Reactimg from '../../Images/another img/React.js.png'
import nodeimg from '../../Images/another img/node.js.png'
import './Blog.css'

const Blog = () => {
    return (
        <div className='main-blog'>
           <div style={{margin:'20px'}}>
               <a href="https://drive.google.com/file/d/1Dj36HZf812BDd9OpPyRrl9L9SFZ4vBoP/view?usp=sharing"><img width='150px' src={css} alt="" /></a>
               
           </div>
           <div style={{margin:'20px'}}>
               <a href="https://drive.google.com/file/d/1pK6ZgPVqegVKPFqieedq21snkaXK7FGz/view?usp=sharing"><img width='150px' src={js} alt="" /></a>
               
           </div>
           <div style={{margin:'20px'}}>
               <a href="https://drive.google.com/file/d/11bNNoJDsVnn_EcNeMKE0vmUSOcd8uRIX/view?usp=sharing"><img width='150px' src={Reactimg} alt="" /></a>
               
           </div>
           <div style={{margin:'20px'}}>
               <a href="https://drive.google.com/file/d/1CRdQ0Fh4mwjebsAauMCdSXtQ2Pbj5g-x/view?usp=sharing"> <img width='150px' src={nodeimg} alt="" /></a>
              
           </div>
        </div>
    );
};

export default Blog;