import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import './MainChat.css'
import { useParams } from 'react-router';
import db from '../../config';

const MainChat = () => {

    const [input, setInput] = useState('')
    const [ seed, setSeed ] = useState('')
    const { roomId } = useParams();
    const [ roomName, setRoomName ] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [roomId]);

    useEffect(() => {
      if (roomId) {
        db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
          setRoomName(snapshot.data().name)
        ))
      }
    }, [roomId])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input)
        setInput("")
    }


  return (
    <div className='chat-main-menu'>
      <div className="chat-header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

        <div className="chat-header-info">
            <h3>{roomName}</h3>
            <p>Last Seen..</p>
        </div>

        <div className="chat-header-right">
            <IconButton>
                <SearchOutlinedIcon/>
            </IconButton>
            <IconButton>
                <AttachFileOutlinedIcon/>
            </IconButton>
            <IconButton>
                <MoreVertOutlinedIcon/>
            </IconButton>
        </div>
      </div>

      <div className="chat-body">
        <p className={`chat-message ${true && "chat-receiver"}`}>
            <span className="chat-name">Zain</span>
            Hey!!
            <span className="chat-time-span">
                3:52pm
            </span>
        </p>
      </div>

      <div className="chat-footer">
        <EmojiEmotionsOutlinedIcon/>
        <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder='Type a message'/>
            <button type='submit' onClick={sendMessage}>Send a message</button>
        </form>
        <MicOutlinedIcon/>
      </div>
    </div>
  )
}

export default MainChat
