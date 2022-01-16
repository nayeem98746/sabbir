import { ArrowBack } from '@mui/icons-material';
import React, { useState } from 'react';
import  { useRef } from 'react';

import emailjs from '@emailjs/browser';

import './Contact.css'

const Result = () => {
    return (
        <p style={{color:'white'}} >Your massage han been successfully</p>
    )
}

const Contact = () => {
    const [result, setResult] = useState(false)
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_gcr8uyl', 'template_k2c9fth', e.target, 
        'user_5r3IJEZNxEuOSWPgOFFVQ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        setResult(true)
    }

    return (
        <div className='contact'>
            <div className="arrow-home">
            {/* <Link to='/'><ArrowBack className='arrow'/></Link> */}
        </div>
      
                
            <form ref={form} onSubmit={sendEmail}>
                <label>Your Name</label>
                <input type="text" name="fullName" placeholder='Enter Your Name'/>
                <label>Email</label>
                <input type="text" name='email'  placeholder='Enter your Email' required/>
                <label>Phone Number</label>
                <input type="number" name='phone'  placeholder='Phone Number'/>
                <label>Message</label>
                <textarea placeholder='e.g Hello' id="" name='massage' required></textarea>

                <button type='submit' value='send'  >Send</button>
                <div>
                    { result ? <Result /> : null }
                </div>

        </form>
        </div>
    );
};

export default Contact;