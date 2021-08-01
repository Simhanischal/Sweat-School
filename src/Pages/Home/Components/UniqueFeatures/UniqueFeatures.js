import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardWithImage from '../../../../Components/CardWithImage';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import HighQualityIcon from '@material-ui/icons/HighQuality';

const UniqueFeatures = () => {
    return (
        <div>
            <Typography variant="h4" style={{marginBottom: '25px'}}>Our Unique Features</Typography>
            <Grid container justify="space-around" direction="row">
                <Grid item xs={12} md={2}>
                    <CardWithImage 
                        icon={<FitnessCenterIcon style={{fontSize: '40'}} />}
                        heading="Functional Training"
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <CardWithImage 
                        icon={<HowToRegIcon style={{fontSize: '40'}} />}
                        heading="Individual Attention"
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <CardWithImage 
                        icon={<HighQualityIcon style={{fontSize: '40'}} />}
                        heading="Certified Trainers"
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <CardWithImage 
                        icon={<DirectionsBikeIcon style={{fontSize: '40'}} />}
                        heading="Outdoor Activities"
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default UniqueFeatures;
