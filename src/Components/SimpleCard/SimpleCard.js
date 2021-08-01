import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ForwardIcon from '@material-ui/icons/Forward';
import styled from 'styled-components';

const TrainingButton = styled.button`
    color: #0582FA;
    background-color: #000000;
    border-radius: 4px;
    width: 120px;
    height: 40px;
    cursor: pointer;
    &:hover{
        color: #000000;
        background-color: #0582FA;
    }
`;

const ButtonTypography = styled(Typography)`
    text-align: center;
    display: flex;
    justify-content: center;
`;

const SimpleCard = props => {
    return(
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {props.medium}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <TrainingButton>
                    <ButtonTypography variant="subtitle1">Explore <ForwardIcon /></ButtonTypography>
                </TrainingButton>
            </CardActions>
        </Card>
    )
}

export default SimpleCard;