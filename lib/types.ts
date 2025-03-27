// Definición de tipos para la aplicación

export interface Rubro {
  id: number
  nombre: string
  importes: {
    [tipologia: string]: {
      materiales: number
      ejecucion: number
      total: number
      incidencia: number
    }
  }
}

export interface Tipologia {
  id: string // A, B, C, D
  nombre: string
  descripcion: string
  precioM2: number
  variacion: number
  rubros: Rubro[]
  totales: {
    costoDirectoTotal: number
    costoDirectoM2: number
    incidenciaMateriales: number
    incidenciaEjecucion: number
    gastosGenerales: number
    beneficiosEmpresariales: number
    subtotalSinImpuesto: number
    iva: number
    precioFinalTotal: number
    precioFinalM2: number
  }
}

export interface DatosProyecto {
  tipologias: Tipologia[]
}

