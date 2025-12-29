import { useState } from 'react';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import ResultScreen from './components/ResultScreen';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('start'); 
  const [gameMode, setGameMode] = useState(null); 
  const [finalScore, setFinalScore] = useState(0);

  const startGame = (mode) => {
    setGameMode(mode);
    setGameState('playing');
  };

  const endGame = (score) => {
    setFinalScore(score);
    setGameState('result');
  };

  const restartGame = () => {
    setGameState('start');
    setFinalScore(0);
    setGameMode(null);
  };

  return (
    <div className="App">
      <header>
        <h1>AI Dedektifi</h1>
      </header>
      <main>
        {gameState === 'start' && <StartScreen onStart={startGame} />}
        
        {gameState === 'playing' && (
          <GameScreen mode={gameMode} onEnd={endGame} />
        )}

        {gameState === 'result' && (
          <ResultScreen score={finalScore} onRestart={restartGame} />
        )}
      </main>
    </div>
  );
}

export default App;