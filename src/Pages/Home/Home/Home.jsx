import Cardshow from "../../Shared/Cardshow/Cardshow";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Faqcard from "../Faq/Faqcard";
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
                <div>
                    <Faq></Faq>
                </div>
                <div><Cardshow></Cardshow>  </div> 
                
        </div>
    );
};

export default Home;