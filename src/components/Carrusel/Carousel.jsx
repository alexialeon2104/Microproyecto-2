import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  return (
    <div className="carousel__container" >
      <div className={"carousel__container img"}>
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
      </div>
      <div className="carousel__controls">
      <button className="carousel__prev" onClick={handlePrevImage}>Anterior</button>
      <button className="carousel__next" onClick={handleNextImage}>Siguiente</button>
      </div>
    </div>
  );
};

export default Carousel;