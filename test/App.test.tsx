import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../src/App.tsx';
import { describe, expect, it } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function renderWithClient(client: QueryClient, ui: React.ReactElement) {
  const { rerender, ...result } = render(
    <QueryClientProvider client={client}>{ui}</QueryClientProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={client}>{rerenderUi}</QueryClientProvider>
      ),
  };
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false,
    },
  },
});

describe('App', () => {
  it('renders App.tsx', async () => {
    const result = renderWithClient(queryClient, <App />);

    expect(
      await result.findByText(
        'Genius is one percent inspiration and ninety-nine percent perspiration.'
      )
    );

    screen.debug();

    // check if App components renders headline
  });
});
