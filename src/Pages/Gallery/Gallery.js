import React from 'react';
import { PageGallery } from '../../Data/GalleryData';
import GalleryRow from './Components/GalleryRow';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    container: {
        marginTop: '100px',
    },
});

const Gallery = () => {
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <Typography variant="h3" style={{textDecoration: 'underline'}}>
                Gallery 
            </Typography>
            {
                PageGallery.map((row) => <GalleryRow key={row[2].id} imageRow={row}/>)
            }
        </div>
    );
}

export default Gallery;