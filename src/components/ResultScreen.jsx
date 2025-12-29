import React from 'react';

const ResultScreen = ({ score, onRestart }) => {
  return (
    <div className="screen-container result-screen">
      <h2>Oyun Bitti!</h2>
      <div className="score-display">
        Toplanan Puan
        <span className="big-score">{score}</span>
      </div>
      
      <p>
        {score > 50 ? "Harika bir dedektifsin! 🕵️‍♂️" : "Biraz daha pratik yapmalısın. 🤖"}
      </p>

      <button onClick={onRestart}>Tekrar Oyna</button>
    </div>
  );
};

export default ResultScreen;