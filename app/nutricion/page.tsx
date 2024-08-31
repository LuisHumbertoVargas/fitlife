import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Apple, Plus } from 'lucide-react'

export default function NutricionPage() {
  const meals = [
    { id: 1, name: 'Desayuno: Avena con frutas', calories: 300 },
    { id: 2, name: 'Almuerzo: Ensalada de pollo', calories: 450 },
    { id: 3, name: 'Cena: Salmón con vegetales', calories: 400 },
    { id: 4, name: 'Colación: Yogur con nueces', calories: 200 },
    { id: 5, name: 'Merienda: Sándwich de pavo', calories: 350 },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Plan de Nutrición</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Comidas de Hoy</CardTitle>
            <CardDescription>Tu plan de alimentación balanceado</CardDescription>
          </CardHeader>
          <CardContent>
            {meals.map((meal) => (
              <div key={meal.id} className="flex items-center space-x-2 mb-4">
                <Apple className="h-4 w-4" />
                <span className="text-sm font-medium">{meal.name}</span>
                <span className="text-sm text-muted-foreground">{meal.calories} cal</span>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Agregar Comida</CardTitle>
            <CardDescription>Registra tus comidas adicionales</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nombre de la comida</Label>
                <Input id="name" placeholder="Ej: Manzana" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="calories">Calorías</Label>
                <Input id="calories" placeholder="Ej: 95" type="number" />
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Agregar Comida
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}