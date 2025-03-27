"use client"

import { useEffect, useState } from "react"
import { cargarDatos } from "@/lib/data"
import type { DatosProyecto } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import RubrosComparison from "@/components/rubros-comparison"

export default function ComparacionPage() {
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
      <div className="flex items-center gap-2 mb-6">
        <Link href="/">
          <Button variant="outline" size="icon">
            <ArrowLeft size={16} />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Comparación de Rubros</h1>
      </div>

      <div className="mb-6">
        <p className="text-muted-foreground">
          Compare los costos de cada rubro entre las diferentes tipologías. Seleccione los rubros y tipologías que desea
          visualizar.
        </p>
      </div>

      <RubrosComparison datos={datos} />
    </main>
  )
}

