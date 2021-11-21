import React, {Component} from "react";
import './main-pages.css'
import {
    Button,
    CardImg,
    Col,
    Container,
    Image,
    Nav,
    Navbar,
    NavbarBrand,
    NavDropdown,
    NavLink,
    Row
} from "react-bootstrap";
import Spinner from "../../spinner";
import CardHeader from "react-bootstrap/CardHeader";
import {motion} from "framer-motion/dist/framer-motion"

export default class MainPages extends Component{
    render() {
        return(
            <React.Fragment>
                <Navbar collapseOnSelect expand="sm" className='re-header-bar'>
                    <Container fluid className='p-1 m-0'>
                        <Navbar.Brand href="#home">
                            <h3 className='re-store-name d-flex align-items-center'>
                                Re
                                <motion.h3
                                    className="p-2"
                                    animate={{ rotate: 180 }}
                                    transition={{
                                        repeat: 2,
                                        repeatType: "reverse",
                                        duration: 3
                                    }}
                                >
                                    <h1 className='re-logotype material-icons'>auto_stories</h1>
                                </motion.h3>
                                BOOK
                            </h3>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav ju" />
                        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end p-3 align-items-center'>
                            <Nav>
                                <NavLink><Button>Registration</Button></NavLink>
                                <NavLink><Button>Login</Button></NavLink>
                                <NavLink><Button>Cart</Button></NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className='re-store-splint'/>
                <Navbar className='re-header-link' collapseOnSelect expand="md">
                    <Container fluid className='m-1 p-0 d-flex align-items-center justify-content-center'>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav ju" style={{color: '#fff'}}/>
                        <Navbar.Collapse id="basic-navbar-nav w-100">
                        <Nav className="m-1 re-nav-dropdown w-100 justify-content-around align-items-center">
                            <NavDropdown title="Books" id="re-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Item Divider</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Fiction" id="re-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Item Divider</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Nonfiction" id="re-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Item Divider</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="eBooks & Nook" id="re-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Item Divider</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Teens & YA Books" id="re-nav-dropdown">
                                <button className="dropdown-item" type="button">Action</button>
                                <button className="dropdown-item" type="button">Another action</button>
                                <button className="dropdown-item" type="button">Something else here</button>
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className='re-store-splint'/>

            </React.Fragment>

        )
    }
}