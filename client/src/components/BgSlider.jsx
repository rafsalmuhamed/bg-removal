import React, { useState } from 'react'
import { assets } from '../assets/assets'

const BgSlider = () => {

  const [sliderPos, setSliderPos] = useState(50)

  const handleSliderChange = (e) => {
    setSliderPos(e.target.value)
  }

  return (

    <div className='pb-10 md:py-20  mx-6'>
      <h1 className=' mb-10 sm:mb-20 text-center text-1.9xl md:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent'>Remove the Background With High <br />Quality and Accuracy
      </h1>
      <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-xl'>
        {/* bg image */}
        <img src={assets.image_w_bg} style={{clipPath:`inset(0 ${100.2- sliderPos}% 0 0)`}} alt="" />

        {/* foreground image */}
        <img className='absolute top-0 left-0 w-full h-full ' src={assets.image_wo_bg} style={{clipPath:`inset(0  0  0 ${sliderPos}% )`}}
          alt="" />

          {/* slider */}
          <input className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider ' type="range" min={0} max={100} value={sliderPos} onChange={handleSliderChange}/>
      </div>


    </div>
  )
}

export default BgSlider