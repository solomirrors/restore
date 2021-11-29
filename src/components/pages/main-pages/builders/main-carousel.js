import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import MainCarouselImage from "../fragments";

export default class MainCarousel extends Component {
    render() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const mediumImages = width > 992 ? <MainCarouselImage position={position} src={src}/> : null

        return(
            <React.Fragment>
                <Container fluid className='p-0 m-0'>
                    <Row className='p-2 m-0'>
                        <Col className='d-flex justify-content-evenly align-items-center'>
                            <MainCarouselImage
                                position='start'
                                src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250178602_p0_v9%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
                            />
                            <MainCarouselImage
                                src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250178602_p0_v9%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
                            />
                            <MainCarouselImage
                                src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250178602_p0_v9%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
                            />
                            <MainCarouselImage
                                select={true}
                                src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250178602_p0_v9%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
                            />
                            <MainCarouselImage
                                src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250178602_p0_v9%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
                            />
                            <MainCarouselImage
                                src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250178602_p0_v9%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
                            />
                            <MainCarouselImage
                                position='end'
                                src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250178602_p0_v9%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
                            />
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}