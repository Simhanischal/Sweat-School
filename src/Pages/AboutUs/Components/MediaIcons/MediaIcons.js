import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors'

const MediaIcons = () => {
    return(
        <div style={{marginTop: '50px'}}>
            <Grid
                container
                justify="center"
                alignItems="center"
            >
                <Typography variant="h4">
                    Sweat us on social media!
                </Typography>
            </Grid>
            <Grid 
                container 
                spacing={4}
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <InstagramIcon color="secondary" style={{fontSize: 50, cursor: 'pointer'}} /> 
                </Grid>
                <Grid item>
                    <FacebookIcon color="primary" style={{fontSize: 50, cursor: 'pointer'}} />
                </Grid>
                <Grid item>
                    <WhatsAppIcon style={{color: green[500],fontSize: 50, cursor: 'pointer'}}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default MediaIcons;
