import { getProfileDisplayName } from './getProfileDisplayName';
import { Profile } from '../domain/types';

export const getProfileLetters = (profile: Profile) => {
  const displaName = getProfileDisplayName(profile);

  const [a, b] = displaName.split('@')[0].split(/\.|\s|-|_/);

  if (!b) {
    return `${a[0]?.toUpperCase() ?? ''}${a[1]?.toUpperCase() ?? ''}`;
  }

  return `${a[0]?.toUpperCase() ?? ''}${b[0]?.toUpperCase() ?? ''}`;
};
