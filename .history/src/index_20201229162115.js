// 主入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "antd/dist/antd.css"
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* 严格模式检验
    1、识别具有不安全生命周期的组件
    2、有关旧式字符串ref用法的警告
    3、检测意外的副作用
    4、检测遗留 context API
     */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// 提升性能
// reportWebVitals();
