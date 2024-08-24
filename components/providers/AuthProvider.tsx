import { SessionProvider } from 'next-auth/react';
import { auth } from '@/lib/auth';
import { ChildrenProps } from '@/types/childrenprops';
import { ExtendedUser } from '@/lib/auth.config'; // Import ExtendedUser dari auth.config
import { useAuthStore } from '@/store/authStore';

const AuthProviders = async ({ children }: ChildrenProps) => {
  // Ambil session dari NextAuth
  const session = await auth();

  if (session?.user) {
    const user = session.user as ExtendedUser;

    const _id = user._id || ''; // Pastikan _id selalu string
    const email = user.email || ''; // Pastikan email selalu string
    const name = user.name || ''; // Pastikan name selalu string
    const role = user.role;
    const profileImage = user.profileImage;

    // Update Zustand store dengan informasi user
    useAuthStore.setState({
      user: { _id, email, name, role, profileImage },
    });
  } else {
    // Hapus informasi user dari Zustand store jika tidak ada session
    useAuthStore.setState({
      user: null,
    });
  }

  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProviders;
