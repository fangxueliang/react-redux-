import { Component } from "react";

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillReceiveProps(newProps) {
        console.log('home---->>>', newProps);
    }
    render() {
        return (<div>
            首页
        </div>);
    }
}

export default HomeComponent;