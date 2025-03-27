"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { Tipologia } from "@/lib/types"
import { formatCurrency } from "@/lib/utils"

interface TipologiaTableProps {
  tipologia: Tipologia
}

export default function TipologiaTable({ tipologia }: TipologiaTableProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredRubros = tipologia.rubros.filter(
    (rubro) =>
      rubro.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || rubro.id.toString().includes(searchTerm),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <div className="max-w-sm">
          <Label htmlFor="search-rubro">Buscar Rubro</Label>
          <Input
            id="search-rubro"
            placeholder="Buscar por nombre o ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">ID</TableHead>
              <TableHead>Rubro</TableHead>
              <TableHead className="text-right">Materiales</TableHead>
              <TableHead className="text-right">Ejecución</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead className="text-right">Incidencia</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRubros.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10">
                  No se encontraron resultados
                </TableCell>
              </TableRow>
            ) : (
              filteredRubros.map((rubro) => (
                <TableRow key={rubro.id}>
                  <TableCell className="font-medium">{rubro.id}</TableCell>
                  <TableCell>{rubro.nombre}</TableCell>
                  <TableCell className="text-right">
                    {formatCurrency(rubro.importes[tipologia.id].materiales)}
                  </TableCell>
                  <TableCell className="text-right">{formatCurrency(rubro.importes[tipologia.id].ejecucion)}</TableCell>
                  <TableCell className="text-right font-medium">
                    {formatCurrency(rubro.importes[tipologia.id].total)}
                  </TableCell>
                  <TableCell className="text-right">{rubro.importes[tipologia.id].incidencia}%</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

