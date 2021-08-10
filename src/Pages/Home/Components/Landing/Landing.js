import React from 'react';
import AnoopLanding from '../../../../Images/AnoopLanding.png';
import { HashLink } from 'react-router-hash-link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { useMediaQuery } from 'react-responsive';

const useStyles = makeStyles({
    actionGrid: {
        textAlign: 'left',
        marginLeft: '150px',
        '@media screen and (max-width: 800px)': {
            textAlign: 'center',
            marginLeft: '0',
        },
    },
    image: {
        width: '400px',
        height: '500px',
        '@media screen and (max-width: 600px)': {
            marginLeft: '50px',
        },
    },
    backgroundImage: {
        backgroundImage: 'url("https://www-growth.scdn.co/static/home/bursts.svg")',
        backgroundPosition: '-45% -10%',
        '@media screen and (max-width: 600px)': {
            backgroundPosition: '-35% -8%',
        },
        '@media screen and (min-width: 600px)': {
            backgroundPosition: '-55% -8%',
        },
        '@media screen and (min-width: 800px)': {
            backgroundPosition: '-45% -8%',
        },
    },
    button: {
        marginTop: '20px',
        '@media screen and (max-width: 800px)': {
            margin: '0 auto',
            fontSize: '17px',
        },
    },
    heading: {
        marginTop: '100px',
        '@media screen and (max-width: 800px)': {
            margin: '10px',
        },
    },
    subHeading: {
        marginTop: '10px', 
        // marginLeft: '30px',
        '@media screen and (max-width: 800px)': {
            marginLeft: '10px',
            marginBottom: '20px',
        },
    },
    description: {
        marginTop: '10px',
        // textAlign: 'left',
        // marginLeft: '140px',
        '@media screen and (max-width: 800px)': {
            marginLeft: '20px',
            marginBottom: '20px',
        },
    },
    link: {
        textDecoration: 'none',
        color: '#FFFFFF',
    }
});

const Landing = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery({query: '(max-device-width: 800px)'});
    return (
        <Grid 
            container 
            justify="space-around" 
            direction={isMobile === true? "column-reverse": "row"}>
                <Grid item xs={12} md={6}>
                    <div className={classes.actionGrid}>
                        <Typography variant="h2" className={classes.heading}>Sweat School</Typography>
                        <Typography variant="h5" className={classes.subHeading}>
                            A community for fitness enthusiasts!
                        </Typography>
                        <Typography variant="h6" className={classes.description}>
                            It's time to stop getting scammed by false promises and 
                            start getting trained by certified professionals with the right 
                            knowledge to help reach your goal! 
                        </Typography>
                        <Button variant="contained" color="primary" className={classes.button}>
                            <HashLink to="/#trainings" className={classes.link}>
                                Start Sweating!
                            </HashLink>
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} className={classes.backgroundImage}>
                    <img alt="Landing" src={AnoopLanding} className={classes.image} />
                </Grid>
        </Grid>
    );
}

export default Landing;
