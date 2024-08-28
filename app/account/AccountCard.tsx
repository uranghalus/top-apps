'use client';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BeatLoader, HashLoader } from 'react-spinners';
import { ProfileSchema } from '@/lib/schema/profile.schema';
import { UpdateProfile } from '@/lib/services/profile.service';
const AccountCard = () => {
  const { data: session } = useSession();
  // Sinkronisasi default values setelah session tersedia

  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: session?.user.name as string,
      email: session?.user.email as string,
      profileImage: session?.user.profileImage,
    },
  });

  useEffect(() => {
    if (session?.user) {
      form.reset({
        name: session.user.name || '',
        email: session.user.email || '',
        profileImage: session.user.profileImage || '',
      });
    }
  }, [session, form]);
  const onSubmit = async (values: z.infer<typeof ProfileSchema>) => {
    const response = await UpdateProfile(values as any);
    console.log('Account Card', response?.data);

    // if (response?.error) {
    //   return toast.error('Login Gagal!', {
    //     description: response.message,
    //   });
    // } else {
    //   toast.success('Yeay!', {
    //     description: 'Login Berhasil',
    //   });
    //   setTimeout(() => {
    //     router.push('/overview');
    //   }, 2000);
    // }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel>Nama</FormLabel>
              <FormControl>
                <Input
                  placeholder="Masukkan email"
                  // icons={RiMailFill}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Masukkan email"
                  // icons={RiMailFill}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <div className="flex items-center">
                <FormLabel>Password</FormLabel>
              </div>
              <FormControl>
                <Input
                  placeholder="Masukkan Password"
                  // icons={RiLockPasswordFill}
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="mt-4"
          type="submit"
          variant={'default'}
          size={'default'}
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <>
              <BeatLoader size={5} color="white" />
              <span>Profile Sedang Di update</span>
            </>
          ) : (
            'Update Profile'
          )}
        </Button>
      </form>
    </Form>
  );
};

export default AccountCard;
