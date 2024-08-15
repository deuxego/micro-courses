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

export const Profile = () => {
  const handleSignOut = () => {};

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} className="h-8 w-8 rounded-full self-center">
          <Avatar className='h-7 w-7'>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 mr-2">
        <DropdownMenuLabel>
          <p>My account</p>
          <p className="text-xs text-muted-foreground overflow-hidden text-ellipsis">User</p>
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
