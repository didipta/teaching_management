import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Main = () => {
    return (
        <div className="w-8/12 mx-auto mt-2">
            <Header></Header>
            <div className="p-5">
            <Outlet></Outlet>
            </div>
          
        </div>
    );
};

export default Main;