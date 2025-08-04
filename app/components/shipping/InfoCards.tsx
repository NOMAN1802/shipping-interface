"use client"
import { UserOutlined, BankOutlined, NumberOutlined } from '@ant-design/icons'
import { Card, Avatar } from 'antd'

interface InfoCard {
  icon: React.ComponentType<any>
  label: string
  value: string
  color: string
}

const InfoCards = () => {
  const infoCards: InfoCard[] = [
    {
      icon: UserOutlined,
      label: "Customer name",
      value: "Adedamola Olarele",
      color: "blue"
    },
    {
      icon: BankOutlined,
      label: "Business name",
      value: "Dolf Technologies",
      color: "blue"
    },
    {
      icon: NumberOutlined,
      label: "Unit no.",
      value: "1E",
      color: "blue"
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
      {infoCards.map((card, index) => {
        const IconComponent = card.icon
        return (
          <Card key={index} className="shadow-sm border-0">
            <div className="flex items-center space-x-3">
              <Avatar
                size={40}
                icon={<IconComponent />}
                className="bg-blue-100 text-blue-600 flex-shrink-0"
              />
              <div className="min-w-0 flex-1">
                <p className="text-gray-500 text-sm">{card.label}</p>
                <p className="font-semibold text-gray-800 text-sm sm:text-base truncate">{card.value}</p>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}

export default InfoCards 