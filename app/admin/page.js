"use client"
import { useState } from "react"

export default function Admin() {
  const [result, setResult] = useState([])

  const runDraw = () => {
    // Generate 5 random numbers (1–45)
    const numbers = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 45) + 1
    )
    setResult(numbers)
  }

  return (
    <div>
      <h1>Admin Panel</h1>

      <button onClick={runDraw}>Run Draw</button>

      <h2>Draw Result:</h2>

      {result.length === 0 && <p>No draw yet</p>}

      {result.map((n, i)=>(
        <span key={i}>{n} </span>
      ))}
    </div>
  )
}