'use client';

import { getProfileQuery } from '@/entities/user/queries';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@/shared/ui/skeleton';
import { ProfileForm } from './_ProfileForm';

type Props = {
  userId: string;
};

export const UpdateProfileForm = ({ userId }: Props) => {
  const { data: profile, isLoading } = useQuery(getProfileQuery(userId));

  if (isLoading || !profile) {
    return <Skeleton className="h-[300px] w-[550px]" />;
  }

  return <ProfileForm userId={userId} profile={profile} />;
};
