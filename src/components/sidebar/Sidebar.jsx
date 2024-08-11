import React, { useState } from 'react';
import {
    DashboardFilled,
    TableOutlined,
    ProfileOutlined,
    LoginOutlined,
    SettingOutlined
  } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { MdSpaceDashboard } from "react-icons/md";
import '../../styles/Sidebar.css'

function Sidebar() {
  return (
    <>
         <div className='logo'>
        <MdSpaceDashboard />
        </div>
        <Menu
          className='menu'
          //theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <DashboardFilled />,
              label: (
                <Link to='/'>Dashboard</Link>
              ),

            },
            {
              key: '2',
              icon: <TableOutlined />,
              label: 'Tables',
              children:[
                {
                  label:<Link to='/users'>Users</Link>
                },
                {
                  label:<Link to='/products'>Products</Link>
                },
              ],
            },
            {
              key: '3',
              icon: <ProfileOutlined />,
              label: 'Profile',
            },
            {
              key: '4',
              icon: <SettingOutlined />,
              label: 'Setting',
            },
            {
                key: '5',
                icon: <LoginOutlined />,
                label: 'Log Out',
              },
              {
                
              },
          ]}
        />
       
    </>
  )
}

export default Sidebar