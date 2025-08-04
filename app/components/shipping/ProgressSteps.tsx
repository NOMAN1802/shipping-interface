"use client"
import { CheckOutlined } from '@ant-design/icons'

interface Step {
  title: string
  completed: boolean
  current?: boolean
}

interface ProgressStepsProps {
  steps: Step[]
  currentStep: number
}

const ProgressSteps = ({ steps, currentStep }: ProgressStepsProps) => {
  return (
    <div className="mb-6 sm:mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center relative mb-4 sm:mb-0">
            <div className="flex flex-col items-center">
              <div
                className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
                  step.completed
                    ? "bg-green-500 text-white"
                    : step.current
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600"
                }`}
              >
                {step.completed ? <CheckOutlined className="w-3 h-3 sm:w-4 sm:h-4" /> : index + 1}
              </div>
              <span
                className={`mt-2 text-xs sm:text-sm font-medium text-center max-w-20 sm:max-w-none ${
                  step.current ? "text-gray-900" : "text-gray-600"
                }`}
              >
                {step.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`absolute left-full top-3 sm:top-4 h-0.5 w-8 sm:w-16 ${
                  step.completed ? "bg-green-500" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgressSteps 