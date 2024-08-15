import { SessionProvider } from './SessionProvider';
import { ThemeProvider } from './ThemeProvider';
import { PropsWithChildren } from 'react';

export const Providers = (props: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <SessionProvider>{props.children}</SessionProvider>
    </ThemeProvider>
  );
};
