import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Contact = () => {
  const Theme = useContext(themeContext);
  const darkMode = Theme.state.darkMode;

  const form = useRef();

  const [done, setDone] = useState(false)
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w4pm6lr', 'template_kaespu7', form.current, 'zrcMSYzsz8kHfMwnd')
      .then((result) => {
          console.log(result.text);
          setDone(true);
          setUserName('');
          setUserEmail('');
          setUserMessage('');
      }, (error) => {
          console.log(error.text);
      });
  };
   




  return (
    <div className="contact">
        {/* left side */}
        <div className="awesome git">
            <span style={{color: darkMode? 'white' : ''}} >Get in Touch </span> 
            <span>Contact me </span>
            <div className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
            ></div>
        </div>

        {/* right side */}
        <div className="r-contact">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='user_name' className='user' placeholder='Name' value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <input type="email" name='user_email' className='user' placeholder='Email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
            <textarea name='message' className='user' placeholder='Message' value={userMessage} onChange={(e) => setUserMessage(e.target.value)}/>
            <input type="submit" value="send" className='mine button' />
            <span style={{ color: "green" }}>{done && "Thanks for contacting me 😊"}</span>

            <div className="blur c-blur1"
            style={{ background: "var(--purple)" }}
            ></div>
          </form>
        </div>
    </div>
  )
}

export default Contact