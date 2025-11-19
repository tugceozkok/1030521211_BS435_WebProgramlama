import React, { useState } from "react";

export default function GameScreen() {
  const [stage, setStage] = useState("start");

  const handleStart = () => setStage("playing");

  return (
    <div className="game-screen">
      {stage === "start" ? (
        <div>
          <h2>AI mi Gerçek mi?</h2>
          <p>Her tur üç görselden AI olanı bulmaya çalışın.</p>
          <button onClick={handleStart}>Başla</button>
        </div>
      ) : (
        <div>Oyun alanı (yüklüyor...)</div>
      )}
    </div>
  );
}