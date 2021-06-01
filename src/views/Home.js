import React from 'react';
import Slider from '../components/Slider/Slider';
import WelcomeText from '../components/WelcomeText/WelcomeText';
import News from '../components/News/News';
import BasicLayout from '../Layouts/BasicLayout';
import TestimonialForms from '../components/TestimonialsForm/TestimonialsForm';
// import  from '../components/TestimonialsForm/TestimonialsForm';

const Home = () => {
  return (
    <BasicLayout>
      <Slider />
      <WelcomeText />
      <News />
      <TestimonialForms/>
    </BasicLayout>
  );
};

export default Home;
