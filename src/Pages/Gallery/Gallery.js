import React from 'react';
import Typography from '@material-ui/core/Typography';
import { PageGallery } from '../../Data/GalleryData';
import GalleryRow from './Components/GalleryRow';

const Gallery = () => {
    return(
        <>
            <Typography variant="h3" style={{textDecoration: 'underline'}}>
                Gallery 
            </Typography>
            {
                PageGallery.map((row) => <GalleryRow key={row[2].id} imageRow={row}/>)
            }
        </>
    );
}

export default Gallery;