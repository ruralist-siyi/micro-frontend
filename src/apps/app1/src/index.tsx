import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Maketing from './pages/Marketing';

const initalMicroState = {};
export const MicroStateContext = React.createContext(initalMicroState);

const subNode: any = document.getElementById('sub-reactApp');

const SubReactApp = function () {
  return (
    <Router basename='/app1'>
      {
        <Switch>
          <Route exact path='/marketing' component={Maketing} />
        </Switch>
      }
    </Router>
  );
};

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('react app bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log('mount app1', props);
  const { container } = props;
  let contextState = {};
  props.onGlobalStateChange((state, prev) => {
    contextState = {
      ...initalMicroState,
      ...state,
    };
  }, true);
  ReactDOM.render(
    <MicroStateContext.Provider value={contextState}>
      <SubReactApp />
    </MicroStateContext.Provider>,
    container.querySelector('#sub-reactApp')
  );
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log('unmount reactApp');
  ReactDOM.unmountComponentAtNode(subNode);
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update reactApp props', props);
}

if (!window.__POWERED_BY_QIANKUN__) {
  ReactDOM.render(<SubReactApp />, subNode);
}
