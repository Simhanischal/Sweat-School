import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';

const ImageContainer = styled.div`
    margin: 0 auto;
`;

const IconContainer = styled.div`
    margin: 0 auto;
`;

const ButtonIcon = styled.button`
    border-radius: 50%;
    border: 2px solid #FFFFFF;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;

const CarouselImage = styled.img`
    width: 600px;
    height: 400px;
    @media screen and (max-width: 800px){
        width: 400px;
    }
`;

const Carousel = props => {
    const [ pointer, setPointer ] = useState(0);
    const images = props.images;
    
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
            <IconContainer style={{marginTop: '30px', marginLeft: '20px'}}>
                <ButtonIcon onClick={handleLeftArrow} style={{marginRight: '10px'}}>
                    <ArrowBackIcon 
                        color="primary" 
                        style={{fontSize: "40", cursor: "pointer"}}          
                    />
                </ButtonIcon>
                {/* &nbsp;&nbsp;&nbsp; */}
                <ButtonIcon onClick={handleRightArrow} style={{marginLeft: '18px'}}>
                    <ArrowForwardIcon 
                        color="primary" 
                        style={{fontSize: "40", cursor: "pointer"}}        
                    />
                </ButtonIcon> 
            </IconContainer>
        </div>
    );
}

export default Carousel;
