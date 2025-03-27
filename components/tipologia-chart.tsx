"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Tipologia } from "@/lib/types"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts"

interface TipologiaChartProps {
  tipologia: Tipologia
}

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#FF6B6B",
  "#6B8E23",
  "#483D8B",
  "#CD5C5C",
  "#4682B4",
]

export default function TipologiaChart({ tipologia }: TipologiaChartProps) {
  // Preparar datos para el gráfico de incidencia
  const incidenciaData = tipologia.rubros
    .filter((rubro) => rubro.importes[tipologia.id].incidencia > 1) // Filtrar rubros con incidencia > 1%
    .map((rubro) => ({
      name: rubro.nombre,
      value: rubro.importes[tipologia.id].incidencia,
    }))
    .sort((a, b) => b.value - a.value) // Ordenar de mayor a menor

  // Preparar datos para el gráfico de materiales vs ejecución
  const materialesVsEjecucionData = [
    {
      name: "Materiales",
      value: tipologia.totales.incidenciaMateriales,
    },
    {
      name: "Ejecución",
      value: tipologia.totales.incidenciaEjecucion,
    },
  ]

  // Preparar datos para el gráfico de barras
  const barChartData = tipologia.rubros
    .filter((rubro) => rubro.importes[tipologia.id].incidencia > 3) // Filtrar rubros con incidencia > 3%
    .map((rubro) => ({
      name: rubro.nombre.split(" ")[0], // Tomar solo la primera palabra para que quepa en el gráfico
      materiales: rubro.importes[tipologia.id].materiales,
      ejecucion: rubro.importes[tipologia.id].ejecucion,
      total: rubro.importes[tipologia.id].total,
    }))
    .sort((a, b) => b.total - a.total) // Ordenar de mayor a menor

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Análisis de Costos - {tipologia.nombre}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="incidencia">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="incidencia">Incidencia por Rubro</TabsTrigger>
            <TabsTrigger value="materiales-ejecucion">Materiales vs Ejecución</TabsTrigger>
            <TabsTrigger value="barras">Comparativa de Rubros</TabsTrigger>
          </TabsList>

          <TabsContent value="incidencia" className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={incidenciaData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {incidenciaData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </TabsContent>

          <TabsContent value="materiales-ejecucion" className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={materialesVsEjecucionData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                >
                  <Cell fill="#0088FE" />
                  <Cell fill="#00C49F" />
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </TabsContent>

          <TabsContent value="barras" className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barChartData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => formatCurrency(value)} />
                <Legend />
                <Bar dataKey="materiales" name="Materiales" stackId="a" fill="#0088FE" />
                <Bar dataKey="ejecucion" name="Ejecución" stackId="a" fill="#00C49F" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

// Función para formatear moneda (definida aquí para evitar errores de importación)
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

