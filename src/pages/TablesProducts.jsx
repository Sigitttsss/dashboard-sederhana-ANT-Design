import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Space, Table, Input, Typography } from 'antd';

function TablesProducts() {
  const { Title } = Typography;
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      width: 0,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: 15,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      width: 0,
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
      width: 15,
    },
  ];

 const [data, setData] = useState([])
 const [loading, setLoading] = useState(false)
 const [search, setSearch] = useState([]);
 const [query, setQuery] = useState('')
 
 const fetchData = () => {
  setLoading(true)
    axios.get('https://dummyjson.com/products')
    .then(res => {
      setData(res.data.products)
      setSearch(res.data.products)
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
     const searchdata= data.filter( (item)=> item.title.toLowerCase().includes(getSearch));
     setData(searchdata);
    } else {
      setData(search);
    }
    setQuery(getSearch);
}

  return (
    <>
     <Title className='title' level={2}>Products</Title>
      <div>
        <Space wrap>
          <Input placeholder="Search Products" value={query}  onChange={handleChange} style={{ width: 200, height: 32, marginTop: -25}} />
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

export default TablesProducts