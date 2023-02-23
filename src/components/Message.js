import React from 'react'

function Message() {
  return (
    <div className="message owner">
      <div className="message_info">
        <img
          src="https://images.pexels.com/photos/8189072/pexels-photo-8189072.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <span>Just Now</span>
      </div>
      <div className="message_content">
        <p>Hello</p>
        <img
          src="https://images.pexels.com/photos/8189072/pexels-photo-8189072.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
      </div>
    </div>
  );
}

export default Message