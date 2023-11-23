import {
    createBrowserRouter,
  } from "react-router-dom";




import Mainlayout from "../Layout/Mainlayout/Mainlayout";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";

import Signup from "../Pages/SignIn/Signup";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
     errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
path:'longin',
element:<Login></Login>,

        } ,
        {
path:'signup',
element:<Signup></Signup>
        },
        {

        },
       
      ]
    },
    // {
    //   path: 'dashboard',
    //   element: <></>,
    //   children: [
    //     // normal user routes
      
        

    //   ]
    // }
  ]);