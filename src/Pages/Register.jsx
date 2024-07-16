import React, { useState } from 'react';
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email       = e.target[1].value;
    const password    = e.target[2].value;
    const file        = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // You can add progress indication here if needed
        },
        (error) => {
          setErr(true);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "user", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
            
            
          } catch (error) {
            setErr(true);
          }
        }
      );
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Chat App</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='name' />
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <input type='file' style={{ display: "none" }} id='file' />
          <label htmlFor='file'>
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>Already have an account? <b>Sign In</b></p>
      </div>
    </div>
  );
};
