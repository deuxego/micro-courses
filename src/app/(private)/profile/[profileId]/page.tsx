import { Separator } from '@/shared/ui/separator';

const Page = ({ params }: { params: { profileId: string } }) => {
  return (
    <main className="container max-w-[600px] py-14 space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
      </div>

      <Separator />
    </main>
  );
};

export default Page;
