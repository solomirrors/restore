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
import {withMediator} from "../../hoc";

class MainPages extends Component{
    render() {
        const {rmWidth, rmHeight} = this.props;

        return(
            <React.Fragment>
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