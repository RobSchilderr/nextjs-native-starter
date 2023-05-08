import React from 'react'

type InputErrorMsgProps = {
  children: React.ReactNode
}

const InputErrorMsg: React.FC<InputErrorMsgProps> = ({ children }) => {
  return (
    <div className={`flex text-red-600`} data-testid='input-error-msg'>
      {children}
    </div>
  )
}

export default InputErrorMsg