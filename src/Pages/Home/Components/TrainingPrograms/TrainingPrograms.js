import React from 'react';
import CardWithImage from '../../../../Components/CardWithImage';
import Functional from '../../../../Images/Functional.png';
import Calisthenics from '../../../../Images/Calisthenics.png';
import AnimalFlow from '../../../../Images/AnimalFlow.png';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const onlineDescription = "ooko kodnn doo oko o kdo o kk kodo kk ddo ao kkokk kok kkoko koo oko  k kooko kodnn doo oko o kdo o kk kodo kk ddo ao kkokk kok kkoko koo oko";

const offlineDescription = "k kooko dnn doo oko o kdo o kk kodo kk ddo ao kkokk kok kkoko koo oko  k kooko kov o oko o kdo o kk kodo kk ddo ao kkokk kok kkoko koo oko  k kooko kodnn";

const TrainingPrograms = () => {
    return(
        <>
            <Typography variant="h4">Our Training Programs</Typography>

            <Grid container justify="space-around" direction="row">
                <Grid item xs={12} md={3}>
                    <CardWithImage 
                        name="Functional Training" 
                        image={Functional}
                        height="250"
                        heading="Functional Training"
                        description={onlineDescription}
                        button={<Button 
                                color="primary" 
                                style={{margin: "auto"}} 
                                variant="contained">
                                    Learn More
                                </Button>}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <CardWithImage 
                        name="Calisthenics" 
                        image={Calisthenics}
                        height="250"
                        heading="Calisthenics"
                        description={offlineDescription}
                        button={<Button 
                                color="primary" 
                                style={{margin: "auto"}} 
                                variant="contained">
                                    Learn More
                                </Button>}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <CardWithImage 
                        name="Animal Flow" 
                        image={AnimalFlow}
                        height="250"
                        heading="Animal Flow"
                        description={onlineDescription}
                        button={<Button 
                                color="primary" 
                                style={{margin: "auto"}} 
                                variant="contained">
                                    Learn More
                                </Button>}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default TrainingPrograms;