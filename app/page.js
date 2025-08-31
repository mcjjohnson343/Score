"use client"; 
import { useEffect, useState } from "react";

export default function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchScores() {
      try {
        // ESPN NFL live scoreboard API
        const res = await fetch(
          "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard"
        );
        const data = await res.json();
        setGames(data.events || []);
      } catch (error) {
        console.error("Error fetching scores:", error);
      }
    }

    fetchScores();
    const interval = setInterval(fetchScores, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">🏈 NFL Live Scores</h1>
     <a 
      href="YOUR_STRIPE_LINK_HERE" 
      target="_blank" 
      style={{
        display: "inline-block",
        backgroundColor: "#28a745",
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
        padding: "12px 24px",
        borderRadius: "8px",
        textDecoration: "none",
        marginBottom: "20px",
        marginTop: "10px"
      }}
    >
      🚀 Subscribe Now
    </a>https://buy.stripe.com/test_8x23cn7f89Ku5RSfrOffy00
  {games.length === 0 && <p>Loading scores...</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id} className="border rounded p-3 my-2">
            <p className="font-semibold">{game.name}</p>
            <p>Status: {game.competitions[0].status.type.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
