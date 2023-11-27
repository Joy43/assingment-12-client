
import useProduct from '../../../Hooks/useProduct';
import Cardproducts from '../Cardproducts/Cardproducts';

const Products = () => {
  const [product] = useProduct();

  return (
    <div className="grid md:grid-cols-3 gap-5">
 

      {product.map(item => (
        <Cardproducts key={item._id} product={item} />
      ))}
    </div>
  );
};

export default Products;
