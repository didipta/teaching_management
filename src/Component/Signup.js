import React, { useEffect, useState } from "react";

import { useForm, useWatch } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Header from "./Layout/Header";
const Signup = () => {
  const { handleSubmit, register, reset, control } = useForm();
  const password = useWatch({ control, name: "password" });
  const confirmPassword = useWatch({ control, name: "confirmPassword" });
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (
      password !== undefined &&
      password !== "" &&
      confirmPassword !== undefined &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, confirmPassword]);

  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://127.0.0.1:8000/api/signup`,
        {
            method:"POST",
            headers: {
              'content-type': 'application/json'
          },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success("Successfully added")
            reset();
            console.log(data);
             })
  };

  return (
    <div>
      <div className="w-8/12 mx-auto mt-2">
        <Header></Header>
      </div>
      <div className='flex items-center pt-14'>
      <div className='w-1/2'>
        <img src="https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/file-teaching-skills-1605625101.jpg" alt=""></img>
      </div>
      <div className='w-1/2 grid place-items-center'>
        <div className='bg-[#FFFAF4] rounded-lg grid place-items-center p-10'>
          <h1 className='mb-10 font-medium text-2xl'>Sign up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='space-y-3'>
              <div className='flex flex-col items-start'>
                <label htmlFor='Name' className='ml-5'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  {...register("name", { required: true })}

                />
              </div>
              <div className='flex flex-col items-start'>
                <label htmlFor='email' className='ml-5'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  {...register("email", { required: true })}
                />
              </div>

              <div className='flex flex-col items-start'>
                <label htmlFor='password' className='ml-5'>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  {...register("password", { required: true })}
                />
              </div>
              <div className='flex flex-col items-start'>
                <label htmlFor='confirm-password' className='ml-5'>
                  Confirm Password
                </label>
                <input
                  type='password'
                  id='confirm-password'
                  {...register("confirmPassword", { required: true })}
                />
              </div>
              <div className='!mt-8 '>
                <button
                  type='submit'
                  className='font-bold text-white py-3 rounded-full bg-primary w-full disabled:bg-gray-300 disabled:cursor-not-allowed'
                  disabled={disabled}
                >
                  Sign up
                </button>
              </div>
              <div>
                <p>
                  Already have an account?{" "}
                  <span
                    className='text-primary hover:underline cursor-pointer'
                    onClick={() => navigate("/")}
                  >
                    Login
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Toaster
            className="z-50"
        position="bottom-right"
        reverseOrder={false}
        />
    </div>
    </div>
   
  );
};

export default Signup;
