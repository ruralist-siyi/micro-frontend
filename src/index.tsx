import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { start, MicroAppStateActions, initGlobalState, prefetchApps } from 'qiankun';
import Main from './main';
import { fetch } from 'whatwg-fetch';
import './index.less';

const initalState = {};

prefetchApps([{
  name: 'app1',
  entry: '//47.98.40.154:8082'
},{
  name: 'app2',
  entry: '//47.98.40.154:8083'
}])

// 初始化 state
const actions: MicroAppStateActions = initGlobalState(initalState);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log('onGlobalStateChange', state, prev);
});
actions.setGlobalState({ global: 'main 传递的数据' });
// actions.offGlobalStateChange();

start({
  fetch
});

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('app')
);
