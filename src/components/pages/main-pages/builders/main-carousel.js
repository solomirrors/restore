import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import MainCarouselImage from "../fragments";

export default class MainCarousel extends Component {
    render() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        return(
            <React.Fragment>
                <Container fluid className='p-0 m-0'>
                    <Row className='p-2 m-0'>
                        <Col className='d-flex justify-content-evenly align-items-center'>
                            {width >= 993 ?
                                <MainCarouselImage
                                    position='start'
                                    src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250178602_p0_v9%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
                                />
                                : null
                            }
                            {width >= 785 ?
                                <MainCarouselImage
                                    position = {width <= 992 ? 'start' : ''}
                                    src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250178602_p0_v9%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
                                />
                                : null
                            }
                            {width >= 577 ?
                                <MainCarouselImage
                                    position = {width <= 784 ? 'start' : ''}
                                    src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250178602_p0_v9%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
                                />
                                : null
                            }
                            <MainCarouselImage
                                select={true}
                                src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250178602_p0_v9%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
                            />
                            {width >= 577 ?
                                <MainCarouselImage
                                    position = {width <= 784 ? 'end' : ''}
                                    src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250178602_p0_v9%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
                                />
                                : null
                            }
                            {width >= 785 ?
                                <MainCarouselImage
                                    position = {width <= 992 ? 'end' : ''}
                                    src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250178602_p0_v9%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
                                />
                                : null
                            }
                            {width >= 993 ?
                                <MainCarouselImage
                                    position='end'
                                    src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250178602_p0_v9%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
                                />
                                : null
                            }
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}