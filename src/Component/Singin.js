import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Context/Authprovider';
import Header from './Layout/Header';

const Singin = () => {
    const { register, handleSubmit, reset } = useForm();
    const { setUser, setLoading}=useContext(AuthContext);
    const [error,seterror]=useState("");
    const navigate = useNavigate();
    const onSubmit = (data) => {
      console.log(data);
      fetch(`http://127.0.0.1:8000/api/signin`,
        {
            method:"POST",
            headers: {
              'content-type': 'application/json'
          },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            reset();
            localStorage.setItem('teaching-email', data.user.U_email);
            setUser(data);
            navigate("/home")
            setLoading(false)
            console.log(data);
             })
         .catch(e=>{
            seterror("please Check you email and password")
         })
             
        
    };
  
    return (
        <div>
            <div className="w-8/12 mx-auto mt-2">
        <Header></Header>
      </div>
          <div className='flex items-center'>
      <div className='w-1/2'>
      <img src="https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/file-teaching-skills-1605625101.jpg" alt=""></img>
      </div>
      <div className='w-1/2 grid place-items-center'>
        <div className='bg-[#FFFAF4] rounded-lg grid place-items-center p-10'>
          <h1 className='mb-10 font-medium text-2xl'>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='space-y-3'>
              <div className='flex flex-col items-start'>
                <label htmlFor='email' className='ml-5'>
                  Email
                </label>
                <input type='email' {...register("email")} id='email' />
              </div>
              <div className='flex flex-col items-start'>
                <label htmlFor='password' className='ml-5'>
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  {...register("password")}
                />
              </div>
              <div className='relative !mt-8'>
                <button
                  type='submit'
                  className='font-bold text-white py-3 rounded-full bg-primary w-full'
                >
                  Login
                </button>
              </div>
              
                {
                    error!==""&&  <div><p className="text-xs text-red-500">{error}</p></div>
                }
              
              <div>
                <p>
                  Don't have an account?{" "}
                  <span
                    className='text-primary hover:underline cursor-pointer'
                    onClick={() => navigate("/signup")}
                  >
                    Sign up
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
        </div>
       
    );
};

export default Singin;