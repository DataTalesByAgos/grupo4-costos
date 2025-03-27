"use client"

import React from "react"

import { useState } from "react"
import type { DatosProyecto, Rubro } from "@/lib/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { formatCurrency } from "@/lib/utils"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

interface RubrosComparisonProps {
  datos: DatosProyecto
}

export default function RubrosComparison({ datos }: RubrosComparisonProps) {
  // Estado para los rubros seleccionados
  const [selectedRubros, setSelectedRubros] = useState<number[]>([])

  // Estado para las tipologías seleccionadas
  const [selectedTipologias, setSelectedTipologias] = useState<string[]>(datos.tipologias.map((t) => t.id))

  // Obtener todos los rubros únicos
  const allRubros = datos.tipologias[0].rubros

  // Manejar cambio en la selección de rubros
  const handleRubroChange = (rubroId: number) => {
    setSelectedRubros((prev) => (prev.includes(rubroId) ? prev.filter((id) => id !== rubroId) : [...prev, rubroId]))
  }

  // Manejar cambio en la selección de tipologías
  const handleTipologiaChange = (tipologiaId: string) => {
    setSelectedTipologias((prev) =>
      prev.includes(tipologiaId) ? prev.filter((id) => id !== tipologiaId) : [...prev, tipologiaId],
    )
  }

  // Seleccionar todos los rubros
  const selectAllRubros = () => {
    setSelectedRubros(allRubros.map((r) => r.id))
  }

  // Deseleccionar todos los rubros
  const deselectAllRubros = () => {
    setSelectedRubros([])
  }

  // Filtrar tipologías seleccionadas
  const filteredTipologias = datos.tipologias.filter((t) => selectedTipologias.includes(t.id))

  // Filtrar rubros seleccionados o mostrar todos si no hay ninguno seleccionado
  const filteredRubros = selectedRubros.length > 0 ? allRubros.filter((r) => selectedRubros.includes(r.id)) : allRubros

  // Preparar datos para el gráfico
  const prepareChartData = (rubro: Rubro) => {
    return filteredTipologias.map((tipologia) => ({
      name: `Tipología ${tipologia.id}`,
      materiales: rubro.importes[tipologia.id].materiales,
      ejecucion: rubro.importes[tipologia.id].ejecucion,
      total: rubro.importes[tipologia.id].total,
    }))
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Comparación Detallada de Rubros por Tipología</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
          {/* Panel de filtros */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Tipologías</h3>
              <div className="grid grid-cols-2 gap-2">
                {datos.tipologias.map((tipologia) => (
                  <div key={tipologia.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`tipologia-${tipologia.id}`}
                      checked={selectedTipologias.includes(tipologia.id)}
                      onCheckedChange={() => handleTipologiaChange(tipologia.id)}
                    />
                    <Label htmlFor={`tipologia-${tipologia.id}`}>Tipología {tipologia.id}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Rubros</h3>
                <div className="space-x-2">
                  <button onClick={selectAllRubros} className="text-xs text-primary hover:underline">
                    Seleccionar todos
                  </button>
                  <button onClick={deselectAllRubros} className="text-xs text-primary hover:underline">
                    Deseleccionar todos
                  </button>
                </div>
              </div>
              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                {allRubros.map((rubro) => (
                  <div key={rubro.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`rubro-${rubro.id}`}
                      checked={selectedRubros.includes(rubro.id)}
                      onCheckedChange={() => handleRubroChange(rubro.id)}
                    />
                    <Label htmlFor={`rubro-${rubro.id}`} className="text-sm">
                      {rubro.id}. {rubro.nombre}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="space-y-6">
            {selectedTipologias.length === 0 ? (
              <div className="text-center p-8 border rounded-md bg-muted/20">
                <p>Seleccione al menos una tipología para visualizar los datos</p>
              </div>
            ) : filteredRubros.length === 0 ? (
              <div className="text-center p-8 border rounded-md bg-muted/20">
                <p>Seleccione al menos un rubro para visualizar los datos</p>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Tabla comparativa */}
                <div className="border rounded-md overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Rubro</TableHead>
                        {filteredTipologias.map((tipologia) => (
                          <TableHead key={tipologia.id} colSpan={3} className="text-center">
                            Tipología {tipologia.id}
                          </TableHead>
                        ))}
                      </TableRow>
                      <TableRow>
                        <TableHead></TableHead>
                        {filteredTipologias.map((tipologia) => (
                          <React.Fragment key={`header-${tipologia.id}`}>
                            <TableHead className="text-right">Materiales</TableHead>
                            <TableHead className="text-right">Ejecución</TableHead>
                            <TableHead className="text-right">Total</TableHead>
                          </React.Fragment>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredRubros.map((rubro) => (
                        <TableRow key={rubro.id}>
                          <TableCell className="font-medium">
                            {rubro.id}. {rubro.nombre}
                          </TableCell>
                          {filteredTipologias.map((tipologia) => {
                            const importes = rubro.importes[tipologia.id]
                            return (
                              <React.Fragment key={`data-${tipologia.id}-${rubro.id}`}>
                                <TableCell className="text-right">{formatCurrency(importes.materiales)}</TableCell>
                                <TableCell className="text-right">{formatCurrency(importes.ejecucion)}</TableCell>
                                <TableCell className="text-right font-medium">
                                  {formatCurrency(importes.total)}
                                </TableCell>
                              </React.Fragment>
                            )
                          })}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Gráficos individuales para cada rubro seleccionado */}
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Gráficos Comparativos</h3>

                  {filteredRubros.map((rubro) => (
                    <Card key={`chart-${rubro.id}`} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">
                          {rubro.id}. {rubro.nombre}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Tabs defaultValue="stacked">
                          <TabsList className="mb-4">
                            <TabsTrigger value="stacked">Apilado</TabsTrigger>
                            <TabsTrigger value="grouped">Agrupado</TabsTrigger>
                            <TabsTrigger value="total">Total</TabsTrigger>
                          </TabsList>

                          <TabsContent value="stacked" className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart
                                data={prepareChartData(rubro)}
                                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                              >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip formatter={(value) => formatCurrency(value as number)} />
                                <Legend />
                                <Bar dataKey="materiales" name="Materiales" stackId="a" fill="#0088FE" />
                                <Bar dataKey="ejecucion" name="Ejecución" stackId="a" fill="#00C49F" />
                              </BarChart>
                            </ResponsiveContainer>
                          </TabsContent>

                          <TabsContent value="grouped" className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart
                                data={prepareChartData(rubro)}
                                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                              >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip formatter={(value) => formatCurrency(value as number)} />
                                <Legend />
                                <Bar dataKey="materiales" name="Materiales" fill="#0088FE" />
                                <Bar dataKey="ejecucion" name="Ejecución" fill="#00C49F" />
                              </BarChart>
                            </ResponsiveContainer>
                          </TabsContent>

                          <TabsContent value="total" className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart
                                data={prepareChartData(rubro)}
                                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                              >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip formatter={(value) => formatCurrency(value as number)} />
                                <Legend />
                                <Bar dataKey="total" name="Total" fill="#8884d8" />
                              </BarChart>
                            </ResponsiveContainer>
                          </TabsContent>
                        </Tabs>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

