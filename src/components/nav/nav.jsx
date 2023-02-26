import React from 'react'
import './nav.css';
import {IoHome} from 'react-icons/io5'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {AiFillMessage} from 'react-icons/ai'





const nav = () => {
  return (
    <nav>

      <a href="#"><IoHome/></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><BiBook /></a>
      <a href="#services"><RiServiceFill /></a>
      <a href="#contact"><AiFillMessage /></a>


    </nav>
  )
}

export default nav