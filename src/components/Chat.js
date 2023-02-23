import React from 'react'
import Camera from '../images/camera.png'
import Add from '../images/add.png'
import More from '../images/more.webp'
import Messages from './Messages'
import Input from './Input'

function Chat() {
  return (
    <div className="chat">
      <div className="chat_info">
        <span>James</span>
        <div className="chat_icons">
          <img src={Camera} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
}

export default Chat