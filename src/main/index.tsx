import React, { useState } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import './index.less';
import UserList from './page/UserList';

const { Header, Sider, Content } = Layout;

function Home() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router history={createBrowserHistory()}>
      <Layout className='main-layout'>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className='logo'>Micro frontend</div>
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key='1'>
              <Link to='/main/userList'>main{!collapsed ? '-用户模块' : ''}</Link>
            </Menu.Item>
            <Menu.Item key='2'>
  <Link to='/app1/marketing'>app1{!collapsed ? '-营销模块' : ''}</Link>
            </Menu.Item>
            <Menu.Item key='3'>
              <Link to='/app2/report'>app2{!collapsed ? '-报表模块' : ''}</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className='site-layout'>
          <Header className='site-layout-background' style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: () => {
                  setCollapsed(!collapsed);
                },
              }
            )}
          </Header>
          <Content
            id="sub-content"
            className='site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {
              <Switch>
                <Route exact path='/main/userList' component={UserList} />
              </Switch>
            }
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default Home;
