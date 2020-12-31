import react from 'react';
import { Layout } from 'antd'
import MenuSider from "./Menu/menu";
import { HeaderCommon } from "./Header/header";
import { FooterCommon } from "./Footer/footer";
import { componentRouter } from "../Router/common/router";
import {
    BrowserRouter,
} from 'react-router-dom'

const { Sider } = Layout
class Main extends react.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="Home_layout">
                {/* 头部header */}
                <div className="Home_header">
                    <HeaderCommon />
                </div>
                <div className="Home_main">
                    {/* 左侧导航Sider */}
                    <div className="Home_sider">
                        <Sider>
                            {/* 因为菜单标签使用了Link标签，所以得用Router包裹 */}
                            <BrowserRouter>
                                {/* 菜单标签 */}
                                <MenuSider />
                            </BrowserRouter>
                        </Sider>
                    </div>
                    {/* 主要内容Content */}
                    <div className="Home_content">
                        {componentRouter}
                    </div>
                </div>

                {/* 底部footer */}
                <div className="Home_footer">
                    <FooterCommon />
                </div>
            </div>);
    }
}

export default Main;
// export const Main = () => {
//     return (
//         <div className="Home_layout">
//             {/* 头部header */}
//             <div className="Home_header">
//                 <HeaderCommon />
//             </div>
//             <div className="Home_main">
//                 {/* 左侧导航Sider */}
//                 <div className="Home_sider">
//                     <Sider>
//                         {/* 因为菜单标签使用了Link标签，所以得用Router包裹 */}
//                         <Router>
//                             {/* 菜单标签 */}
//                             <MenuSider />
//                         </Router>
//                     </Sider>
//                 </div>
//                 {/* 主要内容Content */}
//                 <div className="Home_content">
//                     {componentRouter}
//                 </div>
//             </div>
//             {/* 底部footer */}
//             <div className="Home_footer">
//                 <FooterCommon />
//             </div>
//         </div>
//     );
// }


