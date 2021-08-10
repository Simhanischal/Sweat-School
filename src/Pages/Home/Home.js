import React from 'react';
import UniqueFeatures from './Components/UniqueFeatures';
import TrainingPrograms from './Components/TrainingPrograms';
import TransformationCarousel from './Components/TransformationCarousel';
import HomeGallery from './Components/HomeGallery';
import { HomeTransformation } from '../../Data/TransformationData';
import { HomeGalleryData } from '../../Data/GalleryData';
import Landing from './Components/Landing/Landing';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        marginTop: '100px',
    },
});

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Landing />
            <UniqueFeatures />
            <TrainingPrograms />
            <TransformationCarousel homeTransformation={HomeTransformation} />
            <HomeGallery homeGalleryData={HomeGalleryData} />
        </div>
    );
}

export default Home;
