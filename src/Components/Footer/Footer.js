import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/Logo.png';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { green } from '@material-ui/core/colors';

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
    link:{
        textDecoration: 'none',
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
});

const Footer = () => {
    const classes = useStyles();
    return(
        <div style={{marginTop: '70px', borderTop: '2px solid #000000'}}>
            <Grid container direction="row" justify="space-around">
                <Grid item xs={12} md={3}>
                    <FooterLogo alt="Footer Logo" src={Logo} />
                    <Typography variant="body2" style={{textAlign: 'left'}}>
                        5th Main Road, 354, Chord Rd, West of Chord Road 3rd Stage, 
                        Basaveshwar Nagar, Bengaluru, Karnataka 560079
                    </Typography>
                    <Button variant="contained" size="small" className={classes.button}>
                        <Link 
                            to={{pathname: "https://www.google.com/maps/place/Sweat+School/@12.9892198,77.5398329,15z/data=!4m5!3m4!1s0x0:0x41fbf799884a8a54!8m2!3d12.9892361!4d77.5398326"}}
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
                    {/* <Typography variant="body1">
                        <Link to="/home#trainings" className={classes.link}>Training Programs</Link>
                    </Typography> */}
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
                        to={{pathname: "https://www.instagram.com/sweat__school/?hl=en"}} 
                        target="_blank">
                            <InstagramIcon color="secondary" style={{fontSize: 35, paddingRight: 10,}} /> 
                    </Link>
                    
                    <Link 
                        to={{pathname: "https://www.instagram.com/sweat__school/?hl=en"}} 
                        target="_blank">
                            <FacebookIcon color="primary" style={{fontSize: 35, paddingRight: 10,}} />
                    </Link>

                    <Link 
                        to={{pathname: "https://wa.me/919535580772?text=I%20want%20to%20enroll%20in%20a%20program.%20Can%20you%20provide%20me%20some%20more%20details?"}} 
                        target="_blank">
                            <WhatsAppIcon style={{color: green[500],fontSize: 35, paddingRight: 10,}}/>
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