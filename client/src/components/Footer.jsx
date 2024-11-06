import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { BiLogoAdobe } from "react-icons/bi";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='logo mx-2'>
                    <img  src={assets.app_icon} alt="" width={'20px'}/>
                    <h4>Brush.<span className='logo_span'>Ai</span></h4>
         </div>
         <p className='flex-1 border-1 border-gray-400 pl-4 text-gray-500 footr'>| Copyright &#169; 2024 All right reserved. </p>
         <div className='flex gap-1 ficons'>
            <p><FaInstagram/></p>
            <p><FaXTwitter/></p>
            <p><FaGooglePlusG/></p>
            <p><BiLogoAdobe/></p>
         </div>


    </div>
  )
}

export default Footer