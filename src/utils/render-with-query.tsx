import { render } from '@testing-library/react';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

interface WrapperProps {
  children: React.ReactNode;
}

const wrapper = ({ children }: WrapperProps) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

export const renderWithQuery = (ui: React.ReactElement) =>
  render(ui, { wrapper });
