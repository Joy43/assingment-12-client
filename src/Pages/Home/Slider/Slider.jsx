import  { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
const Slider = () => {
    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
    
        return () => {
          swiper.destroy();
        };
      }, []);
    
    return (
        <div>
               <div className="swiper-container">
      <div className="swiper-wrapper">
        {/* Your slides go here */}
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
        {/* Add more slides as needed */}
      </div>
      <div className="swiper-pagination"></div>
    </div>
        </div>
    );
};

export default Slider;