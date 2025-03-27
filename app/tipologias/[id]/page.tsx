"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { cargarDatos } from "@/lib/data"
import type { Tipologia } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import TipologiaTable from "@/components/tipologia-table"
import TipologiaSummary from "@/components/tipologia-summary"
import TipologiaChart from "@/components/tipologia-chart"

export default function TipologiaDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [tipologia, setTipologia] = useState<Tipologia | null>(null)

  useEffect(() => {
    const datos = cargarDatos()
    const tipologiaEncontrada = datos.tipologias.find((t) => t.id === params.id)

    if (!tipologiaEncontrada) {
      router.push("/")
      return
    }

    setTipologia(tipologiaEncontrada)
  }, [params.id, router])

  if (!tipologia) {
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
        <h1 className="text-2xl font-bold">{tipologia.nombre}</h1>
      </div>

      <div className="mb-6">
        <p className="text-muted-foreground">{tipologia.descripcion}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-8">
        <TipologiaSummary tipologia={tipologia} />
      </div>

      <div className="mb-8">
        <TipologiaChart tipologia={tipologia} />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Detalle de Rubros</h2>
        <TipologiaTable tipologia={tipologia} />
      </div>
    </main>
  )
}

