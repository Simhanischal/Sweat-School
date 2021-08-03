import React from 'react';
import styled from 'styled-components'; 
import FounderAvatar from './Components/FounderAvatar';
import { AboutUsData } from '../../Data/AboutUsData';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import GoogleMap from './Components/GoogleMap';

const Description = styled.div`
    text-align: left;
    padding: 10px 50px;
    @media screen and (max-width: 800px){
        padding-top: 5px;
        padding-bottom: 20px;
        padding-left: 5px;
        padding-right: 0;
    }
`;

const [Anoop, Tilak] = AboutUsData;

const AboutUs = () => {
    return(
        <>
            <Typography variant="h3" style={{textDecoration: 'underline', marginBottom: '50px'}}>
                Our Team
            </Typography>
            <Grid
                container
                direction="row"
                justify="space-between"
            >
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4">{Anoop.name}</Typography>
                    <Typography variant="subtitle1">{Anoop.designation}</Typography>
                    <FounderAvatar name="Anoop" image={Anoop.image} />
                    <InstagramIcon color="secondary" style={{fontSize: 35, cursor: 'pointer', marginTop: '15px'}} /> 
                    <Description>
                        <Typography variant="subtitle2" style={{fontSize: 17}}>
                            {Anoop.description}
                        </Typography>
                    </Description>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4">{Tilak.name}</Typography>
                    <Typography variant="subtitle1">{Tilak.designation}</Typography>
                    <FounderAvatar name="Tilak" image={Tilak.image} />
                    <InstagramIcon color="secondary" style={{fontSize: 35, cursor: 'pointer', marginTop: '15px'}} /> 
                    <Description>
                        <Typography variant="subtitle2" style={{fontSize: 17}}>
                            {Tilak.description}
                        </Typography>
                    </Description>
                </Grid>
            </Grid>
            <GoogleMap />
        </>
    );
}

export default AboutUs;