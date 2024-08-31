import { Suspense } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Dumbbell, Play } from 'lucide-react'
import { ExerciseTimer } from '@/components/ExerciseTimer'

export default function EjerciciosPage() {
  const exercises = [
    { id: 1, name: 'Cardio', duration: 30, completed: false },
    { id: 2, name: 'Sentadillas', duration: 15, completed: false },
    { id: 3, name: 'Yoga', duration: 20, completed: false },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Plan de Ejercicios</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Ejercicios de Hoy</CardTitle>
            <CardDescription>Completa estos ejercicios para alcanzar tus metas</CardDescription>
          </CardHeader>
          <CardContent>
            {exercises.map((exercise) => (
              <div key={exercise.id} className="flex items-center space-x-2 mb-4">
                <Checkbox id={`exercise-${exercise.id}`} />
                <label
                  htmlFor={`exercise-${exercise.id}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {exercise.name} - {exercise.duration} minutos
                </label>
                <Button variant="outline" size="sm">
                  <Play className="h-4 w-4" />
                  <span className="sr-only">Iniciar {exercise.name}</span>
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
        <Suspense fallback={<div>Cargando temporizador...</div>}>
          <ExerciseTimer exerciseName="Cardio" duration={30} />
        </Suspense>
      </div>
    </div>
  )
}