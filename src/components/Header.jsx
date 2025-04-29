import React from 'react'
import logo from '../assets/images/logo.png'
import { removeUser } from './utils/redux/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () =>{

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSignOut = () => {
        dispatch(removeUser())
        navigate('/')
    }

    return(
        
        <div className='absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10  flex justify-between'>
                <img
                    className='w-44' 
                    src={logo} 
                    alt='logo' />    
            <div className='flex p-2 items-center  '>
                <img 
                    className='w-12 h-12 '
                    src="https://cdn-icons-png.flaticon.com/128/10307/10307911.png"
                    alt="usericon" />
                <button
                    className='text-bold text-white'
                    onClick={handleSignOut}
                    >Sign OUt</button>
            </div>
        </div>



        
    )
}

export default Header