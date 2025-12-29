import React from 'react';

const StartScreen = ({ onStart }) => {
  return (
    <div className="screen-container">
      <h2>Hangisi Yapay Zeka?</h2>
      <p>Aşağıdaki görsellerden hangisinin AI tarafından üretildiğini bulmaya çalış!</p>
      
      <div className="mode-selection">
        <div className="card">
          <h3>Klasik Mod</h3>
          <p>Yanlış yaparsan ipucu alırsın, tekrar denersin. Sakin oyun.</p>
          <button onClick={() => onStart('classic')}>Klasik Mod Oyna</button>
        </div>

        <div className="card">
          <h3>Zaman Karşı (Time Attack)</h3>
          <p>İpucu yok! 30 saniyen var. En çok doğruyu yap.</p>
          <button onClick={() => onStart('timeAttack')} className="btn-danger">Zaman Modu Oyna</button>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;