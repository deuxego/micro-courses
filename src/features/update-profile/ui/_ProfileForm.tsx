'use client';

import { Profile, UserId } from '@/entities/user/domain/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUpdateProfileMutation } from '../queries';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/shared/ui/form';
import { z } from 'zod';
import { useSession } from 'next-auth/react';
import { useInvalidateProfile } from '@/entities/user/queries';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  })
});

type Props = {
  userId: UserId;
  profile: Profile;
};

export function ProfileForm({ userId, profile }: Props) {
  const updateProfileMutation = useUpdateProfileMutation();
  const invalidateProfile = useInvalidateProfile();
  const { update: updateSession } = useSession();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: profile.name
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    updateProfileMutation.mutate({ userId, data: values });
    updateSession(values);
    invalidateProfile(userId);
    form.reset(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={updateProfileMutation.isPending}>
          Save
        </Button>
      </form>
    </Form>
  );
}
