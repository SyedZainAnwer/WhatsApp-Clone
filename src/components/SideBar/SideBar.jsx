import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./SideBar.css";
import SideBarChat from "../SideBarChat/SideBarChat";
import db from "../../config";
import { useStateValue } from "../../SateProvider";

const SideBar = () => {

  const [rooms, setRooms] = useState([]);
  const [ { user }, dispatch ] = useStateValue();

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) => setRooms(
      snapshot.docs.map((doc) => ({
        id : doc.id,
        data : doc.data(),
      }))
    ))
    return () => { 
      unsubscribe();
    };
  }, [])

  return (
    <div className="sidebar-main">
      <div className="sidebar-header">
        <Avatar src={ user ?.photoURL}/>
        <div className="sidebar-headerRight">
          <IconButton>
            <DonutLargeOutlinedIcon />
          </IconButton>
          <IconButton>
            <ChatOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar-search">
        <div className="sidebar-searchContainer">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar-chats">
        <SideBarChat addNewChat/>
        {rooms.map(room => (
          <SideBarChat key={room.id} id={room.id} name={room.data.name}/>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
