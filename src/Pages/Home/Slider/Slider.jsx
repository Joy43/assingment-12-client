import  { useState, useEffect } from 'react';



const images = [
  {
    url: 'https://i.ibb.co/Wy7qvF1/Apple-i-Pad-10th.png',
    title: 'Apple iPad 10th Generation',
    description: 'The latest iPad with powerful features and a stunning display.',
  },
  {
    url: 'https://i.ibb.co/sKX9CSf/xiomi.jpg',
    title: 'Xiaomi Smartphone',
    description: 'A high-quality smartphone with advanced features and camera.',
  },
  {
    url: 'https://i.ibb.co/XWn1YL8/google-6a.png',
    title: 'Google Pixel Phone',
    description: 'Google Pixel, known for its excellent camera and Android experience.',
  },
  {
     url:'https://i.ibb.co/hBNqsZT/apple-airpods-max-1607550567.gif',
   title: 'Sony Xperia 1 III ',
     description: 'A slight improvement overexperience in android ',
   },
  {
     url:'https://i.ibb.co/FgXZ3jD/OPPO-A17-price-and-specs-and-availability-via-Revu-Philippines-703x368.jpg',
   title: 'Oppo f36',
     description: 'OPPO F19 is officially announced on April 2021. ',
   },
  {
     url:'https://i.ibb.co/x3thz2M/SONY-TV.jpg',
   title: '3D SONY LED TV ',
     description: '3D led lamp 3D SONY LED TV3d wall art light on/off button cell operated',
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
          <div className="image-overlay absolute text-center">
            <h2 className='ext-white font-bold text-2xl title-animation'>{images[currentImage].title}</h2>
            <p className='text-white textanimation text-xl font-bold'>{images[currentImage].description}</p>
          </div>
          <img src={images[currentImage].url} alt="Carousel" className="carousel-image opacity-50" />
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