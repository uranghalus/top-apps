import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { ProfileSchema } from '@/lib/schema/profile.schema';
import { NextRequest, NextResponse } from 'next/server';
import { z, ZodError } from 'zod';
import getServerSession from 'next-auth';
import { authconfig } from '@/lib/auth.config';
export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  try {
    const body = req.json();
    const data = ProfileSchema.parse(body);
    const profile = await prisma.user.update({
      where: { id: session },
      data: data,
    });
    return NextResponse.json(
      { message: 'Profile updated successfully', profile },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Validation failed', errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: 'Failed to update profile', error },
      { status: 500 }
    );
  }
}
