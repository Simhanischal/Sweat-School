import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardWithImage from '../../../../Components/CardWithImage';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import HighQualityIcon from '@material-ui/icons/HighQuality';

const useStyles = makeStyles({
    feature: {
        '@media screen and (max-width: 800px)':{
            marginTop: '30px',
        },
    },
    heading: {
        marginTop: '70px', 
        marginBottom: '25px',
    },
    icon: {
        fontSize: '40px',
    }
});

const UniqueFeatures = () => {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h4" className={classes.heading}>Our Unique Features</Typography>
            <Grid container justify="space-around" direction="row">
                <Grid item xs={12} md={2}>
                    <CardWithImage 
                        icon={<FitnessCenterIcon className={classes.icon} />}
                        heading="Functional Training"
                    />
                </Grid>
                <Grid item xs={12} md={2} className={classes.feature}>
                    <CardWithImage 
                        icon={<HowToRegIcon className={classes.icon} />}
                        heading="Individual Attention"
                    />
                </Grid>
                <Grid item xs={12} md={2} className={classes.feature}>
                    <CardWithImage 
                        icon={<HighQualityIcon className={classes.icon} />}
                        heading="Certified Trainers"
                    />
                </Grid>
                <Grid item xs={12} md={2} className={classes.feature}>
                    <CardWithImage 
                        icon={<DirectionsBikeIcon className={classes.icon} />}
                        heading="Outdoor Activities"
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default UniqueFeatures;
