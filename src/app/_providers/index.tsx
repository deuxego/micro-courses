import { ThemeProvider } from './ThemeProvider';
import { PropsWithChildren } from 'react';

export const Providers = (props: PropsWithChildren) => {
  return <ThemeProvider>{props.children}</ThemeProvider>;
};
