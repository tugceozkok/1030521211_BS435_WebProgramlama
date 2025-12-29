import React, { useState, useEffect } from 'react';
import { questions } from '../data'; 

const GameScreen = ({ mode, onEnd }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  
  const [attempts, setAttempts] = useState(0); 
  const [showHint, setShowHint] = useState(false);
  const [disabledImages, setDisabledImages] = useState([]); 

  const [timeLeft, setTimeLeft] = useState(30);

  const currentQuestion = questions[currentQIndex];

  useEffect(() => {
    if (mode === 'timeAttack') {
      if (timeLeft <= 0) {
        onEnd(score);
        return;
      }
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [mode, timeLeft, score, onEnd]);

  const handleImageClick = (isAi, imgId) => {
    if (mode === 'classic') {
      if (isAi) {
        let pointsToAdd = attempts === 0 ? 20 : 10; 
        setScore(score + pointsToAdd);
        nextQuestion();
      } else {
        if (attempts === 0) {
          setShowHint(true);
          setAttempts(1);
          setDisabledImages([...disabledImages, imgId]); 
        } else {
          nextQuestion();
        }
      }
    } 
    else if (mode === 'timeAttack') {
      if (isAi) {
        setScore(score + 10);
      } else {
        setScore(score - 5); 
      }
      if (currentQIndex < questions.length - 1) {
        setCurrentQIndex(currentQIndex + 1);
      } else {
        setCurrentQIndex(0); 
      }
    }
  };

  const nextQuestion = () => {
    setAttempts(0);
    setShowHint(false);
    setDisabledImages([]);

    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      onEnd(score + (attempts === 0 && mode === 'classic' && questions[currentQIndex].images.find(i => i.isAi) ? 20 : 0)); 
      onEnd(score);
    }
  };

  return (
    <div className="screen-container">
      <div className="hud">
        <span>Puan: {score}</span>
        {mode === 'timeAttack' && <span className="timer">Süre: {timeLeft}s</span>}
        {mode === 'classic' && <span>Soru: {currentQIndex + 1} / {questions.length}</span>}
      </div>

      {showHint && <div className="hint-box">💡 İPUCU: {currentQuestion.hint}</div>}

      <h3>Hangi görsel Yapay Zeka (AI) üretimi?</h3>

      <div className="image-grid">
        {currentQuestion.images.map((img) => (
          <div 
            key={img.id} 
            className={`image-card ${disabledImages.includes(img.id) ? 'disabled' : ''}`}
            onClick={() => !disabledImages.includes(img.id) && handleImageClick(img.isAi, img.id)}
          >
            <img src={img.src} alt="tahmin" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameScreen;