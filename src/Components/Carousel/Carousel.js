import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';

const ImageContainer = styled.div`
    margin: 0 auto;
`;

const IconContainer = styled.div`
    margin-top: 30px;
    margin-left: 20px;
`;

const ButtonIcon = styled.button`
    border-radius: 50%;
    border: 2px solid #FFFFFF;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    cursor: pointer;
    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    @media screen and (max-width: 800px){
        cursor: none;
    }
`;

const CarouselImage = styled.img`
    width: 600px;
    height: 400px;
    @media screen and (max-width: 800px){
        width: 400px;
    }
`;

const useStyles = makeStyles({
    icon: {
        fontSize: '40px',
    },
    prevButton: {
        marginRight: '10px',
    },
    nextButton: {
        marginLeft: '18px',
    },
});

const Carousel = props => {
    const [ pointer, setPointer ] = useState(0);
    const images = props.images;

    const classes = useStyles();
    
    const handleLeftArrow = () => {
        if(pointer !== 0){
            setPointer(pointer - 1);
        }
        else{
            setPointer(images.length - 1);
        }
    }

    const handleRightArrow = () => {
        if(pointer !== (images.length - 1)){
            setPointer(pointer + 1);
        }
        else{
            setPointer(0);
        }
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => handleRightArrow(),
        onSwipedRight: () => handleLeftArrow(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    // setTimeout(()=>{
    //     handleRightArrow();
    // },3000);

    // useEffect(() => {
    //     return () => {
    //         clearTimeout();
    //     }
    // })

    return(
        <div {...handlers}>  
            <ImageContainer>
                <Link to="/transformations">
                    <CarouselImage alt="CarouselImg" src={images[pointer]} />
                </Link>
            </ImageContainer>
            <IconContainer>
                <ButtonIcon onClick={handleLeftArrow} className={classes.prevButton}>
                    <ArrowBackIcon 
                        color="primary" 
                        className={classes.icon}        
                    />
                </ButtonIcon>
                <ButtonIcon onClick={handleRightArrow} className={classes.nextButton}>
                    <ArrowForwardIcon 
                        color="primary" 
                        className={classes.icon}         
                    />
                </ButtonIcon> 
            </IconContainer>
        </div>
    );
}

export default Carousel;
