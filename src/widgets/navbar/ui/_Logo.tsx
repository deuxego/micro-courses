import { ROUTES } from '@/shared/constants/routes';
import { Book } from 'lucide-react';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link className="flex items-center space-x-2" href={ROUTES.HOME}>
      <Book className="h-6 w-6" />
      <span className="font-bold inline-block">Micro Courses</span>
    </Link>
  );
};
