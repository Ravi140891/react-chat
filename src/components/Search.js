import React from 'react'

function Search() {
  return (
    <div className="search">
      <div className="search_form">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="user_chat">
        <img
          src="https://images.pexels.com/photos/8189072/pexels-photo-8189072.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <div className="user_chat_info">
          <span>James</span>
        </div>
      </div>
    </div>
  );
}

export default Search