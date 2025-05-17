import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from './store';
import { useNavigate } from 'react-router-dom';
import "./SignUp.css"
function SignIn() {

    const navigate=useNavigate();
    
      const dispatch=useDispatch();
      let {register,handleSubmit}=useForm();
      const myfunc=(data)=>{
          dispatch(loginUser(data));
      }

      const isLogged=useSelector(state=>state.user.isAuthenticate)
          if(isLogged){
            navigate("/home")
          }

  return (
    <>
    <form  className='form'   onSubmit={handleSubmit(myfunc)}>
        <h1>Login</h1>
        <p id="messege"></p>
          <input type="text" placeholder='enter username' required {...register("username")}/>
           <input type="password" placeholder='enter password' {...register("password")}/>
             <button type='submit'  >LogIn</button>
             NewUser?<a href="/SignUp">Register..here</a>
    </form>

    </>
  )
}

export default SignIn