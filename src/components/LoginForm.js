import React, { useState } from 'react';
import 'react-materialize';
import LoginWithGoogle from '../LoginwithGoogle';
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="row">
      <form className="col s3 ">
        <div className="input-field">
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field">
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
        <LoginWithGoogle/>
      </form>
    </div>
  );
}

export default LoginForm;