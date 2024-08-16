'use server';

import { revalidatePath } from 'next/cache';
import { Profile } from '../domain/types';
import { profileRepository } from '../repositories/profile';

export const getProfileAction = async ({ userId }: { userId: string }) => {
  return await profileRepository.getProfileByUserId(userId);
};

export const updateProfileAction = async ({
  userId,
  data
}: {
  userId: string;
  data: Partial<Profile>;
}) => {
  return await profileRepository.update(userId, data);
};
