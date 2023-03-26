import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';

const Headerd = () => {
    const {user,loading,setUser}=useContext(AuthContext);
    return (
        <div>
           <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ml-2">
            <Outlet></Outlet>
        </div> 
        <div className="drawer-side bg-slate-200">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-3 w-60  text-base-content">
            <li><Link to="/home">Home</Link></li>
            {
                user.userinfo.role==="teacher"&&<li><Link to="/Dashboard/teachingpost">Teaching post</Link></li>
            }
            {
                user.userinfo.role==="teacher"&&<li><Link to="/Dashboard/teacherpostlist">Teaching post List</Link></li>
            }
            {
                user.userinfo.role==="student"&&<li><Link to="/Dashboard/Applylist">Apply list</Link></li>
            }
            </ul>
        
        </div>
        </div>
        </div>
    );
};

export default Headerd;