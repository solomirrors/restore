import React from "react";
import './app-mobile.css'
import {Button, Col, Container, Nav, Navbar, NavLink, Row} from "react-bootstrap";
import {motion} from "framer-motion/dist/framer-motion"

const AppMobile = (
    <React.Fragment>
        <Container fluid className='m-0 p-0'>
            <Navbar className='justify-content-between align-items-center'>
                <Nav>
                    <h1 className='mobile-app-header-logotype'>ReBOOK</h1>
                </Nav>
                <Nav className='d-flex justify-content-end'>
                    <NavLink className='re-store-header-navlink d-flex justify-content-center align-items-center'>
                        <h2 className='pe-2'>Login</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                             className="bi bi-door-open" viewBox="0 0 16 16">
                            <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                            <path
                                d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
                        </svg>
                    </NavLink>
                    <NavLink className='re-store-header-navlink d-flex justify-content-center align-items-center'>
                        <h2 className='pe-2'>Cart</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                             className="bi bi-bag" viewBox="0 0 16 16">
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                        </svg>
                    </NavLink>
                </Nav>
            </Navbar>
        </Container>
    </React.Fragment>
)

export default AppMobile;