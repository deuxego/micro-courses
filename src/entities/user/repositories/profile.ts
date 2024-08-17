import { Profile, UserId } from '../domain/types';
import { profileSchema } from '../domain/schema';
import { db } from '@/shared/lib/db';

export class ProfileRepository {
  async update(userId: UserId, data: Partial<Profile>): Promise<Profile> {
    const user = await db.user.update({
      where: { id: userId },
      data
    });

    return profileSchema.parse(user);
  }

  async getProfileByUserId(userId: UserId): Promise<Profile> {
    const user = await db.user.findUniqueOrThrow({
      where: {
        id: userId
      }
    });

    return profileSchema.parse(user);
  }
}

export const profileRepository = new ProfileRepository();
