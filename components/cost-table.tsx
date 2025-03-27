"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit, Trash2 } from "lucide-react"
import Link from "next/link"
import DeleteDialog from "./delete-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { type CostData, getAllCosts, deleteCost } from "@/lib/storage"
import { useToast } from "@/hooks/use-toast"

export default function CostTable() {
  const { toast } = useToast()
  const [costs, setCosts] = useState<CostData[]>([])
  const [loading, setLoading] = useState(true)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterRubro, setFilterRubro] = useState("")
  const [filterTipologia, setFilterTipologia] = useState("")

  const uniqueRubros = Array.from(new Set(costs.map((cost) => cost.rubro))).sort()
  const uniqueTipologias = Array.from(new Set(costs.map((cost) => cost.tipologia))).sort()

  useEffect(() => {
    loadCosts()
  }, [])

  const loadCosts = () => {
    try {
      setLoading(true)
      const data = getAllCosts()
      setCosts(data)
    } catch (err) {
      toast({
        title: "Error",
        description: "No se pudieron cargar los datos",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteClick = (id: number) => {
    setItemToDelete(id)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    if (itemToDelete === null) return

    try {
      deleteCost(itemToDelete)
      setCosts(costs.filter((cost) => cost.id !== itemToDelete))
      setDeleteDialogOpen(false)
      setItemToDelete(null)

      toast({
        title: "Eliminado",
        description: "El registro ha sido eliminado correctamente",
      })
    } catch (err) {
      toast({
        title: "Error",
        description: "No se pudo eliminar el registro",
        variant: "destructive",
      })
    }
  }

  const filteredCosts = costs.filter((cost) => {
    const matchesSearch =
      cost.rubro.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cost.tipologia.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cost.id.toString().includes(searchTerm)

    const matchesRubro = filterRubro ? cost.rubro === filterRubro : true
    const matchesTipologia = filterTipologia ? cost.tipologia === filterTipologia : true

    return matchesSearch && matchesRubro && matchesTipologia
  })

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(value)
  }

  if (loading) return <div className="p-8 text-center">Cargando datos...</div>

  return (
    <div className="w-full">
      <div className="p-4 border-b space-y-4">
        <h2 className="text-xl font-semibold">Listado de Costos</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="search">Buscar</Label>
            <Input
              id="search"
              placeholder="Buscar por ID, rubro o tipología"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="rubro-filter">Filtrar por Rubro</Label>
            <Select value={filterRubro} onValueChange={setFilterRubro}>
              <SelectTrigger id="rubro-filter">
                <SelectValue placeholder="Todos los rubros" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los rubros</SelectItem>
                {uniqueRubros.map((rubro) => (
                  <SelectItem key={rubro} value={rubro}>
                    {rubro}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="tipologia-filter">Filtrar por Tipología</Label>
            <Select value={filterTipologia} onValueChange={setFilterTipologia}>
              <SelectTrigger id="tipologia-filter">
                <SelectValue placeholder="Todas las tipologías" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las tipologías</SelectItem>
                {uniqueTipologias.map((tipologia) => (
                  <SelectItem key={tipologia} value={tipologia}>
                    {tipologia}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">ID</TableHead>
              <TableHead>Rubro</TableHead>
              <TableHead>Tipología</TableHead>
              <TableHead className="text-right">Precio m²</TableHead>
              <TableHead className="text-right">Materiales</TableHead>
              <TableHead className="text-right">Ejecución</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCosts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-10">
                  No se encontraron resultados
                </TableCell>
              </TableRow>
            ) : (
              filteredCosts.map((cost) => (
                <TableRow key={cost.id}>
                  <TableCell className="font-medium">{cost.id}</TableCell>
                  <TableCell>{cost.rubro}</TableCell>
                  <TableCell>{cost.tipologia}</TableCell>
                  <TableCell className="text-right">{formatCurrency(cost.precio_m2)}</TableCell>
                  <TableCell className="text-right">{formatCurrency(cost.importe_materiales)}</TableCell>
                  <TableCell className="text-right">{formatCurrency(cost.importe_ejecucion)}</TableCell>
                  <TableCell className="text-right font-semibold">{formatCurrency(cost.total)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Link href={`/costos/${cost.id}`}>
                        <Button variant="outline" size="icon">
                          <Edit size={16} />
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="icon"
                        className="text-red-500"
                        onClick={() => handleDeleteClick(cost.id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <DeleteDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen} onConfirm={confirmDelete} />
    </div>
  )
}

