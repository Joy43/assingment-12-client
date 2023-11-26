import { Player } from 'video-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'video-react/dist/video-react.css';
const videos = [
    {
      id: 1,
      src: 'https://example.com/video1.mp4',
    },
    {
      id: 2,
      src: 'https://example.com/video2.mp4',
    },
    // Add more videos as needed
  ];
const Videoslider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div>
              <Slider {...settings}>
      {videos.map((video) => (
        <div key={video.id}>
          <Player>
            <source src={video.src} />
          </Player>
        </div>
      ))}
    </Slider>
        </div>
    );
};

export default Videoslider;