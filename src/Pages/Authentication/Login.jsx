import React from 'react'
import { Link } from 'react-router-dom'
import "./Auth.css"

export const Login = () => {
  return (
    <div class="content">
        <form className='auth-form'>
          <h1>Login</h1>
          <div class="form-item">
            <label htmlFor="email">Email Address</label>
            <input class="input-field login-input"
              type="email"
              id="email"
              placeholder="sakshikumar@gmail.com"
            />
          </div>
          <div class="form-item">
            <label htmlFor="password">Password
            </label>
            <input class="input-field login-input" type="password" id="password" placeholder="*****" />
          </div>
          <div class="form-item bottom">
            <div class="remember">
              <input type="checkbox" />
            <span class="remember-text">Remember me</span>
            </div>
            <span class="forgot-pass">Forgot your Password?</span>
          </div>
          <button class="btn login-btn">Login</button
          ><Link to="/signup"class="new-acc"
            >Create New Account <i class="fas fa-chevron-right"></i
          ></Link>
        </form>
      </div>
  )
}
