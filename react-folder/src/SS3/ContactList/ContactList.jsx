import React, { useState } from 'react'
import IconSizeBigger from '../shared/IconSizeBigger'
import ContactCard from './ContactCard'
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

function ContactList() {

  const [contacts, setContacts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [test, setTest] = useState(true)

  const [userInput, setUserInput] = useState({
    id: '',
    name: '',
    avatarUrl: '',
    lastMessage: ''
  })

  // Chạy mỗi lần render
  // useEffect(() => {
  //   // ComponentDiDMount, ComponentDidUpdate
  //   console.log("useEffect không có dependency")
  // })

  // Chỉ chạy 1 lần duy nhất 
  useEffect(() => {
    // ComponentDiDMount
    // console.log("useEffect dependency là mảng rỗng")

    // Gọi API để setup giao diện khi component xuất hiện lần đầu
    // Phương thức mặc định fetch là GET nếu không đề cập gì 

    // Cho loading bằng true để tạo màn Loading
    setIsLoading(true);

    // Các cách xử lí bất đồng bộ 
    // Promise
    // -> Các cách xử lí bất đồng bộ
    // callback
    // then-catch 
    // async-await -> ES6
    fetch('https://64565c532e41ccf1691ad14d.mockapi.io/contact-list')
      .then(response => response.json()
      )
      .then(result => {
        // throw new Error("Lỗi nè")
        // Thực hiện thành công 
        setContacts(result)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
      })

    // async function fetchData() {
    //   let response = await fetch('https://64565c532e41ccf1691ad14d.mockapi.io/contact-list')
    //   let result = await response.json()
    // }


    // fetchData()



  }, [])

  // Chạy lần đầu khi component xuất hiện và mỗi khi giá trị biến trong mảng thay đổi
  // useEffect(() => {
  //   // ComponentDiDMount, ComponentDidUpdate
  //   console.log("useEffect dependency là mảng có chứa các biến")

  //   // ComponentUnMount
  //   return () => {

  //   }
  // }, [test])

  const addNewContact = (newContact) => {
    // Tạo 1 mảng mới và thêm 1 giá trị vào ban đầu 
    setContacts([...contacts, newContact])

  }

  const addNewContact2 = () => {
    // Kiểm tra các giá trị userInput có ok k 
    if (false) return

    let newContact = {
      id: uuidv4(),
      name: userInput.name,
      avatarUrl: 'https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg',
      lastMessage: userInput.lastMessage
    }

    // Tạo 1 mảng mới và thêm 1 giá trị vào ban đầu 
    setContacts([...contacts, newContact])
  }

  // const handleUsernameChange = (e) => {
  //   let username = e.target.value

  //   setUserInput({ ...userInput, name: username })
  //   // setUserInput(Object.assign(userInput, { name: username }))
  // }

  // const handleLastMessageChange = (e) => {
  //   let lastMessage = e.target.value

  //   setUserInput({ ...userInput, lastMessage: lastMessage })
  // }

  const handleDataChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value })
  }

  return (
    <div style={{ width: '30%', display: 'flex', rowGap: '12px', flexDirection: 'column', padding: '12px' }}>
      {/* header */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>Chats</h3>

        <div style={{ display: 'flex', columnGap: '8px', alignItems: 'center' }}>
          <IconSizeBigger className="fa-regular fa-comment" size="16px"></IconSizeBigger>
          <div style={{ fontSize: '20px', cursor: 'pointer' }} onClick={() => addNewContact2()}>+</div>
        </div>
      </div>

      {/* filter */}
      <div style={{ display: 'flex', columnGap: '8px' }}>
        <button style={{ color: 'black' }} onClick={() => setTest((prev) => !prev)}>Open</button>
        <button style={{ color: 'black' }}>Done</button>
        <button style={{ color: 'black' }}>Unread</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', height: '80%', overflowY: 'auto' }}>

        {
          isLoading ?
            <h3>Đang tải dữ liệu...</h3>
            :
            contacts.map((contact, index) => (
              <ContactCard key={index} id={contact.id} avatarUrl={contact.avatarUrl} name={contact.name} lastMessage={contact.lastMessage} />
            ))
        }

      </div>
      {/* 
      <input type="text" name="username" onChange={(e) => handleUsernameChange(e)} />
      <input type="text" name="lastMessage" onChange={handleLastMessageChange} /> */}
      <input type="text" name="name" onChange={handleDataChange} />
      <input type="text" name="lastMessage" onChange={handleDataChange} />
    </div>
  )
}

export default ContactList