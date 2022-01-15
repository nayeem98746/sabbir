import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import React from 'react';
import './Main.css'
import img from '../../Images/sabbir.jpg'


const Main = () => {
    return (
        <div className='main'>


<section className='main-section'>
            <div className='container'>


                <div className="texts">
                    <h1>Hello My Name is</h1>
                    <h1 className='h1-big'>SABBIR AHMED</h1>
                    <p>Professional Front-End React js Developer with 2 years of experience </p>
                    <span className='icon-style'>
                   <a href="https://www.facebook.com/sabbirahmed.nayeem.10"> <Facebook className='icon-style'></Facebook></a>
                    <a href='https://www.linkedin.com/in/sabbir-ahmed-b98b0a226/' ><LinkedIn className='icon-style'></LinkedIn></a>
                    <a href="https://www.instagram.com/sabbirahmednayeem/"><Instagram className='icon-style'></Instagram></a>
                    </span><br />
                    <button className='text-button'>About</button>
                    <button className='text-button'>Get Resume</button>
                </div>

                <div className="image">
                    <img src={img} alt="" />
                </div>
            </div>
        </section>


          
        </div>
    );
};

export default Main;