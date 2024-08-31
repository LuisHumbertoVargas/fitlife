import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const meals = await prisma.meal.findMany({
    where: { userId: parseInt(session.user.id) }
  })

  return NextResponse.json(meals)
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { name, calories } = await request.json()
  const meal = await prisma.meal.create({
    data: {
      name,
      calories,
      userId: parseInt(session.user.id)
    }
  })

  return NextResponse.json(meal)
}