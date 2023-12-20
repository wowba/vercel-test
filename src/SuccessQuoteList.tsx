import React from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import axios from 'axios';

const SuccessQuoteList = () => {
  const getQuotes = async () => {
    const data = await axios('/api/quotes');
    return data.data;
  };

  const { data: quotes } = useSuspenseQuery({
    queryKey: ['firstLoad'],
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

export default SuccessQuoteList;
