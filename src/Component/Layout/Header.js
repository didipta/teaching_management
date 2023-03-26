import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';

const Header = () => {
    const {user,loading,setUser}=useContext(AuthContext);
    const logout=()=>
    {
        setUser(null);
        localStorage.removeItem("teaching-email");

    }
    return (
        <div>
            {
                !loading&& <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">COACHING</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/home/teaching">Teaching</Link></li>
                    {
                      user?.user!=="please login" && user?.userinfo!==null&&<li><Link to="/Dashboard">Dashboard</Link></li>
                    }
                    {
                      user?.user!=="please login" && user?.userinfo===null&&<li><Link to="/home/registation">Registration</Link></li>
                    }
                    {
                     user===null || user?.user==="please login"? <li><Link to="/" className=" bg-blue-500 text-white text-sm">LOGIN</Link></li>: <li><button className=" bg-blue-500 text-white text-sm" onClick={logout}>LOGOUT</button></li>
                    }
                   
                    </ul>
                </div>
                </div>
            }
           
        </div>
    );
};

export default Header;