import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button';
import { signIn } from '@/shared/lib/auth';
import { Github } from 'lucide-react';

const Page = () => {
  return (
    <div className="h-full w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[900px]">
      <div className="flex items-center justify-center py-12">
        <Card className="mx-auto max-w-sm shadow-lg border-none shadow-none">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Login</CardTitle>
            <CardDescription className="mt-2 text-gray-600">
              Sign in to continue to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <form
                action={async () => {
                  'use server';
                  await signIn('github', { redirectTo: ROUTES.HOME });
                }}
              >
                <Button variant="outline" className="w-full space-x-2" type="submit">
                  <Github className="h-4 w-4" />
                  <span>Sign in with GitHub</span>
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="items-center hidden bg-background/95 lg:block" />
    </div>
  );
};

export default Page;
