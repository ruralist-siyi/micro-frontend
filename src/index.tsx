import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { start, MicroAppStateActions, initGlobalState } from 'qiankun';
import Main from './main';
import './index.less';

const initalState = {};

// 初始化 state
const actions: MicroAppStateActions = initGlobalState(initalState);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});
actions.setGlobalState({global: 'main 传递的数据'});
// actions.offGlobalStateChange();

start();

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('app')
);
