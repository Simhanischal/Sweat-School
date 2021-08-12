import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Image = styled.img`
    width: 500px;
    height: 400px;
    border: 2px solid #000000;
    @media screen and (max-width: 800px){
        ${'' /* width: 400px; */}
        width: 100vw;
    }
`;
//
const Details = styled.div`
    margin: 0 auto;
    text-align: left;
    width: 550px;
    padding: 0 15px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    transition: 0.3s;
    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    @media screen and (max-width: 800px){
        padding: 0;
        width: 100vw;
    }
`;

const Description = styled.article`
    max-height: 300px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #d3d3d3;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: #c3c3c3;
        border-radius: 10px;
    }
`;

const useStyles = makeStyles({
    button: {
        marginTop: '10px',
        marginBottom: '10px',
        '@media screen and (max-width: 600px)':{
            marginLeft: '70px',
            marginBottom: '-12px',
        }
    },
    link: {
        textDecoration: 'none',
    },
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

const transformationWhatsappLink = `https://wa.me/919535580772?text=I%20want%20to%20start%20my%20
                                    fitness%20journey.%20Can%20you%20please%20guide%20me%20?`;

const Transformation = props => {
    const classes = useStyles();
    const [readMore, setReadMore] = useState(false);
    const handleReadMore = () => {
        setReadMore(readMore => !readMore);
    }
    return(
        <>
            <Grid container direction="row" justify="space-around">
                <Grid item xs={12} md={6}>
                    {
                        props.name === "Your Name"
                        ? <img alt="Your Transformation" src={props.image} width="200" />
                        : <Image alt="Transformation Item" src={props.image} />
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <Details>
                        <Typography variant="h4" color="primary">
                            {props.name} 
                        </Typography>
                        <Description>
                            <Typography 
                                variant="subtitle1" 
                                className={readMore? classes.showDetails: classes.hideDetails}
                            >
                                {props.description}
                            </Typography>
                        </Description>
                        {
                            props.name === "Your Name" && 
                            <Link 
                                className={classes.link} 
                                to={{pathname: transformationWhatsappLink}}
                                target="_blank"
                            >
                                <Button variant="contained" color="primary" className={classes.button}>
                                    Start My Transformation
                                </Button>
                            </Link>
                        }
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