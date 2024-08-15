import { SignedIn, SignedOut, SignInButton } from '@/features/auth';
import { ModeToggle } from '@/shared/ui/mode-toggle';
import { Navigation } from './_Navigation';
import { Profile } from './_Profile';
import { Layout } from './_Layout';
import { Logo } from './_Logo';

export const Navbar = () => {
  return (
    <Layout
      logo={<Logo />}
      nav={<Navigation />}
      profile={
        <>
          <SignedIn>
            <Profile />
          </SignedIn>

          <SignedOut>
            <SignInButton />
          </SignedOut>
        </>
      }
      actions={<ModeToggle />}
    />
  );
};
