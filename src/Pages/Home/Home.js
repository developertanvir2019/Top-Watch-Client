import React from 'react';
import ExtraSection from './ExtraSection';
import Slider from './Slider';
import CategoriesNew from '../../Components/Categories/CategoriesNew';
import HeroSlider from '../../Components/HeroSlider';
import Another from '../../Components/Another/Another';
import AllProducts from '../../Components/AllProducts/AllProducts';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            {/* <HeroSlider></HeroSlider> */}
            <CategoriesNew></CategoriesNew>
            <AllProducts></AllProducts>
            <Another></Another>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;