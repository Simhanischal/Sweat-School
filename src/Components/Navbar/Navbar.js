import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { useMediaQuery } from 'react-responsive';
import Logo from '../../Images/Logo.png';

const Bar = styled.ul`
    margin-top: 0;
    list-style-type: none;
    overflow: hidden;
    position: ${props => props.position || "static"};
`;

const NavHome = styled.li`
    float: left;
`;

const NavLogo = styled.img`
    height: ${props => props.display === "mobile"? "50px": "100px"};
`;

const NavLink = styled.li`
    margin-top: 25px;
    float: ${props => props.float || "right"};
    display: ${props => props.display};
    text-align: ${props => props.textAlign || "right"};
    padding: ${props => !props.display && "0 15px"}
`;

const NavMenu = styled.div`
    display: ${props => props.display || "none"};
    position: absolute;
    right: 0;
    top: 10px;
`;

const Navbar = () => {
    const [display, setDisplay] = useState("none");

    const menuClickHandler = () => {
        if(display === "block") setDisplay("none");
        else setDisplay("block");
    }

    const desktopView = <Bar>
            <NavHome>
                <NavLogo alt="logo" src={Logo} />
            </NavHome> 
            <NavLink>
                <Typography variant="body1">About Us</Typography>
            </NavLink>
            <NavLink>
                <Typography variant="body1">Gallery</Typography>
            </NavLink>
            <NavLink>
                <Typography variant="body1">Transformations</Typography>    
            </NavLink>
            <NavLink>
                <Typography variant="body1">Training Programs</Typography>
            </NavLink>
            <NavMenu />
        </Bar>;

    const mobileView = <Bar position="relative">
            <NavHome>
                <NavLogo alt="logo" src={Logo} display="mobile" />
            </NavHome>
            <NavLink float="none" textAlign="left" display={display} style={{marginTop: '55'}}>
                <Typography variant="body1">Training Programs</Typography>
            </NavLink>
            <NavLink float="none" textAlign="left" display={display}>
                <Typography variant="body1">Transformations</Typography>    
            </NavLink>
            <NavLink float="none" textAlign="left" display={display}>
                <Typography variant="body1">Gallery</Typography>
            </NavLink>
            <NavLink float="none" textAlign="left" display={display}>
                <Typography variant="body1">About Us</Typography>
            </NavLink>
            <NavMenu display="block" onClick={menuClickHandler}>
                {
                    display==="none"? <MenuIcon />: <CloseIcon />
                }
            </NavMenu>
        </Bar>;

    const isDesktop = useMediaQuery({ query: '(min-device-width: 1224px)' });

    return(
        <React.Fragment>
            {isDesktop === true ? desktopView : mobileView }
        </React.Fragment>
    )
}

export default Navbar;