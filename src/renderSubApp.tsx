import React from 'react';
import ReactDOM from 'react-dom';

/**
 * renderSubApp 这是之前挂载子应用的方法，现在可以直接传入container进行自动挂载
 */

function Render(props) {
  const { appContent, loading } = props;

  return (
    <>
      {loading && <h4 className='subapp-loading'>Loading...</h4>}
      <div dangerouslySetInnerHTML={{ __html: appContent }} />
    </>
  );
}

function renderSubApp({ appContent, loading }) {
  const container = document.getElementById('sub-content');
  if (container) {
    ReactDOM.render(
      <Render appContent={appContent} loading={loading} />,
      container
    );
  }
}

export default renderSubApp;
