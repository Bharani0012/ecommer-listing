import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Slider from 'react-slick';
import Ellipse68 from '../assets/Ellipse68.png';
import Ellipse69 from '../assets/Ellipse69.png';
import Ellipse70 from '../assets/Ellipse70.png';
import Ellipse71 from '../assets/Ellipse71.png';
import searchlogo from '../assets/searchlogo.png';
import './productOverviewStyles.css';

const ProductOverview = () => {
    const [slidesToShow, setSlidesToShow] = useState(6);

    useEffect(() => {
        const updateSlidesToShow = () => {
            if (window.innerWidth < 768) {
                setSlidesToShow(1);
            } else {
                setSlidesToShow(6);
            }
        };

        updateSlidesToShow();

        window.addEventListener('resize', updateSlidesToShow);

        return () => window.removeEventListener('resize', updateSlidesToShow);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true,
        centerMode: true,
    };

    const images = [Ellipse68, Ellipse69, Ellipse70, Ellipse71];
    const carouselImages = [...images, ...images];

    return (
        <div className="container">
            <div className="search-bar">
                <div className="input-field">
                    <FaSearch className="icon-search" />
                    <input type="text" placeholder="Search products..." />
                    <img src={searchlogo} alt="Search Logo" className="search-logo" />
                </div>
            </div>
            <div className="button-container">
                <button className="plants-button">Plants</button>
                <button className="pots-button">Pots</button>
            </div>
            <p className="lorem-ipsum">
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut
            internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus 
            aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est
            voluptatem eius. Et architecto nihil id labore omnis 
            hic iste deleniti et porro aspernatur.
            </p>
            <div className="carousel">
                <Slider {...settings}>
                    {carouselImages.map((image, index) => (
                        <div key={index} className="carousel-image">
                            <img src={image} alt={`Nursery ${index + 1}`} className='image'/>
                            <p className="image-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ProductOverview;
