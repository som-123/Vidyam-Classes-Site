import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

const CustomCarousel = () => (
    <div className="carousel-container">
        <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows autoPlay>
        <div><img src="images/image1.webp" alt="Slide 1" /></div>
        <div><img src="images/image2.webp" alt="Slide 2" /></div>
        <div><img src="images/image3.webp" alt="Slide 3" /></div>
        <div><img src="images/image4.webp" alt="Slide 4" /></div>
        </Carousel>
    </div>
  
);

export default CustomCarousel;
