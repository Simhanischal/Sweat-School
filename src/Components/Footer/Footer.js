import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/Logo.png';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const FooterLogo = styled.img`
    height: 70px;
    margin-top: -5px;
    @media screen and (max-width: 800px){
        height: 50px;
    }
`;

const FooterDivider = styled.div`
    background-color: #000000;
    height: 2px;
    margin: 5px 0;
`;

const CopyrightDivider = styled.div`
    background-color: #000000;
    height: 2px;
    margin: 5px 400px;
    @media screen and (max-width: 800px){
        margin: 5px 0;
    }
`;

const useStyles = makeStyles({
    container: {
        marginTop: '70px', 
        borderTop: '2px solid #000000',
    },
    link:{
        textDecoration: 'none',
        color: '#000000',
        '&:hover':{
            textDecoration: 'underline',
        },
    },
    button: {
        '@media screen and (min-width: 800px)':{
            position: 'absolute',
            left: '55px',
        },
        fontSize: '11px',
        marginTop: '5px'
    },
    address: {
        textAlign: 'left',
        '@media screen and (max-width: 800px)':{
            marginLeft: '20px',
        },
    },
    icon: {
        fontSize: '35px', 
        paddingRight: '10px',
    },
    waIcon: {
        fontSize: '35px', 
        paddingRight: '10px',
        color: '#006400',
    },
});

const footerInstaLink = "https://www.instagram.com/sweat__school/?hl=en";

const footerWhatsAppLink = `https://wa.me/919535580772?text=I%20want%20to%20start%20my%20fitness%20journey.%20
                            Can%20you%20please%20guide%20me%20?`;

const footerMapsLink = `https://www.google.com/maps/dir//Sweat+School,+Chord+Rd,+West+Of+Chord+Road,+West+of+Chord+Road+
                        3rd+Stage,+Basaveshwar+Nagar,+Bengaluru,+Karnataka/@12.9893011,77.5048132,13z/data=
                        !4m9!4m8!1m0!1m5!1m1!1s0x3bae3d3070611cbd:0x41fbf799884a8a54!2m2!1d77.5398326!2d12.9892361!3e0`;

const Footer = () => {
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <Grid container direction="row" justify="space-around" spacing={2}>
                <Grid item xs={12} md={3}>
                    <FooterLogo alt="Footer Logo" src={Logo} />
                    <Typography variant="body2" className={classes.address}>
                        5th Main Road, 354, Chord Rd, West of Chord Road 3rd Stage, 
                        Basaveshwar Nagar, Bengaluru, Karnataka 560079
                    </Typography>
                    <Button variant="contained" size="small" className={classes.button}>
                        <Link 
                            to={{pathname: footerMapsLink}}
                            target="_blank"
                            className={classes.link}
                            >
                                Directions
                        </Link>
                    </Button>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h5">
                        Quick Links
                    </Typography>
                    <FooterDivider />
                    <Typography variant="body1">
                        <HashLink to="/home#trainings" className={classes.link}>Training Programs</HashLink>
                    </Typography>
                    <Typography variant="body1">
                        <Link to="/transformations" className={classes.link}>Transformations</Link>
                    </Typography>
                    <Typography variant="body1">
                        <Link to="/about" className={classes.link}>About Us</Link>
                    </Typography>
                    <Typography variant="body1">
                        <Link to="/gallery" className={classes.link}>Gallery</Link>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h5">
                        Contact Us
                    </Typography>
                    <FooterDivider />
                    <Link 
                        to={{pathname: footerInstaLink}} 
                        target="_blank">
                            <InstagramIcon color="secondary" className={classes.icon} /> 
                    </Link>
                    
                    <Link 
                        to={{pathname: footerInstaLink}} 
                        target="_blank">
                            <FacebookIcon color="primary" className={classes.icon} />
                    </Link>

                    <Link 
                        to={{pathname: footerWhatsAppLink}} 
                        target="_blank">
                            <WhatsAppIcon className={classes.waIcon} />
                    </Link>
                    <Typography>
                        Mob: +91-9585530772
                    </Typography>
                </Grid>
            </Grid>
            <CopyrightDivider />
            <Typography variant="body2">
                Copyright © 2020-2021 Sweat School. All rights reserved.
            </Typography>
        </div>
    )
}

export default Footer;