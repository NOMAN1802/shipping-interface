"use client"
import { 
  HomeOutlined, 
  UserOutlined, 
  FileTextOutlined, 
  ShoppingOutlined, 
  CarOutlined, 
  TeamOutlined, 
  SettingOutlined, 
  QuestionCircleOutlined, 
  LogoutOutlined 
} from '@ant-design/icons'
import { Avatar, Badge } from 'antd'

interface SidebarProps {
  activeKey?: string
}

const Sidebar = ({ activeKey = "5" }: SidebarProps) => {
  const sidebarItems = [
    { key: "1", icon: HomeOutlined, label: "Home" },
    { key: "2", icon: UserOutlined, label: "Users" },
    { key: "3", icon: FileTextOutlined, label: "Documents" },
    { key: "4", icon: ShoppingOutlined, label: "Products" },
    { key: "5", icon: CarOutlined, label: "Shipments", active: true },
    { key: "6", icon: TeamOutlined, label: "Team" },
    { key: "7", icon: SettingOutlined, label: "Settings" },
    { key: "8", icon: QuestionCircleOutlined, label: "Help" },
    { key: "9", icon: LogoutOutlined, label: "Logout" },
  ]

  return (
    <div className="w-12 sm:w-16 lg:w-12 bg-blue-600 flex flex-col">
      {/* Logo */}
      <div className="p-2 sm:p-3 border-b border-blue-500">
        <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6 bg-white rounded flex items-center justify-center">
          <span className="text-blue-600 font-bold text-xs sm:text-sm">S</span>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 py-2 sm:py-4">
        {sidebarItems.map((item) => {
          const IconComponent = item.icon
          const isActive = item.key === activeKey
          const isOrange = item.key === "5" && isActive
          
          return (
            <div
              key={item.key}
              className={`flex items-center justify-center h-8 sm:h-10 lg:h-12 mx-0.5 sm:mx-1 mb-0.5 sm:mb-1 rounded cursor-pointer transition-colors ${
                isOrange
                  ? "bg-orange-500 text-white"
                  : isActive
                    ? "bg-blue-700 text-white"
                    : "text-blue-200 hover:bg-blue-700 hover:text-white"
              }`}
              title={item.label}
            >
              <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          )
        })}
      </div>

      {/* User Avatar */}
      <div className="p-2 sm:p-3 border-t border-blue-500">
        <Badge count={1} size="small">
          <Avatar 
            size={{ xs: 20, sm: 24, md: 24 }}
            className="bg-orange-500 flex items-center justify-center"
          >
            1
          </Avatar>
        </Badge>
      </div>
    </div>
  )
}

export default Sidebar 