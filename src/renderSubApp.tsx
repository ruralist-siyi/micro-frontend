import React from 'react';
import ReactDOM from 'react-dom';

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
  console.log(appContent);
  const container = document.getElementById('sub-content');
  if (container) {
    ReactDOM.render(
      <Render appContent={appContent} loading={loading} />,
      container
    );
  }
}

export default renderSubApp;
