import React, { useState } from 'react';
import styled from 'styled-components';
import GalleryDialog from '../GalleryDialog';
import Grid from '@material-ui/core/Grid';

const Image = styled.img`
    height: 300px;
    width: 400px;
    margin-top: 25px;
    cursor: pointer;
    &:hover{
        opacity: 50%;
    }
`;

const GalleryRow = props => {
    const [openDialog, setOpenDialog] = useState(false);
    const handleDialog = () => {
        setOpenDialog(openDialog => !openDialog);
    }

    const [image, setImage] = useState(null);
    const handleImage = (image) => {
        setImage(image);
        handleDialog();
    }

    return(
        <>
            <Grid container justify="space-around">
                <Grid item md={6} onClick={() => handleImage(props.imageRow[0].image)}>
                    <Image alt="Gallery Item" src={props.imageRow[0].image} />
                </Grid>
                <Grid item md={6} onClick={() => handleImage(props.imageRow[1].image)}>
                    <Image alt="Gallery Item" src={props.imageRow[1].image} />
                </Grid>
            </Grid>
            <GalleryDialog openDialog={openDialog} handleDialog={handleDialog} image={image} />
        </>
    );
}

export default GalleryRow;