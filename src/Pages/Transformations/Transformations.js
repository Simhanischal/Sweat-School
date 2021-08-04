import React from 'react';
import styled from 'styled-components';
import { TransformationData } from '../../Data/TransformationData';
import Transformation from './Components/Transformation';
import Typography from '@material-ui/core/Typography';

const LineDivider = styled.div`
    margin-top: 25px;
    background-color: #000000;
    height: 1px;
    width: 100vw;
    @media screen and (max-width: 500px){
        width: 650px;
    }
`;

const Transformations = () => {
    return(
        <div style={{marginTop: '100px'}}>
            <Typography variant="h3" style={{textDecoration: 'underline'}}>
                Transformations 
            </Typography>
            {
                TransformationData.map((transformation) => {
                    return(
                        <div style={{marginTop: '25px'}}>
                            <Transformation 
                                key={transformation.id}
                                image={transformation.image} 
                                name={transformation.name} 
                                description={transformation.description}
                                readMore={transformation.readMore}
                            />
                            <LineDivider />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Transformations;