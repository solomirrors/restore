import React, {Component} from "react";
import './main-pages.css'
import {
    Carousel,
    CarouselItem,
    Col,
    Container, Figure,
    Image,
    NavDropdown,
    Row
} from "react-bootstrap";
import {withMediator} from "../../hoc";
import FigureImage from "react-bootstrap/FigureImage";
import MainCarouselImage from "./fragments";
import MainCarousel from "./builders/main-carousel";

class MainPages extends Component{
    render() {
        const {rmWidth, rmHeight} = this.props;
        return(
            <React.Fragment>
                <MainCarousel/>
                <Container fluid className='p-0 m-0'>
                    <Row className='p-2 m-0'>

                        <Col className='p-0 m-0 col-auto'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor"
                                 className="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                <path fill-rule="evenodd"
                                      d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor"
                                 className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                                <path fill-rule="evenodd"
                                      d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                            <h1 className='re-slider-name'>They Both Die at the End</h1>
                            <h4 className='re-slider-author'>by Adam Silvera</h4>
                            <NavDropdown.Divider />
                            <p className='re-slider-text px-2' style={{fontSize: '28px'}}>
                                Adam Silvera reminds us that there’s no life without death and no love without loss in this devastating yet uplifting story about two people whose lives change over the course of one unforgettable day.
                            </p>
                            <NavDropdown.Divider />
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default withMediator(MainPages);