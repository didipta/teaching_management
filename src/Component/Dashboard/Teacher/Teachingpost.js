import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';

const Teachingpost = () => {
    const { handleSubmit, register, reset, control } = useForm();
    const {user,loading,setUser}=useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = (data) => {
      console.log(data);
      fetch(`http://127.0.0.1:8000/api/Teachinpost`,
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
            console.log(data);
             })
        
    }
    return (
        <div>
             <div className=' w-full'>
      <div className='w-full grid place-items-center'>
        <div className='bg-[#f6f5f5b9] rounded-lg grid place-items-center p-10'>
          <h1 className='mb-10 font-medium text-2xl'>Teachering Post</h1>
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
                  value={user?.userinfo?.phone}
                  {...register("phone")}
                  className="read-only:bg-gray-200"
                  readOnly
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
                  value={user?.userinfo?.address}
                  {...register("address")}
                  className="read-only:bg-gray-200"
                  readOnly
                />
              </div>
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
                  value={user?.userinfo?.Education}
                  {...register("Education")}
                  className="read-only:bg-gray-200"
                  readOnly
                />
              </div>
              <div className='w-full flex flex-col items-start'>
                <label htmlFor='Area' className='ml-1'>
                Area
                </label>
                <input
                  type='text'
                  name='Area'
                  id='Area'
                  {...register("Area")}
                />
              </div>
              
              </div>
              <div className="flex items-center gap-6">
              <div className='w-full flex flex-col items-start'>
                <label htmlFor='Title' className='ml-1'>
                  Post Title
                  </label>
                <input
                  type='text'
                  name='Title'
                  id='Title'
                  {...register("Title")}
                />
              </div>
              <div className='w-full flex flex-col items-start'>
                <label htmlFor='Position' className='ml-1'>
                Position
                </label>
                <input
                  type='text'
                  name='Position'
                  id='Position'
                  {...register("Position")}
                />
              </div>
              </div>
              <div className="flex items-center gap-6">
              <div className='w-full flex flex-col items-start'>
                <label htmlFor='Dutytime' className='ml-1'>
                Duty time
                </label>
                <input
                  type='text'
                  name='Dutytime'
                  id='Dutytime'
                  {...register("Dutytime")}
                />
              </div>
              <div className='w-full flex flex-col items-start'>
                <label htmlFor='Subject' className='ml-1'>
                Subject
                </label>
                <input
                  type='text'
                  name='Subject'
                  id='Subject'
                  {...register("Subject")}
                />
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

export default Teachingpost;