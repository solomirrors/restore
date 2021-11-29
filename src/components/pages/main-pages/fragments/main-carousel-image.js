import React, {Component} from "react";
import './main-carousel-image.css'
import {Col, Image} from "react-bootstrap";

export default class MainCarouselImage extends Component {
    render() {
        const {src, select = false, position = ''} = this.props;
        const _circle = "main-carousel-elements-circle";
        const _image = "main-carousel-elements-image";

        const imageSelector = (src, select = false, style = {}) => {
            return (
                <div className='d-flex justify-content-center align-items-center'>
                    <div
                        style={select && position !=='' ? {width: '20vw'} : {}}
                        className= {`${_circle}${select && position === '' ? "-select": ''}${position !== '' ? `-${position}` : ""}`}/>
                    <Image
                        className = {`${_image}${select ? "-select": ''}`} src={src}/>
                </div>
            )
        }

        return(
            <React.Fragment>
                {imageSelector(src, select)}
            </React.Fragment>
        )
    }
}