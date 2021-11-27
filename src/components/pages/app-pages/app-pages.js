import React from "react";
import './app-pages.css'
import Splint from "../../splint";
import {AppHeader, AppNavbar} from "./builders";

export const AppPages = () => {
    return(
        <React.Fragment>
            <AppHeader/>
            <Splint/>
            <AppNavbar/>
            <Splint/>
        </React.Fragment>
    )
}