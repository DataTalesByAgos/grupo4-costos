// Definición del tipo de datos para los costos
export interface CostData {
  id: number
  rubro: string
  tipologia: string
  precio_m2: number
  importe_materiales: number
  importe_ejecucion: number
  total: number
}

// Clave para almacenar los datos en localStorage
const STORAGE_KEY = "costos_data"

// Datos de ejemplo para inicializar la aplicación
const sampleData: CostData[] = [
  {
    id: 1,
    rubro: "Estructura",
    tipologia: "Hormigón Armado",
    precio_m2: 25000,
    importe_materiales: 15000,
    importe_ejecucion: 10000,
    total: 25000,
  },
  {
    id: 2,
    rubro: "Mampostería",
    tipologia: "Ladrillo Cerámico",
    precio_m2: 18000,
    importe_materiales: 12000,
    importe_ejecucion: 6000,
    total: 18000,
  },
  {
    id: 3,
    rubro: "Terminaciones",
    tipologia: "Revoque Fino",
    precio_m2: 8000,
    importe_materiales: 3000,
    importe_ejecucion: 5000,
    total: 8000,
  },
]

// Función para inicializar el almacenamiento si no existe
const initializeStorage = (): void => {
  if (typeof window === "undefined") return

  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleData))
  }
}

// Función para obtener todos los costos
export const getAllCosts = (): CostData[] => {
  if (typeof window === "undefined") return []

  initializeStorage()
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

// Función para obtener un costo por ID
export const getCostById = (id: number): CostData | undefined => {
  const costs = getAllCosts()
  return costs.find((cost) => cost.id === id)
}

// Función para agregar un nuevo costo
export const addCost = (cost: CostData): CostData => {
  const costs = getAllCosts()

  // Verificar si ya existe un costo con el mismo ID
  if (costs.some((c) => c.id === cost.id)) {
    throw new Error(`Ya existe un costo con el ID ${cost.id}`)
  }

  const updatedCosts = [...costs, cost]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCosts))
  return cost
}

// Función para actualizar un costo existente
export const updateCost = (cost: CostData): CostData => {
  const costs = getAllCosts()
  const index = costs.findIndex((c) => c.id === cost.id)

  if (index === -1) {
    throw new Error(`No se encontró un costo con el ID ${cost.id}`)
  }

  const updatedCosts = [...costs]
  updatedCosts[index] = cost
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCosts))
  return cost
}

// Función para eliminar un costo
export const deleteCost = (id: number): void => {
  const costs = getAllCosts()
  const updatedCosts = costs.filter((cost) => cost.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCosts))
}

// Función para obtener el próximo ID disponible
export const getNextId = (): number => {
  const costs = getAllCosts()
  return costs.length > 0 ? Math.max(...costs.map((cost) => cost.id)) + 1 : 1
}

