'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
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
import { signOut, useSession } from 'next-auth/react';
import { Skeleton } from '@/shared/ui/skeleton';

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
          <Avatar className="h-7 w-7">
            <AvatarImage src={session?.user?.image!} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 mr-2">
        <DropdownMenuLabel>
          <p>My account</p>
          <p className="text-xs text-muted-foreground overflow-hidden text-ellipsis">
            {session?.user?.name}
          </p>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href={'/'}>
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
