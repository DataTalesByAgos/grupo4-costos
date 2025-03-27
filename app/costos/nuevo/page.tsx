"use client"

import CostForm from "@/components/cost-form"

export default function NewCostPage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="border rounded-lg shadow-sm bg-card p-6">
          <CostForm />
        </div>
      </div>
    </div>
  )
}

