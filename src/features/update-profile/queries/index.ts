import { updateProfileAction } from '@/entities/user/actions';
import { useMutation } from '@tanstack/react-query';

export const useUpdateProfileMutation = () => {
  return useMutation({
    mutationFn: updateProfileAction,
  });
};

