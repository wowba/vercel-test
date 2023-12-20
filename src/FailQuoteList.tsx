import { useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import axios from 'axios';

const FailQuoteList = () => {
  const [url, setUrl] = useState('/api/fail');

  const getQuotes = async () => {
    const data = await axios(url);
    if (url === '/api/fail') {
      setUrl('/api/quotes');
    }

    return data.data;
  };

  const { data: quotes } = useSuspenseQuery({
    queryKey: ['fail'],
    queryFn: getQuotes,
  });

  return (
    <div>
      {quotes.map((item: { text: string; author: string }) => {
        return <li key={item.text}>{item.text}</li>;
      })}
    </div>
  );
};

export default FailQuoteList;
