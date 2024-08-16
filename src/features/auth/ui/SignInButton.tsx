'use client';

import { Button } from '@/shared/ui/button';
import { LogIn } from 'lucide-react';
import { signIn } from 'next-auth/react';

export const SignInButton = () => {
  return (
    <Button variant={'outline'} onClick={() => signIn()}>
      <span>Sign In</span>
      <LogIn className="h-4 w-4 ml-2" />
    </Button>
  );
};
