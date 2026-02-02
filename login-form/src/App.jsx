import { useState } from 'react'
import './App.css'

function App() {
  const [ showPassword, setShowPassword ] = useState(true)
  function saveShowPassword() {
    setShowPassword(!showPassword)
  }
  return (
    <div>
      <p>Hello, welcome to my website</p>
      <div><input type="text" placeholder="Email"/></div>
      <div>
        <input type={showPassword ? "password" : "text"} placeholder="Password"/>
        <button 
          className="show-password"
          onClick={saveShowPassword}
        >{showPassword ? "Show" : "Hide"}</button>
      </div>
      <div className="buttons">
        <button>Login</button>  
        <button>Sign Up</button>  
      </div>
    </div>
  )
}

export default App
