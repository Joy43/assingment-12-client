import Cardshow from "../../Shared/Cardshow/Cardshow";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Homeiphonecard from "../Homeiphone/HomeIphonecaard/Homeiphonecard";

import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div>
         <div>
            <Slider></Slider>
            </div>
            <div>
                <Banner></Banner>
                </div>
              
                <div><Cardshow></Cardshow>  </div> 
                <div><Homeiphonecard></Homeiphonecard></div>
                <div>
                    <Faq></Faq>
                </div>
                
        </div>
    );
};

export default Home;