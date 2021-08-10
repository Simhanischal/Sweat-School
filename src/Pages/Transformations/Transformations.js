import React from 'react';
import styled from 'styled-components';
import { TransformationData } from '../../Data/TransformationData';
import Transformation from './Components/Transformation';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const LineDivider = styled.div`
    margin-top: 25px;
    background-color: #000000;
    height: 1px;
    width: 100vw;
    @media screen and (max-width: 500px){
        width: 650px;
    }
`;

const useStyles = makeStyles({
    container: {
        marginTop: '100px',
    },
    heading: {
        textDecoration: 'underline',
    },
    transformation: {
        marginTop: '50px',
    },
});

const Transformations = () => {
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <Typography variant="h3" className={classes.heading}>
                Transformations 
            </Typography>
            {
                TransformationData.map((transformation) => {
                    return(
                        <div className={classes.transformation} key={transformation.id}>
                            <Transformation 
                                image={transformation.image} 
                                name={transformation.name} 
                                description={transformation.description}
                                readMore={transformation.readMore}
                            />
                            {/* <LineDivider /> */}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Transformations;