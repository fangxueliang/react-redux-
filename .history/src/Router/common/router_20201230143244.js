import React from "react";
import {
    Router,
    Route,
    hashHistory
} from "react-router";
import { HomeComponent } from "../../Component/HomeComponent/homeComponent";
export const componentRouter = (
    <Router>
        {/* home页面 */}
        <Route path="/home" component={HomeComponent} />
    </Router>
)
