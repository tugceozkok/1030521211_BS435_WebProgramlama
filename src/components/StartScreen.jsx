import { useState } from 'react';

const StartScreen = ({ onStart }) => {
  const [selectedMode, setSelectedMode] = useState('normal');

  const gameModes = [
    {
      id: 'normal',
      name: 'Klasik Mod',
      description: 'Sınırsız süre, 2 hak ve ipucu hakkı',
      difficulty: 'Kolay'
    },
    {
      id: 'speed',
      name: 'Hız Modu',
      description: '30 saniye süre, ipucu yok',
      difficulty: 'Orta'
    },
    {
      id: 'expert',
      name: 'Uzman Modu',
      description: 'Tek hak, ipucu yok',
      difficulty: 'Zor'
    }
  ];

  return (
    <div className="start-screen">
      <div className="logo">
        <img src="/vite.svg" alt="Game Logo" />
      </div>
      
      <h1>AI Görsel Dedektifi</h1>
      
      <div className="game-description">
        <h2>Oyun Kuralları</h2>
        <p>
          Karşınıza çıkan 3 görsel arasından hangisinin yapay zeka tarafından 
          üretildiğini bulmaya çalışın!
        </p>
        <ul>
          <li>✓ İlk tahmininiz yanlışsa ipucu alabilirsiniz</li>
          <li>✓ İkinci bir tahmin hakkınız olacak</li>
          <li>✓ Doğru tahmin yaparak puan kazanın</li>
        </ul>
      </div>

      <div className="mode-selection">
        <h3>Oyun Modu Seçin:</h3>
        <div className="mode-cards">
          {gameModes.map((mode) => (
            <div
              key={mode.id}
              className={`mode-card ${selectedMode === mode.id ? 'selected' : ''}`}
              onClick={() => setSelectedMode(mode.id)}
            >
              <h4>{mode.name}</h4>
              <p className="difficulty">{mode.difficulty}</p>
              <p className="description">{mode.description}</p>
            </div>
          ))}
        </div>
      </div>

      <button 
        className="start-button"
        onClick={() => onStart(selectedMode)}
      >
        Oyuna Başla
      </button>
    </div>
  );
};

export default StartScreen;