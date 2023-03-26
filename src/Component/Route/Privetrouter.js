import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';
import Loading from '../Loading';

const Privetrouter = ({children}) => {
    const {user,loading,setLoading}=useContext(AuthContext);
    if(loading)
    {
        return <>
        
        <Loading></Loading>
        
        </>;
    }
    if( user.user==="please login")
    {
        setLoading(false);
        return <Navigate to="/" replace></Navigate>
    }
    return children;
};

export default Privetrouter;