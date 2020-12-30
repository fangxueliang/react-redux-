import React from "react";
import {
    Router,
    Route,
} from "react-router";
import { HomeComponent } from "../../Component/HomeComponent/homeComponent";
export const componentRouter = (
    <Router>
        {/* home页面 */}
        <Route path="/home" component={HomeComponent} />
    </Router>
)
