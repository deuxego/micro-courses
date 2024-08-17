import { useQueryClient } from '@tanstack/react-query';
import { getProfileAction } from '../actions';
import { UserId } from '../domain/types';

const baseKey = 'user';

export const getProfileQuery = (userId: UserId) => ({
  queryKey: [baseKey, 'getProfileById', userId],
  queryFn: () => getProfileAction({ userId })
});

export const useInvalidateProfile = () => {
  const queryClient = useQueryClient();

  return (userId: UserId) =>
    queryClient.invalidateQueries({
      queryKey: [baseKey, "getProfileById", userId],
    });
};