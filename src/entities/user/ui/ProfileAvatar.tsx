import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { getProfileLetters } from '../vm/getProfileLetters';
import { Profile } from '../domain/types';

type Props = {
  profile: Profile;
};

export const ProfileAvatar = ({ profile }: Props) => {
  return (
    <Avatar className="h-7 w-7">
      <AvatarImage src={profile.image} />
      <AvatarFallback>{getProfileLetters(profile)}</AvatarFallback>
    </Avatar>
  );
};
