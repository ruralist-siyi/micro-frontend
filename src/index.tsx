import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { start } from 'qiankun';
import Main from './main';
import './index.less';

start();

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('app')
);
