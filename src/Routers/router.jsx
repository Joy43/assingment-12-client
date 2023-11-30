import {
    createBrowserRouter,
  } from "react-router-dom";




import Mainlayout from "../Layout/Mainlayout/Mainlayout";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignIn/Signup";
import HomeProduct from "../Pages/Prouctpage/HomeProduct";
import Dashboad from "../Layout/Dashboad/Dashboad";
import Cart from "../Pages/Dashboad/Dashboad/Cart/Cart";
import PrivateRoute from "./Privaterouter";
import { element } from "prop-types";
import AllUsers from "../Pages/Dashboad/Dashboad/AllUsers/Allusers";
import AdminRoute from "./Adminrouter";
import AddItem from "../Pages/Dashboad/Dashboad/AddItem/AddItem";
import Manageproduct from "../Pages/Dashboad/Dashboad/ManageProduct/Manageproduct";




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
path:'login',
element:<Login></Login>,

        } ,
        {
path:'signup',
element:<Signup></Signup>
        },
        {
          path:'product',
          element:<HomeProduct></HomeProduct>
        },
        {

        },
       
      ]
    },
    {
      path: 'dashboard',
      element:<PrivateRoute><Dashboad></Dashboad></PrivateRoute>,
      children: [
        // normal user routes
      {
        path:'cart',
        element:<Cart></Cart>,

      },
      //----------- admin router-------------
      {
path:'users',
element:<AllUsers></AllUsers>,
      },
      {
        path: 'addItems',
        element:<AddItem></AddItem>,
      },
      {
path:'manageProduct',
element:<Manageproduct></Manageproduct>
      },
        

      ]
    }
  ]);