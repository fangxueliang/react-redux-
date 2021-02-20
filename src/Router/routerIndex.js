import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom'
import Login from "../Pages/Login/login";
import { ComponentRouter } from "./common/router";
import Main from "../Pages/index";

const Auth = () => {
    return <Redirect exact from="/" to="/login" />
}
export const CommonRouter = () => (
    <Router>
        {/* Switch 严格匹配路由 */}
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/common" component={Main}>
                {ComponentRouter}
            </Route>
            <Auth />
        </Switch>
    </Router>
)