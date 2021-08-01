import React from 'react';
import styled from 'styled-components';
import { Dialog, DialogContent } from '@material-ui/core';

const Image = styled.img`
    height: 500px;
    width: 500px;
    @media screen and (max-width: 500px){
        height: 280px;
        width: 280px;
    }
`;

const GalleryDialog = (props) => {
    return(
        <Dialog
            open={props.openDialog}
            onClose={props.handleDialog}
        >
            <DialogContent>
                <Image alt="Zoomed Gallery item" src={props.image} />
            </DialogContent>
        </Dialog>
    );
}

export default GalleryDialog;