import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './SideBarChat.css'

const SideBarChat = () => {

    const [seed, setSeed] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

  return (
    <div className='sidebar-chat-main'>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
      <div className="sidebar-chat-info">
        <h2>Room Name</h2>
        <p>Message...</p>
      </div>
    </div>
  )
}

export default SideBarChat
