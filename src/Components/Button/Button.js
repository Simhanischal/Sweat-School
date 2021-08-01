import styled from 'styled-components';

const Button = () => styled.button`
    color: ${props => props.color || "#0582FA" };
    background-color: ${props => props.bgColor || "#000000" };
    border-radius: 4px;
    padding: 4px;
    &:hover{
        color: ${props => props.color || "#000000" };
        background-color: ${props => props.bgColor || "#0582FA" };
    }
`;

export default Button;