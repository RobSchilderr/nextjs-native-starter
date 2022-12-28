import React from 'react'

type Props = {
  w?: number
  h?: number
  bgColor?: string
}
const LoadingSpinner: React.FC<Props> = ({
  w = 32,
  h = 32,
  bgColor = 'white',
}) => {
  return (
    <div
      className={`mx-auto h-full w-full flex-grow items-center justify-center bg-${bgColor} lg:flex xl:px-8`}
    >
      <div className='flex items-center justify-center'>
        <div
          className={`w-${w} h-${h} animate-spin rounded-full border-t-2 border-b-2 border-blue-500`}
        />
      </div>
    </div>
  )
}

export default LoadingSpinner
