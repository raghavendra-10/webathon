import React, { useState } from 'react';
import './Mlogin.css';

function LoginForm() {
  const [selectedOption, setSelectedOption] = useState(''); // State to track the selected option

  return (
    <div >
      {/* Compartment to select user type */}
      <div className="user-type">
        <label>
          <input
            type="radio"
            name="userType"
            value="admin"
            checked={selectedOption === 'admin'}
            onChange={() => setSelectedOption('admin')}
          />
          Admin
        </label>
        <label>
          <input
            type="radio"
            name="userType"
            value="coordinator"
            checked={selectedOption === 'coordinator'}
            onChange={() => setSelectedOption('coordinator')}
          />
          Coordinator
        </label>
        <label>
          <input
            type="radio"
            name="userType"
            value="student"
            checked={selectedOption === 'student'}
            onChange={() => setSelectedOption('student')}
          />
          Student
        </label>
      </div>

      {/* Login form */}
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required />
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;