import React from "react";
import './app-navbar.css'
import {Container, Figure, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {buttonWide} from "../../../svg";

export const AppNavbar = () => {
    return(
        <Navbar className='app-navbar' collapseOnSelect expand="md">
            <Container fluid className='m-1 p-0 d-flex align-items-center justify-content-center'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color: '#ffffff', width: '97%', border: '2px solid #fff'}}>
                    <div className='p-2 d-flex align-items-center justify-content-between'>
                        <h1 className='app-navbar-title p-0'>Books Menu</h1>
                        <Figure className='p-0 m-0'>
                            {buttonWide(46,46)}
                        </Figure>
                    </div>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav w-100">
                    <Nav className="m-1 w-100 justify-content-around align-items-center">
                        <NavDropdown title="Books" id="app-navbar-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Item Divider</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Fiction" id="app-navbar-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Item Divider</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Nonfiction" id="app-navbar-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Item Divider</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="eBooks & Nook" id="app-navbar-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Item Divider</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Teens & YA Books" id="app-navbar-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Item Divider</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}