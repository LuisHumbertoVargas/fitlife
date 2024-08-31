import Link from 'next/link'
import { Dumbbell } from 'lucide-react'

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b">
      <Link className="flex items-center justify-center" href="/">
        <Dumbbell className="h-6 w-6" />
        <span className="ml-2 font-bold">FitLife</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/ejercicios">
          Ejercicios
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/nutricion">
          Nutrición
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/progreso">
          Progreso
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/tips">
          Tips
        </Link>
      </nav>
    </header>
  )
}