import React, { useState } from 'react'
import IconSizeBigger from '../shared/IconSizeBigger'
import ContactCard from './ContactCard'

function ContactList() {

  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'John Doe',
      avatarUrl: 'fas fa-user',
      lastMessage: ''
    },
    {
      id: 2,
      name: 'John Doe',
      avatarUrl: 'fas fa-user',
      lastMessage: ''
    },
    {
      id: 3,
      name: 'John Doe',
      avatarUrl: 'fas fa-user',
      lastMessage: ''
    },
    {
      id: 4,
      name: 'John Doe',
      avatarUrl: 'fas fa-user',
      lastMessage: ''
    },
    {
      id: 5,
      name: 'John Doe',
      avatarUrl: 'fas fa-user',
      lastMessage: 'hi'
    },
    {
      id: 6,
      name: 'John Doe',
      avatarUrl: 'fas fa-user',
      lastMessage: 'hi'
    },
    {
      id: 7,
      name: 'John Doe',
      avatarUrl: 'fas fa-user',
      lastMessage: ''
    },
  ])

  return (
    <div style={{ width: '30%', display: 'flex', rowGap: '12px', flexDirection: 'column', padding: '12px' }}>
      {/* header */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>Chats</h3>

        <div style={{ display: 'flex', columnGap: '8px' }}>
          <IconSizeBigger className="fa-regular fa-comment" size="16px"></IconSizeBigger>
          <IconSizeBigger className="fa-regular fa-comment" size="16px"></IconSizeBigger>
        </div>
      </div>

      {/* filter */}
      <div style={{ display: 'flex', columnGap: '8px' }}>
        <button style={{ color: 'black' }}>Open</button>
        <button style={{ color: 'black' }}>Done</button>
        <button style={{ color: 'black' }}>Unread</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>

        {
          contacts.map((contact, index) => (
            <ContactCard key={index} avatarUrl={contact.avatarUrl} name={contact.name} lastMessage={contact.lastMessage} />
          ))
        }

      </div>
    </div>
  )
}

export default ContactList