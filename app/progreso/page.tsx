import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart, LineChart } from 'lucide-react'

export default function ProgresoPage() {
  const user = {
    progress: 65,
    exercisesCompleted: 15,
    caloriesBurned: 1254
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tu Progreso</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Progreso Semanal</CardTitle>
            <CardDescription>Has completado el {user.progress}% de tus objetivos esta semana</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={user.progress} className="w-full" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Estadísticas</CardTitle>
            <CardDescription>Resumen de tu actividad</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <BarChart className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Ejercicios Completados: {user.exercisesCompleted}</span>
              </div>
              <div className="flex items-center">
                <LineChart className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Calorías Quemadas: {user.caloriesBurned}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}