import React from 'react'
import { FaUpload } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { PiSelectionBackgroundBold } from "react-icons/pi";
import './Steps.css'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
        <h1 className='text-center text-2xl md:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent'>Steps to remove background <br />image in seconds</h1>
        <div className='flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center '>
            <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500 step_box'>
                <div className='steps_icon'><FaUpload/></div>
                <div>
                    <p className='text-xl font-medium step_head'>Upload Image</p>
                    <p className='text-sm text-neutral-500 mt-1 step_cont'>For best results, choose an image where the subject has clear edges <br /> with nothing overlapping.</p>
                </div>
            </div>

            <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500 step_box'>
                <div className='steps_icon'><PiSelectionBackgroundBold /></div>
                <div>
                    <p className='text-xl font-medium step_head'>Remove Background</p>
                    <p className='text-sm text-neutral-500 mt-1 step_cont'>Our free background remover quickly eliminates backgrounds in seconds.</p>
                </div>
            </div>

            <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500 step_box'>
                <div className='steps_icon'><FaDownload/></div>
                <div>
                    <p className='text-xl font-medium step_head'>Download Image</p>
                    <p className='text-sm text-neutral-500 mt-1 step_cont'>Download your image as a PNG with a transparent background for easy saving or editing in Brush.Ai.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Steps