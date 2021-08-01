import React from 'react';
import Carousel from '../../../../Components/Carousel';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

const TransformationCarousel = props => {
    let images = [];
    props.homeTransformation.forEach((transformation) => {
        images.push(transformation.image);
    });
    return(
        <Carousel  images={images} />
    )
}

export default TransformationCarousel;