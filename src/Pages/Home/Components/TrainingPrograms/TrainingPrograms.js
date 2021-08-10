import React from 'react';
import { Link } from 'react-router-dom';
import CardWithImage from '../../../../Components/CardWithImage';
import { HomePrograms } from '../../../../Data/ProgramData';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const [Functional, Calisthenics, AnimalFlow] = HomePrograms;

const useStyles = makeStyles({
    heading: {
        marginTop: '70px', 
        marginBottom: '25px',
    },
    program: {
        '@media screen and (max-width: 600px)': {
            marginTop: '50px',
        },
    },
    button: {
        marginLeft: 'auto', 
        marginRight: 'auto', 
        marginTop: '-20px', 
        textDecoration: 'none',
    }
});

const button = <Button 
                color="primary" 
                variant="contained">
                    Learn More
               </Button>;

const LinkButton = (props) => {
    const classes = useStyles();
    return <Link 
            className={classes.button}
            to={`/trainings/${props.program}`}>
                {button}
           </Link>;
}

const TrainingPrograms = () => {
    const classes = useStyles();
    return(
        <div >
            <Typography id="trainings" variant="h4" className={classes.heading}>
                Our Training Programs
            </Typography>

            <Grid container justify="space-around" direction="row">
                <Grid item xs={12} sm={3}>
                    <CardWithImage 
                        name={Calisthenics.name}
                        image={Calisthenics.image}
                        height="250"
                        heading={Calisthenics.name}
                        button={<LinkButton program='calisthenics' />}
                    />
                </Grid>
                <Grid item xs={12} sm={3} className={classes.program}>
                    <CardWithImage 
                        name={Functional.name}
                        image={Functional.image}
                        height="250"
                        heading={Functional.name}
                        button={<LinkButton program='functional' />}
                    />
                </Grid>
                <Grid item xs={12} sm={3} className={classes.program}>
                    <CardWithImage 
                        name={AnimalFlow.name}
                        image={AnimalFlow.image}
                        height="250"
                        heading={AnimalFlow.name}
                        button={<LinkButton program='animalFlow' />}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default TrainingPrograms;