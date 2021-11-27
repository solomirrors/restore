import React from "react";
import {Button, Figure} from "react-bootstrap";

export const appButton = (name, svg) => {
    return(
        <Button className='d-flex justify-content-center align-items-center btn btn-outline-danger btn-lg'>
            <h2 className='re-store-button-elements m-1 px-1'>{name}</h2>
            <Figure className='p-0 m-0'>
                {svg}
            </Figure>
        </Button>
    )
}