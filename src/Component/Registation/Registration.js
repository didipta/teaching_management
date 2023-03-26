import React from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex items-center justify-center gap-6 h-[50vh] font-medium text-2xl">
                <div className="w-96 flex items-center justify-between shadow-xl p-5 rounded-xl cursor-pointer" onClick={()=>navigate("/home/studentfrom")}>
                    <p>Student?</p>
                    <img src="https://i0.wp.com/simply.coach/wp-content/uploads/2021/03/hm-confidentiality.gif?fit=308%2C384&ssl=1" className="w-40" alt=""></img>
                </div>
                <div className="w-96 flex items-center justify-between shadow-xl p-5 rounded-xl cursor-pointer" onClick={()=>navigate("/home/teacherfrom")}>
                    <p>Teacher?</p>
                    <img src="https://i0.wp.com/simply.coach/wp-content/uploads/2021/03/hm-confidentiality.gif?fit=308%2C384&ssl=1" className="w-40" alt=""></img>
                </div>
            </div>
        </div>
    );
};

export default Registration;