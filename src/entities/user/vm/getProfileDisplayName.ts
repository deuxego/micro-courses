import { Profile } from '../domain/types';

export const getProfileDisplayName = (profile: Profile): string => {
  return (profile.name || profile.email) as string;
};
