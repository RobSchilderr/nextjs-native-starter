import React from 'react'

const LoadingSpinner = () => (
  <div className="mx-auto h-full w-full flex-grow items-center justify-center bg-white lg:flex xl:px-8">
    <div className="flex items-center justify-center">
      <div className="w-32 h-32 animate-spin rounded-full text-orange-500 border-t-2 border-b-2 border-orange-500" />
    </div>
  </div>
)

export default LoadingSpinner
