import React, {useState, useEffect} from 'react'
import "./SignUpComponentStyle.scss"
import FormInputComponent from "../FormInputComponent/FormInputComponent"
import CustomButton from "../CustomButtonComponent/CustomButtonComponent"
import {auth, createUserProfileDocument} from "../../Firebase/firebase.utils"

const SignUpComponent = () => {

    const [displayName,setDisplayName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [info, setInfo] = useState({
        displayName: displayName,
        email: email,
        password: password,
        confirmPassword: confirmPassword
      })





     const handleSubmit = async event => {
        event.preventDefault()
        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }
        try {
          const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
          );
    
          await createUserProfileDocument(user, { displayName });

          setInfo({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
          });
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
         setInfo({
            displayName: displayName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
          })
        
      },[displayName, email, password, confirmPassword])


    const handleChangeName = event => {
        setDisplayName(event.target.value)
      };
      
    const handleChangeEmail = event => {
        setEmail(event.target.value)

    };

    const handleChangePassword = event => {
        setPassword(event.target.value)

    };

    const handleChangeConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    };


    return (
        <div className='sign-up'>
          <h2 className='title'>I do not have a account</h2>
          <span>Sign up with your email and password</span>
          <form className='sign-up-form' onSubmit={handleSubmit}>
            <FormInputComponent
              type='text'
              name='displayName'
              value={displayName}
              onChange={handleChangeName}
              label='Display Name'
              required
            />
            <FormInputComponent
              type='email'
              name='email'
              value={email}
              onChange={handleChangeEmail}
              label='Email'
              required
            />
            <FormInputComponent
              type='password'
              name='password'
              value={password}
              onChange={handleChangePassword}
              label='Password'
              required
            />
            <FormInputComponent
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={handleChangeConfirmPassword}
              label='Confirm Password'
              required
            />
            <CustomButton type='submit'>SIGN UP</CustomButton>
          </form>
        </div>
      );
}

export default SignUpComponent
