import { Component } from "react";
import Storeaction from "../../../Store/storeaction";
import { NameUI } from "../../StatelessUI/nameUI/nameUI";
import './nameComponent.css'

class NameComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        console.log(props);
    }
    render() {
        const data = this.props.nameStatistical
        return (
            <div className="NameComponent">
                <NameUI dataList={data} />
            </div>
        );
    }
}

export default Storeaction(NameComponent);