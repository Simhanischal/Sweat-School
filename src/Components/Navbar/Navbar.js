import React, { useState, useEffect } from 'react';
import Logo from '../../Images/Logo.png';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useMediaQuery } from 'react-responsive';
import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import GroupIcon from '@material-ui/icons/Group';
import TransformIcon from '@material-ui/icons/Transform';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';


const Nav = styled.nav`
    position: fixed;  
    background: #FFFFFF;
    width: 100%;
    min-height: 70px;
    top: 0px;
    z-index: 100;
    overflow: hidden;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 15%);
    @media screen and (max-width: 800px){
        ${'' /* margin-bottom: ${props => props.display === "block" && "70px"}; */}
    }
`;

const Bar = styled.ul`
    margin-top: 0;
    ${'' /* overflow: hidden; */}
    list-style-type: none;  
    @media screen and (max-width: 800px){
        overflow: hidden;
    }
    ${'' /* position: ${props => props.position || "static"}; */}
`;

const NavHome = styled.li`
    float: left;
    ${'' /* margin-top: 0; */}
    ${'' /* @media screen and (max-width: 800px){
        position: absolute;
        top: 0;
    } */}
`;

const NavLogo = styled.img`
    ${'' /* margin-top: -60px; */}
    ${'' /* margin-top: 0; */}
    height: ${props => props.display === "mobile"? "60px": "70px"};
    @media screen and (max-width: 800px){
        position: absolute;
        top: 5px;
        margin-left: -10px;
    }
`;

const NavLink = styled.li`
    margin-top: 25px;
    float: ${props => props.float || "right"};
    display: ${props => props.display};
    text-align: ${props => props.textAlign || "right"};
    padding: ${props => !props.display && "0 15px"};
    @media screen and (max-width: 800px){
        margin-top: 50px;
    }
    ${'' /* border-left: 2px solid black; */}
`;

const NavMenu = styled.div`
    display: ${props => props.display || "none"};
    position: absolute;
    right: 0;
    top: 20px;
`;

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
        color: '#000000',
        '&:hover':{
            textDecoration: 'underline',
        },
        display: 'flex',
    },
    menuIcon: {
        fontSize: '40px',
        marginTop: '-5px',
    },
    navIcon: {
        marginRight: '10px',
        fontSize: '30px',
    }
});

const Navbar = () => {
    const classes = useStyles();

    const [display, setDisplay] = useState("none");

    const menuClickHandler = () => {
        if(display === "block") setDisplay("none");
        else setDisplay("block");
    }

    const { pathname } = useLocation();

    //close the opened navbar menu in mobile displays whenever the app is navigated to a different page
    useEffect(() => {
        setDisplay("none");
    }, [pathname]);

    const desktopView = 
            <Nav>
                <Bar>
                    <NavHome>
                        <Link to="/">
                            <NavLogo alt="logo" src={Logo} />
                        </Link>
                    </NavHome> 
                    <NavLink>
                        <Typography variant="body1">
                            <Link to="/about" className={classes.link}>About Us</Link>
                        </Typography>
                    </NavLink>
                    <NavLink>
                        <Typography variant="body1">
                            <Link to="/gallery" className={classes.link}>Gallery</Link>
                        </Typography>
                    </NavLink>
                    <NavLink>
                        <Typography variant="body1">
                            <Link to="/transformations" className={classes.link}>Transformations</Link>
                        </Typography>    
                    </NavLink>
                    <NavLink>
                        <Typography variant="body1">
                            <HashLink to="/#trainings" className={classes.link}>Training Programs</HashLink>
                        </Typography>
                    </NavLink>
                    <NavMenu />
                </Bar>
            </Nav>;

    const mobileView = 
            <Nav display={display}>
                <Bar position="relative">
                    <NavHome>
                        <Link to="/">
                            <NavLogo alt="logo" src={Logo} display="mobile" />
                        </Link>
                    </NavHome>
                    <NavLink float="none" textAlign="left" display={display} style={{marginTop: '80px'}}>
                        <HashLink to="/#trainings" className={classes.link}>
                            <FitnessCenterIcon className={classes.navIcon} />
                            <Typography variant="h6">Training Programs</Typography>
                        </HashLink>
                    </NavLink>
                    <NavLink float="none" textAlign="left" display={display}>
                        <Link to="/transformations" className={classes.link}>
                            <TransformIcon className={classes.navIcon} />
                            <Typography variant="h6">Transformations</Typography>
                        </Link>    
                    </NavLink>
                    <NavLink float="none" textAlign="left" display={display}>
                        <Link to="/gallery" className={classes.link}>
                            <PhotoLibraryIcon className={classes.navIcon} />
                            <Typography variant="h6">Gallery</Typography>
                        </Link>
                    </NavLink>
                    <NavLink float="none" textAlign="left" display={display}>
                        <Link to="/about" className={classes.link}>
                            <GroupIcon className={classes.navIcon} />
                            <Typography variant="h6">About Us</Typography>
                        </Link>
                    </NavLink>
                    <NavMenu display="block" onClick={menuClickHandler}>
                        {
                            display==="none"
                            ? <MenuIcon className={classes.menuIcon} />
                            : <CloseIcon className={classes.menuIcon} />
                        }
                    </NavMenu>
                </Bar>
            </Nav>;

    const isDesktop = useMediaQuery({ query: '(min-device-width: 800px)' });

    return(
        <React.Fragment>
            {isDesktop === true ? desktopView : mobileView }
        </React.Fragment>
    )
}

export default Navbar;