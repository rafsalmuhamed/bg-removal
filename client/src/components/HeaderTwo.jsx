import React from 'react'
import { assets } from '../assets/assets'
const HeaderTwo = () => {
  return (
    <div className='flex item-center px-6 justify-between max-sm:flex-col-reverse gap-y-10 mt-10 lg:px-44 sm:mt-20 '>
        {/* left side */}
        <div className='w-full max-w-md' >
            <img src={assets.bgimg} alt="" />

        </div>
        {/* rightside */}
        <div>
            <h1 className='header_main text-3xl xl:text-5xl font-bold text-neutral-700 leading-normal '>Effortless <br className='max-md:hidden' /> Transparent cutout <br className='max-md:hidden'/>Backgrounds.</h1>

            <p className='my-6 text-[15px] text-gray-500 para'>Struggling with a difficult photo background? Our free background remover app lets you effortlessly isolate the subject,  <br className='max-sm:hidden' />creating a clean, distraction-free image. This way, you can seamlessly integrate it into any design and achieve a natural look! </p>

        </div>
    </div>
  )
}

export default HeaderTwo