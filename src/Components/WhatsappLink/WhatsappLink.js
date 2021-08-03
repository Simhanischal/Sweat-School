import React from 'react';
import { Link } from 'react-router-dom';
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
    const link = "https://wa.me/919535580772?text=I%20want%20to%20enroll%20in%20a%20program.%20Can%20you%20provide%20me%20some%20more%20details?"
    const classes = useStyles();
    return (
        <div>
            <Link 
                to={{pathname: link}} 
                target="_blank">
                    <WhatsAppIcon className={classes.icon} />
            </Link>
            
        </div>
    );
}

export default WhatsappLink;
