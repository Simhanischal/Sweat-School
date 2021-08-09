import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from '../../Images/Logo.png';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';

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
    height: ${props => props.display === "mobile"? "50px": "70px"};
    @media screen and (max-width: 800px){
        position: absolute;
        top: 10px;
    }
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
    top: 20px;
`;

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
        color: '#000000',
    },
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
                    <NavLink float="none" textAlign="left" display={display} style={{marginTop: '55px'}}>
                        <Typography variant="body1">
                            <HashLink to="/#trainings" className={classes.link}>Training Programs</HashLink>
                        </Typography>
                    </NavLink>
                    <NavLink float="none" textAlign="left" display={display}>
                        <Typography variant="body1">
                            <Link to="/transformations" className={classes.link}>Transformations</Link>
                        </Typography>    
                    </NavLink>
                    <NavLink float="none" textAlign="left" display={display}>
                        <Typography variant="body1">
                            <Link to="/gallery" className={classes.link}>Gallery</Link>
                        </Typography>
                    </NavLink>
                    <NavLink float="none" textAlign="left" display={display}>
                        <Typography variant="body1">
                            <Link to="/about" className={classes.link}>About Us</Link>
                        </Typography>
                    </NavLink>
                    <NavMenu display="block" onClick={menuClickHandler}>
                        {
                            display==="none"? <MenuIcon />: <CloseIcon />
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