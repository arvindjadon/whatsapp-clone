import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./chat.css";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Room Name</h3>
          <p>Last Seen..</p>
        </div>
        <div className="header_right">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_message chat_receiver">
          <span className="chat_name">Mahabeer Singh</span>
          This is test message
          <span className="chat_time">12:40 PM</span>
        </p>

        <p className="chat_message chat_receiver">
          <span className="chat_name">Mahabeer Singh</span>
          This is test message
          <span className="chat_time">12:40 PM</span>
        </p>

        <p className="chat_message">
          <span className="chat_name">Mahabeer Singh</span>
          This is test message
          <span className="chat_time">12:40 PM</span>
        </p>
      </div>
      <div className="chat_footer">
        <EmojiEmotionsIcon />
        <AttachFileIcon />
        <form>
          <input type="text" placeholder='Type your message' />
          <input type="submit" />
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat;