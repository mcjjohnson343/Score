"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [score, setScore] = useState({ teamA: 0, teamB: 0 });

  // Function to randomize scores
  const updateScore = () => {
    setScore({
      teamA: Math.floor(Math.random() * 50),
      teamB: Math.floor(Math.random() * 50),
    });
  };

  // Update every 30 seconds
  useEffect(() => {
    updateScore(); // first run
    const interval = setInterval(updateScore, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main style={{ textAlign: "center", padding: "50px", fontFamily: "Arial" }}>
      <h1>🏈 Live Scoreboard</h1>
      <h2>Team A: {score.teamA}</h2>
      <h2>Team B: {score.teamB}</h2>
      <p>Scores refresh every 30 seconds automatically ⏳</p>
    </main>
  );
}
