import React, { useState, useEffect, setState} from 'react';
import { Button } from 'react-bootstrap'
import './App.css';

function App() {

  
  const [currentTime, setCurrentTime] = useState(0);
  const [name, setName] = useState('Gabyoyo');
  const [song, setSong] = useState(0);
  const [artist, setArtist] = useState(0);

  const [artistsong, setArtistSong] = React.useState({
    artist: 'artist',
    song: 'song'
  });

  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  useEffect(() => {
    fetch('/api/db').then(res => res.json()).then(data => {
      setName('Helena');
    });
  }, []);

  

  function GetSong(){
    
    
    alert('Hello!');
    //setSong('Mhammad');
    
    fetch('/api/get').then(res => res.json()).then(data => {
      setArtistSong({
        artist: data.artist,
        song: data.song
      });
    })
    ;
  

    return song;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button href="./">Home</Button>
        <Button href="/api/db">Bella inte snäll</Button>
        <Button onClick={GetSong}>Hämtish</Button>
        <h1><span role="img" aria-label="sheep">👋</span>Hej {name}!</h1>
        <h1>Nu ska {artistsong.artist} sjunga: {artistsong.song}!</h1>
        <p>The current time is {currentTime} <span role="img" aria-label="sheep">⏰</span></p>
      </header>
    </div>
  );
}

export default App;