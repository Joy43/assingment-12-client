
import useProduct from '../../../Hooks/useProduct';
import './Cardshow.css'
const Cardshow = () => {
    const [product]=useProduct();
    console.log(product);
    return (
        <div>
        <div className="container">
  <ul id="cards">
      <li className="card" id="card1">
          <div className="card-body-all">
    {/* cardbg-[#cccff3]  1  */}
    <div className="card card-side bg-[#FF004F] text-white shadow-xl">
  <figure><img className='' src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg" alt="Movie"/></figure>
  <div className="card-body ">
    <h2 className="card-title">Apple</h2>
    <p>Click the button to watch on Jetflix app .
        lorem7 Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Velit, provident. Lorem ipsum dolor sit amet.</p>
        <div className="badge badge-outline bg-[#152747]">iphone</div> 
      <div className="badge badge-outline bg-[#152747]">8.3</div>
      <div className="badge badge-secondary lowercase">Price: 267$</div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Buy Product</button>
    </div>
  </div>
</div>
              {/* 2 */}
          </div>
      </li>
      <li className="card" id="card2">
          <div className="card-body-all">
          <div className="card card-side bg-[#FF004F] text-white shadow-xl">
  <figure><img className='' src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-mini.jpg" alt="Movie"/></figure>
  <div className="card-body ">
    <h2 className="card-title">Apple-phone-12</h2>
    <p>Click the button to watch on Jetflix app .
        lorem7 Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Velit, provident. Lorem ipsum dolor sit amet.</p>
        <div className="badge badge-outline bg-[#152747]">iphone</div> 
      <div className="badge badge-outline bg-[#152747]">4.3</div>
      <div className="badge badge-secondary lowercase">Price: 567$</div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Buy Product</button>
    </div>
  </div>
</div>
{/* 3 */}
          </div>
      </li>
      <li className="card" id="card3">
          <div className="card-body-all">
          <div className="card card-side bg-[#e85986] text-white shadow-xl">
  <figure><img className='' src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-5g.jpg" alt="Movie"/></figure>
  <div className="card-body ">
    <h2 className="card-title">Samsung-galaxy</h2>
    <p>Click the button to watch on Jetflix app .
        lorem7 Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Velit, provident. Lorem ipsum dolor sit amet.</p>
        <div className="badge badge-outline bg-[#152747]">samsung</div> 
      <div className="badge badge-outline bg-[#152747]">7.3</div>
      <div className="badge badge-secondary lowercase">Price: 567$</div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Buy Product</button>
    </div>
  </div>
</div>
{/* 4 */}
          </div>
      </li>
      <li className="card" id="card4">
          <div className="card-body-all">
          <div className="card card-side bg-[#FF004F] text-white shadow-xl">
  <figure><img className='' src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-s8-plus.jpg" alt="Movie"/></figure>
  <div className="card-body ">
    <h2 className="card-title">Galaxy -tab samsung</h2>
    <p>Click the button to watch on Jetflix app .
        lorem7 Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Velit, provident. Lorem ipsum dolor sit amet.</p>
        <div className="badge badge-outline bg-[#152747]">samsung</div> 
      <div className="badge badge-outline bg-[#152747]">6.3</div>
      <div className="badge badge-secondary lowercase">Price: 7667$</div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Buy Product</button>
    </div>
  </div>
</div>
          </div>
      </li>
  </ul>
</div>
  </div>
    );
};

export default Cardshow;