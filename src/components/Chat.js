import React, { useContext } from 'react'
import Camera from '../images/camera.png'
import Add from '../images/add.png'
import More from '../images/more.webp'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);


  return (
    <div className="chat">
      <div className="chat_info">
        <span>{data.user?.displayName}</span>
        <div className="chat_icons">
          <img src={Camera} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat