import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';

const Studentfrom = () => {
    const { handleSubmit, register, reset, control } = useForm();
    const {user,loading,setUser}=useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = (data) => {
      console.log(data);
      fetch(`http://127.0.0.1:8000/api/userinfoset`,
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
            toast.success("successfully added")
            setUser(data);
            navigate("/home")
            console.log(data);
             })
        
    }
    return (
        <div>
             <div className=' w-full flex justify-between items-center pt-14 gap-5'>
      <div className='w-1/2'>
        <img src="https://i0.wp.com/simply.coach/wp-content/uploads/2021/03/hm-confidentiality.gif?fit=308%2C384&ssl=1" className='h-full w-full' alt='' />
      </div>
      <div className='w-full grid place-items-center'>
        <div className='bg-[#f6f5f5b9] rounded-lg grid place-items-center p-10'>
          <h1 className='mb-10 font-medium text-2xl'>Student Registration</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='space-y-3 w-full'>
                <div className="flex items-center gap-6">
              <div className='w-full flex flex-col items-start'>
                <label htmlFor='name' className='ml-1'>
                  name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  value={user.user.U_username}
                  {...register("name")}
                  className="read-only:bg-gray-200"
                  readOnly
                />
              </div>
              <div className='w-full flex flex-col items-start'>
                <label htmlFor='email' className='ml-1'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  value={user.user.U_email}
                  {...register("email")}
                  className="read-only:bg-gray-200"
                  readOnly
                />
              </div>
              </div>
              <div className="flex items-center gap-6">
              <div className='w-full flex flex-col items-start'>
                <label htmlFor='phone' className='ml-1'>
                  Mobile number
                </label>
                <input
                  type='text'
                  name='phone'
                  id='phone'
                  {...register("phone")}
                />
              </div>
              <div className='w-full flex flex-col items-start'>
                <label htmlFor='address' className='ml-1'>
                  Address
                </label>
                <input
                  type='text'
                  name='address'
                  id='address'
                  {...register("address")}
                />
              </div>
              
                <input
                  type='hidden'
                  name='role'
                  id='role'
                  value="student"
                  {...register("role")}
                  className=" hidden"
                  readOnly
                />
                <input
                  type='hidden'
                  name='user_id'
                  id='user_id'
                  value={user.user.id}
                  {...register("user_id")}
                  className=" hidden"
                  readOnly
                />
              </div>
              <div className="flex items-center gap-6">
              <div className='w-full flex flex-col items-start'>
                <label htmlFor='Education' className='ml-1'>
                  Education
                </label>
                <input
                  type='text'
                  name='Education'
                  id='Education'
                  {...register("Education")}
                />
              </div>
              <div className='w-full flex flex-col items-start'>
                <label htmlFor='address' className='ml-1'>
                  Gender
                </label>
                <select {...register("gender")}>
                  <option value="Male">Male</option>
                  <option value="FeMale">FeMale</option>
                  <option value="Other">Other</option>
                
            </select>
              </div>
              </div>
              
              <div className='!mt-8 '>
                <button
                  type='submit'
                  className='font-bold text-white py-3 rounded-full bg-primary w-full disabled:bg-gray-300 disabled:cursor-not-allowed'
                >
                  Submit
                </button>
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

export default Studentfrom;