import { Player } from 'video-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'video-react/dist/video-react.css';
import Vid1 from '../../.././assets/vidslide/1.mp4'
import Vid2 from '../../.././assets/vidslide/1.mp4'
import Vid3 from '../../.././assets/vidslide/2.mp4'
import Vid4 from '../../.././assets/vidslide/3.mp4'
import Vid5 from '../../.././assets/vidslide/4.mp4'
const videos = [
    {
      id: 1,
      src: Vid1,
    },
    {
      id: 2,
      src: Vid2,
    },
    {
      id: 3,
      src: Vid3,
    },
    {
      id: 4,
      src: Vid4,
    },
    {
      id: 5,
      src: Vid5,
    },
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