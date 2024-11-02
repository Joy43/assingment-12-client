import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/AxiosSequre";
import useCart from "../../../Hooks/usecart";


const Cardproducts = ({ product }) => {
  const { name, price, image, description, brand, _id } = product;
  const [refetch] = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        productId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div style={{ perspective: 2000 }} className="p-6">
      <div
        data-aos="fade-up-right"
        className="card w-96 bg-gradient-to-r from-white to-gray-100 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
      >
        <figure className="px-6 pt-6">
          <div className="relative mx-auto mt-4 h-80 w-80 object-cover overflow-hidden rounded-2xl bg-white shadow-md">
            <img src={image} alt={name} className="object-cover" />
          </div>
        </figure>
        <div className="card-body p-6 space-y-4">
          <h2 className="card-title text-2xl font-semibold text-gray-800">
            {name}
          </h2>
          <p className="text-sm text-gray-600">{description}</p>
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold text-blue-500">${price}</p>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              Brand: {brand}
            </span>
          </div>
          <div className="text-center">
            <Link>
              <button
                onClick={handleAddToCart}
                className="relative h-12 w-48 overflow-hidden rounded-lg bg-blue-600 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-blue-700"
              >
                <span className="relative z-10">Add to Cart</span>
                <div className="absolute inset-0 bg-blue-500 transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-out"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardproducts;
