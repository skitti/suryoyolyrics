import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [name, setName] = useState('Gabyoyo');

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        
        <h1><span role="img" aria-label="sheep">👋</span>Hej {name}!</h1>

        <p>The current time is {currentTime} <span role="img" aria-label="sheep">⏰</span></p>
      </header>
    </div>
  );
}

export default App;