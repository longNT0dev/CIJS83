import React from 'react'
import { Link } from 'react-router-dom'

function ContactCard({ id, avatarUrl, name, lastMessage }) {

    const handleDeleteMessages = (e, chatId) => {
        e.stopPropagation()
        e.preventDefault()
        fetch(`https://64565c532e41ccf1691ad14d.mockapi.io/contact-list/${chatId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                messages: []
            })
        })
    }

    return (
        <Link to={`/?chatId=${id}`} style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex' }}>
                <img src={avatarUrl} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />

                <div>
                    <h2>{name}</h2>
                    <h3>{lastMessage}</h3>
                </div>
            </div>

            <button onClick={(e) => handleDeleteMessages(e, id)}>😒</button>
        </Link>
    )
}

export default ContactCard