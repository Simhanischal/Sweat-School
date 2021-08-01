import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    image: {
        marginLeft: '100px',
        borderColor: 'black', 
        borderStyle: 'solid'
    }
})

const ProgramDetails = props => {
    const classes = useStyles();
    return(
        <Grid container justify="space-around">
            <Grid item xs={12} md={5} className={classes.image}>
                <img alt="Program Item" src={props.image} height="400" />
            </Grid>
            <Grid item xs={12} md={5}>
                <Typography>
                    {props.name}
                </Typography>
                <Typography>
                    {props.description}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default ProgramDetails;