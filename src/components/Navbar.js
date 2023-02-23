import React from 'react'

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">React Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/8189072/pexels-photo-8189072.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar