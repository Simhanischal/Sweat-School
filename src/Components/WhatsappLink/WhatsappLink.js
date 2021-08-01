import React from 'react';
import { makeStyles } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles({
    icon: {
        color: 'green',
        fontSize: 80,
        cursor: 'pointer',
        position: 'fixed',
        bottom: 0,
        right: 0,
    },
});

function WhatsappLink() {
    const classes = useStyles();
    return (
        <div>
            <WhatsAppIcon 
                className={classes.icon}
            />
        </div>
    );
}

export default WhatsappLink;
