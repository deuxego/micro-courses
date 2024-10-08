import { PrismaAdapter } from '@auth/prisma-adapter';
import GitHub from 'next-auth/providers/github';
import { ROUTES } from '../constants/routes';
import { Adapter } from 'next-auth/adapters';
import NextAuth from 'next-auth';
import { db } from './db';

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: ROUTES.SIGN_IN,
    newUser: ROUTES.NEW_USER
  },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [GitHub],
  callbacks: {
    session({ session, token, user }) {
      return { ...session, id: user.id };
    }
  }
});
