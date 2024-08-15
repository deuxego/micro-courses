'use client';

import { Button } from '@/shared/ui/button';
import { signIn } from 'next-auth/react';

export const SignInButton = () => {
  return (
    <Button variant={'outline'} onClick={() => signIn()}>
      Sign In
    </Button>
  );
};
