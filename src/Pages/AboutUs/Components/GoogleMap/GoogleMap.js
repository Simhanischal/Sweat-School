import React from 'react';
import { Link } from 'react-router-dom';
import Map from '../../../../Images/Map.png';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const mapLink = `https://www.google.com/maps/place/Sweat+School/@12.9892198,77.5398329,15z/
                 data=!4m5!3m4!1s0x0:0x41fbf799884a8a54!8m2!3d12.9892361!4d77.5398326`;

const GoogleMap = () => {
    return(
        <div style={{marginTop: '50px'}}>
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
                    >
                        <img alt="Google Map" src={Map} width="500"/>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default GoogleMap;
