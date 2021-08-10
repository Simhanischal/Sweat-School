import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'; 
import FounderAvatar from './Components/FounderAvatar';
import { AboutUsData } from '../../Data/AboutUsData';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import GoogleMap from './Components/GoogleMap';

const Description = styled.div`
    text-align: left;
    padding: 10px 50px;
    @media screen and (max-width: 800px){
        padding-top: 5px;
        padding-bottom: 20px;
        padding-left: 5px;
        padding-right: 0;
    }
`;

const useStyles = makeStyles({
    container: {
        marginTop: '100px',
    },
    heading: {
        textDecoration: 'underline', 
        marginBottom: '50px',
    },
    description: {
        fontSize: '17px',
    },
    icon: {
        fontSize: '35px', 
        cursor: 'pointer', 
        marginTop: '15px',
    },
});

const [Anoop, Tilak] = AboutUsData;

const AboutUs = () => {
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <Typography variant="h3" className={classes.heading}>
                Our Team
            </Typography>
            <Grid
                container
                direction="row"
                justify="space-between"
            >
                <Grid item xs={12} md={6}>
                    <Typography variant="h4">{Anoop.name}</Typography>
                    <Typography variant="subtitle1">{Anoop.designation}</Typography>
                    <FounderAvatar name="Anoop" image={Anoop.image} />
                    <Link
                        to={{pathname: Anoop.insta}}
                        target="_blank">
                            <InstagramIcon 
                                color="secondary" 
                                className={classes.icon} /> 
                    </Link>
                    <Description>
                        <Typography variant="subtitle2" className={classes.description}>
                            {Anoop.description}
                        </Typography>
                    </Description>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4">{Tilak.name}</Typography>
                    <Typography variant="subtitle1">{Tilak.designation}</Typography>
                    <FounderAvatar name="Tilak" image={Tilak.image} />
                    <Link
                        to={{pathname: Tilak.insta}}
                        target="_blank">
                            <InstagramIcon 
                                color="secondary" 
                                className={classes.icon} /> 
                    </Link> 
                    <Description>
                        <Typography variant="subtitle2" className={classes.description}>
                            {Tilak.description}
                        </Typography>
                    </Description>
                </Grid>
            </Grid>
            <GoogleMap />
        </div>
    );
}

export default AboutUs;