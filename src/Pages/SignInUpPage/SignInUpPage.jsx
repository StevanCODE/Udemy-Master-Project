import React from 'react'
import SignInComponent from '../../Components/SignInComponent/SignInComponent'
import SignUpComponent from '../../Components/SignUpComponent/SignUpComponent'
import "./SignInUpPageStyle.scss"
const SignInUpPage = () => {
    return (
        <div>
            <div className='SignUp'>
                <div className= "signInDiv">
                <SignInComponent  />
                </div>
                <div className= "signUpDiv">
                <SignUpComponent/>
                </div>
            </div>
        </div>
    )
}

export default SignInUpPage
