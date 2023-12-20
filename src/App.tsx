import axios from 'axios';
import './App.css';
import { useQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import SuccessQuoteList from './SuccessQuoteList';
import FailQuoteList from './FailQuoteList';
import QueryErrorBoundary from './QueryErrorBoundary';

function App() {
  const getQuotes = async () => {
    const data = await axios('/api/quotes');
    return data.data;
  };

  const { data, refetch: refetch2 } = useQuery({
    queryKey: ['afterClick'],
    queryFn: getQuotes,
    enabled: false,
  });

  return (
    <>
      <h1>Study!</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* success suspense */}
        <Suspense fallback={<div>Loading...</div>}>
          <SuccessQuoteList />
        </Suspense>
        {/* fail suspense */}
        <QueryErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <FailQuoteList />
          </Suspense>
        </QueryErrorBoundary>

        {/* manual refetch */}
        <div>
          <button type="button" onClick={() => refetch2()}>
            refetch2
          </button>
          {data?.map((item: { text: string; author: string }) => {
            return <li key={item.text}>{item.text}</li>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
