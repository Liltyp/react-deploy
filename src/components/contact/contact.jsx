import React from 'react'
import './contact.css';
import {MdOutlineEmail } from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com' 
 


const contact = () => {
  function sendEmail(e) {

    e.preventDefault();

    emailjs.sendForm('service_cgrqo6n', 'template_ssv64qb', e.target, 'uEOEyRyGLS62ekCsy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  

  return (
   <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>liltyp8@gmail.com</h5>
            <a href="mailto:liltyp8@gmail.com" target='_blank'>Send a message</a>

          </article>

          <article className='contact__option'>
            
            <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>Lily typ</h5>
            <a href="https://m.me/profile.php?id=100085041891626" target='_blank'>Send a message</a>

          </article>

          <article className='contact__option'>
            
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>+237693868906</h5>
            <a href="https://api.whatsapp.com?send?phone+237693868906" target='_blank'>Send a message</a>
          </article>





        </div>
        <form  onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button  type='submit' className='btn btn-primary' >Send Message</button>
     

          
        </form>



      </div>

   </section>
  )
}

export default contact