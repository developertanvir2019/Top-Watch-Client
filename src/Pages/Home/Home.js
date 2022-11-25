import React from 'react';
import Categories from './Categories';
import ExtraSection from './ExtraSection';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Categories></Categories>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;