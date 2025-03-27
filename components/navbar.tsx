"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Home, BarChart2, FileText } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Inicio",
      icon: Home,
      active: pathname === "/",
    },
    {
      href: "/comparacion",
      label: "Comparación",
      icon: BarChart2,
      active: pathname === "/comparacion",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="flex items-center space-x-2">
            <FileText className="h-6 w-6" />
            <span className="font-bold">Sistema de Costos</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-2">
            {routes.map((route) => (
              <Link key={route.href} href={route.href}>
                <Button
                  variant={route.active ? "default" : "ghost"}
                  size="sm"
                  className={cn(
                    "h-8 gap-1",
                    route.active ? "bg-primary text-primary-foreground" : "text-muted-foreground",
                  )}
                >
                  <route.icon className="h-4 w-4" />
                  <span>{route.label}</span>
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

