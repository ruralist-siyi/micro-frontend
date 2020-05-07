import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { loadMicroApp } from 'qiankun';
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { subAppConfig, mainAppConfig } from '../constant/config';
import './index.less';

const { Header, Sider, Content } = Layout;

function Home() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [prefix, setPrefix] = useState<string>('');
  const [subConfig, setSubConfig] = useState<any>({});
  const [microApp, setMicroApp] = useState<any>(null);
  const location: any = useLocation();

  const unmountSubApp = () => {
    if (microApp) {
      if (microApp.getStatus() === 'MOUNTED') {
        microApp.unmount();
      }
    }
  };

  /**
   * 发现问题：应该是我在这边使用了Route去渲染main应用匹配的内容
   * 建议是main应用只是这个框架，内容只从子应用加载进来
   * 尝试做手动加载main应用的内容
   */
  const renderMainContent = () => {
    const mainUrl = location.pathname.split('/')[2];
    console.log('renderMainContent', prefix, mainAppConfig[mainUrl]);
    if (prefix === 'main') {
      const App = mainAppConfig[mainUrl];
      if (App) {
        return <App />;
      }
    }
  };

  useEffect(() => {
    const currentPrefix = location.pathname.split('/')[1];
    if (prefix !== currentPrefix) {
      setPrefix(currentPrefix);
      unmountSubApp();
      setSubConfig(subAppConfig[currentPrefix]);
    }
    console.log('location change');
  }, [location]);

  useEffect(() => {
    if (subConfig && Object.keys(subConfig).length > 0) {
      setMicroApp(loadMicroApp(subConfig));
    }
  }, [subConfig]);

  useEffect(() => {
    return () => {
      console.log('willunmount');
      microApp && microApp.unmount();
    };
  }, []);

  return (
    <Layout className='main-layout'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo'>Micro frontend</div>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={[location.pathname]}
        >
          <Menu.Item key='/main/userList'>
            <NavLink to='/main/userList'>
              main{!collapsed ? '-用户模块' : ''}
            </NavLink>
          </Menu.Item>
          <Menu.Item key='/app1/marketing'>
            <NavLink to='/app1/marketing'>
              app1{!collapsed ? '-营销模块' : ''}
            </NavLink>
          </Menu.Item>
          <Menu.Item key='/app2/report'>
            <NavLink to='/app2/report'>
              app2{!collapsed ? '-报表模块' : ''}
            </NavLink>
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
          id='sub-content'
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        ></Content>
      </Layout>
    </Layout>
  );
}

export default Home;
