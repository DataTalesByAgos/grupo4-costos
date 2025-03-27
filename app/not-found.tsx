import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Página no encontrada</h2>
      <p className="text-muted-foreground mt-2 text-center">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Link href="/" className="mt-8">
        <Button className="flex items-center gap-2">
          <Home size={18} />
          Volver al inicio
        </Button>
      </Link>
    </div>
  )
}

