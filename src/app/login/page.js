"use client";
import "./login.css"
import { useState } from "react";
import Logo from "../SVG/Logo";
import { useTheme } from "../Components/ThemeContext";
import ImageIcon from "../SVG/Image";

const Home = () => {

  const [currentTheme,] = useTheme()
  const [loginState,setLoginState] = useState(false)

  const goLogIn = (e) => {
    setLoginState(true)
  }

  const goSignUp = (e) => {
    setLoginState(false)
  }

  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault()
  }
  
  const Login = () => {
    return (
      <form 
        className="login-container" 
        onSubmit={handleSubmit} 
        method="POST" 
        enctype="multipart/form-data"
      >
        <label for="Email">Email</label>
        <input
          className="login-input"
          id="Email"
          type='email'
          name='Email'
          placeholder='Email'
          aria-label='Email'
        />  
        <label for="Password">Password</label>
        <input
          className="login-input"
          id="Password"
          type='password'
          name='Password'
          placeholder='Password'
          aria-label='Password'
        />
        <button type="submit" className="login-button">Log-In</button>
        <p style={{fontSize: "10px", textAlign: "center"}}>
          New here?
          <span onClick={goSignUp} style={{color: "var(--accent-colour)", cursor: "pointer"}}> Sign-up</span>
        </p>
      </form>
    )
  }
  
  const Signup = () => {
    return (
      <form 
        className="login-container" 
        onSubmit={handleSubmit} 
        method="POST" 
        enctype="multipart/form-data"
      >
        <label for="Name">Display Name</label>
        <input
          className="login-input"
          id="Name"
          type='text'
          name='Name'
          placeholder='Display Name'
          aria-label='Name'
        />
        <label for="Profile Picture">
          Profile Picture
          <div className="file-button">
            <ImageIcon stroke={currentTheme.accent} />
            <p>Click to select an Image from your computer</p>
          </div>
        </label>
        <input
          id="Profile Picture"
          type='file'
          name='Profile Picture'
          aria-label='Profile Picture'
        />
        <label for="Email">Email</label>
        <input
          className="login-input"
          id="Email"
          type='email'
          name='Email'
          placeholder='Email'
          aria-label='Email'
        />  
        <label for="Password">Password</label>
        <input
          className="login-input"
          id="Password"
          type='password'
          name='Password'
          placeholder='Password'
          aria-label='Password'
        />
        <button type="submit" className="login-button" >Sign-up</button>
        <p style={{fontSize: "10px", textAlign: "center"}}>
          Already have an account?  
          <span onClick={goLogIn} style={{color: "var(--accent-colour)"}}> Log-in</span>
        </p>
      </form>
    )
  }


  return (
    <div className="page-container">
      <div>
        <Logo fill={currentTheme.primary} stroke={currentTheme.accent} />
      </div>
      <div>
        {loginState ? [<Login />]:[<Signup />]}
      </div>
    </div>
  )
}

export default Home