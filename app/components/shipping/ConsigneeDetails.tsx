"use client"
import { Card, Input, Row, Col } from 'antd'

const { TextArea } = Input

const ConsigneeDetails = () => {
  const consigneeInfo = [
    { label: "Full Name", value: "John Carter" },
    { label: "Email Address", value: "john@wakabuy.com" },
    { label: "Phone Number", value: "+1 01539 702257" },
    { label: "Address Line 1", value: "20 Cooper Square" },
    { label: "Country", value: "USA" },
  ]

  const locationInfo = [
    { label: "State", value: "Florida" },
    { label: "City", value: "Sebring" },
    { label: "Zip", value: "33875" },
  ]

  return (
    <Card
      title="Consignee Details"
      className="shadow-sm border-0"
      headStyle={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem' }}
    >
      <div className="space-y-4 sm:space-y-6">
        {consigneeInfo.map((info, index) => (
          <div key={index}>
            <p className="text-gray-600 font-medium mb-1 text-sm">{info.label}</p>
            <p className="text-gray-500 text-sm">{info.value}</p>
          </div>
        ))}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {locationInfo.map((info, index) => (
            <div key={index}>
              <p className="text-gray-600 font-medium mb-1 text-sm">{info.label}</p>
              <p className="text-gray-500 text-sm">{info.value}</p>
            </div>
          ))}
        </div>

        <div>
          <TextArea
            placeholder="Add Details"
            rows={4}
            className="w-full text-sm"
          />
        </div>
      </div>
    </Card>
  )
}

export default ConsigneeDetails 