import React from "react";
import {
    Router,
    Route,
    browserHistory
} from "react-router";
import { HomeComponent } from "../../Component/HomeComponent/homeComponent";
export const componentRouter = (
    <Router hashHistory={browserHistory}>
        {/* home页面 */}
        <Route path="/home" component={HomeComponent} />
    </Router>
)
