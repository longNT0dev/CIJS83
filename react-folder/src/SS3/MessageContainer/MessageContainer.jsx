import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'


function MessageContainer() {
  let location = useLocation();

  useEffect(() => {
    const url = new URL(window.location);
    const searchParams = url.searchParams;

    const id = searchParams.get('chatId');

    async function fetchData(chatId) {
      let response = await fetch(`https://64565c532e41ccf1691ad14d.mockapi.io/contact-list/${chatId}`)
      let result = await response.json()


      console.log(result)
    }

    fetchData(id)

  }, [location])


  return (
    <div style={{ width: '40%' }}>MessageContainer</div>
  )
}

export default MessageContainer