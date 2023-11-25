
import useProduct from "../../../Hooks/useProduct";
import Homeiphonecard from "./HomeIphonecaard/Homeiphonecard";


const Homeiphone = () => {
  const [products]=useProduct()
  const laptopProducts = products.filter(item => item.category === "laptops");

  return (
    <div className="grid md:grid-cols-3 gap-5">
      
      {laptopProducts.map((item) => (
      <Homeiphonecard key={item.id} product={item} />
    ))}
    </div>
  );
};

export default Homeiphone;
