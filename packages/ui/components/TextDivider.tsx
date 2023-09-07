import React from 'react'

type Props = {
  text: string
}

const TextDivider: React.FC<Props> = ({ text }) => (
  <div className="relative">
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-gray-300" />
    </div>
    <div className="relative flex justify-center text-sm">
      <span className="px-2 text-gray-500 bg-white">{text}</span>
    </div>
  </div>
)

export default TextDivider
