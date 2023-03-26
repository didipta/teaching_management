import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../Context/Authprovider';

const Applylist = () => {
    const {user}=useContext(AuthContext);
    const [showpost,setshowpost]=useState([]);

    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/userApply/${user?.user?.id}`)
        .then(res => res.json())
        .then(data => {
            setshowpost(data);
        })
    },[user])
    return (
        <div>
            <h1 className="text-xl font-semibold pb-10 pt-5">All Apply List</h1>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Position</th>
        <th>Teacher name</th>
        <th>Teacher email</th>
        <th>Teacher phone</th>
        <th>Salary</th>
        <th>Time</th>
        <th>Subject</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        showpost.map((x,i)=>
            <tr>
        <th>{i+1}</th>
        <td>{x.post.postinfo.Position}</td>
        <td>{x.post.postinfo.teacherinfo.U_username}</td>
        <td>{x.post.postinfo.teacherinfo.U_email}</td>
        <td>{x.post.postinfo.teacherinfo.userinfo.phone}</td>
        
        <td>{x.post.Salary}</td>
        <td>{x.post.Time}</td>
        <td>{x.post.postinfo.Subject}</td>
        <td>Applyed</td>
      </tr>
            )
      }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Applylist;