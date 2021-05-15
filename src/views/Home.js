import React from 'react';
import Slider from "../components/Slider/Slider"
import WelcomeText from '../components/WelcomeText/WelcomeText'
import GetNews from '../components/GetNews/GetNews'

const Home = () => {
    return (
        <div>
            <WelcomeText />
            <Slider />
            <GetNews />
        </div>
        
    )
}

export default Home