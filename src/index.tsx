import React from 'react';
import ReactDOM from 'react-dom';
import { registerMicroApps, start } from 'qiankun';
import renderSubApp from './renderSubApp';
import Main from './main';
import './index.less';

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);

registerMicroApps([
  {
    name: 'react app', // app name registered
    entry: '//47.98.40.154:7001',
    render: renderSubApp,
    activeRule: '/app1',
  }
]);

start();