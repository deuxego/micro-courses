'use client';

import { ProfileAvatar } from '@/entities/user/server';
import { signOut, useSession } from 'next-auth/react';
import { ROUTES } from '@/shared/constants/routes';
import { Skeleton } from '@/shared/ui/skeleton';
import { Button } from '@/shared/ui/button';
import { LogOut, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/shared/ui/dropdown-menu';
import Link from 'next/link';

export const Profile = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <Skeleton className="h-8 w-8 rounded-full" />;
  }

  const handleSignOut = () => {
    signOut();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} className="h-8 w-8 rounded-full self-center">
          <ProfileAvatar profile={session?.user!} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 mr-2">
        <DropdownMenuLabel>
          <p>My account</p>
          <p className="text-xs text-muted-foreground overflow-hidden text-ellipsis">
            {session?.user?.name || session?.user.email}
          </p>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href={[ROUTES.PROFILE, session?.user.id].join('/')}>
              <User className="h-4 w-4 mr-2" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer" onClick={handleSignOut}>
            <LogOut className="h-4 w-4 mr-2" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
