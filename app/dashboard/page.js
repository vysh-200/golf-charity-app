"use client"
import { useState } from "react"

export default function Dashboard() {
  const [scores, setScores] = useState([])
  const [score, setScore] = useState("")

  const addScore = () => {
    if (!score) return

    let newScores = [...scores, score]

    // Keep only last 5 scores
    if (newScores.length > 5) {
      newScores.shift()
    }

    setScores(newScores)
    setScore("")
  }

  return (
    <div>
      <h1>Dashboard</h1>

      <input
        type="number"
        placeholder="Enter score"
        value={score}
        onChange={(e)=>setScore(e.target.value)}
      />

      <button onClick={addScore}>Add Score</button>

      <h2>Last 5 Scores</h2>

      {scores.length === 0 && <p>No scores yet</p>}

      {scores.map((s, i)=>(
        <p key={i}>{s}</p>
      ))}
    </div>
  )
}