import React from 'react'
import IconSizeBigger from '../shared/IconSizeBigger'

function SideBar() {

  return (
    <div style={{ width: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '32px 32px', rowGap: '220px' }}>
      <IconSizeBigger className="fa-solid fa-bars" size="32px"></IconSizeBigger>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '24px' }}>
        <IconSizeBigger className="fa-regular fa-comment" size="16px"></IconSizeBigger>
        <IconSizeBigger className="fa-regular fa-comment" size="16px"></IconSizeBigger>
        <IconSizeBigger className="fa-regular fa-comment" size="16px"></IconSizeBigger>
        <IconSizeBigger className="fa-regular fa-comment" size="16px"></IconSizeBigger>
        <IconSizeBigger className="fa-regular fa-comment" size="16px"></IconSizeBigger>
      </div>

    </div>
  )
}

export default SideBar