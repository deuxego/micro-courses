import { Book } from 'lucide-react';

export const Logo = () => {
  return (
    <div className='flex items-center space-x-2'>
      <Book className="h-6 w-6" />
      <span className="font-bold inline-block">Micro Courses</span>
    </div>
  );
};
