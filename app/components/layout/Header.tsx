"use client"
import { BellOutlined, AppstoreOutlined, FileTextOutlined } from '@ant-design/icons'

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
      <div className="flex items-center space-x-2 text-sm sm:text-base">
        <div className="flex items-center space-x-2">
          <FileTextOutlined className="text-gray-600 w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-gray-600">Shipments</span>
        </div>
        <span className="text-gray-400">/</span>
        <span className="text-gray-900 font-medium">Create New</span>
      </div>

      <div className="flex items-center space-x-3 sm:space-x-4">
        <BellOutlined className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors" />
        <AppstoreOutlined className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors" />
      </div>
    </header>
  )
}

export default Header 