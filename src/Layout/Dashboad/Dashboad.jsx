import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Hooks/usecart";
import useAdmin from "../../Hooks/useAdmin";

const Dashboad = () => {
    const [cart]=useCart();
    const [isAdmin]=useAdmin();

    return (
        <div>
           <div className="flex">
            {/*---------------- dashboard side bar------------ */}
            <div className="w-64 min-h-screen text-2xl font-bold bg-[#1d061e]">
                <ul className="menu p-4">
                    {
                        isAdmin ? 
                        <>
                           <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home
                                    </NavLink>
                            </li>
                         
                            
                             
                               <li>
                                <NavLink to="/dashboard/addItems">
                                    <MdAddShoppingCart></MdAddShoppingCart>
                                    Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageProduct">
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li>
                            <li >
                                <NavLink  className=" "to="/dashboard/users">
                                   <FaUsers></FaUsers>
                                   Manage Users
                                    </NavLink>
                            </li>
                        </>
                            :
                            <>
                            {/* ---------------user----------------- */}
                            <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart ({cart.length})</NavLink>
                                </li>
                                 
                                
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <FaAd></FaAd>
                                        Add a Review</NavLink>
                                </li>
                                </>
                                }
                    {/* ------------shared nav links ----------------*/}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product">
                            <FaSearch></FaSearch>
                            product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/*------------- dashboard content ------------------*/}
            <div className="flex-1 p-8">
           <Outlet></Outlet>
            </div>
        </div> 
        </div>
    );
};

export default Dashboad;