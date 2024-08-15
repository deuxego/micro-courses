import { ModeToggle } from '@/shared/ui/mode-toggle';
import { Layout } from './_Layout';
import { Logo } from './_Logo';
import { Navigation } from './_Navigation';
import { Profile } from './_Profile';

export const Navbar = () => {
  return (
    <Layout logo={<Logo />} nav={<Navigation />} profile={<Profile />} actions={<ModeToggle />} />
  );
};
