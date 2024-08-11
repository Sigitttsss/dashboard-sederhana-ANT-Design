import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Space, Table, Input, Typography } from 'antd';
import CustomSelect from '../components/select/CustomSelect';

function TablesUsers() {
  const { Title } = Typography;
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      width: 30,
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstname',
      width: 100,
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastname',
      width: 30,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: 30,
    },
  ];

 const [data, setData] = useState([])
 const [loading, setLoading] = useState(false)
 const [search, setSearch] = useState([]);
 const [query, setQuery] = useState('')
 
 const fetchData = () => {
  setLoading(true)
    axios.get('https://dummyjson.com/users')
    .then(res => {
      setData(res.data.users)
      setSearch(res.data.users)
      setLoading(false)
    })
 }
 useEffect(() => {
  fetchData()
 }, [])

const handleChange = (e) =>{
  const getSearch = e.target.value
  if(getSearch.length > 0)
    {     
     const searchdata= data.filter( (item)=> item.firstName.toLowerCase().includes(getSearch));
     setData(searchdata);
    } else {
      setData(search);
    }
    setQuery(getSearch);
}

  return (
    <>
     <Title className='title' level={2}>Users</Title>
      <div>
        <Space wrap>
          <CustomSelect />
          <Input placeholder="Search Nama" value={query}  onChange={handleChange} style={{ width: 200, height: 32, marginTop: -25}} />
        </Space>
      <Table 
        rowKey={record => record.id}
        loading={loading}
        columns={columns} 
        dataSource={data} 
        size='middle'
        style={{ marginRight: 50, marginTop: 10 }}
      />
      </div>
    </>
  )
}

export default TablesUsers