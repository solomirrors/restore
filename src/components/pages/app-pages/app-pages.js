import React from "react";
import './app-pages.css'
import {Nav, Navbar, NavLink} from "react-bootstrap";
import {appButton, appLogotype} from "./fragments";
import {bag, doorOpen, moonStars, translate} from "../../svg";

export const AppPages = () => {
    return(
        <React.Fragment>
            <Navbar className='app-navbar m-0 p-0'>
                {appLogotype('Re', 'BOOK')}
                <Navbar.Collapse id="responsive-navbar-nav" className='app-navbar-collapse p-0'>
                    <Nav className='w-100'>
                        <div className='app-nav-link-div-left d-flex'>
                            <NavLink>
                                {appButton('Theme', moonStars(26, 26))}
                            </NavLink>
                            <NavLink>
                                {appButton('Translate', translate(26, 26))}
                            </NavLink>
                        </div>
                        <div className='app-nav-link-div-right d-flex'>
                            <NavLink>
                                {appButton('Login', doorOpen(26, 26))}
                            </NavLink>
                            <NavLink>
                                {appButton('Cart', bag(26, 26))}
                            </NavLink>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}