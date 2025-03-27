"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Upload } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { getAllCosts, type CostData } from "@/lib/storage"

export default function ExportImport() {
  const { toast } = useToast()
  const [importing, setImporting] = useState(false)
  const fileInputRef = useState<HTMLInputElement | null>(null)

  const handleExport = () => {
    try {
      const data = getAllCosts()
      const jsonString = JSON.stringify(data, null, 2)
      const blob = new Blob([jsonString], { type: "application/json" })
      const url = URL.createObjectURL(blob)

      const a = document.createElement("a")
      a.href = url
      a.download = `costos_export_${new Date().toISOString().split("T")[0]}.json`
      document.body.appendChild(a)
      a.click()

      // Limpieza
      document.body.removeChild(a)
      URL.revokeObjectURL(url)

      toast({
        title: "Exportación exitosa",
        description: "Los datos han sido exportados correctamente",
      })
    } catch (error) {
      toast({
        title: "Error al exportar",
        description: "No se pudieron exportar los datos",
        variant: "destructive",
      })
    }
  }

  const handleImportClick = () => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = ".json"
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        handleImportFile(file)
      }
    }
    input.click()
  }

  const handleImportFile = (file: File) => {
    setImporting(true)

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string
        const data = JSON.parse(content) as CostData[]

        // Validar que el formato sea correcto
        if (
          !Array.isArray(data) ||
          !data.every(
            (item) =>
              typeof item.id === "number" &&
              typeof item.rubro === "string" &&
              typeof item.tipologia === "string" &&
              typeof item.precio_m2 === "number" &&
              typeof item.importe_materiales === "number" &&
              typeof item.importe_ejecucion === "number" &&
              typeof item.total === "number",
          )
        ) {
          throw new Error("El formato del archivo no es válido")
        }

        // Guardar los datos importados
        localStorage.setItem("costos_data", JSON.stringify(data))

        toast({
          title: "Importación exitosa",
          description: "Los datos han sido importados correctamente. Recarga la página para ver los cambios.",
        })

        // Recargar la página para mostrar los datos importados
        setTimeout(() => {
          window.location.reload()
        }, 1500)
      } catch (error) {
        toast({
          title: "Error al importar",
          description: error instanceof Error ? error.message : "No se pudieron importar los datos",
          variant: "destructive",
        })
      } finally {
        setImporting(false)
      }
    }

    reader.readAsText(file)
  }

  return (
    <div className="flex gap-2">
      <Button variant="outline" size="sm" className="flex items-center gap-1" onClick={handleExport}>
        <Download size={16} />
        Exportar
      </Button>

      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-1"
        onClick={handleImportClick}
        disabled={importing}
      >
        <Upload size={16} />
        {importing ? "Importando..." : "Importar"}
      </Button>
    </div>
  )
}

