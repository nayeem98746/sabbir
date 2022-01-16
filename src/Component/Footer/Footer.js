import { Facebook, GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer' >
          <div className='footer-content'>
          <h3>Sabbir Ahmed Nayeem</h3>
            <p>My full name is sabbir ahmed nayeem . I am a web Developer in React. </p>
            <ul className='socials'>
                <li><a href="https://www.facebook.com/sabbirahmed.nayeem.10"><Facebook></Facebook></a></li>
                <li><a href="https://github.com/nayeem98746"><GitHub></GitHub></a></li>
                <li><a href="https://www.instagram.com/sabbirahmednayeem/"><Instagram></Instagram></a></li>
                <li><a href="https://www.linkedin.com/in/sabbir-ahmed-b98b0a226/"><LinkedIn></LinkedIn></a></li>
                </ul>    
            </div> 
            <div className='footer-button'>
            <p>Copyright and copy © 2020 codeOpacity.</p>    
            </div>         
        </div>
    );
};

export default Footer;