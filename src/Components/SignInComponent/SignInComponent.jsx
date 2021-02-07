import React, {useState,useEffect} from 'react'
import CustomButton from '../CustomButtonComponent/CustomButtonComponent'
import FormInputComponent from '../FormInputComponent/FormInputComponent'
import "./SignInComponentStyle.scss"
import { auth, signInWithGoogle } from "../../Firebase/firebase.utils"

const SignInComponent = () => {
  
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [credentials, setCredentials] = useState({
        email: email,
        password: password
      })

      
    useEffect(() => {
        setCredentials({
          email: email,
          password: password
        })
    },[email,password])


    const handleSubmit = async event => {
        event.preventDefault();

        try {
          await auth.signInWithEmailAndPassword(email,password)
          setCredentials({ email: '', password: '' });
        }
        catch(error){
          console.log(error)
        }

    }

    const handleChangeEmail = event => {
        setEmail(event.target.value);
      }

    const handleChangePassword = event => {
        setPassword(event.target.value);
      }




    return (
        <div className='sign-in'>
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>
  
          <form onSubmit={handleSubmit}>
          <FormInputComponent
              name='email'
              type='email'
              handleChange={handleChangeEmail}
              value={credentials.email}
              label='email'
              required
            />
      
            <FormInputComponent
              name='password'
              type='password'
              handleChange={handleChangePassword}
              value={credentials.password}
              label='password'
              required
            />
            <div className="buttons">
              <CustomButton type='submit'> Sign in </CustomButton>
              <CustomButton onClick = {signInWithGoogle} isGoogleSignIn = "true"> Sign in With Google </CustomButton>
            </div>
          </form>
        </div>
    )
}

export default SignInComponent
