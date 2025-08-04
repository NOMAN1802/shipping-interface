"use client"
import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

const ActionButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
      <Button
        icon={<ArrowLeftOutlined />}
        className="border-gray-300 text-gray-700 hover:bg-gray-50 w-full sm:w-auto"
        size="large"
      >
        
      </Button>

      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
        <Button
          className="border-gray-300 text-gray-700 hover:bg-gray-50 w-full sm:w-auto"
          size="large"
        >
          Save for Later
        </Button>
        <Button
          type="primary"
          className="bg-blue-600 border-blue-600 hover:bg-blue-700 w-full sm:w-auto"
          size="large"
        >
          Create Shipment
        </Button>
      </div>
    </div>
  )
}

export default ActionButtons 