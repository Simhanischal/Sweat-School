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
    const link = `https://wa.me/919535580772?text=I%20want%20to%20start%20my%20fitness%20journey.%20
                  Can%20you%20please%20guide%20me%20?`
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
