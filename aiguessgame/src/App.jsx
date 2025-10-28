import { useState } from 'react'
import StartScreen from './components/StartScreen'
import GameScreen from './components/GameScreen'
import ResultScreen from './components/ResultScreen'

export default function App() {
  const [screen, setScreen] = useState('start')
  const [lastResult, setLastResult] = useState(false)

  const startGame = () => setScreen('game')
  const endGame = (isCorrect) => {
    setLastResult(isCorrect)
    setScreen('result')
  }
  const restart = () => setScreen('start')

  return (
    <div>
      {screen === 'start' && <StartScreen startGame={startGame} />}
      {screen === 'game' && <GameScreen endGame={endGame} />}
      {screen === 'result' && <ResultScreen isCorrect={lastResult} restart={restart} />}
    </div>
  )
}
