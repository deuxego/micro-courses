import { UpdateProfileForm } from '@/features/update-profile/client';
import { Separator } from '@/shared/ui/separator';

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <main className="container max-w-[600px] py-14 space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
      </div>

      <Separator />

      <UpdateProfileForm userId={params.id} />
    </main>
  );
};

export default Page;
