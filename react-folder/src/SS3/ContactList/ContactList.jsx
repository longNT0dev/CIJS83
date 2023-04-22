import React, { useState } from 'react'
import IconSizeBigger from '../shared/IconSizeBigger'
import ContactCard from './ContactCard'
import { v4 as uuidv4 } from 'uuid';

function ContactList() {
  
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'John Doe',
      avatarUrl: 'https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg',
      lastMessage: ''
    },
    {
      id: 2,
      name: 'John Doe',
      avatarUrl: 'https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg',
      lastMessage: ''
    },
    {
      id: 3,
      name: 'John Doe',
      avatarUrl: 'https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg',
      lastMessage: ''
    },
    {
      id: 4,
      name: 'John Doe',
      avatarUrl: 'https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg',
      lastMessage: ''
    },
    {
      id: 5,
      name: 'John Doe',
      avatarUrl: 'https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg',
      lastMessage: 'hi'
    },
    {
      id: 6,
      name: 'John Doe',
      avatarUrl: 'https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg',
      lastMessage: 'hi'
    },
    {
      id: 7,
      name: 'John Doe',
      avatarUrl: 'https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg',
      lastMessage: ''
    },
  ])

  const [userInput, setUserInput] = useState({
    id: '',
    name: '',
    avatarUrl: '',
    lastMessage: ''
  })


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
        <button style={{ color: 'black' }}>Open</button>
        <button style={{ color: 'black' }}>Done</button>
        <button style={{ color: 'black' }}>Unread</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', height: '80%', overflowY: 'auto' }}>

        {
          contacts.map((contact, index) => (
            <ContactCard key={index} avatarUrl={contact.avatarUrl} name={contact.name} lastMessage={contact.lastMessage} />
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