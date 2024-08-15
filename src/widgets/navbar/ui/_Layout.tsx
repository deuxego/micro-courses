import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/shared/ui/sheet';
import { Button } from '@/shared/ui/button';
import { Menu } from 'lucide-react';
import { ReactNode } from 'react';

type Props = {
  logo?: ReactNode;
  nav?: ReactNode;
  profile?: ReactNode;
  actions?: ReactNode;
};

export const Layout = ({ logo, nav, profile, actions }: Props) => {
  return (
    <div className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-14 items-center">
        <div className="md:hidden mr-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader className="border-b pb-5 mb-5">{logo}</SheetHeader>
              {nav}
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:flex mr-4">{logo}</div>

        <div className="flex flex-1 items-center">
          <div className="hidden md:flex">{nav}</div>
          <div className="flex flex-1 items-center justify-end space-x-3">
            {actions}
            {profile}
          </div>
        </div>
      </div>
    </div>
  );
};
