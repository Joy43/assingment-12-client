import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion} from "framer-motion";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Btneffect from '../BtnEffect/Btnproduct';




const Cardproducts = ({ product }) => {
    const { name, price, image, description, brand,rating,category } = product;

    useEffect(() => {
        AOS.init({ duration: 1000 }); // You can adjust the duration as needed
      }, []);
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
                <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
    <div className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span className="relative"><Btneffect></Btneffect></span>
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