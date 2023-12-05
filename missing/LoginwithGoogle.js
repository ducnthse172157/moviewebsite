import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import GoogleButton from 'react-google-button';
 import { UserAuth } from './AuthContext';
 import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
export default function LoginwithGoogle() {
  const [setUser] = useState({})
  const handleCredentialResponse = (response)=> {
    console.log("Encoded JWT ID token: " + response.credential);
    var decoded = jwt_decode(response.credential);
     setUser(decoded);
     document.getElementById('buttonDiv').hidden =true;
  }

  useEffect(() => {
    /* global google*/ 
    window.onload = function () {
      google.accounts.id.initialize({
        client_id: "41565458656-s4n82vadvs9dfs8b7j82rkt2uk0gm29r.apps.googleusercontent.com",
        callback: handleCredentialResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
      );
      google.accounts.id.prompt(); // also display the One Tap dialog
    }
  }, []);
  const {googleSignIn, user} = UserAuth();
  const navigate = useNavigate()
  const handleGoogleSignIn = async()=>{
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(()=>{
    if(user!=null){
      navigate('/dashboard')
    }
  },[user])
  return (
    <div className='loginbt'>
      <GoogleButton onClick={handleGoogleSignIn}/>
    </div>
  );
}

