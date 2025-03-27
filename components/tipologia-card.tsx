"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Tipologia } from "@/lib/types"
import { formatCurrency } from "@/lib/utils"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TipologiaCardProps {
  tipologia: Tipologia
}

export default function TipologiaCard({ tipologia }: TipologiaCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl font-bold">{tipologia.nombre}</CardTitle>
            <CardDescription className="mt-1 line-clamp-2">{tipologia.descripcion}</CardDescription>
          </div>
          <Badge variant="outline" className="ml-2 bg-primary/10">
            {tipologia.id}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-muted-foreground">Precio por m²</p>
            <p className="text-xl font-bold">{formatCurrency(tipologia.precioM2)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Variación</p>
            <p className="text-xl font-bold">{tipologia.variacion}%</p>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Materiales</span>
            <span className="font-medium">{tipologia.totales.incidenciaMateriales}%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Ejecución</span>
            <span className="font-medium">{tipologia.totales.incidenciaEjecucion}%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Costo Directo Total</span>
            <span className="font-medium">{formatCurrency(tipologia.totales.costoDirectoTotal)}</span>
          </div>
        </div>

        <div className="mt-auto">
          <Link href={`/tipologias/${tipologia.id}`}>
            <Button variant="outline" className="w-full flex items-center justify-between">
              Ver detalles
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

