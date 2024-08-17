'use client';

import { QueryClientProvider as _QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/lib/queryClient';
import { PropsWithChildren } from 'react';

export const QueryClientProvider = (props: PropsWithChildren) => {
  return <_QueryClientProvider client={queryClient}>{props.children}</_QueryClientProvider>;
};
