import React from 'react';
import { Link } from 'react-router-dom';
import CardWithImage from '../../../../Components/CardWithImage';
import { Programs } from '../../../../Data/ProgramData';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const [Functional, Calisthenics, AnimalFlow] = Programs;

const button = <Button 
                color="primary" 
                variant="contained">
                    Learn More
               </Button>;

const LinkButton = (props) => {
    return <Link 
            style={{margin: "auto", textDecoration: 'none'}} 
            to={`/trainings/${props.program}`}>
                {button}
           </Link>;
}

const TrainingPrograms = () => {
    return(
        <div id="trainings">
            <Typography variant="h4" style={{marginTop: '70px', marginBottom: '25px'}}>
                Our Training Programs
            </Typography>

            <Grid container justify="space-around" direction="row">
                <Grid item xs={12} md={3}>
                    <CardWithImage 
                        name={Functional.name}
                        image={Functional.image}
                        height="250"
                        heading={Functional.name}
                        button={<LinkButton program='functional' />}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <CardWithImage 
                        name={Calisthenics.name}
                        image={Calisthenics.image}
                        height="250"
                        heading={Calisthenics.name}
                        button={<LinkButton program='calisthenics' />}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
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