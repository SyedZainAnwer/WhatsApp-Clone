import React from "react";
import { Avatar, IconButton } from "@mui/material";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./SideBar.css";
import SideBarChat from "../SideBarChat/SideBarChat";

const SideBar = () => {
  return (
    <div className="sidebar-main">
      <div className="sidebar-header">
        <Avatar />
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
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
      </div>
    </div>
  );
};

export default SideBar;
