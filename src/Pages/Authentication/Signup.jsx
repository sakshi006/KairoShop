import React from 'react'
import { Link } from 'react-router-dom'

import "./Auth.css"

const Signup = () => {
  return (
    <div class="content">
<form class="auth-form signup-form">
  <h1>Signup</h1>
  <div class="form-item">
    <label for="name">Full Name</label>
    <input class="input-field login-input"
      type="text"
      id="name"
      placeholder="Enter your full name"
    />
  </div>
  <div class="form-item">
    <label for="email">Email Address</label>
    <input class="input-field login-input"
      type="email"
      id="email"
      placeholder="sakshikumar@gmail.com"
    />
  </div>
  <div class="form-item">
    <label for="password">Password
    </label>
    <input class="input-field login-input" type="password" id="password" placeholder="*****" />
  </div>
  <div class="form-item">
    <label for="confirm-password">Confirm Password
    </label>
    <input class="input-field login-input" type="password" id="confirm-password" placeholder="*****" />
  </div>
  <div class="form-item bottom">
    <div class="remember">
      <input type="checkbox" />
    <span class="remember-text">I accept all Terms & Conditions</span>
    </div>          
  </div>
  <button class="btn login-btn">Create New Account</button
  ><Link to="/login"  class="new-acc"
    >Already have an account <i class="fas fa-chevron-right"></i
  ></Link>
</form>
</div>
  )
}

export default Signup