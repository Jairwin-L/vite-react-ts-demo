import React from 'react';
// import ReactDOM from 'react-dom';
import './index.less';
import Router from './router';
// import 'antd-mobile/dist/antd-mobile.less'
import 'antd/dist/antd.less';

// react18
import ReactDOM from "react-dom/client";
ReactDOM.createRoot(document.getElementById("app")!).render(
  // * react严格模式
  <Router />
);

// ReactDOM.render(<Router />, document.getElementById('app'));
