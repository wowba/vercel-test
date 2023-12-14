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
