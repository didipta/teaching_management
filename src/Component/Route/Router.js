import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Maind from "../Dashboard/Layoutd/Maind";
import Applylist from "../Dashboard/Student/Applylist";
import Postlist from "../Dashboard/Teacher/Postlist";
import Teachingpost from "../Dashboard/Teacher/Teachingpost";
import Home from "../Homepage/Home";
import Main from "../Layout/Main";
import Registration from "../Registation/Registration";
import Studentfrom from "../Registation/Studentfrom";
import Teacherfrom from "../Registation/Teacherfrom";
import Signup from "../Signup";
import Singin from "../Singin";
import ShowAllpost from "../Teachingpost/ShowAllpost";
import Privetrouter from "./Privetrouter";

export const routers=createBrowserRouter([
    {
        path:'/',
        element:<Singin></Singin>
    },
    {
        path:"/signup",
        element:<Signup></Signup>
    }
    ,
    {
        path:"/home",
        element:<Main></Main>,
        children:[
           {
            path:"/home",
            element:<Home></Home>
           },
           {
            path:"/home/teaching",
            element:<ShowAllpost></ShowAllpost>
           },
           {
            path:"/home/registation",
            element:<Privetrouter><Registration></Registration></Privetrouter>
           }
           ,
           {
            path:"/home/studentfrom",
            element:<Privetrouter><Studentfrom></Studentfrom></Privetrouter>
           }
           ,
           {
            path:"/home/teacherfrom",
            element:<Privetrouter><Teacherfrom></Teacherfrom></Privetrouter>
           }
        ]
    }
    ,
    {
        path:"/Dashboard",
        element:<Privetrouter><Maind></Maind></Privetrouter>,
        children:[
            {
                path:'/Dashboard',
                element:<Privetrouter><Dashboard></Dashboard></Privetrouter>
            }
            ,
            {
                path:"/Dashboard/teachingpost",
                element:<Privetrouter><Teachingpost></Teachingpost></Privetrouter>
            }
            ,
            {
                path:"/Dashboard/Applylist",
                element:<Privetrouter><Applylist></Applylist></Privetrouter>
            }
            ,
            {
                path:"/Dashboard/teacherpostlist",
                element:<Privetrouter><Postlist></Postlist></Privetrouter>
            }

        ]
    }
])