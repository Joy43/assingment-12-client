
import useProduct from '../../../Hooks/useProduct';
import './Cardshow.css'
const Cardshow = () => {
    const product=useProduct();
    console.log(product);
    return (
        <div>
              <div className="container">
        <ul id="cards">
            <li className="card" id="card1">
                <div className="card-body">
                    <h2>{product.length}</h2>
                    <img src={product.image} alt="" />
                </div>
            </li>
            <li className="card" id="card2">
                <div className="card-body">
                    <h2>Card 2</h2>
                </div>
            </li>
            <li className="card" id="card3">
                <div className="card-body">
                    <h2>Card 3</h2>
                </div>
            </li>
            <li className="card" id="card4">
                <div className="card-body">
                    <h2>Card 4</h2>
                </div>
            </li>
        </ul>
    </div>
        </div>
    );
};

export default Cardshow;