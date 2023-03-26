import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';

const Applyfrom = ({x}) => {
    const { register, handleSubmit, reset } = useForm();
    const {user,loading}=useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
      if( user?.userinfo?.role==="student")
      {
        const datas={
            salary:data.salary,
            timeset:data.timeset,
            user_id:user.user.id,
            post_id:x.post.id
        }
        console.log(datas);
        fetch(`http://127.0.0.1:8000/api/Applypost`,
        {
            method:"POST",
            headers: {
              'content-type': 'application/json'
          },
            body:JSON.stringify(datas)
        })
        .then(res=>res.json())
        .then(data=>{
            reset();
            toast.success("successfully Applyed")
            console.log(data);
             })
      }
      else
      {
      navigate("/home/registation")
      }
        
    }
    return (
        <div>
            {
              !loading&&<>
               <input type="checkbox" id={`model-post`} className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor={`model-post`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <div className="grid gap-3">
                        <img src="https://www.jobstreet.com.ph/career-resources/wp-content/uploads/sites/3/2021/08/Primary-School-Teacher-Career-Path-Guide-2.jpg" alt='' className=' rounded-xl'></img>
                        <h1 className="font-semibold text-blue-900 text-md">{x?.post?.Title}</h1>
                        <div className="flex justify-between items-center text-xs">
                            <p>Position: <span className="font-semibold">{x?.post?.Position}</span></p>
                            <p>Duty time: <span className="font-semibold">{x?.post?.Dutytime}</span></p>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                            <p>Subject: <span className="font-semibold">{x?.post?.Subject}</span></p>
                            <p>Area: <span className="font-semibold">{x?.post?.Area}</span></p>
                        </div>
                        <h1 className="font-semibold text-pink-900 text-md">Teacher information</h1>

                        <div className="flex justify-between items-center text-xs">
                            <p>Name: <span className="font-semibold">{x?.post?.teacherinfo.U_username}</span></p>
                            <p>Email: <span className="font-semibold">{x?.post?.teacherinfo.U_email}</span></p>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                            <p>Modile: <span className="font-semibold">{x?.post?.teacherinfo.userinfo.phone}</span></p>
                            <p>Address: <span className="font-semibold">{x?.post?.teacherinfo.userinfo.address}</span></p>
                        </div>

                      <div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex items-center justify-between gap-2">
                            <p>
                                Salary:
                                <input 
                                type="text"
                                {...register("salary")}
                                className="input input-sm input-bordered input-info w-full max-w-xs"
                                ></input>
                            </p>
                            <p>
                                Time Set:
                                <input 
                                type="text"
                                {...register("timeset")}
                                className="input  input-sm input-bordered input-info w-full max-w-xs"
                                ></input>
                            </p>
                            
                        </div>
                        <div className="flex justify-end gap-3 mt-3">
                            <button className=" w-20 p-1 pt-2 font-medium pb-2 bg-sky-500 rounded-xl text-sm text-white">Submit</button>
                        
                        </div>
                    </form> 
                    </div>  
                       
            </div>
            </div>
            <Toaster
            className="z-50"
        position="bottom-right"
        reverseOrder={false}
        />
        </div>
              
              </>
            }
           
        </div>
    );
};

export default Applyfrom;