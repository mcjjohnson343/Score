export default function Page() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>🏈 Live Scoreboard Demo</h1>
      <p>This page updates every 30 seconds with fake scores.</p>
      <div id="score">Loading score...</div>

      <script dangerouslySetInnerHTML={{
        __html: `
          function updateScore() {
            const home = Math.floor(Math.random() * 50);
            const away = Math.floor(Math.random() * 50);
            document.getElementById("score").innerText =
              "Home " + home + " - " + away + " Away";
          }
          updateScore();
          setInterval(updateScore, 30000);
        `
      }} />
    </main>
  );
  }
