import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
export const POST = async (req: Request) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(JSON.stringify({ message: 'Not Authenticated!' }));
  }

  try {
    const body = await req.json();
    const posts = await prisma.post.create({
      data: body,
    });

    return new NextResponse(JSON.stringify(posts));
    // return new NextResponse(JSON.stringify({ status: 200 }), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({
        message: 'Something went wrong with fucking database!',
      })
    );
  }
};
