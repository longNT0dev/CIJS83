import React from 'react'

function ContactCard({ avatarUrl, name, lastMessage }) {
    return (
        <div style={{ display: 'flex' }}>
            <img src={avatarUrl} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />

            <div>
                <h2>{name}</h2>
                <h3>{lastMessage}</h3>
            </div>
        </div>
    )
}

export default ContactCard