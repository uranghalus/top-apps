import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import SigninForm from './SigninForm';

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center bg-gray-100 p-4">
      <Image
        src={'/images/Logo.png'}
        alt="Logo"
        width={100}
        height={100}
        className="mb-10 w-52 h-auto"
      />
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Masukkan email anda dibawah untuk melanjutkan.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SigninForm />
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
