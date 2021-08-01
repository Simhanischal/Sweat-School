import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';

const Founder = styled(Avatar)`
    height: 200px;
    width: 200px;
    box-shadow: 0 10px 50px 10px rgb(0 0 0 / 50%);
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const FounderAvatar = (props) => {
    return(
        <Founder alt={props.name} src={props.image} />
    )
}

export default FounderAvatar;