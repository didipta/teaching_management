import React, { createContext, useEffect, useState } from 'react';
export const AuthContext=createContext();
const Authprovider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
     let email=localStorage?.getItem('teaching-email')===null?"login":localStorage?.getItem('teaching-email');

    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/getuser/${email}`)
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            console.log(data)
            setUser(data)
        })
    },[localStorage?.getItem('teaching-email')])



    
    const authInfo={
        user,
        setUser,
        loading,
        setLoading
        }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default Authprovider;