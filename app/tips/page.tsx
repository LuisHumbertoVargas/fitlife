import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb } from 'lucide-react'

export default function TipsPage() {
  const tips = [
    {
      id: 1,
      title: "Hidratación",
      description: "Bebe al menos 8 vasos de agua al día para mantenerte hidratado y mejorar tu rendimiento físico."
    },
    {
      id: 2,
      title: "Descanso",
      description: "Asegúrate de dormir entre 7-9 horas cada noche para una óptima recuperación muscular y mental."
    },
    {
      id: 3,
      title: "Variedad en la dieta",
      description: "Incluye una variedad de frutas y verduras en tu dieta para obtener todos los nutrientes necesarios."
    },
    {
      id: 4,
      title: "Calentamiento",
      description: "Siempre realiza un calentamiento adecuado antes de hacer ejercicio para prevenir lesiones."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tips para un Estilo de Vida Saludable</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {tips.map((tip) => (
          <Card key={tip.id}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-yellow-500" />
                {tip.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{tip.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}