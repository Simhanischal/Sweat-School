import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.5)",
        transition: "0.3s",
        "&:hover": {
            boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
        }
    }
});

const CardWithImage = props => {
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            <CardActionArea>
                {
                    props.icon
                    ? <CardMedia>
                        {props.icon}
                      </CardMedia>
                    : <CardMedia
                        component="img"
                        alt={props.name}
                        height={props.height}
                        image={props.image}
                        title={props.name} />
                }
                {
                   (props.heading || props.description) &&
                   <CardContent>
                    {
                        props.heading &&
                        <Typography variant="h6">
                            {props.heading}
                        </Typography>
                    }
                    {
                        props.description &&
                        <Typography style={{textAlign: "left"}} variant="body2" color="textSecondary" component="p">
                            {props.description}
                        </Typography>
                    }   
                    </CardContent> 
                }
                
            </CardActionArea>
            {
                props.button && 
                <CardActions>
                    {props.button}
                </CardActions>
            }
        </Card>
    )
}

export default CardWithImage;