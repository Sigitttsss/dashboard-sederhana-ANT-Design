import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Flex, Layout, Menu, theme } from 'antd';
import './App.css'
import Sidebar from './components/sidebar/Sidebar';
import TopHeader from './components/header/TopHeader';
import MenuRight from './components/header/MenuRight';
import Dashboard from '../src/pages/Dashboard';
import TablesUsers from './pages/TablesUsers';
import TablesProducts from './pages/TablesProducts'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
   
    <Layout>
    <BrowserRouter>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: 'white' }}>
      <Sidebar />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            margin: 0,
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Flex>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
            
          />
           <TopHeader />
          </Flex>
          <Flex>
            <MenuRight />
          </Flex>
        </Header>
        <Content 
          style={{ 
            marginTop: 15,
            marginLeft: 15
           }}
        >
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/users' element={<TablesUsers />} />
            <Route path='/products' element={<TablesProducts />} />
      </Routes>
        </Content>
      </Layout>
     
      </BrowserRouter>
    </Layout>
  
  );
};
export default App;