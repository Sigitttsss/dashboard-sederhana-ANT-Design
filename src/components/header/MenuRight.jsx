import React, {useState} from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Flex, Space, Badge, Dropdown } from 'antd';
import { IoMdNotifications } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import '../../styles/MenuRight.css'

const items = [
  {
    key: '1',
    label: 'Message',
    icon: (
        <Badge count={4} size='small'>
            <FaMessage size={20}/>
        </Badge>
        
    ),
  },
  {
    key: '2',
    label: 'Setting',
    icon: (
        <Badge size='small'>
            <CiSettings size={25}/>
        </Badge>
        
    ),
  }
]

function MenuRight() {
  return (
    <>
    <Flex>
        <Badge count={4} size='small' className='badge'>
            <IoMdNotifications className='avatar-badge' size={25} />
        </Badge>

        <Dropdown menu={{ items }}>
        <Avatar className='avatar' size={30} icon={<UserOutlined />} onClick={(e) => e.preventDefault()} />
        </Dropdown>
    </Flex>
    </>
  )
}

export default MenuRight