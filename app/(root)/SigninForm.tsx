'use client';
import { LoginSchema } from '@/lib/schema/auth.schema';
import { loginServices } from '@/lib/services/auth.service';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
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
import Link from 'next/link';
const SigninForm = () => {
  const { data: session } = useSession();
  const params = useSearchParams();
  const router = useRouter();
  let callbackUrl = params.get('callbackUrl') || '/';
  useEffect(() => {
    if (session && session.user) {
      if (session?.user) {
        router.push('/overview');
      } else {
        router.push(callbackUrl);
      }
    }
  }, [callbackUrl, params, router, session]);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    const response = await loginServices(values);
    if (response?.error) {
      return toast.error('Login Gagal!', {
        description: response.message,
      });
    } else {
      toast.success('Yeay!', {
        description: 'Login Berhasil',
      });
      setTimeout(() => {
        router.push('/overview');
      }, 2000);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
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
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
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
              <span>Harap Tunggu</span>
            </>
          ) : (
            'Masuk'
          )}
        </Button>
      </form>
    </Form>
  );
};

export default SigninForm;
