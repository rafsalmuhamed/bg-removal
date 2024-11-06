import React from 'react'
import { assets } from '../assets/assets'
import './Header.css'
import videoFile from '../assets/bgvdo.mp4';

const Header = () => {

  return (
    <div
    
     className='flex item-center px-6 justify-between max-sm:flex-col-reverse gap-y-10 mt-10 lg:px-44 sm:mt-20 '>
        {/* ---------left side------- */}
        <div >
            <h1 className='header_main text-4xl xl:text-5xl font-bold text-neutral-700 leading-normal '>Remove the <br className='max-md:hidden' /><span className='bg-gradient-to-r from-indigo-500 via-teal-500 to-pink-600 bg-clip-text text-transparent '>Background</span> from <br className='max-md:hidden'/>images for free.</h1>
            <p className='my-6 text-[15px] text-gray-500 para'>Unlock the full potential of your images with our easy-to-use background removal tool. <br className='max-sm:hidden' />Perfect for creating stunning visuals in seconds.No design skills required! </p>
            <div className='button_add_image'>
                <input type="file" name='' id='upload1' hidden/>
                <label className=' inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-purple-500  to-sky-500 m-auto hover:scale-105 transition-all duration-700' htmlFor="upload1">
                    <img  width={20} src={assets.upload_btn_icon} alt="" />
                    <p>Upload your image</p>
                </label>
            </div>

        </div>
        {/* ------rightside------ */}
        <div className='w-full max-w-md'>
        <video width="500" autoPlay muted loop>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

        </div>
    </div>
  )
}

export default Header