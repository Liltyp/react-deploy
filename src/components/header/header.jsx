import React from 'react'
import './header.css';
import CTA from './CTA';
import ME from '../../assets/3.jpg';
import HeaderSocial from './HeaderSocials';


const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h2>Tchoutezo Ymele Peterson</h2>
        <h5 className="text-light" >Software Developer</h5>
        <CTA />
        <HeaderSocial/>
        <div className='me'>

          
         
        </div>

        
        <a href="#contact" className='scroll__down'> Scroll Down</a>
        
      
      </div>
    </header>
  )
}

export default header