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
`;

const Bar = styled.ul`
    margin-top: 0;
    list-style-type: none;  
    @media screen and (max-width: 800px){
        overflow: hidden;
    }
`;

const NavHome = styled.li`
    float: left;
`;

const NavLogo = styled.img`
    height: 70px;
    width: 80px;
    @media screen and (max-width: 800px){
        position: absolute;
        top: 0;
        margin-left: -10px;
    }
`;

const NavLink = styled.li`
    margin-top: 20px;
    float: ${props => props.float || "right"};
    display: ${props => props.display};
    text-align: ${props => props.textAlign || "right"};
    padding: ${props => !props.display && "0 15px"};
    @media screen and (max-width: 800px){
        margin-top: ${props => props.firstLink? "80px": "50px"};
    }
`;

const NavMenu = styled.div`
    display: ${props => props.display || "none"};
    position: absolute;
    right: 0;
    top: 20px;
`;

const useStyles = makeStyles({
    menuContainer: {
        marginTop: '50px',
    },
    link: {
        textDecoration: 'none',
        '&:hover':{
            opacity: '50%',
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
                        <Link to="/about" className={classes.link}>
                            <Typography variant="h6" color="primary">About Us</Typography>
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link to="/gallery" className={classes.link}>
                            <Typography variant="h6" color="primary">Gallery</Typography>
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link to="/transformations" className={classes.link}>
                            <Typography variant="h6" color="primary">Transformations</Typography>
                        </Link>   
                    </NavLink>
                    <NavLink>
                        <HashLink to="/#trainings" className={classes.link}>
                            <Typography variant="h6" color="primary">Training Programs</Typography>
                        </HashLink>
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
                    <div className={classes.menuContainer}>
                        <NavLink float="none" firstLink textAlign="left" display={display} >
                            <HashLink to="/#trainings" className={classes.link}>
                                <FitnessCenterIcon color="primary" className={classes.navIcon} />
                                <Typography color="primary" variant="h5">Training Programs</Typography>
                            </HashLink>
                        </NavLink>
                        <NavLink float="none" textAlign="left" display={display}>
                            <Link to="/transformations" className={classes.link}>
                                <TransformIcon color="primary" className={classes.navIcon} />
                                <Typography color="primary" variant="h5">Transformations</Typography>
                            </Link>    
                        </NavLink>
                        <NavLink float="none" textAlign="left" display={display}>
                            <Link to="/gallery" className={classes.link}>
                                <PhotoLibraryIcon color="primary" className={classes.navIcon} />
                                <Typography color="primary" variant="h5">Gallery</Typography>
                            </Link>
                        </NavLink>
                        <NavLink float="none" textAlign="left" display={display}>
                            <Link to="/about" className={classes.link}>
                                <GroupIcon color="primary" className={classes.navIcon} />
                                <Typography color="primary" variant="h5">About Us</Typography>
                            </Link>
                        </NavLink>
                    </div>
                    <NavMenu display="block" onClick={menuClickHandler}>
                        {
                            display==="none"
                            ? <MenuIcon color="primary" className={classes.menuIcon} />
                            : <CloseIcon color="error" className={classes.menuIcon} />
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