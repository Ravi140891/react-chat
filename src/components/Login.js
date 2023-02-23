import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setErr(true);
    }
  };
  return (
    <div className="form_container">
      <div className="form_wrapper">
        <div className="logo">React Chat</div>
        <div className="title">Login</div>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter password" />
          <button type="submit">Login</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          Don't have an account yet?<Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
