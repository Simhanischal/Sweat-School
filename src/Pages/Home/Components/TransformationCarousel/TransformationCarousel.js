import React from 'react';
import Carousel from '../../../../Components/Carousel';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    heading: {
        marginTop: '70px', 
        marginBottom: '25px',
    },
});

const TransformationCarousel = props => {
    let images = [];
    const classes = useStyles();
    props.homeTransformation.forEach((transformation) => {
        images.push(transformation.image);
    });
    return(
        <>
            <Typography variant="h4" className={classes.heading}>
                Our Results
            </Typography>
            <Carousel images={images} />
        </> 
    );
}

export default TransformationCarousel;