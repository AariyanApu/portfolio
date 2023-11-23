import { getServerSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import prisma from './connect';
import { PrismaAdapter } from '@auth/prisma-adapter';

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
};

export const getAuthSession = () => getServerSession(authOptions);
