import React from "react";
import './app-header.css'
import {appButton, appLogotype} from "../fragments";
import {Nav, Navbar, NavLink} from "react-bootstrap";
import {bag, doorOpen, moonStars, translate} from "../../../svg";

export const AppHeader = () => {
    return(
        <Navbar className='app-header-navbar m-0 p-0'>
            {appLogotype('Re', 'BOOK')}
            <Navbar.Collapse id="responsive-navbar-nav" className='app-header-navbar-collapse p-0'>
                <Nav className='w-100'>
                    <div className='app-header-nav-link-div-left d-flex'>
                        <NavLink>
                            {appButton('Theme', moonStars(26, 26))}
                        </NavLink>
                        <NavLink>
                            {appButton('Translate', translate(26, 26))}
                        </NavLink>
                    </div>
                    <div className='app-header-nav-link-div-right d-flex'>
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
    )
}