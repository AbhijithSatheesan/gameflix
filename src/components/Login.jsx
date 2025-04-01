import React from 'react'
import Header from './Header'
import BackgroundImage from '../assets/images/MainBackground.webp'
import { useState, useRef } from 'react'
import { checkValidData } from './utils/validate'
import { register_api, login_api} from './utils/backendconfig'
import { signIn, signUp } from './utils/authService'
import { addUser } from './utils/redux/userSlice'
import { useDispatch } from 'react-redux'


const Login = () => {

//  Track the form type using useState Hook
    const [isSignInForm, setSignInForm] = useState(true)

//  Track errormessage using useState Hook
    const [errorMessage, setErrorMessage] = useState(null)

//  Track the entered email and password using useRef hook
    const email = useRef(null)
    const password = useRef(null)
    const username = useRef(null)

// Initialize the useDispatch hook
    const dispatch = useDispatch()

    //  Handle the button click event
    const handleButtonClick = async () =>{

        

        const message = checkValidData(email.current.value, password.current.value)
        console.log(message)

    //  set the error message
        setErrorMessage(message)

    // so if form validation is complete then message will be null and we can proceed to next step

    // if there is message we should return and not proceed to next step
        if(message) return
        
        // SignIn/SignUp logic
        try {
            if (isSignInForm) {
                // Call signIn utility function
                const data = await signIn(login_api, email.current.value, password.current.value);
                console.log('Sign-in successful:', data);

                // Dispatch the addUser action to update the user state
                
                dispatch(addUser(data))

                setErrorMessage(data.message || 'Sign-in successful')
                // Handle successful sign-in
            } else {
                // Call signUp utility function
                const data = await signUp(register_api, email.current.value, password.current.value, username.current.value);
                console.log('Sign-up successful:', data);

                // add the newly made user to the state
                dispatch(addUser(data))
                
                setErrorMessage(data.message || 'Sign-up successful')
                // Handle successful sign-up
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    }

//  Toggle between sign in and sign up form
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
                onSubmit={(e) => e.preventDefault()}
                className='absolute p-12 bg-black/85 w-3/12 my-40 mx-auto right-0 left-0 text-white bg-opacity-50 '>
                <h1 
                    className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm &&(
                     <input type="text" 
                        ref={username}
                        placeholder='Full Name' 
                        className='p-2 my-4 w-full bg-gray-700'
                 />
                )}
                <input 
                // Added ref attribute to the email input field
                    ref={email}
                    type="text" 
                    placeholder='email address' 
                    className='p-2 my-4 w-full bg-gray-700'
                />
                <input 
                    ref={password}
                    // type='password' placeholder='enter password' 
                    className='p-2 my-4  w-full bg-gray-700'>     
                </input>
                <p
                    className='text-red-500 font-bold text-md py-2'
                    >{errorMessage}</p>
                <button 
                    className='p-4 my-6 bg-red-700 w-full rounded-lg '
                    onClick={handleButtonClick}
                    >{isSignInForm ? "Sign In":"Sign Up"}
                </button>
                <p 
                    className='py-4 cursor-pointer'
                    onClick={toggleSignInForn}>{isSignInForm ? "Don't have an account?  Sign UP" : "Already have an account? Sign In"}</p>
            </form>
        </div>
    )
}

export default Login

