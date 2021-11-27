import React, {Component} from "react";
import './main-pages.css'
import {
    Button,
    Carousel,
    CarouselItem,
    Col,
    Container, Figure,
    Image,
    Nav,
    Navbar,
    NavDropdown,
    NavLink,
    Row
} from "react-bootstrap";
import {motion} from "framer-motion/dist/framer-motion"
import {withMediator} from "../../hoc";

class MainPages extends Component{
    render() {
        const {rmWidth, rmHeight} = this.props;

        return(
            <React.Fragment>
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


                <Container fluid className='p-0 m-0'>
                    <Row className='p-0 m-0'>
                        <Col lg={3} className='p-0 my-2 d-flex justify-content-center align-items-center'>
                            <div className='circle-slider-image'>
                                <div className='w-10 h-100 p-1 d-flex justify-content-center align-items-center'>
                                    <Image className='circle-image w-100 h-100' src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780062457806_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                                </div>
                            </div>
                            <div className='circle-slider-circle d-flex justify-content-center align-items-center'/>
                        </Col>
                        <Col lg={rmWidth < 1430 ? 7 : 9} className={rmWidth < 1430  ? '' : rmWidth > 992 ? 'offset-1' : '' + 'carousel-right-col p-0 my-2 d-flex align-items-center'}>
                            <Carousel className='w-100 h-100'  interval='8000' controls={false} indicators={true} touch={true} wrap={true} pause={false} indicatorLabels={['1', '2']} variant="dark">
                                <CarouselItem>
                                    <Row className='p-0 m-0'>
                                        <Col>
                                            <h1 className='re-slider-name'>They Both Die at the End</h1>
                                            <h4 className='re-slider-author'>by Adam Silvera</h4>
                                            <NavDropdown.Divider />
                                            <p className='re-slider-text' style={{fontSize: '28px'}}>
                                                Adam Silvera reminds us that there’s no life without death and no love without loss in this devastating yet uplifting story about two people whose lives change over the course of one unforgettable day.
                                            </p>
                                            <NavDropdown.Divider />
                                            <div className='d-flex justify-content-around align-items-end'>
                                                <h6 className=''>ISBN-13: 9780062457806</h6>
                                                <h6 className=''>Publisher: HarperCollins Publishers</h6>
                                                <h6 className=''>Publication date: 12/18/2018</h6>
                                                <h6 className=''>Pages: 416</h6>
                                                <h6 className=''>Age Range:	14 - 17 Years</h6>
                                            </div>
                                        </Col>
                                    </Row>
                                </CarouselItem>
                                <CarouselItem>
                                    <Row className='p-0 m-0'>
                                        <Col>
                                            <h1 className='re-slider-name'>They Both Die at the End</h1>
                                            <h4 className='re-slider-author'>by Adam Silvera</h4>
                                            <NavDropdown.Divider />
                                            <p className='re-slider-text' style={{fontSize: '28px'}}>
                                                Adam Silvera reminds us that there’s no life without death and no love without loss in this devastating yet uplifting story about two people whose lives change over the course of one unforgettable day.
                                            </p>
                                            <NavDropdown.Divider />
                                            <div className='d-flex justify-content-around align-items-end'>
                                                <h6 className=''>ISBN-13: 9780062457806</h6>
                                                <h6 className=''>Publisher: HarperCollins Publishers</h6>
                                                <h6 className=''>Publication date: 12/18/2018</h6>
                                                <h6 className=''>Pages: 416</h6>
                                                <h6 className=''>Age Range:	14 - 17 Years</h6>
                                            </div>
                                        </Col>
                                    </Row>
                                </CarouselItem>
                                <CarouselItem>
                                    <Row className='p-0 m-0'>
                                        <Col>
                                            <h1 className='re-slider-name'>They Both Die at the End</h1>
                                            <h4 className='re-slider-author'>by Adam Silvera</h4>
                                            <NavDropdown.Divider />
                                            <p className='re-slider-text' style={{fontSize: '28px'}}>
                                                Adam Silvera reminds us that there’s no life without death and no love without loss in this devastating yet uplifting story about two people whose lives change over the course of one unforgettable day.
                                            </p>
                                            <NavDropdown.Divider />
                                            <div className='d-flex justify-content-around align-items-end'>
                                                <h6 className=''>ISBN-13: 9780062457806</h6>
                                                <h6 className=''>Publisher: HarperCollins Publishers</h6>
                                                <h6 className=''>Publication date: 12/18/2018</h6>
                                                <h6 className=''>Pages: 416</h6>
                                                <h6 className=''>Age Range:	14 - 17 Years</h6>
                                            </div>
                                        </Col>
                                    </Row>
                                </CarouselItem>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default withMediator(MainPages);