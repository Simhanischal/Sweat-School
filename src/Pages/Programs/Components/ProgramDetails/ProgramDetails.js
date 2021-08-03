import React from 'react';
import { useParams } from 'react-router-dom';
import { Programs } from '../../../../Data/ProgramData';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    image: {
        marginLeft: '100px',
        borderColor: 'black', 
        borderStyle: 'solid'
    }
});

const [Functional, Calisthenics, AnimalFlow] = Programs;

const ProgramDetails = () => {
    const classes = useStyles();
    const { selectedProgram } = useParams();
    const program = selectedProgram === 'functional'
                    ? Functional: (selectedProgram === 'calisthenics')
                    ? Calisthenics: AnimalFlow;
    return(
        <Grid container justify="space-around">
            <Grid item xs={12} md={5} className={classes.image}>
                <img alt="Program Item" src={program.image} height="400" />
            </Grid>
            <Grid item xs={12} md={5}>
                <Typography>
                    {program.name}
                </Typography>
                <Typography>
                    {program.description}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default ProgramDetails;