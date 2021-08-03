import React from 'react';
import UniqueFeatures from './Components/UniqueFeatures';
import TrainingPrograms from './Components/TrainingPrograms';
import TransformationCarousel from './Components/TransformationCarousel';
import HomeGallery from './Components/HomeGallery';
import { HomeTransformation } from '../../Data/TransformationData';
import { HomeGalleryData } from '../../Data/GalleryData';

const Home = () => {
    return (
        <div style={{marginTop: '100px',}}>
            <UniqueFeatures />
            <TrainingPrograms />
            <TransformationCarousel homeTransformation={HomeTransformation} />
            <HomeGallery homeGalleryData={HomeGalleryData} />
        </div>
    );
}

export default Home;
