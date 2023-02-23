import React from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default Home;
