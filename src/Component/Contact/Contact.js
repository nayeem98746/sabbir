import { ArrowBack } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'

const Contact = () => {

    return (
        <div className='contact'>
            <div className="arrow-home">
            <Link to='/'><ArrowBack className='arrow'/></Link>
        </div>
      
                
            <form>
                <label>Your Name</label>
                <input type="text" placeholder='Enter Your Name'/>
                <label>Email</label>
                <input type="text" placeholder='Enter your Email' required/>
                <label>About You</label>
                <input type="text" placeholder='e.g a Developer'/>
                <label>Message</label>
                <textarea placeholder='e.g Hello' id="" cols="50" rows="7" required></textarea>

                <button type='submit' value='send' >Send</button>

        </form>
        </div>
    );
};

export default Contact;