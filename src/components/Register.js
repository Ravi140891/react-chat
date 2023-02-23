import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Userpic from "../images/addpic.png";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        () => {}, // progress function, no need to do anything here
        (error) => {
          console.log(error);
          setErr(true);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL,
          });
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
          });
          await setDoc(doc(db,"userChats", res.user.uid),{})
          navigate("/")
        }
      );

    } catch (error) {
      console.log(error)
      setErr(true);
    }
  };
  return (
    <div className="form_container">
      <div className="form_wrapper">
        <div className="logo">React Chat</div>
        <div className="title">Register</div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="User name" />
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter password" />
          <label htmlFor="file">
            <img src={Userpic} alt="" />
            <span>Add a pic</span>
          </label>
          <input type="file" id="file" />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account?<Link to="/login">Login</Link>
        </p>
        {err && <span>Something went wrong</span>}
      </div>
    </div>
  );
}

export default Register;
