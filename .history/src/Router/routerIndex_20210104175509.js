import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom'
import Login from "../../Pages/Login/login";
import { ComponentRouter } from "./common/router";

const Auth = () => {
    return <Redirect exact from="/" to="/login" />
}
export const CommonRouter = () => (
    <Router>
        {/* Switch 严格匹配路由 */}
        <Switch>
            <Route path="/login" component={Login} />
            <ComponentRouter />
            <Auth />
        </Switch>
    </Router>
)