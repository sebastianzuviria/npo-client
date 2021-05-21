import React from 'react';
import Slider from '../components/Slider/Slider';
import WelcomeText from '../components/WelcomeText/WelcomeText';
import News from '../components/News/News';
import BasicLayout from '../Layouts/BasicLayout';

const Home = () => {
  return (
    <BasicLayout>
      <Slider />
      <WelcomeText />
      <News />
    </BasicLayout>
  );
};

export default Home;
