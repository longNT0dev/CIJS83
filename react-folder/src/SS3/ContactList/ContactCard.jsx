import React from 'react'

function ContactCard({ id, avatarUrl, name, lastMessage }) {
    return (

        <a href={`/?chatId=${id}`} style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex' }}>
                <img src={avatarUrl} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />

                <div>
                    <h2>{name}</h2>
                    <h3>{lastMessage}</h3>
                </div>
            </div>
        </a>

    )
}

export default ContactCard