import React from 'react'
import {useForm} from "react-hook-form"
import { useDispatch } from 'react-redux';
import { registerUser } from './store';
import { useNavigate } from 'react-router-dom';

import "./SignUp.css"

function SignUp() {
    const Navigate=useNavigate()
      const dispatch=useDispatch();
      let {register,handleSubmit}=useForm();
      const myfunc=(data)=>{
          dispatch(registerUser(data));
        alert("registered successfully")
         Navigate("/signin")
      }
  return (
    <>
    <form className='form' onSubmit={handleSubmit(myfunc)}>
      <h1>Register</h1>
          <input type="text" placeholder='enter username' required {...register("username")}/>
           <input type="password" placeholder='enter password' required {...register("password")}/>
            <input type="tel" placeholder='enter mobile' maxLength="10" required {...register("mobile")}/>
             <input type="Email" placeholder='enter email' required {...register("email")}/>
             <button type='submit'>Register</button>
    </form>
    </>
  )
}

export default SignUp
