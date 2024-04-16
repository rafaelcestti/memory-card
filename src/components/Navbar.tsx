import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar flex justify-between">
      <h1 className="btn btn-ghost btn-lg text-3xl">PokeGuess</h1>
      <div className="stats stats-vertical sm:stats-horizontal">
        <div className="stat">
          <h1 className="stat-title">Score:</h1>
          <h2 className="stat-value">4</h2>
        </div>
        <div className="stat">
          <h1 className="stat-title">High Score:</h1>
          <h2 className="stat-value">8</h2>
        </div>
      </div>
    </div>
  )
}
