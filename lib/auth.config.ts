import { NextAuthConfig, User } from 'next-auth';
export interface ExtendedUser extends User {
  _id: string;
  role: 'HRD' | 'SPV' | 'USER' | 'ADMIN';
  profileImage: string;
}
export const authconfig = {
  pages: {
    error: '/',
    signIn: '/',
    newUser: '/signup',
    signOut: '/',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return new URL(url, baseUrl).toString();
      if (url === '/api/auth/signout') return baseUrl; // Redirect ke homepage setelah logout
      return baseUrl;
    },
    authorized({ request, auth }: any) {
      const protectedPaths = [
        // /\/shipping/,
        // /\/payment/,
        // /\/place-order/,
        /\/profile/,
        // /\/order\/(.*)/,
        /\/overview\/(.*)/,
      ];
      const { pathname } = request.nextUrl;
      if (protectedPaths.some((p) => p.test(pathname))) return !!auth;
      return true;
    },
    async jwt({ user, trigger, session, token }: any) {
      const Extuser: ExtendedUser = user;
      if (Extuser) {
        token.user = {
          _id: user._id,
          email: user.email,
          name: user.name,
          role: user.role,
          profileImage: user.profileImage,
        };
      }
      if (trigger === 'update' && session) {
        token.user = {
          ...token.user,
          email: session.user.email,
          name: session.user.name,
        };
      }
      return token;
    },
    session: async ({ session, token }: any) => {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
  secret: process.env.AUTH_SECRET!,
  providers: [],
  session: {
    strategy: 'jwt',
  },
} satisfies NextAuthConfig;
