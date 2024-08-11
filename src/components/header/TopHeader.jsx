import React from 'react'
import { Flex, Input, Space } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;

import '../../styles/TopBar.css'

const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

function TopHeader() {
  return (
    <>
    <div className='content-center'>
        <Search 
        placeholder='Search Dasboard' 
        allowClear
        onSearch={onSearch}
        />
    </div> 
    </>
  )
}

export default TopHeader