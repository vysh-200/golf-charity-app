"use client"
import { useState } from "react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div>
      <h1>Login Page</h1>

      <input 
        placeholder="Email" 
        onChange={(e)=>setEmail(e.target.value)} 
      />
      <br /><br />

      <input 
        type="password" 
        placeholder="Password" 
        onChange={(e)=>setPassword(e.target.value)} 
      />
      <br /><br />

      <button>Signup</button>
      <button>Login</button>
    </div>
  )
}