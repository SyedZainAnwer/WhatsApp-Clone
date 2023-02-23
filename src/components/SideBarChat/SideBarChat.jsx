import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './SideBarChat.css'

const SideBarChat = ({ addNewChat, id, name }) => {

    const [seed, setSeed] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const createChat = () => {
      const roomName = prompt("Please name for chat");

      if (roomName) {
        
      }
    }

  return !addNewChat ? (
    <div className='sidebar-chat-main'>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
      <div className="sidebar-chat-info">
        <h2>{name}</h2>
        <p>Message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className='sidebar-chat-main'>
        <h2>
          Add New Chat
        </h2>
    </div>
  )
}

export default SideBarChat
