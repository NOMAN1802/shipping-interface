"use client"
import { Card } from 'antd'

const CostSummary = () => {
  const costItems = [
    { label: "Total Cost", value: "$100.00", color: "text-gray-800" },
    { label: "Repacking/Consolidation", value: "$10.00", color: "text-gray-800" },
    { label: "Total Shipping Cost", value: "$510.00", color: "text-blue-600" },
  ]

  return (
    <Card className="bg-blue-50 shadow-sm border-0 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
        {costItems.map((item, index) => (
          <div key={index}>
            <p className="text-gray-600 font-medium mb-2 text-sm">{item.label}</p>
            <p className={`text-xl sm:text-2xl font-bold ${item.color}`}>{item.value}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default CostSummary 