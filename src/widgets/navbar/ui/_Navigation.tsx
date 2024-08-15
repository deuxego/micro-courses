import Link from 'next/link';
import { NavItems } from '../constants';
import { cn } from '@/shared/lib/utils';
import { buttonVariants } from '@/shared/ui/button';

export const Navigation = () => {
  return (
    <nav className='flex items-start flex-col md:flex-row'>
      {NavItems.map(({ label, href }, idx) => (
        <Link
          href={href}
          key={idx}
          className={cn(buttonVariants({ variant: 'link' }), 'text-muted-foreground')}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};
