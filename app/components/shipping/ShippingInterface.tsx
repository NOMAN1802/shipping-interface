"use client"
import ProgressSteps from './ProgressSteps'
import InfoCards from './InfoCards'
import ConsigneeDetails from './ConsigneeDetails'
import ShippingDetails from './ShippingDetails'
import CostSummary from './CostSummary'
import ActionButtons from './ActionButtons'
import ShippingTables from './ShippingTables'

const ShippingInterface = () => {
  const steps = [
    { title: "Create Shipment", completed: true },
    { title: "Repacking & Consolidation", completed: true },
    { title: "Shipment Details", completed: true },
    { title: "Shipping Method", completed: true },
    { title: "Summary & Confirmation", completed: false, current: true },
  ]

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      {/* Progress Steps */}
      <ProgressSteps steps={steps} currentStep={4} />

      {/* Info Cards */}
      <InfoCards />

      {/* Shipping Method Section */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Shipping Method</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {/* Consignee Details */}
        <ConsigneeDetails />

        {/* Shipping Details */}
        <ShippingDetails />
      </div>

      {/* Cost Summary */}
      <CostSummary />

      {/* Action Buttons */}
      <ActionButtons />

      {/* Tables Section */}
      <ShippingTables />
    </div>
  )
}

export default ShippingInterface 