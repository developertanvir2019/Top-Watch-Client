import React from 'react'
import { Link } from 'react-router-dom'
import './Heroslider.css';
import Slider from 'react-slick';

const HeroSlider = () => {
    const settings = {
        fade: true,
        speed: 2000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1, // Set slidesToScroll to 1
        pauseOnHover: false,
    };

    return (
        <Slider {...settings} className='hero__slider'>
            <div className="slider__item slider__item-01 mt0">
                <div>
                    <div className="slider__content">
                        <h4 className="text-light mb-3">For Rent $70 Per Day </h4>
                        <h1 className="text-light mb-4">Reserve Now & Get 50% Off</h1>

                        <button className="btn reserve__btn mt-4">
                            <Link to='/cars'>Reserve Now</Link>
                        </button>
                    </div>
                </div>
            </div>

            <div className="slider__item slider__item-02 mt0">
                <div>
                    <div className="slider__content">
                        <h4 className="text-light mb-3">For Rent $70 Per Day </h4>
                        <h1 className="text-light mb-4">Reserve Now & Get 50% Off</h1>

                        <button className="btn reserve__btn mt-4">
                            <Link to='/cars'>Reserve Now</Link>
                        </button>
                    </div>
                </div>
            </div>

            <div className="slider__item slider__item-03 mt0">
                <div>
                    <div className="slider__content">
                        <h4 className="text-light mb-3">For Rent $70 Per Day </h4>
                        <h1 className="text-light mb-4">Reserve Now & Get 50% Off</h1>

                        <button className="btn reserve__btn mt-4">
                            <Link to='/cars'>Reserve Now</Link>
                        </button>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default HeroSlider