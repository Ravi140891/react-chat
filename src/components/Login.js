import React from "react";

function Login() {
  return (
    <div className="form_container">
      <div className="form_wrapper">
        <div className="logo">React Chat</div>
        <div className="title">Login</div>
        <form>
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter password" />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account yet? Register</p>
      </div>
    </div>
  );
}

export default Login;
