import React from 'react'
import './services.css';
import {BiCheck} from 'react-icons/bi'



const services = () => {
  return ( 
   <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>

            <h3>UX Deign</h3>

          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/> 
              <p>Brand and Design System Development </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/> 
              <p>Wireframes</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/> 
              <p>Design Technology Consulting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/> 
              <p>Software Redesign</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/> 
              <p>Cross-Platform Compatibility</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/> 
              <p>Mobile and Web User Interface Design</p>
            </li>
          
          </ul>

        </article>
        <article className='service'>
          <div className='service__head'>

            <h3>Web design</h3>

          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/> 
              <p>Web Development Support and Maintenance </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/> 
              <p>Web Hosting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/> 
              <p>Web Optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/> 
              <p>Web Redesign</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/> 
              <p>Logo Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/> 
              <p>Landing Pages</p>
            </li>
          
          </ul>

        </article>
        <article className='service'>
          <div className='service__head'>

            <h3>Content Creation</h3>

          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/> 
              <p>Social Media Posts </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/> 
              <p>Blogs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/> 
              <p>Newsletters</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/> 
              <p> White Papers</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/> 
              <p>Emails</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/> 
              <p>Videos</p>
            </li>
          
          </ul>

        </article>
      </div>


   </section>
  )
}

export default services