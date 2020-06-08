
function insert1() {
    const [name, setName] = useState('Gabyoyo');
  
    useEffect(() => {
      fetch('/api/db').then(res => res.json()).then(data => {
        setName(data.time);
      });
    }, []);
  
    return (
      <div className="App">
        <header className="App-header">
          <Button href="./">Home</Button>
          <Button href="/api/db">Bella inte snäll</Button>
          <Button href="/api/get">Hämtish</Button>
          <h1><span role="img" aria-label="sheep">👋</span>Hej {name}!</h1>
          <p>The name is {name} <span role="img" aria-label="sheep">⏰</span></p>
        </header>
      </div>
    ); 
  }