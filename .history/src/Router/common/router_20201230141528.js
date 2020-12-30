import React from "react";
import {
    Router,
    Route,
} from "react-router";
import { HomeComponent } from "../../Component/HomeComponent/homeComponent";
const componentRouter = (
    <Router>
        <Route path="/home" component={HomeComponent}></Route>
    </Router>
)