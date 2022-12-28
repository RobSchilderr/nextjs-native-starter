import React from 'react'

interface InputErrorMsgProps {}

const InputErrorMsg: React.FC<InputErrorMsgProps> = ({ children }) => {
  return (
    <div className={`flex text-red-600`} data-testid='input-error-msg'>
      {children}
    </div>
  )
}

export default InputErrorMsg
