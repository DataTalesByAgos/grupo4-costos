"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import CostForm from "@/components/cost-form"
import { type CostData, getCostById } from "@/lib/storage"
import Loading from "@/components/loading"

export default function EditCostPage() {
  const params = useParams()
  const router = useRouter()
  const [costData, setCostData] = useState<CostData | undefined>(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      const id = Number.parseInt(params.id as string)
      const data = getCostById(id)

      if (!data) {
        router.push("/not-found")
        return
      }

      setCostData(data)
    }
    setLoading(false)
  }, [params.id, router])

  if (loading) {
    return (
      <div className="container mx-auto py-10 px-4 md:px-6">
        <Loading />
      </div>
    )
  }

  if (!costData) {
    return null
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="border rounded-lg shadow-sm bg-card p-6">
          <CostForm initialData={costData} isEditing={true} />
        </div>
      </div>
    </div>
  )
}

