import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

function LoginWithGoogle({ onLogin, onLogout }) {
  const [user, setUser] = useState({});
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleCredentialResponse = (response) => {
    console.log('Encoded JWT ID token: ' + response.credential);
    var decoded = jwt_decode(response.credential);
    setUser(decoded);
    setIsSignedIn(true);
    onLogin(decoded); // Notify the parent component about the login
  };

  const handleLogOut = () => {
    setUser({});
    setIsSignedIn(false);
    onLogout(); // Notify the parent component about the logout
  };

  useEffect(() => {
    // Load the Google Sign-In API
    window.gapi.load('auth2', function () {
      window.gapi.auth2.init({
        client_id: '41565458656-s4n82vadvs9dfs8b7j82rkt2uk0gm29r.apps.googleusercontent.com', 
      });
    });

    // Render the Google Sign-In button
    window.gapi.load('signin2', function () {
      window.gapi.signin2.render('buttonDiv', {
        onsuccess: handleCredentialResponse,
        onfailure: (error) => {
          console.error('Google Sign-In failed:', error);
        },
      });
    });
  },);

  return (
    <>
      <div id="buttonDiv"></div>
      {isSignedIn && (
        <button onClick={handleLogOut}>Logout</button>
      )}
      {user && (
        <div>
          <h5>{user.name}</h5>
        </div>
      )}
    </>
  );
}

export default LoginWithGoogle;