import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion} from "framer-motion";
import {  useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../Hooks/Axiospublic';
import useCart from '../../../Hooks/usecart';





const Cardproducts = ({ product }) => {
    const { name, price, image, description, brand,rating,category,_id } = product;
    const [cart]=useCart()
const { user, refetch } = useAuth(); // Assuming refetch comes from useAuth
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic=useAxiosPublic();
 
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
      }, []);

      // -------------ADD TO CART---------------
      const handleAddToCart = () => {
        if (user && user.email) {
            //send cart item to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosPublic.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart items count
                        refetch();
                    }

                })
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div style={{perspective:2000}}>
          

<motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      drag
      dragElastic={0.18}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        perspective: 2000,
        zIndex: 100,
        x: 0,
        y: 0,
      }}
    >
            <div data-aos="fade-up-right" className="card w-96 bg-base-300 shadow-2xl">
            <figure className="px-10 pt-10">
            <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
    <img src={image} alt="profile-picture"  />
  </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
               <div className='justify-between'>
                <div> <p className="text-xl"><span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>Price</span>: ${price}</p>
                <p ><span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>Band</span>:{brand}</p></div>
              </div>
             
                <div className="card-actions">
                <Link >
                <button onClick={handleAddToCart} className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
    <div className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span className="relative">Add to cart</span>
  </button>
          
                   </Link>
                    </div>
            </div>
        </div>  
        </motion.div>
        </div>
    );
};

export default Cardproducts;