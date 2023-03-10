import React from 'react'
import './about.css';
import ME from '../../assets/2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const about = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div about__me-image>
            
             <img src={ME} alt="About me" />
          
          </div>

        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>            
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>            
              <h5>Clients</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>            
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>



          </div>
              <p>
                 Motivation is the key to success. It will be a pleasure to offer my services to any one that need my services.
                 But don't forget to appreciate my services and motivate my efforts. You can also follow me on instagram with 
                 my user name "dr lil_typ", Facebook as "Lily typ", whatsapp "693868906". My priority is not to make money but
                 the satisfaction of the clients or the person requesting any of my services.
              </p>
            
              <a href="#content" className='btn btn-primary'> Let's Talk</a>
  



        </div>


      </div>
       

       
    </section>
  )
}

export default about