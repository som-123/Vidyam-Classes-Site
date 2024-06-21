import React from 'react';
import CustomCarousel from './Carousel';
import WhyChooseUs from './WhyChooseUs';
import Courses from './Courses';
import Quotes from './Quotes';

const Home = () => (
  <div id="home">
    <CustomCarousel />
    <WhyChooseUs />
    <Courses />
    <Quotes />
  </div>
);

export default Home;
