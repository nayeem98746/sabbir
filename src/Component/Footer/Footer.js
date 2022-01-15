import { Facebook, GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import React from 'react';

const Footer = () => {
    return (
        <div >
          <div className='footer-content'>
          <h3>code opacity</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veritatis harum autem placeat rerum quos perferendis sapiente dolore ea natus dolorem suscipit, facere eveniet. Consectetur quia fuga nam neque pariatur.</p>
            <ul className='socials'>
                <li><a href=""><Facebook></Facebook></a></li>
                <li><a href=""><GitHub></GitHub></a></li>
                <li><a href=""><Instagram></Instagram></a></li>
                <li><a href=""><LinkedIn></LinkedIn></a></li>
                </ul>    
            </div> 
            <div>
            <p>Copyright and copy; 2020 codeOpacity. designed by nethunt</p>    
            </div>         
        </div>
    );
};

export default Footer;