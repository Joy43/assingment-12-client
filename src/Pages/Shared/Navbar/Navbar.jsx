import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { FaShoppingCart } from 'react-icons/fa';

import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import useCart from "../../../Hooks/usecart";


const NavBar = () => {
    const { user, logOut } = useAuth();
    const[cart]=useCart()
//    ----------logout------
const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}
   // -----------------     dark mode    ---------------

   const [isDarkMode,setDarkMode]=useState(false);
   const toogleTheame=()=>{
    const htmlElement =document.documentElement;
    const currentTheme=htmlElement.getAttribute("data-theme");
    setDarkMode((prevDarMode) =>!prevDarMode);
    if (currentTheme==="business") {
        htmlElement.setAttribute("data-theme","corporate");
  
    } else{
htmlElement.setAttribute("data-theme","business")
    }
}
const themeIconSize = "30px"
// --------------- user dopdown----------
const userDropdownOptions = (
    <div className="dropdown-content  bg-black text-white">
        <p className="text-lg">{user?.displayName}</p>
        <Link to="/dashboard"><button className="btn-primary ">Dashboard</button></Link>
        <button className="btn-outline" onClick={handleLogOut}>Logout</button>
    </div>
);
// ----------navoptions----------
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/product">Products</Link></li>
        
        <li>
            <Link to="/dashboard/cart">
                <button className="btn">
                    <FaShoppingCart className="mr-2"></FaShoppingCart>
                    <div className="badge badge-primary bg-transparent">+{cart.length}</div>
                </button>
            </Link>
        </li>
    
   

        {user ? (
                        <div className="dropdown bg-fuchsia-600 dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="User Avatar"src={user?.photoURL} />
                                </div>
                            </div>
                            {userDropdownOptions}
                        </div>
                    ) : (
                        <Link to="/login" className="btn btn-ghost">Login/Registration</Link>
                    )}
    </>

    return (
        <>
            <div className="navbar  bg-black  text-white bg-opacity-30">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-primary lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#ea1d5d] rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"> <span className="text-[#ea1d5d] text-3xl font-bold">Tech </span>world</a>
                </div>
            

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* theme */}
                <button className="text-[#FF3811] " onClick={toogleTheame}>
{isDarkMode ? <MdDarkMode size={themeIconSize} /> : <BsSunFill size={themeIconSize} />}
        </button>
                </div>
            </div>
        </>
    );
};

export default NavBar;