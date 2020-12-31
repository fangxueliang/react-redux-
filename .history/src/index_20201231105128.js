
//主入口
import React from 'react';//引入react
import ReactDOM from 'react-dom';
import { Main } from './Pages';//引入Main文件
import { Provider } from "react-redux";

import 'antd/dist/antd.css'//antd样式
import './Common/CSS/layout.css'//布局样式
import './Common/CSS/common.css'//引入公共样式

ReactDOM.render(
  <Provider>
    <div className="main">
      <Main />
    </div>
  </Provider>,
  document.getElementById('root')
);


