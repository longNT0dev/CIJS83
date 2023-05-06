import React from 'react'
import { useParams } from 'react-router-dom'


function MessageContainer() {

  const url = new URL(window.location);
  const searchParams = url.searchParams;

  searchParams.get('chatId');

  return (
    <div style={{ width: '40%' }}>MessageContainer</div>
  )
}

export default MessageContainer