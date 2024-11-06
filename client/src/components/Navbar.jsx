import React from 'react'
import {assets} from '../assets/assets'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'


const Navbar = () => {

  const {openSignIn} = useClerk()

  const{isSignedIn, user } = useUser()
  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44 navbar'>
       
           <Link to='/'>
                <div className='logo'>
                    <img  src={assets.app_icon} alt=""width={'35px'}/>
                    <h1>Brush.<span className='logo_span'>Ai</span></h1>
                </div>
           </Link>
       {
        isSignedIn?
        <div>
          <UserButton/>
        </div>
       :
        <button onClick={()=>openSignIn({})} className='bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full navbarbtn '>
            Get started
            <img className='w-3 sm:w-4' src={assets.arrow_icon} alt="" />

        </button>
}
    </div>
  )
}

export default Navbar