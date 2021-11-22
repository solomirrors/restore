import React, {Component} from "react";
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
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={4} lg={3} xl={2} xxl={1}>
                                    <Figure>
                                        <FigureImage className='re-slider-img p-0 img-fluid' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780593186329_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                    </Figure>
                                </Col>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={8} lg={9} xl={10} xxl={11}>
                                    <Row className='row-cols-1'>
                                        <Col className='col-12'>
                                            <h1 className='re-slider-name'>BETRAYAL</h1>
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
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={4} lg={3} xl={2} xxl={1}>
                                    <Figure>
                                        <FigureImage className='re-slider-img p-0 img-fluid' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781510766808_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                    </Figure>
                                </Col>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={8} lg={9} xl={10} xxl={11}>
                                    <Row className='row-cols-1'>
                                        <Col className='col-12'>
                                            <h1 className='re-slider-name'>The Real Anthony Fauci</h1>
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
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={4} lg={3} xl={2} xxl={1}>
                                    <Figure>
                                        <FigureImage className='re-slider-img p-0 img-fluid' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781510766808_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                    </Figure>
                                </Col>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={8} lg={9} xl={10} xxl={11}>
                                    <Row className='row-cols-1'>
                                        <Col className='col-12'>
                                            <h1 className='re-slider-name'>The Real Anthony Fauci</h1>
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
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={4} lg={3} xl={2} xxl={1}>
                                    <Figure>
                                        <FigureImage className='re-slider-img p-0 img-fluid' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781510766808_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                    </Figure>
                                </Col>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={8} lg={9} xl={10} xxl={11}>
                                    <Row className='row-cols-1'>
                                        <Col className='col-12'>
                                            <h1 className='re-slider-name'>The Real Anthony Fauci</h1>
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
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={4} lg={3} xl={2} xxl={1}>
                                    <Figure>
                                        <FigureImage className='re-slider-img p-0 img-fluid' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781510766808_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                    </Figure>
                                </Col>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={8} lg={9} xl={10} xxl={11}>
                                    <Row className='row-cols-1'>
                                        <Col className='col-12'>
                                            <h1 className='re-slider-name'>The Real Anthony Fauci</h1>
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
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={4} lg={3} xl={2} xxl={1}>
                                    <Figure>
                                        <FigureImage className='re-slider-img p-0 img-fluid' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781510766808_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                    </Figure>
                                </Col>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={8} lg={9} xl={10} xxl={11}>
                                    <Row className='row-cols-1'>
                                        <Col className='col-12'>
                                            <h1 className='re-slider-name'>The Real Anthony Fauci</h1>
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
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={4} lg={3} xl={2} xxl={1}>
                                    <Figure>
                                        <FigureImage className='re-slider-img p-0 img-fluid' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781510766808_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                    </Figure>
                                </Col>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={8} lg={9} xl={10} xxl={11}>
                                    <Row className='row-cols-1'>
                                        <Col className='col-12'>
                                            <h1 className='re-slider-name'>The Real Anthony Fauci</h1>
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
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={4} lg={3} xl={2} xxl={1}>
                                    <Figure>
                                        <FigureImage className='re-slider-img p-0 img-fluid' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781510766808_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                    </Figure>
                                </Col>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={8} lg={9} xl={10} xxl={11}>
                                    <Row className='row-cols-1'>
                                        <Col className='col-12'>
                                            <h1 className='re-slider-name'>The Real Anthony Fauci</h1>
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
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={4} lg={3} xl={2} xxl={1}>
                                    <Figure>
                                        <FigureImage className='re-slider-img p-0 img-fluid' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781510766808_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                    </Figure>
                                </Col>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={8} lg={9} xl={10} xxl={11}>
                                    <Row className='row-cols-1'>
                                        <Col className='col-12'>
                                            <h1 className='re-slider-name'>The Real Anthony Fauci</h1>
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
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={4} lg={3} xl={2} xxl={1}>
                                    <Figure>
                                        <FigureImage className='re-slider-img p-0 img-fluid' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781510766808_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                    </Figure>
                                </Col>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={8} lg={9} xl={10} xxl={11}>
                                    <Row className='row-cols-1'>
                                        <Col className='col-12'>
                                            <h1 className='re-slider-name'>The Real Anthony Fauci</h1>
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
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={4} lg={3} xl={2} xxl={1}>
                                    <Figure>
                                        <FigureImage className='re-slider-img p-0 img-fluid' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781510766808_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                    </Figure>
                                </Col>
                                <Col className='p-0 m-0 d-flex justify-content-center align-items-center' xs={12} sm={12} md={8} lg={9} xl={10} xxl={11}>
                                    <Row className='row-cols-1'>
                                        <Col className='col-12'>
                                            <h1 className='re-slider-name'>The Real Anthony Fauci</h1>
                                        </Col>
                                        <Col>
                                            <p className='re-slider-text p-4'>
                                                Pharma-funded mainstream media has convinced millions of Americans that Dr. Anthony Fauci is a hero. He is anything but.                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </CarouselItem>
                    </Carousel>
                </Container>
            </React.Fragment>

        )
    }
}