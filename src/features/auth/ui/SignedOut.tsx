'use server';

import { PropsWithChildren } from 'react';
import { auth } from '@/shared/lib/auth';
import { JSX } from 'react';

export const SignedOut = async (props: PropsWithChildren): Promise<null | JSX.Element> => {
  const session = await auth();

  if (session) {
    return null;
  }

  return props.children as JSX.Element;
};
