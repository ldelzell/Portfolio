import React from "react";
import { useState,useEffect } from "react";
import {Link} from "react-scroll"

function NavBar(){
    const [navActive, setNavActive] = useState
    (false);

    const toggleNav = () => {
        setNavActive(!navActive)
    }

    const closeMenu = () =>{
        setNavActive(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 500) {
                closeMenu();
            }
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        if(window.innerWidth <= 1200){
            closeMenu();
        }
    }, []);

    return (
        //Since the navbar can be active and not, we have to give that 2 class names and this is how we decide what class name does it have
        <nav className={`navbar ${navActive? "active": ""}`}>
            <div>
                <img src="./Logo.png" alt="logo" height="100%" width="70px"/>
                <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
                    <span className="nav__hamburger__line">
                    </span>
                    <span className="nav__hamburger__line">
                    </span>
                    <span className="nav__hamburger__line">
                    </span>
                </a>
                <div className={`navbar--items ${navActive ? "active" : ""}`}>
                    <ul>
                        <li>
                            <Link 
                            onClick={closeMenu} 
                            activeClass="navbar--active-content" 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500}
                            to="heroSection"
                            className="navbar--content"
                            >
                                Home
                                </Link>
                        </li>
                        <li>
                            <Link 
                            onClick={closeMenu} 
                            activeClass="navbar--active-content" 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500}
                            to="MyPortfolio"
                            className="navbar--content"
                            >
                                Porfolio
                            </Link>
                        </li>
                        <li>
                            <Link 
                                onClick={closeMenu} 
                                activeClass="navbar--active-content" 
                                spy={true} 
                                smooth={true} 
                                offset={-70} 
                                duration={500}
                                to="AboutMe"
                                className="navbar--content"
                            >
                                AboutMe
                            </Link>
                        </li>
                        <li>
                            <Link 
                                onClick={closeMenu} 
                                activeClass="navbar--active-content" 
                                spy={true} 
                                smooth={true} 
                                offset={-70} 
                                duration={500}
                                to="AboutMe"
                                className="navbar--content"
                            >
                                AboutMe
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Link
                onClick={closeMenu} 
                activeClass="navbar--active-content" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                to="ContactMe"
                className="btn btn-outline-primary"
            >
            Contact Me</Link>
        </nav>
    );
}

export default NavBar;
