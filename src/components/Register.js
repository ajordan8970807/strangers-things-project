import React, { useState } from 'react';
import { registerUser } from '../api';


const Register = ({ setToken, navigate }) => {
  // props.setToken
  // const {setToken} = props
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [confirmation, setConfirmation] = useState('');
  
  const handleSubmit = async () => {
    const results = await registerUser(username, password);
    if (results.success) {
      setToken(results.data.token);
      window.localStorage.setItem('token', results.data.token);
      navigate('/profile');
    } else {
      console.log(results.error.message)
    }
  }
  
  return (
      <form className='form' 
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}>

        <input 
          type="text"
          placeholder="Enter Username"
          onChange={(event) => setUsername(event.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(event) => setPassword(event.target.value)}
          required
        />

      {/* 
        <input
          type="confirmation"
          placeholder="Enter Password Again"
          onChange={(event) => setConfirmation(event.target.value)}
          required
        />
        */}
        <button type="submit">Submit</button>
        <span className="form-input-login">
          Already got one? Login <a href="#">here!</a>
        </span>
      </form>

  );
}

export default Register;