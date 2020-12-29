// 主入口文件
//主入口
import React from 'react';//引入react
import ReactDOM from 'react-dom';
import { Main } from './Pages';//引入Main文件

import 'antd/dist/antd.css'
import './Common/CSS/layout.css'

ReactDOM.render(
  <div style={{ width: '100%', height: '100%' }}>
    <Main />
  </div>,
  document.getElementById('root')
);


