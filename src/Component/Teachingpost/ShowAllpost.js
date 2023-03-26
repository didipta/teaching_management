import React, { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';
import Applyfrom from '../Dashboard/Student/Applyfrom';
import { Allpsot } from '../Hook/AllPost';

const ShowAllpost = () => {
    const [allpost,isLoading,refetch]=Allpsot();
    const {user}=useContext(AuthContext);
    const [post,setPost]=useState();
    const navigate = useNavigate();
   console.log(allpost);
   const Apply=(x)=>
   {
    if( user.user==="please login")
    {
        navigate("/");
    }
    else
    {
        console.log(x)
        setPost(x);
    }
    
   }
    return (
        <div>
            <div className="grid grid-cols-2 items-center justify-around gap-4">
            {
                allpost.map(x=>
                    <div className="shadow-xl rounded-xl p-5 grid gap-3" key={x.post.id}>
                        <img src="https://www.jobstreet.com.ph/career-resources/wp-content/uploads/sites/3/2021/08/Primary-School-Teacher-Career-Path-Guide-2.jpg" alt='' className=' rounded-xl'></img>
                        <h1 className="font-semibold text-blue-900 text-md">{x.post.Title}</h1>
                        <div className="flex justify-between items-center text-xs">
                            <p>Position: <span className="font-semibold">{x.post.Position}</span></p>
                            <p>Duty time: <span className="font-semibold">{x.post.Dutytime}</span></p>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                            <p>Subject: <span className="font-semibold">{x.post.Subject}</span></p>
                            <p>Area: <span className="font-semibold">{x.post.Area}</span></p>
                        </div>
                        <h1 className="font-semibold text-pink-900 text-md">Teacher information</h1>

                        <div className="flex justify-between items-center text-xs">
                            <p>Name: <span className="font-semibold">{x.post.teacherinfo.U_username}</span></p>
                            <p>Email: <span className="font-semibold">{x.post.teacherinfo.U_email}</span></p>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                            <p>Modile: <span className="font-semibold">{x.post.teacherinfo.userinfo.phone}</span></p>
                            <p>Address: <span className="font-semibold">{x.post.teacherinfo.userinfo.address}</span></p>
                        </div>
                        
                        {
                            user?.userinfo?.role!=="teacher"&&<div className="flex justify-end gap-3 mt-3">
                            <button className=" w-20 p-1 pt-2 font-medium pb-2 bg-pink-500 rounded-xl text-sm text-white">WishList</button>
                            <label htmlFor={`model-post`} className=" w-20 pl-5 pr-5 pt-2 pb-2 font-medium bg-blue-500 rounded-xl text-sm text-white" onClick={()=>{Apply(x)}}>Apply</label>
                        </div>
                        }
                       
                        
                    </div>
                    )
            }
            </div>
            {
                user?.user!=="please login"&&<Applyfrom x={post}></Applyfrom>
            }
            
        </div>
    );
};

export default ShowAllpost;