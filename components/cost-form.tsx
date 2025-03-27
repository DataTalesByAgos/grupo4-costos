"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"
import { type CostData, addCost, updateCost, getNextId } from "@/lib/storage"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  id: z.number().int().positive("El ID debe ser un número positivo"),
  rubro: z.string().min(1, "El rubro es requerido"),
  tipologia: z.string().min(1, "La tipología es requerida"),
  precio_m2: z.number().positive("El precio debe ser mayor a 0"),
  importe_materiales: z.number().nonnegative("El importe no puede ser negativo"),
  importe_ejecucion: z.number().nonnegative("El importe no puede ser negativo"),
  total: z.number().positive("El total debe ser mayor a 0"),
})

interface CostFormProps {
  initialData?: CostData
  isEditing?: boolean
}

export default function CostForm({ initialData, isEditing = false }: CostFormProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  // Si estamos creando un nuevo registro, obtenemos el siguiente ID disponible
  const getInitialData = () => {
    if (initialData) return initialData

    const nextId = getNextId()
    return {
      id: nextId,
      rubro: "",
      tipologia: "",
      precio_m2: 0,
      importe_materiales: 0,
      importe_ejecucion: 0,
      total: 0,
    }
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: getInitialData(),
  })

  const watchMateriales = form.watch("importe_materiales")
  const watchEjecucion = form.watch("importe_ejecucion")

  // Actualizar el total cuando cambian los valores
  useEffect(() => {
    const total = watchMateriales + watchEjecucion
    form.setValue("total", total)
  }, [watchMateriales, watchEjecucion, form])

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true)

      if (isEditing) {
        updateCost(values)
        toast({
          title: "Actualizado",
          description: "El registro ha sido actualizado correctamente",
        })
      } else {
        addCost(values)
        toast({
          title: "Creado",
          description: "El registro ha sido creado correctamente",
        })
      }

      router.push("/")
    } catch (err) {
      toast({
        title: "Error",
        description: err instanceof Error ? err.message : "Error desconocido",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Button variant="outline" size="icon">
            <ArrowLeft size={16} />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">{isEditing ? "Editar Costo" : "Nuevo Costo"}</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number.parseInt(e.target.value) || 0)}
                      disabled={isEditing}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rubro"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rubro</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tipologia"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipología</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="precio_m2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Precio por m²</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.01"
                      {...field}
                      onChange={(e) => field.onChange(Number.parseFloat(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="importe_materiales"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Importe Materiales</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.01"
                      {...field}
                      onChange={(e) => field.onChange(Number.parseFloat(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="importe_ejecucion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Importe Ejecución</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.01"
                      {...field}
                      onChange={(e) => field.onChange(Number.parseFloat(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="total"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.01"
                      {...field}
                      onChange={(e) => field.onChange(Number.parseFloat(e.target.value) || 0)}
                      disabled
                      className="font-semibold"
                    />
                  </FormControl>
                  <FormDescription>Calculado automáticamente (Materiales + Ejecución)</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="flex items-center gap-2" disabled={loading}>
              <Save size={18} />
              {loading ? "Guardando..." : "Guardar"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

