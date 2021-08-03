import React from 'react';
import CardWithImage from '../../../../Components/CardWithImage';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    image: {
        // cursor: 'pointer!important',
        '&:hover': {
            opacity: '50%',
        },
    },
});

const HomeGallery = props => {
    let images = [];
    const classes = useStyles();
    props.homeGalleryData.forEach((image) => {
        images.push(image.image);
    });
    return(
        <>
            <Typography variant="h4" style={{marginTop: '70px', marginBottom: '25px'}}>
                Our Memories
            </Typography>
            <Grid container justify="space-around">
                <Grid item xs={12} md={3} className={classes.image}>
                    <Link to="/gallery">
                        <CardWithImage 
                            name="Gallery1" 
                            height="350" 
                            image={images[0]} 
                        />
                    </Link>
                </Grid>
                <Grid item xs={12} md={3} className={classes.image}>
                    <Link to="/gallery">
                        <CardWithImage 
                            name="Gallery2" 
                            height="350" 
                            image={images[1]} 
                        />
                    </Link>
                </Grid>  
                <Grid item xs={12} md={3} className={classes.image}>
                    <Link to="/gallery">
                        <CardWithImage 
                            name="Gallery3" 
                            height="350" 
                            image={images[2]} 
                        />
                    </Link>
                </Grid>     
            </Grid>
        </>  
    );
}

export default HomeGallery;
