import React from 'react'
import LoadingSpinner from './LoadingSpinner'

const LoadingSpinnerPage: React.FC = () => {
  return (
    <div className="flex items-center h-full min-h-screen bg-white">
      <LoadingSpinner />
    </div>
  )
}

export default LoadingSpinnerPage
