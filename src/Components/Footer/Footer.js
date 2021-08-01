import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { green } from '@material-ui/core/colors';
import Logo from '../../Images/Logo.png';

const FooterLogo = styled.img`
    height: 70px;
    margin-top: -25px;
    @media screen and (max-width: 800px){
        height: 50px;
    }
`;

const FooterDivider = styled.div`
    background-color: #000000;
    height: 2px;
    margin: 5px 0px;
`;

const Footer = () => {
    return(
        <>
            <Grid container direction="row" justify="space-around">
                <Grid item xs={12} md={3}>
                    <FooterLogo alt="Footer Logo" src={Logo} />
                    <Typography variant="body2" style={{textAlign: 'left'}}>
                        5th Main Road, 354, Chord Rd, West of Chord Road 3rd Stage, 
                        Basaveshwar Nagar, Bengaluru, Karnataka 560079
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h5">
                        Quick Links
                    </Typography>
                    <FooterDivider />
                    <Typography variant="body1">
                        Training Programs
                    </Typography>
                    <Typography variant="body1">
                        Transformations
                    </Typography>
                    <Typography variant="body1">
                        About Us
                    </Typography>
                    <Typography variant="body1">
                        Gallery
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h5">
                        Contact Us
                    </Typography>
                    <FooterDivider />
                    <InstagramIcon color="secondary" style={{fontSize: 35, paddingRight: 10,}} /> 
                    <FacebookIcon color="primary" style={{fontSize: 35, paddingRight: 10,}} />
                    <WhatsAppIcon style={{color: green[500],fontSize: 35, paddingRight: 10,}}/>
                    <Typography>
                        Mob: +91-9585530772
                    </Typography>
                </Grid>
            </Grid>
            <FooterDivider />
            <Typography variant="body2">
                Copyright © 2020-2021 Sweat School. All rights reserved.
            </Typography>
        </>
    )
}

export default Footer;