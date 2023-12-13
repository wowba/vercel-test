import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {
  const [quotes, setQuotes] = useState([]);

  const fetchQuote = async () => {
    const data = await axios('/api/quotes');
    console.log(data);
    setQuotes(data.data);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button onClick={fetchQuote}>fetch data</button>
      <ul>
        {quotes.map((item: { text: string; author: string }) => {
          return <li key={item.text}>{item.text}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
