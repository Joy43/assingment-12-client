import useProduct from "../../../Hooks/useProduct";


const Homeiphone = () => {
    const[product]=useProduct()
    const iphonehome=product.filter(item=>item.category==='iPhone')
    return (
        <div>
            
        </div>
    );
};

export default Homeiphone;