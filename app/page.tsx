import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Dumbbell, Apple, Lightbulb } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Bienvenido a FitLife
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Tu compañero personal para una vida más saludable y activa.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
        <Card>
          <CardHeader>
            <CardTitle>Tu Progreso</CardTitle>
            <CardDescription>Has completado el 65% de tus objetivos esta semana</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={65} className="w-full" />
          </CardContent>
        </Card>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ejercicios Completados</CardTitle>
              <Dumbbell className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">+2 desde ayer</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Calorías Quemadas</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,254</div>
              <p className="text-xs text-muted-foreground">+189 desde ayer</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mx-auto max-w-5xl">
        <Tabs defaultValue="ejercicios" className="w-full">
          <TabsList>
            <TabsTrigger value="ejercicios">Plan de Ejercicios</TabsTrigger>
            <TabsTrigger value="comidas">Plan de Comidas</TabsTrigger>
          </TabsList>
          <TabsContent value="ejercicios">
            <Card>
              <CardHeader>
                <CardTitle>Tu Plan de Ejercicios de Hoy</CardTitle>
                <CardDescription>3 ejercicios programados</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Dumbbell className="h-4 w-4 mr-2" />
                    <span>30 min de cardio</span>
                  </li>
                  <li className="flex items-center">
                    <Dumbbell className="h-4 w-4 mr-2" />
                    <span>3 series de sentadillas</span>
                  </li>
                  <li className="flex items-center">
                    <Dumbbell className="h-4 w-4 mr-2" />
                    <span>20 min de yoga</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="comidas">
            <Card>
              <CardHeader>
                <CardTitle>Tu Plan de Comidas de Hoy</CardTitle>
                <CardDescription>3 comidas balanceadas</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Apple className="h-4 w-4 mr-2" />
                    <span>Desayuno: Avena con frutas</span>
                  </li>
                  <li className="flex items-center">
                    <Apple className="h-4 w-4 mr-2" />
                    <span>Almuerzo: Ensalada de pollo</span>
                  </li>
                  <li className="flex items-center">
                    <Apple className="h-4 w-4 mr-2" />
                    <span>Cena: Salmón con vegetales</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <div className="mx-auto max-w-5xl mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Tip del Día</CardTitle>
            <CardDescription>Mejora tu estilo de vida con estos consejos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Lightbulb className="h-10 w-10 text-yellow-500" />
              <p>Bebe al menos 8 vasos de agua al día para mantenerte hidratado y mejorar tu rendimiento físico.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}