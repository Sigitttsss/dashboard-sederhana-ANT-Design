import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Select ,Tag } from 'antd';
import '../../styles/CustomSelect.css'

function CustomSelect() {
 const [dataUsers, setDataUsers] = useState([])

 const fetchData = async () => {
  let users = [];
    await axios.get('https://dummyjson.com/users')
        .then((res) => {
          let data = res.data.users;
          data.map((item) => {
            return users.push({value: item.id, label: `${item.id} - ${item.firstName} ${item.lastName}`})
          })
        })
        setDataUsers(users)
 };


 useEffect(() => {
  fetchData()
 }, [])

  return (
    <>
      <Select
         showSearch
        defaultValue="Select Name"
        options={dataUsers}
        style={{ width: 200, marginBottom: 7 }}
      />
    </>
  )
}

export default CustomSelect