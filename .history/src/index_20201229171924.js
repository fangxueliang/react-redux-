// 主入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './Pages/home';

import 'antd/dist/antd.css'
import './Common/CSS/layout.css'

ReactDOM.render(
  <div style={{ width: '100%', height: '100%' }}>
    <Home />
  </div>,
  document.getElementById('root')
);


