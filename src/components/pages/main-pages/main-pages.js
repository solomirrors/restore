import React, {Component, useEffect, useState} from "react";
import './main-pages.css'
import {
    Button, Card, CardGroup,
    CardImg, Carousel, CarouselItem,
    Col,
    Container, Figure,
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
import FigureImage from "react-bootstrap/FigureImage";

export default class MainPages extends Component{

    render() {
        return(
            <React.Fragment>
                <Navbar className='m-0 p-0 re-header-bar'>
                    <Container fluid className='p-0 m-2'>
                        <h3 className='px-3 m-0 re-store-name d-flex align-items-center'>
                            <p className='re-store-name-part p-0 m-0'>Re</p>
                            <motion.h3
                                className="re-motion-logotype p-0 m-0"
                                animate={{ rotate: 180 }}
                                transition={{
                                    repeat: 2,
                                    repeatType: "reverse",
                                    duration: 3
                                }}
                            >
                                <h1 className='px-2 re-logotype material-icons'>auto_stories</h1>
                            </motion.h3>
                            <p className='re-store-name-part p-0 m-0'>BOOK</p>
                        </h3>
                        <Navbar.Collapse id="responsive-navbar-nav" className='re-header-collapse p-0 align-items-center'>
                            <Nav className='w-100'>
                                <div className='d-flex w-50'>
                                    <NavLink>
                                        <Button className='d-flex justify-content-center align-items-center btn btn-outline-danger btn-lg'>
                                            <h2 className='re-store-button-elements m-1 px-1'>Theme</h2>
                                            <Figure className='p-0 m-0'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                                     fill="currentColor" className="bi bi-moon-stars" viewBox="0 0 16 16">
                                                    <path
                                                        d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                                                    <path
                                                        d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
                                                </svg>
                                            </Figure>
                                        </Button>
                                    </NavLink>
                                    <NavLink>
                                        <Button className='d-flex justify-content-center align-items-center btn btn-outline-danger btn-lg'>
                                            <h2 className='re-store-button-elements m-1 px-1'>Translate</h2>
                                            <Figure className='p-0 m-0'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                                     fill="currentColor" className="bi bi-translate" viewBox="0 0 16 16">
                                                    <path
                                                        d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
                                                    <path
                                                        d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
                                                </svg>
                                            </Figure>
                                        </Button>
                                    </NavLink>
                                </div>
                                <div className='d-flex w-50 justify-content-end'>
                                    <NavLink>
                                        <Button className='d-flex justify-content-center align-items-center btn-outline-danger btn-lg'>
                                            <h2 className='re-store-button-elements m-1 px-1'>Login</h2>
                                            <Figure className='p-0 m-0'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" fill="currentColor"
                                                     className="bi bi-door-open" viewBox="0 0 16 16">
                                                    <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                                                    <path
                                                        d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
                                                </svg>
                                            </Figure>
                                        </Button>
                                    </NavLink>
                                    <NavLink>
                                        <Button className='d-flex justify-content-center align-items-center btn btn-outline-danger btn-lg'>
                                            <h2 className='re-store-button-elements m-1 px-1'>Cart</h2>
                                            <Figure className='p-0 m-0'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" fill="currentColor"
                                                     className="bi bi-bag" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                                                </svg>
                                            </Figure>
                                        </Button>
                                    </NavLink>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className='re-store-splint'/>
                <Navbar className='re-header-link' collapseOnSelect expand="md">
                    <Container fluid className='m-1 p-0 d-flex align-items-center justify-content-center'>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color: '#ffffff', width: '97%', border: '2px solid #fff'}}>
                            <div className='p-2 d-flex align-items-center justify-content-between'>
                                <h1 className='re-header-book-list p-0'>Books List</h1>
                                <Figure className='p-0 m-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor"
                                         className="bi bi-menu-button-wide" viewBox="0 0 16 16">
                                        <path
                                            d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-13z"/>
                                        <path
                                            d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
                                    </svg>
                                </Figure>
                            </div>

                        </Navbar.Toggle>
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
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Item Divider</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className='re-store-splint'/>
                <Container fluid className='re-slider-bar p-0 m-0'>
                    <Carousel interval='8000' controls={false} indicators={true} touch={true} wrap={true} pause={false} variant="dark">
                        <CarouselItem>
                            <Row className='p-3 m-0'>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={4} lg={3} xl={2} xxl={2}>
                                    <Figure>
                                        <FigureImage className='re-slider-img p-0 img-fluid' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780593186329_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                    </Figure>
                                </Col>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={8} lg={9} xl={10} xxl={10}>
                                    <Row className='row-cols-1'>
                                        <Col className='col-12'>
                                            <h1 className='re-slider-name'>BETRAYAL</h1>
                                            <h4 className='re-slider-author'>Robert F. Kennedy Jr.</h4>
                                        </Col>
                                        <Col>
                                            <p className='re-slider-text p-4'>
                                                Picking up where the New York Times bestselling Front Row at the Trump Show left off, this is the explosive look at the aftermath of the election—and the events that followed Donald Trump’s leaving the White House—from ABC News' chief Washington correspondent.
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </CarouselItem>
                        <CarouselItem>
                            <Row className='p-3 m-0'>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={4} lg={3} xl={2} xxl={2}>
                                    <Figure>
                                        <FigureImage className='re-slider-img p-0 img-fluid' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781510766808_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                    </Figure>
                                </Col>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={8} lg={9} xl={10} xxl={10}>
                                    <Row className='row-cols-1'>
                                        <Col className='col-12'>
                                            <h1 className='re-slider-name'>The Real Anthony Fauci</h1>
                                            <h4 className='re-slider-author'>Robert F. Kennedy Jr.</h4>
                                        </Col>
                                        <Col>
                                            <p className='re-slider-text p-4'>
                                                Pharma-funded mainstream media has convinced millions of Americans that Dr. Anthony Fauci is a hero. He is anything but.                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </CarouselItem>
                        <CarouselItem>
                            <Row className='p-3 m-0'>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={4} lg={3} xl={2} xxl={2}>
                                    <Figure>
                                        <FigureImage className='re-slider-img p-0 img-fluid' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781510766808_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                    </Figure>
                                </Col>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={8} lg={9} xl={10} xxl={10}>
                                    <Row className='row-cols-1'>
                                        <Col className='col-12'>
                                            <h1 className='re-slider-name'>The Real Anthony Fauci</h1>
                                            <h4 className='re-slider-author'>Robert F. Kennedy Jr.</h4>
                                        </Col>
                                        <Col>
                                            <p className='re-slider-text p-4'>
                                                Pharma-funded mainstream media has convinced millions of Americans that Dr. Anthony Fauci is a hero. He is anything but.                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </CarouselItem>
                        <CarouselItem>
                            <Row className='p-3 m-0'>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={4} lg={3} xl={2} xxl={2}>
                                    <Figure>
                                        <FigureImage className='re-slider-img p-0 img-fluid' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781510766808_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                    </Figure>
                                </Col>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={8} lg={9} xl={10} xxl={10}>
                                    <Row className='row-cols-1'>
                                        <Col className='col-12'>
                                            <h1 className='re-slider-name'>The Real Anthony Fauci</h1>
                                            <h4 className='re-slider-author'>Robert F. Kennedy Jr.</h4>
                                        </Col>
                                        <Col>
                                            <p className='re-slider-text p-4'>
                                                Pharma-funded mainstream media has convinced millions of Americans that Dr. Anthony Fauci is a hero. He is anything but.                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </CarouselItem>
                        <CarouselItem>
                            <Row className='p-3 m-0'>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={4} lg={3} xl={2} xxl={2}>
                                    <Figure>
                                        <FigureImage className='re-slider-img p-0 img-fluid' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781510766808_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                    </Figure>
                                </Col>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={8} lg={9} xl={10} xxl={10}>
                                    <Row className='row-cols-1'>
                                        <Col className='col-12'>
                                            <h1 className='re-slider-name'>The Real Anthony Fauci</h1>
                                            <h4 className='re-slider-author'>Robert F. Kennedy Jr.</h4>
                                        </Col>
                                        <Col>
                                            <p className='re-slider-text p-4'>
                                                Pharma-funded mainstream media has convinced millions of Americans that Dr. Anthony Fauci is a hero. He is anything but.                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </CarouselItem>
                        <CarouselItem>
                            <Row className='p-3 m-0'>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={4} lg={3} xl={2} xxl={2}>
                                    <Figure>
                                        <FigureImage className='re-slider-img p-0 img-fluid' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781510766808_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                    </Figure>
                                </Col>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={8} lg={9} xl={10} xxl={10}>
                                    <Row className='row-cols-1'>
                                        <Col className='col-12'>
                                            <h1 className='re-slider-name'>The Real Anthony Fauci</h1>
                                            <h4 className='re-slider-author'>Robert F. Kennedy Jr.</h4>
                                        </Col>
                                        <Col>
                                            <p className='re-slider-text p-4'>
                                                Pharma-funded mainstream media has convinced millions of Americans that Dr. Anthony Fauci is a hero. He is anything but.                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </CarouselItem>
                        <CarouselItem>
                            <Row className='p-3 m-0'>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={4} lg={3} xl={2} xxl={2}>
                                    <Figure>
                                        <FigureImage className='re-slider-img p-0 img-fluid' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781510766808_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                    </Figure>
                                </Col>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={8} lg={9} xl={10} xxl={10}>
                                    <Row className='row-cols-1'>
                                        <Col className='col-12'>
                                            <h1 className='re-slider-name'>The Real Anthony Fauci</h1>
                                            <h4 className='re-slider-author'>Robert F. Kennedy Jr.</h4>
                                        </Col>
                                        <Col>
                                            <p className='re-slider-text p-4'>
                                                Pharma-funded mainstream media has convinced millions of Americans that Dr. Anthony Fauci is a hero. He is anything but.                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </CarouselItem>
                        <CarouselItem>
                            <Row className='p-3 m-0'>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={4} lg={3} xl={2} xxl={2}>
                                    <Figure>
                                        <FigureImage className='re-slider-img p-0 img-fluid' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781510766808_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                    </Figure>
                                </Col>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={8} lg={9} xl={10} xxl={10}>
                                    <Row className='row-cols-1'>
                                        <Col className='col-12'>
                                            <h1 className='re-slider-name'>The Real Anthony Fauci</h1>
                                            <h4 className='re-slider-author'>Robert F. Kennedy Jr.</h4>
                                        </Col>
                                        <Col>
                                            <p className='re-slider-text p-4'>
                                                Pharma-funded mainstream media has convinced millions of Americans that Dr. Anthony Fauci is a hero. He is anything but.                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </CarouselItem>
                        <CarouselItem>
                            <Row className='p-3 m-0'>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={4} lg={3} xl={2} xxl={2}>
                                    <Figure>
                                        <FigureImage className='re-slider-img p-0 img-fluid' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781510766808_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                    </Figure>
                                </Col>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={8} lg={9} xl={10} xxl={10}>
                                    <Row className='row-cols-1'>
                                        <Col className='col-12'>
                                            <h1 className='re-slider-name'>The Real Anthony Fauci</h1>
                                            <h4 className='re-slider-author'>Robert F. Kennedy Jr.</h4>
                                        </Col>
                                        <Col>
                                            <p className='re-slider-text p-4'>
                                                Pharma-funded mainstream media has convinced millions of Americans that Dr. Anthony Fauci is a hero. He is anything but.                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </CarouselItem>
                        <CarouselItem>
                            <Row className='p-3 m-0'>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={4} lg={3} xl={2} xxl={2}>
                                    <Figure>
                                        <FigureImage className='re-slider-img p-0 img-fluid' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781510766808_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                    </Figure>
                                </Col>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={8} lg={9} xl={10} xxl={10}>
                                    <Row className='row-cols-1'>
                                        <Col className='col-12'>
                                            <h1 className='re-slider-name'>The Real Anthony Fauci</h1>
                                            <h4 className='re-slider-author'>Robert F. Kennedy Jr.</h4>
                                        </Col>
                                        <Col>
                                            <p className='re-slider-text p-4'>
                                                Pharma-funded mainstream media has convinced millions of Americans that Dr. Anthony Fauci is a hero. He is anything but.                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </CarouselItem>
                        <CarouselItem>
                            <Row className='p-3 m-0'>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={4} lg={3} xl={2} xxl={2}>
                                    <Figure>
                                        <FigureImage className='re-slider-img p-0 img-fluid' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781510766808_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                    </Figure>
                                </Col>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={8} lg={9} xl={10} xxl={10}>
                                    <Row className='row-cols-1'>
                                        <Col className='col-12'>
                                            <h1 className='re-slider-name'>The Real Anthony Fauci</h1>
                                            <h4 className='re-slider-author'>Robert F. Kennedy Jr.</h4>
                                        </Col>
                                        <Col>
                                            <p className='re-slider-text p-4'>
                                                Pharma-funded mainstream media has convinced millions of Americans that Dr. Anthony Fauci is a hero. He is anything but.</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </CarouselItem>
                    </Carousel>
                </Container>
                <Container fluid className='p-3 m-0'>
                    <h1>BESTSELLER</h1>
                    <Row className='best-card-row p-0 m-0'>
                        <Col sm={12} md={12} lg={12} xl={6} className='m-0 p-1'>
                            <Row className='p-0 m-0'>
                                <Col sm={12} className='p-0 m-0' style={{backgroundColor: '#da4f4f'}}>BERSERK</Col>
                                <Col className='p-0 m-0'>
                                    Pharma-funded mainstream media has convinced millions of Americans that Dr. Anthony Fauci is a hero. He is anything but.
                                </Col>
                                <Col sm={12} md={3} lg={3} xl={4} className='p-0 m-0 d-flex justify-content-center'>
                                    <Figure className='p-0 m-0'>
                                        <FigureImage className='best-card-img p-0' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781506711997_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                    </Figure>
                                </Col>
                                <Col sm={12} className='p-0 m-0' style={{backgroundColor: '#da4f4f'}}>DES</Col>
                            </Row>
                        </Col>
                        <Col sm={12} md={12} lg={12} xl={6} className='m-0 p-1'>
                            <Row className='p-0 m-0'>
                                <Col sm={12} className='p-0 m-0' style={{backgroundColor: '#da4f4f'}}>BERSERK</Col>
                                <Col className='p-0 m-0'>
                                    Pharma-funded mainstream media has convinced millions of Americans that Dr. Anthony Fauci is a hero. He is anything but.
                                </Col>
                                <Col sm={12} md={3} lg={3} xl={4} className='p-0 m-0 d-flex justify-content-center'>
                                    <Figure className='p-0 m-0'>
                                        <FigureImage className='best-card-img p-0' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781506711997_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                    </Figure>
                                </Col>
                                <Col sm={12} className='p-0 m-0' style={{backgroundColor: '#da4f4f'}}>DES</Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}