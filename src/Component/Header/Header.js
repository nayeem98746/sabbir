import { Close, MenuOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    const [active, setActive] = useState(false)
    const showMenu = () => {
        setActive(!active)
    }


    return (
        <div className='header'>

            <div className='header-logo'>
                <h1>SABBIR</h1>
            </div>

            <nav className={ active ? 'navbar active':'navbar'}>
                <ul>
                    <div className="closed">
                       <Close className='close' onClick={showMenu} /> 
                    </div>

                    <li>
                        <Link to='/home' >Home</Link>
                    </li>
                    <li>
                        <Link to='/about' >About</Link>
                    </li>
                    <li>
                        <Link to='/blog' >Blog</Link>
                    </li>
                    <li>
                        <Link to='/projects' >Projects</Link>
                    </li>
                    <li>
                        <Link to='/contact' >Contact</Link>
                    </li>



                </ul>
            </nav>

            <div className='changer'>
                <MenuOutlined onClick={showMenu} className='menu' ></MenuOutlined>
            </div>

        </div>
    );
};

export default Header;