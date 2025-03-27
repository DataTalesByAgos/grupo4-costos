"use client"

import { useEffect, useState } from "react"
import { cargarDatos } from "@/lib/data"
import type { DatosProyecto } from "@/lib/types"
import TipologiaCard from "@/components/tipologia-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BarChart2 } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [datos, setDatos] = useState<DatosProyecto | null>(null)

  useEffect(() => {
    setDatos(cargarDatos())
  }, [])

  if (!datos) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  return (
    <main className="container mx-auto py-10 px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sistema de Gestión de Costos por Tipologías</h1>
          <p className="text-muted-foreground mt-1">Administra y visualiza los costos de construcción por tipología</p>
        </div>
        <Link href="/comparacion">
          <Button className="flex items-center gap-2">
            <BarChart2 size={18} />
            Comparar Rubros
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="cards" className="mb-8">
        <TabsList>
          <TabsTrigger value="cards">Tarjetas</TabsTrigger>
          <TabsTrigger value="table">Tabla Comparativa</TabsTrigger>
        </TabsList>

        <TabsContent value="cards">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {datos.tipologias.map((tipologia) => (
              <TipologiaCard key={tipologia.id} tipologia={tipologia} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="table">
          <div className="border rounded-md mt-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3">Concepto</th>
                  {datos.tipologias.map((tipologia) => (
                    <th key={tipologia.id} className="text-right p-3">
                      Tipología {tipologia.id}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-t">Precio por m²</td>
                  {datos.tipologias.map((tipologia) => (
                    <td key={tipologia.id} className="text-right p-3 border-t font-medium">
                      {new Intl.NumberFormat("es-AR", {
                        style: "currency",
                        currency: "ARS",
                      }).format(tipologia.precioM2)}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 border-t">Variación</td>
                  {datos.tipologias.map((tipologia) => (
                    <td key={tipologia.id} className="text-right p-3 border-t">
                      {tipologia.variacion}%
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 border-t">Incidencia Materiales</td>
                  {datos.tipologias.map((tipologia) => (
                    <td key={tipologia.id} className="text-right p-3 border-t">
                      {tipologia.totales.incidenciaMateriales}%
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 border-t">Incidencia Ejecución</td>
                  {datos.tipologias.map((tipologia) => (
                    <td key={tipologia.id} className="text-right p-3 border-t">
                      {tipologia.totales.incidenciaEjecucion}%
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 border-t">Costo Directo Total</td>
                  {datos.tipologias.map((tipologia) => (
                    <td key={tipologia.id} className="text-right p-3 border-t">
                      {new Intl.NumberFormat("es-AR", {
                        style: "currency",
                        currency: "ARS",
                      }).format(tipologia.totales.costoDirectoTotal)}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 border-t">Precio Final Total</td>
                  {datos.tipologias.map((tipologia) => (
                    <td key={tipologia.id} className="text-right p-3 border-t font-bold">
                      {new Intl.NumberFormat("es-AR", {
                        style: "currency",
                        currency: "ARS",
                      }).format(tipologia.totales.precioFinalTotal)}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 border-t">Precio Final por m²</td>
                  {datos.tipologias.map((tipologia) => (
                    <td key={tipologia.id} className="text-right p-3 border-t font-bold">
                      {new Intl.NumberFormat("es-AR", {
                        style: "currency",
                        currency: "ARS",
                      }).format(tipologia.totales.precioFinalM2)}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}

