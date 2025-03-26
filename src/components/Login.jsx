import React from 'react'
import Header from './Header'
import BackgroundImage from '../assets/images/MainBackground.webp'
import { useState } from 'react'

const Login = () => {

    const [isSignInForm, setSignInForm] = useState(true)

    const toggleSignInForn = () =>{
        setSignInForm(!isSignInForm)
    }


    return (
        <div>
            <Header/>
            <div className='absolute w-full'>
                <img src= {BackgroundImage} alt="background" 
                className='w-full'/>
            </div>
            <form 
                className='absolute p-12 bg-black/85 w-3/12 my-40 mx-auto right-0 left-0 text-white bg-opacity-50 '>
                <h1 
                    className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm &&(
                     <input type="text" placeholder='Full Name' 
                     className='p-2 my-4 w-full bg-gray-700'
                 />
                )}
                <input type="text" placeholder='email address' 
                    className='p-2 my-4 w-full bg-gray-700'
                />
                <input type='password' placeholder='enter password' 
                    className='p-2 my-4  w-full bg-gray-700'>     
                </input>
                <button 
                    className='p-4 my-6 bg-red-700 w-full rounded-lg '
                    >{isSignInForm ? "Sign In":"Sign Up"}
                </button>
                <p className='py-4 cursor-pointer'
                 onClick={toggleSignInForn}>{isSignInForm ? "Don't have an accuount?  Sign UP" : "Already have an account? Sign In"}</p>
            </form>
        </div>
    )
}

export default Login

