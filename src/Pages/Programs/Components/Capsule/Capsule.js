import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        marginTop: '10px',
    },
    firstCapsule: {
        backgroundColor: 'green',
        color: 'white',
        width: 'fit-content',
        borderRadius: '17px',
        padding: '5px 15px',
        fontSize: '16px',
    },
    capsule: {
        marginLeft: '20px',
        backgroundColor: 'lightblue',
        width: 'fit-content',
        borderRadius: '17px',
        padding: '5px 15px',
        fontSize: '16px',
    }
});

const Capsule = props => {
    const classes = useStyles();

    const capsuleData = props.data;

    return (
        <div className={classes.container}>
            <div className={classes.firstCapsule}>
                <Typography>{capsuleData[0]}</Typography>  
            </div>
            <div className={classes.capsule}>
                <Typography>{capsuleData[1]}</Typography>  
            </div>
        </div>
    );
}

export default Capsule;
