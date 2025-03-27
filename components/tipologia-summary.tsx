"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Tipologia } from "@/lib/types"
import { formatCurrency } from "@/lib/utils"

interface TipologiaSummaryProps {
  tipologia: Tipologia
}

export default function TipologiaSummary({ tipologia }: TipologiaSummaryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Costos Directos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Costo Directo Total</span>
              <span className="font-medium">{formatCurrency(tipologia.totales.costoDirectoTotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Costo Directo por m²</span>
              <span className="font-medium">{formatCurrency(tipologia.totales.costoDirectoM2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Incidencia Materiales</span>
              <span className="font-medium">{tipologia.totales.incidenciaMateriales}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Incidencia Ejecución</span>
              <span className="font-medium">{tipologia.totales.incidenciaEjecucion}%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Precio Final</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Gastos Generales (26%)</span>
              <span className="font-medium">{formatCurrency(tipologia.totales.gastosGenerales)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Beneficios Empresariales (15%)</span>
              <span className="font-medium">{formatCurrency(tipologia.totales.beneficiosEmpresariales)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal sin Impuesto</span>
              <span className="font-medium">{formatCurrency(tipologia.totales.subtotalSinImpuesto)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">IVA (21%)</span>
              <span className="font-medium">{formatCurrency(tipologia.totales.iva)}</span>
            </div>
            <div className="flex justify-between font-bold mt-2 pt-2 border-t">
              <span>Precio Final Total</span>
              <span>{formatCurrency(tipologia.totales.precioFinalTotal)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Precio Final por m²</span>
              <span>{formatCurrency(tipologia.totales.precioFinalM2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

