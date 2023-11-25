import { useEffect, useState } from "react";
import useProduct from "../../../Hooks/useProduct";
import Homeiphonecard from "./HomeIphonecaard/Homeiphonecard";
import { data } from "autoprefixer";

const Homeiphone = () => {

//   const iphonehome = product.filter((item) => item.category == "iPhone");
const [product, setproduct] = useState([]);
// const [loading, setLoading] = useState(true);
useEffect(()=>{
    fetch('http://localhost:5000/product')
    .then(res=>res.json()
    .then(data=>{
        const iphoneItems=data.filter(item=>item.category==='iPhone');
        setproduct(iphoneItems)
    },[product]))
})
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {
    product?.map((item) => (
        <Homeiphonecard key={item._id} item={item}></Homeiphonecard>
      ))}
    </div>
  );
};

export default Homeiphone;
