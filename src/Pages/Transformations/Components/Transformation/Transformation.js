import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Image = styled.img`
    width: 500px;
    height: 450px;
    border: 2px solid #000000;
    @media screen and (max-width: 800px){
        width: 600px;
    }
`;
const Details = styled.div`
    margin: 0 auto;
    text-align: left;
    width: 600px;
    padding: 5px 15px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    transition: 0.3s;
    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;

const useStyles = makeStyles({
    hideDetails: {
        '@media screen and (max-width: 800px)': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            '-webkit-line-clamp': 4,
            '-webkit-box-orient': 'vertical',
        },
    },
    showDetails: {
        '@media screen and (max-width: 800px)':{
            overflow: 'visible',
        }
    },
    readMoreVisible: {
        visibility: 'hidden',
        '@media screen and (max-width: 800px)': {
            visibility: 'visible',
        },
    },
    readMoreInvisible: {
        visibility: 'hidden',
    },
});

const Transformation = props => {
    const classes = useStyles();
    const [readMore, setReadMore] = useState(false);
    const handleReadMore = () => {
        setReadMore(readMore => !readMore);
    }
    return(
        <>
            <Grid container>
                <Grid item xs={12} md={6}>
                        {
                            props.name === "Your Name"
                            ?<img alt="Transformation Item" src={props.image} width="200" height="200" />
                            :<Image alt="Transformation Item" src={props.image} />
                        }
                </Grid>
                <Grid item xs={12} md={6}>
                    <Details>
                        <Typography variant="h4" color="primary">
                            {props.name} 
                        </Typography>
                        <Typography 
                            variant="subtitle1" 
                            className={readMore? classes.showDetails: classes.hideDetails}
                        >
                            {props.description}
                            {props.name === "Your Name" && 
                                <Button variant="contained" color="primary">
                                    Start My Transformation
                                </Button>
                            }
                        </Typography>
                        <Button 
                            className={props.readMore? classes.readMoreVisible: classes.readMoreInvisible}
                            variant="contained"
                            color="default"
                            startIcon={readMore? <ExpandLessIcon />: <ExpandMoreIcon />}
                            onClick={handleReadMore}
                        >
                            {readMore? "Read Less": "Read More"}
                        </Button>
                    </Details>
                </Grid>
            </Grid>
        </>
    );
}

export default Transformation;