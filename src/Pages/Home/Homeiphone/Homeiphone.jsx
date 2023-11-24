import useProduct from "../../../Hooks/useProduct";
import Homeiphonecard from "./HomeIphonecaard/Homeiphonecard";


const Homeiphone = () => {
    const[product]=useProduct()
    const iphonehome=product.filter(item=>item.category==='iPhone')
    return (
        <div className="grid md:grid-cols-2 gap-10">
            {
                iphonehome?.map(item=><Homeiphonecard 
                key={item._id}
                item={item}>

                </Homeiphonecard>)
            }
        </div>
    );
};

export default Homeiphone;