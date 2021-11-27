import React, {Component} from "react";
import MainPages from "../pages/main-pages";
import AppPages from "../pages/app-pages/app-pages";

export default class App extends Component{
    render() {
        return(
            <React.Fragment>
                <AppPages/>
                <MainPages/>
            </React.Fragment>
        )
    }
}