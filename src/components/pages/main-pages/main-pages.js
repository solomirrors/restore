import React, {Component} from "react";
import './main-pages.css'
import {CardImg, Col, Container, Image, Row} from "react-bootstrap";
import Spinner from "../../spinner";
import CardHeader from "react-bootstrap/CardHeader";
import {motion} from "framer-motion/dist/framer-motion"

export default class MainPages extends Component{
    render() {
        return(
            <React.Fragment>
                <Container fluid className='re-store-header m-0 p-0'>

                    <Row className='p-5'>
                        <Col>
                        <motion.div
                            className="re-logotype"
                            animate={{ rotate: 180 }}
                            transition={{
                                repeat: 2,
                                repeatType: "reverse",
                                duration: 3
                            }}
                        >
                            <div className='re-logotype material-icons'>auto_stories</div>
                        </motion.div>
                    </Col>
                        <Col>
                            <h1 className='re-store-name'>ReBOOK</h1>
                        </Col>

                    </Row>
                    <Row className='m-0'>
                        <Col className='d-flex justify-content-center align-items-center'>
                            <div className='re-logotype material-icons'>
                                bookmarks
                                <h4 className='m-3'>BESTSELLERS</h4>
                            </div>
                        </Col>
                        <Col className='d-flex justify-content-center align-items-center'>
                            <div className='re-logotype material-icons'>
                                bookmarks
                                <h4 className='m-3'>NEW RELEASES</h4>
                            </div>
                        </Col>

                        <Col className='d-flex justify-content-center align-items-center'>
                            <div className='re-logotype material-icons'>
                                bookmarks
                                <h4 className='m-3'>COMING SOON</h4>
                            </div>
                        </Col>
                        <Col className='d-flex justify-content-center align-items-center'>
                            <div className='re-logotype material-icons'>
                                bookmarks
                                <h4 className='m-3'>MANGA</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='re-store-splint'/>
                <Container fluid className='re-store-book m-0 p-4'>
                    <Row className='re-store-bestseller d-flex align-self-baseline'>
                        <Col sm={4} md={3} xl={2} className='p-1'>
                            <CardHeader>
                                The 1619 Project
                            </CardHeader>
                            <motion.div
                                style={{width: '100%', height: '100%'}}
                                animate={{ rotate: 180 }}
                                transition={{
                                    repeat: 2,
                                    repeatType: "reverse",
                                    duration: 2
                                }}
                            >
                                <CardImg src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780593230572_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                            </motion.div>
                            <CardHeader>
                                Des Books
                            </CardHeader>
                        </Col>
                        <Col sm={4} md={3} xl={2} className='p-1'>
                            <CardHeader>
                                The Real Anthology Fauci
                            </CardHeader>
                            <CardImg src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781510766808_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                            <div className='test-text'>Des Boooks</div>
                            <CardHeader>
                                Des Books
                            </CardHeader>
                        </Col>
                        <Col sm={4} md={3} xl={2} className='p-1'>
                            <CardHeader>
                                Mercy
                            </CardHeader>
                            <CardImg src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781538706091_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                            <CardHeader>
                                Des Books
                            </CardHeader>
                        </Col>
                        <Col sm={4} md={3} xl={2} className='p-1'>
                            <CardHeader>
                                Will
                            </CardHeader>
                            <CardImg src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781984877925_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                            <CardHeader>
                                Des Books
                            </CardHeader>
                        </Col>
                        <Col sm={4} md={3} xl={2} className='p-1'>
                            <CardHeader>
                                Lincoln Highway
                            </CardHeader>
                            <CardImg src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780735222359_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                            <CardHeader>
                                Des Books
                            </CardHeader>
                        </Col>
                        <Col sm={4} md={3} xl={2} className='p-1'>
                            <CardHeader>
                                A Plague Upon Our House
                            </CardHeader>
                            <CardImg src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781637582206_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D'/>
                            <CardHeader>
                                Des Books
                            </CardHeader>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>

        )
    }
}