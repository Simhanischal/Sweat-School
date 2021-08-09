import React from 'react';
import AnoopLanding from '../../../../Images/AnoopLanding.png';
import { HashLink } from 'react-router-hash-link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { useMediaQuery } from 'react-responsive';

const useStyles = makeStyles({
    // actionGrid: {
    //     marginLeft: '100px',
    // },
    image: {
        width: '400px',
        height: '500px',
    },
    backgroundImage: {
        backgroundImage: 'url("https://www-growth.scdn.co/static/home/bursts.svg")',
        backgroundPosition: '-45% -10%',
        '@media screen and (max-width: 800px)': {
            backgroundPosition: '-35% -8%',
        },
    },
    button: {
        marginTop: '20px',
        marginRight: '190px',
        '@media screen and (max-width: 800px)': {
            margin: '0 auto'
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
        marginLeft: '30px',
        '@media screen and (max-width: 800px)': {
            marginLeft: '10px',
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
                <Grid item xs={12} md={6} className={classes.actionGrid} >
                    <Typography variant="h2" className={classes.heading}>Sweat School</Typography>
                    <Typography variant="h5" className={classes.subHeading}>
                        A community for fitness enthusiasts!
                    </Typography>
                    <Button variant="contained" color="primary" className={classes.button}>
                        <HashLink to="/#trainings" className={classes.link}>
                            Start Sweating!
                        </HashLink>
                    </Button>
                </Grid>
                <Grid item xs={12} md={6} className={classes.backgroundImage}>
                    <img alt="Landing" src={AnoopLanding} className={classes.image} />
                </Grid>
        </Grid>
    );
}

export default Landing;
