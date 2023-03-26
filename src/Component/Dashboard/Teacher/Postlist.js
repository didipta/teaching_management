import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Authprovider';

const Postlist = () => {
    const {user}=useContext(AuthContext);
    const [showpost,setshowpost]=useState([]);

    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/Allteacherpost/${user?.user?.id}`)
        .then(res => res.json())
        .then(data => {
            setshowpost(data);
        })
    },[user])
    return (
        <div>
            <h1 className="text-xl font-medium pt-5 pb-10">My Teaching post list</h1>
            <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Title</th> 
        <th>Apply list</th> 
        <th>Subject</th> 
        <th>Postion</th> 
        <th>Area</th> 
        <th>Duty time</th>
      </tr>
    </thead> 
    <tbody>
        {
            showpost.map((x,i)=>
            <>
             <tr>
                <th>{i+1}</th> 
                <td>{x.post.Title}</td> 
                <td><label htmlFor={`model-${x.post.id}`} className="p-2 bg-sky-500 text-white rounded-xl text-xs font-semibold cursor-pointer">Applying-{x.post.teachpostinfo.length}</label></td> 
                <td>{x.post.Subject}</td> 
                <td>{x.post.Position}</td> 
                <td>{x.post.Area}</td> 
                <td>{x.post.Dutytime}</td> 
                
            </tr>
            <input type="checkbox" id={`model-${x.post.id}`} className="modal-toggle" />
            <div className="modal ">
            <div className="modal-box relative w-11/12 max-w-5xl">
                <label htmlFor={`model-${x.post.id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                
                {
                x.post.teachpostinfo.length===0? <h1 className="text-xl font-semibold ">No Applicant information</h1>:<>
                <h1 className="text-xl font-semibold ">Applicant information</h1>
                <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Email</th> 
        <th>Phone</th> 
        <th>Salary</th> 
        <th>Time</th> 
        <th>Addree</th> 
        <th>gender</th> 
        <th>Education</th>
      </tr>
    </thead> 
    <tbody>
        
           {
            x.post.teachpostinfo.map((x,i) =>
                <tr>
                <th>{i+1}</th> 
                <td>{x.userinfo.U_username}</td> 
                <td>{x.userinfo.U_email}</td> 
                <td>{x.userinfo.userinfo.phone}</td> 
                <td>{x.Salary}</td> 
                <td>{x.Time}</td> 
                <td>{x.userinfo.userinfo.address}</td> 
                <td>{x.userinfo.userinfo.gender}</td> 
                <td>{x.userinfo.userinfo.Education}</td> 
                
              
              </tr>
             )
         } 
        
      
    </tbody> 
  </table>
</div>
                </>
                }
                
            </div>
            </div>
            </>
               
                )
        }
      
    </tbody> 
  </table>
</div>
        </div>
    );
};

export default Postlist;