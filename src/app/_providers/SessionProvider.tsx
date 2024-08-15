'use client';

import { SessionProvider as _SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';

export const SessionProvider = (props: PropsWithChildren) => {
  return <_SessionProvider>{props.children}</_SessionProvider>;
};
