import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import { useDispatch } from 'react-redux';
import { registerUser } from './store';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import "./SignUp.css"

function SignUp() {
  const [preview,setPreview]=useState();
    const Navigate=useNavigate()
      const dispatch=useDispatch();
      let {register,handleSubmit}=useForm();
     const myfunc = (data) => {
  dispatch(registerUser({ ...data,
    profileImage: preview,}));
};

  return (
    <>
    <form className='form' onSubmit={handleSubmit(myfunc)}>
      <h1>Register</h1>
       <p id="messege"></p>
          <input type="text" placeholder='enter username' required {...register("username")}/>
           <input type="password" placeholder='enter password' required {...register("password")}/>
            <input type="tel" placeholder='enter mobile' maxLength="10" required {...register("mobile")}/>
             <input type="Email" placeholder='enter email' required {...register("email")}/>
             <input
  type="file"
  accept="image/*"
  {...register("profileImage", {
    required: true,
    onChange: (e) => {
      const file = e.target.files[0];
      if (file) {
        setPreview(URL.createObjectURL(file));
      }
    },
  })}
 />

{preview && (
  <img
    src={preview}
    alt="Preview"
    style={{ width: "100px", height: "100px", objectFit: "cover", marginTop: "10px", borderRadius: "8px" }}
  />
)}

             <button type='submit'>Register</button>
             <Link  to="/signin" id="login"></Link>
    </form>
    </>
  )
}

export default SignUp
