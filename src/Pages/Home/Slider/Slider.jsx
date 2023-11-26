import { useState, useEffect } from 'react';

const images = [
  {
    url: 'https://i.ibb.co/JFmR5RJ/1.png',
  },
  {
    url: 'https://i.ibb.co/8Nt8kHx/2.png',
  },
  {
    url: 'https://i.ibb.co/7CXJyQ8/3.png',
  },
  {
    url: 'https://i.ibb.co/vcfpMY8/4.png',
  },
  {
    url: 'https://i.ibb.co/T4GRPJJ/5.png',
  }
 
];

function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <div className="carousel mt-6">
        <button onClick={prevImage} className="prev-button">
          &lt;
        </button>
        <div className="image-container">
          <div className=" absolute text-center">
            {/* Title and description elements removed */}
          </div>
          <img src={images[currentImage].url} alt="Carousel" className="carousel-image " />
        </div>
        <button onClick={nextImage} className="next-button">
          &gt;
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default Carousel;
