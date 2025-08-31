"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [scores, setScores] = useState([]);

  // Simulated fetch (later you can connect to real API or your DB)
  const fetchScores = async () => {
    // Fake example data
    const data = [
      { teamA: "Alabama", teamB: "Georgia", score: "21-17", status: "Q3" },
      { teamA: "Cowboys", teamB: "Eagles", score: "10-14", status: "Q2" },
    ];
    setScores(data);
  };

  useEffect(() => {
    fetchScores(); // initial load
    const interval = setInterval(fetchScores, 30000); // update every 30 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🏈 Live Scoreboard</h1>
      {scores.map((game, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <strong>{game.teamA}</strong> vs <strong>{game.teamB}</strong>  
          <br />
          <span>Score: {game.score}</span>  
          <br />
          <span>Status: {game.status}</span>
        </div>
      ))}
    </main>
  );
}
