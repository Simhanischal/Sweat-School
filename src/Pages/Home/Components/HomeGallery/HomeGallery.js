import React from 'react';
import CardWithImage from '../../../../Components/CardWithImage';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const HomeGallery = props => {
    let images = [];
    props.homeGalleryData.forEach((image) => {
        images.push(image.image);
    });
    return(
        <>
            <Typography variant="h5">
                Our Happy Moments
            </Typography>
            <Grid container justify="space-around">
                <Grid item xs={12} md={3}>
                    <CardWithImage name="Gallery1" height="350" image={images[0]} />
                </Grid>
                <Grid item xs={12} md={3}>
                    <CardWithImage name="Gallery1" height="350" image={images[1]} />
                </Grid>  
                <Grid item xs={12} md={3}>
                    <CardWithImage name="Gallery1" height="350" image={images[2]} />
                </Grid>     
            </Grid>
        </>  
    );
}

export default HomeGallery;
