'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return; // No hacer nada mientras se carga
    if (!session) router.push('/login') // If no session exists, redirect to login page
  }, [session, status, router])

  if (status === 'loading') {
    return <div>Cargando...</div>
  }

  return session ? <>{children}</> : null
}