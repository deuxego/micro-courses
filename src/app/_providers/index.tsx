import { QueryClientProvider } from './QueryClientProvider';
import { SessionProvider } from './SessionProvider';
import { ThemeProvider } from './ThemeProvider';
import { PropsWithChildren } from 'react';

export const Providers = (props: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <QueryClientProvider>
        <SessionProvider>{props.children}</SessionProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
