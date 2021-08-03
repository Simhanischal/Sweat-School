import React from 'react';
import Carousel from '../../../../Components/Carousel';
import Typography from '@material-ui/core/Typography';

const TransformationCarousel = props => {
    let images = [];
    props.homeTransformation.forEach((transformation) => {
        images.push(transformation.image);
    });
    return(
        <>
            <Typography variant="h4" style={{marginTop: '70px', marginBottom: '25px'}}>
                Our Results
            </Typography>
            <Carousel images={images} />
        </> 
    );
}

export default TransformationCarousel;