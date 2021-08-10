import React from 'react';
import { Link } from 'react-router-dom';
import Map from '../../../../Images/Map.png';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const mapLink = `https://www.google.com/maps/dir//Sweat+School,+Chord+Rd,+West+Of+Chord+Road,+West+of+Chord+Road+
                 3rd+Stage,+Basaveshwar+Nagar,+Bengaluru,+Karnataka/@12.9893011,77.5048132,13z/data=
                 !4m9!4m8!1m0!1m5!1m1!1s0x3bae3d3070611cbd:0x41fbf799884a8a54!2m2!1d77.5398326!2d12.9892361!3e0`;

const useStyles = makeStyles({
    container: {
        marginTop: '50px',
    },
});

const GoogleMap = () => {
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <Typography variant="h4">
                Directions to our center
            </Typography>
            <Grid
                container
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <Link
                        to={{pathname: mapLink}}
                        target="_blank"
                    >
                        <img alt="Google Map" src={Map} width="500"/>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default GoogleMap;
